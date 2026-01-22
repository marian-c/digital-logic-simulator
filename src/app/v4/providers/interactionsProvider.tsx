import React from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { useStateWithRefImmediate } from '@/hooks/useStateWithRefImmediate';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import type { LayoutEvent } from '@/types/rnw';
import {
  useSketchStorageFocusPath,
  useSketchStorageMethods,
} from '@/app/v4/providers/dataStorageProvider';
import type { BoxParams, ElementType } from '@/app/v4/types/innerSketchStructure';
import { assertIsDefined, assertNever } from '@/helpers/basics';

import { actionMoveByBoxIdDelta } from '@/app/v4/data/action/action-change-box';
import { actionAddNewBox, actionAddNewConnector } from '@/app/v4/data/action/action-structure-add';
import { actionToggleInputState } from '@/app/v4/data/action/action-change-input';
import type { NumWires, PortKind } from '@/app/v4/types/other';
import {
  actionRemoveBoxByBoxId,
  actionRemoveConnectorByConnectorId,
} from '@/app/v4/data/action/action-structure-remove';

type Size = { width: number; height: number; left: number; top: number };
type MouseCoordinates = { x: number; y: number; notSet?: true };

type InteractionsData = {
  activeInfo: ActiveInfo;
  size: Size;
};
type InteractionsMethods = {
  canvasRef: React.RefCallback<HTMLDivElement>;
  sizeRef: React.RefObject<Size>;
  $onBoxWrapperMouseDown: (boxId: number, mouseButton: number) => void;
  $onNewBoxMouseDown: (boxParams: BoxParams, mouseButton: number) => void;
  $onBoxWrapperMouseDownActivateOnly: (boxId: number, mouseButton: number) => void;
  $onConnectorMouseDownActivateOnly: (conectorId: number, mouseButton: number) => void;
  $onInputPointMouseUp: (inputBoxId: number, stateIdx: number, mouseButton: number) => void;
  $onConnectorPointMouseDown: (
    boxId: number,
    portId: number,
    portKind: PortKind,
    numWires: NumWires,
    cx: number,
    cy: number,
    mouseButton: number,
  ) => void;
  $onConnectorPointMouseEnter: (
    boxId: number,
    portId: number,
    portKind: PortKind,
    numWires: NumWires,
    cx: number,
    cy: number,
  ) => void;
  $onConnectorPointMouseLeave: () => void;
};

type ActiveInfo = {
  active: { kind: ElementType; id: number } | null;
};
type ActiveTree = {
  data: ActiveInfo;
  [boxId: number]: ActiveTree;
};

type ActionBase = {
  kind: 'drag-box' | 'drag-new-connector' | 'new-box';
};
interface ActionDragBox extends ActionBase {
  kind: 'drag-box';
  curX: number;
  curY: number;
  hasDragged: boolean;
}
interface ActionDragNewConnector extends ActionBase {
  kind: 'drag-new-connector';
  fromBoxId: number;
  fromPortId: number;
  fromKind: PortKind;
  numWires: NumWires;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  toBox?: {
    boxId: number;
    portId: number;
  };
}

interface ActionNewBox extends ActionBase {
  kind: 'new-box';
  boxParams: BoxParams;
}
type Action = ActionDragBox | ActionDragNewConnector | ActionNewBox;

const InteractionsProviderData = React.createContext<InteractionsData>(null as any);
InteractionsProviderData.displayName = 'InteractionsProviderData';
const InteractionsProviderMethods = React.createContext<InteractionsMethods>(null as any);
InteractionsProviderMethods.displayName = 'InteractionsProviderMethods';
const InteractionsProviderFloatingConnectorAction =
  React.createContext<ActionDragNewConnector | null>(null);
InteractionsProviderFloatingConnectorAction.displayName =
  'InteractionsProviderFloatingConnectorAction';

export const InteractionsProvider: FunctionComponentWithChildren = ({ children }) => {
  // TODO: deal with focus mode
  // TODO: deal with examples

  const {
    $updatePanAndZoom,
    panAndZoomRef,
    focusPathRef,
    $updateSelectedSketch,
    selectedSketchRef,
    otherSketchesRef,
    isReadOnlyRef,
  } = useSketchStorageMethods();
  const focusPath = useSketchStorageFocusPath();

  // region: variables
  const docCoordinatesRef = React.useRef<MouseCoordinates>({ x: 0, y: 0, notSet: true });
  const oldDocCoordinatesRef = React.useRef<MouseCoordinates>({ x: 0, y: 0, notSet: true });

  const isFocusedRef = React.useRef<boolean>(false);

  const [activeTree, $setActiveTree, activeTreeRef] = useStateWithRefImmediate<ActiveTree>({
    data: { active: null },
  });
  const activeInfo: ActiveInfo = React.useMemo(() => {
    let curr: ActiveTree = activeTree;
    for (const v of focusPath) {
      curr = curr[v] || { data: { active: null } };
    }
    return curr.data;
  }, [activeTree, focusPath]);
  const activeInfoRef = React.useRef<ActiveInfo>(activeInfo);
  activeInfoRef.current = activeInfo;

  const [action, $setAction, actionRef] = useStateWithRefImmediate<Action | null>(null);
  const floatingConnectorAction = React.useMemo(() => {
    if (action && action.kind === 'drag-new-connector') {
      return action;
    }
    return null;
  }, [action]);

  const [size, $setSizeRef, sizeRef] = useStateWithRefImmediate<Size>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  // endregion

  // region: helper functions

  const $activateElement = React.useCallback(
    (elementKind: ElementType, id: number) => {
      const orig = { ...activeTreeRef.current };
      let curr = orig;
      for (const v of focusPathRef.current) {
        const exists = curr[v];
        if (!exists) {
          curr[v] = { data: { active: null } };
        } else {
          curr[v] = { ...curr[v]! };
        }
        curr = curr[v]!;
      }
      curr.data = {
        ...curr.data,
        active: { kind: elementKind, id },
      };
      $setActiveTree(orig);
    },
    [$setActiveTree, activeTreeRef, focusPathRef],
  );
  const $deactivateRootElement = React.useCallback(() => {
    $setActiveTree({
      ...activeTreeRef.current,
      data: { active: null },
    });
  }, [$setActiveTree, activeTreeRef]);

  // endregion

  // region: actions
  const $actionDragBoxStart = React.useCallback(() => {
    const action: ActionDragBox = {
      kind: 'drag-box',
      curX: 0,
      curY: 0,
      hasDragged: false,
    };
    $setAction(action);
  }, [$setAction]);
  const $actionDragBoxStep = React.useCallback(
    (action: ActionDragBox) => {
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.group('[Interactions] $actionDragBoxStep');
      // TODO: drag whats selected, not what's active
      // TODO: handle when going out of bounds
      const activeStuff = activeInfoRef.current.active;
      assertIsDefined(activeStuff);
      if (isReadOnlyRef.current) {
        console.warn('cannot drag while in focus mode or if the sketch is an example');
        process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
        return;
      }

      const { zoomFactor } = panAndZoomRef.current;
      const { curX, curY } = action;

      const nowX = docCoordinatesRef.current.x;
      const nowY = docCoordinatesRef.current.y;

      const oldX = oldDocCoordinatesRef.current.notSet ? nowX : oldDocCoordinatesRef.current.x;
      const oldY = oldDocCoordinatesRef.current.notSet ? nowY : oldDocCoordinatesRef.current.y;

      const deltaXZoom = (nowX - oldX) / zoomFactor;
      const deltaYZoom = (nowY - oldY) / zoomFactor;

      const newCurX = curX + deltaXZoom;
      const newCurY = curY + deltaYZoom;

      const newCurXSnapped = Math.round(newCurX / 10) * 10;
      const newCurYSnapped = Math.round(newCurY / 10) * 10;

      $setAction({
        ...action,
        curX: newCurX - newCurXSnapped,
        curY: newCurY - newCurYSnapped,
        hasDragged: true,
      });
      if (newCurXSnapped || newCurYSnapped) {
        process.env.NEXT_PUBLIC_LOGS_DEBUG && console.log('UPDATE', { newCurX, newCurY });
        $updateSelectedSketch(
          actionMoveByBoxIdDelta(
            activeStuff.id,
            newCurXSnapped,
            newCurYSnapped,
            selectedSketchRef.current,
          ),
        );
      }
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
    },
    [
      $setAction,
      $updateSelectedSketch,
      docCoordinatesRef,
      isReadOnlyRef,
      oldDocCoordinatesRef,
      panAndZoomRef,
      selectedSketchRef,
    ],
  );
  const $actionNewBoxStart = React.useCallback(
    (boxParams: BoxParams) => {
      $setAction({
        kind: 'new-box',
        boxParams,
      });
    },
    [$setAction],
  );
  const $actionNewBoxStep = React.useCallback(
    (action: ActionNewBox) => {
      const x =
        Math.round(
          ((docCoordinatesRef.current.x - sizeRef.current.left) / panAndZoomRef.current.zoomFactor +
            panAndZoomRef.current.panX) /
            10,
        ) * 10;
      const y =
        Math.round(
          ((docCoordinatesRef.current.y - sizeRef.current.top) / panAndZoomRef.current.zoomFactor +
            panAndZoomRef.current.panY) /
            10,
        ) * 10;
      // operate adding a new box
      const newData = actionAddNewBox(
        action.boxParams,
        selectedSketchRef.current,
        x,
        y,
        otherSketchesRef.current,
      );
      const boxId = newData.structure.extra.nextId - 1;
      $updateSelectedSketch(newData);
      $activateElement('boxes', boxId);
      $actionDragBoxStart();
    },
    [
      $actionDragBoxStart,
      $activateElement,
      $updateSelectedSketch,
      docCoordinatesRef,
      otherSketchesRef,
      panAndZoomRef,
      selectedSketchRef,
      sizeRef,
    ],
  );
  const $actionDragNewConnectorStart = React.useCallback(
    (
      boxId: number,
      portId: number,
      portKind: PortKind,
      numWires: NumWires,
      cx: number,
      cy: number,
    ) => {
      let [fromX, fromY] = [cx, cy];
      let [toX, toY] = [
        (docCoordinatesRef.current.x - sizeRef.current.left) / panAndZoomRef.current.zoomFactor +
          panAndZoomRef.current.panX,
        (docCoordinatesRef.current.y - sizeRef.current.top) / panAndZoomRef.current.zoomFactor +
          panAndZoomRef.current.panY,
      ];
      if (portKind === 'inputPort') {
        [fromX, toX] = [toX, fromX];
        [fromY, toY] = [toY, fromY];
      }
      $setAction({
        kind: 'drag-new-connector',
        fromPortId: portId,
        fromBoxId: boxId,
        fromKind: portKind,
        numWires: numWires,
        fromX,
        fromY,
        toX,
        toY,
      } satisfies ActionDragNewConnector);
    },
    [$setAction, docCoordinatesRef, panAndZoomRef, sizeRef],
  );
  const $actionDragNewConnectorStep = React.useCallback(
    (action: ActionDragNewConnector) => {
      let { fromX, fromY, toX, toY } = action;
      const x =
        (docCoordinatesRef.current.x - sizeRef.current.left) / panAndZoomRef.current.zoomFactor +
        panAndZoomRef.current.panX;
      const y =
        (docCoordinatesRef.current.y - sizeRef.current.top) / panAndZoomRef.current.zoomFactor +
        panAndZoomRef.current.panY;
      if (action.fromKind === 'inputPort') {
        fromX = x;
        fromY = y;
      } else {
        toX = x;
        toY = y;
      }
      $setAction({
        ...action,
        fromX,
        fromY,
        toX,
        toY,
      });
    },
    [$setAction, docCoordinatesRef, panAndZoomRef, sizeRef],
  );
  const $actionDragNewConnectorEnd = React.useCallback(
    (act: ActionDragNewConnector) => {
      if (act.toBox) {
        let { fromBoxId, fromPortId } = act;
        let { boxId: toBoxId, portId: toPortId } = act.toBox;
        if (act.fromKind === 'inputPort') {
          [fromBoxId, toBoxId] = [toBoxId, fromBoxId];
          [fromPortId, toPortId] = [toPortId, fromPortId];
        }
        $updateSelectedSketch(
          actionAddNewConnector(
            fromBoxId,
            fromPortId,
            toBoxId,
            toPortId,
            act.numWires,
            selectedSketchRef.current,
          ),
        );
      }
    },
    [$updateSelectedSketch, selectedSketchRef],
  );
  // endregion

  // region: event handlers
  const $handleFocus = React.useCallback(() => {
    isFocusedRef.current = true;
  }, [isFocusedRef]);
  const $handleBlur = React.useCallback(() => {
    isFocusedRef.current = false;
  }, [isFocusedRef]);
  const $handleDocumentKeyDown = React.useCallback(
    (keyEvent: KeyboardEvent) => {
      if (!isFocusedRef.current) {
        return;
      }
      if (keyEvent.code === 'Backspace' || keyEvent.code === 'Delete') {
        if (!isReadOnlyRef.current && activeInfoRef.current.active?.id && !actionRef.current) {
          const info = activeInfoRef.current.active;
          switch (info.kind) {
            case 'boxes':
              $deactivateRootElement();
              $updateSelectedSketch(actionRemoveBoxByBoxId(info.id, selectedSketchRef.current));
              // TODO: remove references from panAndZoom
              break;
            case 'connectors':
              $deactivateRootElement();
              $updateSelectedSketch(
                actionRemoveConnectorByConnectorId(info.id, selectedSketchRef.current),
              );
              break;
            default:
              assertNever(info.kind);
          }
        }
      }
    },
    [$deactivateRootElement, $updateSelectedSketch, actionRef, isReadOnlyRef, selectedSketchRef],
  );
  const $handleDocumentMouseMouseUp = React.useCallback(() => {
    if (actionRef.current) {
      const act = actionRef.current;
      switch (act.kind) {
        case 'drag-box':
        case 'new-box':
          // nothing needed
          break;
        case 'drag-new-connector':
          $actionDragNewConnectorEnd(act);
          break;
        default:
          assertNever(act);
      }
      $setAction(null);
    }
  }, [$actionDragNewConnectorEnd, $setAction, actionRef]);
  const $handleDocumentMouseMove = React.useCallback(
    (mouseEvent: MouseEvent) => {
      // TODO: scroll canvas when mouse is close to the edge or outside of the canvas
      const docCoordinates = { x: mouseEvent.clientX, y: mouseEvent.clientY };
      const oldDocCoordinates = docCoordinatesRef.current;
      docCoordinatesRef.current = docCoordinates;
      oldDocCoordinatesRef.current = oldDocCoordinates;

      const action = actionRef.current;
      switch (action?.kind) {
        case undefined:
          // no action in progress
          break;
        case 'drag-box':
          $actionDragBoxStep(action);
          break;
        case 'drag-new-connector':
          $actionDragNewConnectorStep(action);
          break;
        case 'new-box':
          $actionNewBoxStep(action);
          break;
        default:
          assertNever(action);
      }
    },
    [
      $actionDragBoxStep,
      $actionDragNewConnectorStep,
      $actionNewBoxStep,
      actionRef,
      docCoordinatesRef,
    ],
  );
  const $handleLayoutEvent = React.useCallback(
    (layoutEvent: LayoutEvent) => {
      const size = {
        width: layoutEvent.nativeEvent.layout.width,
        height: layoutEvent.nativeEvent.layout.height,
        left: layoutEvent.nativeEvent.layout.left,
        top: layoutEvent.nativeEvent.layout.top,
      };
      $setSizeRef(size);
    },
    [$setSizeRef],
  );

  const $handleSvgPan = React.useCallback(
    (deltaX: number, deltaY: number) => {
      // TODO: adjust speed, if the mouse is moving slowly, pan just by a small amount
      // TODO: introduce pan limits
      const panX = panAndZoomRef.current.panX + deltaX / panAndZoomRef.current.zoomFactor;
      const panY = panAndZoomRef.current.panY + deltaY / panAndZoomRef.current.zoomFactor;
      $updatePanAndZoom(panX, panY, panAndZoomRef.current.zoomFactor);
    },
    [$updatePanAndZoom, panAndZoomRef],
  );

  const $handleSvgPinch = React.useCallback(
    (deltaY: number, clientX: number, clientY: number) => {
      // TODO: adjust zoom speed to have a linear movement on the screen
      const wheelEventDeltaY = -deltaY;
      const { panX: oldPanX, panY: oldPanY, zoomFactor: oldZoomFactor } = panAndZoomRef.current;

      let factor = 40;
      if (oldZoomFactor < 0.5) {
        factor = 80;
      } else if (oldZoomFactor < 1) {
        factor = 60;
      }
      let zoomFactorDelta = wheelEventDeltaY / factor;
      let zoomFactor = oldZoomFactor + wheelEventDeltaY / factor;
      if (zoomFactor < 0.2) {
        zoomFactorDelta = 0.2 - oldZoomFactor;
        zoomFactor = 0.2;
      }

      const mouseCanvasCoordinatesX = clientX - sizeRef.current.left;
      const mouseCanvasCoordinatesY = clientY - sizeRef.current.top;

      const panX =
        oldPanX + (mouseCanvasCoordinatesX / oldZoomFactor) * (zoomFactorDelta / zoomFactor);
      const panY =
        oldPanY + (mouseCanvasCoordinatesY / oldZoomFactor) * (zoomFactorDelta / zoomFactor);
      $updatePanAndZoom(panX, panY, zoomFactor);
    },
    [$updatePanAndZoom, panAndZoomRef, sizeRef],
  );

  const $onBoxWrapperMouseDownActivateOnly: InteractionsMethods['$onBoxWrapperMouseDownActivateOnly'] =
    React.useCallback(
      (boxId, mouseButton) => {
        // only left clicks
        if (mouseButton !== 0) {
          return;
        }
        $activateElement('boxes', boxId);
      },
      [$activateElement],
    );
  const $onConnectorMouseDownActivateOnly: InteractionsMethods['$onConnectorMouseDownActivateOnly'] =
    React.useCallback(
      (connectorId, mouseButton) => {
        if (mouseButton !== 0) {
          return;
        }
        $activateElement('connectors', connectorId);
      },
      [$activateElement],
    );
  const $onBoxWrapperMouseDown: InteractionsMethods['$onBoxWrapperMouseDown'] = React.useCallback(
    (boxId, mouseButton) => {
      // only left clicks
      if (mouseButton !== 0) {
        return;
      }
      $activateElement('boxes', boxId);
      // TODO: add or remove element to selection
      // TODO: if no modifiers, for example shift might represent adding to selection, not sure in means dragging
      $actionDragBoxStart();
    },
    [$actionDragBoxStart, $activateElement],
  );
  const $onInputPointMouseUp: InteractionsMethods['$onInputPointMouseUp'] = React.useCallback(
    (inputBoxId, stateIdx, mouseButton) => {
      if (
        mouseButton === 0 &&
        actionRef.current?.kind === 'drag-box' &&
        !actionRef.current.hasDragged
      ) {
        $updateSelectedSketch(
          actionToggleInputState(inputBoxId, stateIdx, selectedSketchRef.current),
        );
      }
    },
    [$updateSelectedSketch, actionRef, selectedSketchRef],
  );

  const $onConnectorPointMouseDown: InteractionsMethods['$onConnectorPointMouseDown'] =
    React.useCallback(
      (boxId, portId, portKind, numWires, cx, cy, mouseButton) => {
        // only left clicks
        if (mouseButton !== 0) {
          return;
        }
        $actionDragNewConnectorStart(boxId, portId, portKind, numWires, cx, cy);
      },
      [$actionDragNewConnectorStart],
    );
  const $onConnectorPointMouseEnter: InteractionsMethods['$onConnectorPointMouseEnter'] =
    React.useCallback(
      (boxId, portId, _portKind, numWires) => {
        let action = actionRef.current;
        if (
          action?.kind === 'drag-new-connector' &&
          action.numWires === numWires &&
          action.fromBoxId !== boxId
        ) {
          action = {
            ...action,
            toBox: {
              boxId,
              portId,
            },
          };
          $setAction(action);
        }
      },
      [$setAction, actionRef],
    );
  const $onConnectorPointMouseLeave: InteractionsMethods['$onConnectorPointMouseLeave'] =
    React.useCallback(() => {
      const action = actionRef.current;
      if (action?.kind === 'drag-new-connector') {
        delete action.toBox;
        $setAction({ ...action });
      }
    }, [$setAction, actionRef]);

  const $onNewBoxMouseDown: InteractionsMethods['$onNewBoxMouseDown'] = React.useCallback(
    (boxParams, mouseButton) => {
      // only left clicks
      if (mouseButton !== 0) {
        return;
      }
      $actionNewBoxStart(boxParams);
    },
    [$actionNewBoxStart],
  );
  // endregion

  // region: react interface

  const _canvasRef = useElementLayoutWithRef<HTMLDivElement>($handleLayoutEvent);
  const canvasRef: React.RefCallback<HTMLDivElement> = React.useCallback<
    React.RefCallback<HTMLDivElement>
  >(
    (el) => {
      _canvasRef.current = el;
      const onWheel = (wheelEvent: WheelEvent) => {
        console.log('BBB');
        wheelEvent.preventDefault();
        if (wheelEvent.ctrlKey) {
          $handleSvgPinch(wheelEvent.deltaY, wheelEvent.clientX, wheelEvent.clientY);
        } else {
          $handleSvgPan(wheelEvent.deltaX, wheelEvent.deltaY);
        }
      };
      if (el) {
        document.addEventListener('mousemove', $handleDocumentMouseMove);
        document.addEventListener('mouseup', $handleDocumentMouseMouseUp);
        document.addEventListener('keydown', $handleDocumentKeyDown);
        el.addEventListener('wheel', onWheel, { passive: false });
        el.addEventListener('focus', $handleFocus);
        el.addEventListener('blur', $handleBlur);
      }
      return () => {
        document.removeEventListener('mousemove', $handleDocumentMouseMove);
        document.removeEventListener('mouseup', $handleDocumentMouseMouseUp);
        document.removeEventListener('keydown', $handleDocumentKeyDown);
        el?.removeEventListener('wheel', onWheel);
        el?.removeEventListener('focus', $handleFocus);
        el?.removeEventListener('blur', $handleBlur);
      };
    },
    [
      $handleBlur,
      $handleDocumentKeyDown,
      $handleDocumentMouseMouseUp,
      $handleDocumentMouseMove,
      $handleFocus,
      $handleSvgPan,
      $handleSvgPinch,
      _canvasRef,
    ],
  );
  // endregion

  const interactionsMethods = React.useMemo<InteractionsMethods>(() => {
    return {
      $onBoxWrapperMouseDown,
      $onBoxWrapperMouseDownActivateOnly,
      $onConnectorMouseDownActivateOnly,
      $onNewBoxMouseDown,
      $onInputPointMouseUp,
      $onConnectorPointMouseDown,
      $onConnectorPointMouseEnter,
      $onConnectorPointMouseLeave,
      canvasRef,
      sizeRef,
    } satisfies InteractionsMethods;
  }, [
    $onBoxWrapperMouseDown,
    $onBoxWrapperMouseDownActivateOnly,
    $onConnectorMouseDownActivateOnly,
    $onNewBoxMouseDown,
    $onInputPointMouseUp,
    $onConnectorPointMouseDown,
    $onConnectorPointMouseEnter,
    $onConnectorPointMouseLeave,
    canvasRef,
    sizeRef,
  ]);

  const interactionsData = React.useMemo<InteractionsData>(() => {
    return { activeInfo, size } satisfies InteractionsData;
  }, [activeInfo, size]);

  return (
    <InteractionsProviderMethods value={interactionsMethods}>
      <InteractionsProviderData value={interactionsData}>
        <InteractionsProviderFloatingConnectorAction value={floatingConnectorAction}>
          {children}
        </InteractionsProviderFloatingConnectorAction>
      </InteractionsProviderData>
    </InteractionsProviderMethods>
  );
};

export const useInteractionsMethods = () => React.useContext(InteractionsProviderMethods);
export const useInteractionsData = () => React.useContext(InteractionsProviderData);
export const useInteractionsFloatingConnectorAction = () =>
  React.useContext(InteractionsProviderFloatingConnectorAction);
