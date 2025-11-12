// The logic here assumes zoom will not happen while dragging

import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import type { LayoutEvent } from '@/types/rnw';
import { useSketchStorageMethods } from '@/app/v3/providers/dataStorageProvider';
import {
  getActiveBoxPosition,
  getActiveIsPortDraggable,
  getActiveSketch,
  getPoint,
} from '@/app/v3/data/utils/selectors';
import {
  actionAddActiveConnector,
  actionActiveAddNewBox,
  actionSetActiveSketchPan,
  actionSetActiveSketchZoomAndPan,
  actionSnapActiveBox,
  actionRemoveActiveBox,
  actionRemoveActiveConnector,
  actionAdjustActiveConnectorBias,
  actionResetActiveConnectorBias,
} from '@/app/v3/data/utils/actions';
import { useStateWithRefImmediate } from '@/hooks/useStateWithRefImmediate';
import type {
  BoxElement,
  BoxElementKind,
  BoxParams,
  KindToElement,
} from '@/app/v3/types/innerSketchStructure';
import type { PortKind } from '@/app/v3/types/data';

type Size = { width: number; height: number; left: number; top: number };

type MouseCoordinates = {
  x: number;
  y: number;
};

type MouseCanvasCoordinates = {
  x: number;
  y: number;
  in: boolean;
  /**
   * marker to say this hasn't been set yet
   */
  empty?: true;
};

export type FloatingConnector = {
  draggingFromPortKind: PortKind;
  from: { x: number; y: number };
  to: { x: number; y: number };
  fromBox: { boxId: number; portId: number };
  destinationBox: { boxId: number; portId: number } | null;
};

type CtxMethods = {
  svgRef: React.RefCallback<SVGSVGElement>;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  $onBoxWrapperClick: (boxId: number, mouseEvent: React.MouseEvent<SVGElement, MouseEvent>) => void;
  $onBoxWrapperMouseDown: (
    boxId: number,
    mouseEvent: React.MouseEvent<SVGElement, MouseEvent>,
  ) => void;
  hasDraggedRef: React.RefObject<boolean>;
  $onConnectorPointMouseDown: (
    portId: number,
    portKind: PortKind,
    boxElement: BoxElement,
    mouseEvent: React.MouseEvent<SVGElement, MouseEvent>,
  ) => void;
  $onConnectorPointMouseOver: (portId: number, portKind: PortKind, boxElement: BoxElement) => void;
  $onConnectorPointMouseOut: (portId: number, portKind: PortKind, boxElement: BoxElement) => void;
  $onNewBoxMouseDown: <K extends BoxElementKind>(
    kind: K,
    params: KindToElement<K>['params'],
  ) => void;
  $onNewBoxMouseUp: () => void;
  $onConnectorMouseDown: (
    connectorId: number,
    mouseEvent: React.MouseEvent<SVGElement, MouseEvent>,
  ) => void;
};

type CtxData = {
  size: Size;
  activeBoxId: number;
  activeConnectorId: number;
  floatingConnector: FloatingConnector | null;
};

const InteractionsMethodsContext = React.createContext<CtxMethods>(null as any);
const InteractionsDataContext = React.createContext<CtxData>(null as any);

export const InteractionsProvider: FunctionComponentWithChildren = ({ children }) => {
  const { sketchDataRef, $setSketchData } = useSketchStorageMethods();

  // region: variables

  // set on mouse down in NEW boxes to the kind of box, when set,
  //  the next mouse down will add that box and unset it
  const [, $setAboutToDragNewBoxKindRef, aboutToDragNewBoxKindRef] =
    useStateWithRefImmediate<BoxParams | null>(null);

  // set on mouse down on boxes, makes the active box highlighted
  //  remains active even after the drag operation has moved
  const [activeBoxId, $setActiveBoxIdRef, activeBoxIdRef] = useStateWithRefImmediate<number>(0);

  const [activeConnectorId, $setActiveConnectorIdRef, activeConnectorIdRef] =
    useStateWithRefImmediate<number>(0);

  // set on mouse down on boxes, internal marker for dragging operation
  //  unset on mouse up; Holds the un-snapped coordinates of the box
  const [, $setIsMouseDownForDraggingBoxesRef, isMouseDownForDraggingBoxesRef] =
    useStateWithRefImmediate<false | MouseCoordinates>(false);

  // set on first mouse move, unset on mouse up
  // external marker to distinguish between drags and clicks when mouse up
  const hasDraggedRef = React.useRef(false);

  // keep track of the mouse position in the document, based on this and the position of the canvas we derive other coordinates
  // when the mouse moves or when the size changes, we recalculate the canvas coordinates
  const [, $setMouseDocCoordinatesRef, mouseDocCoordinatesRef] =
    useStateWithRefImmediate<MouseCoordinates>({
      x: 0,
      y: 0,
    });

  // coordinates relative to the canvas position
  const [, $setMouseCanvasCoordinatesRef, mouseCanvasCoordinatesRef] =
    useStateWithRefImmediate<MouseCanvasCoordinates>({
      x: 0,
      y: 0,
      in: true,
      empty: true,
    });

  // set only when the mouse is over the canvas and there something dragging, used by the moving boxes operation
  //  since that uses a delta move to calculate positions
  const [, $setLastMouseCoordinatesInCanvasRef, lastMouseCoordinatesInCanvasRef] =
    useStateWithRefImmediate<MouseCanvasCoordinates>({
      x: 0,
      y: 0,
      in: true,
      empty: true,
    });

  const [floatingConnector, $setFloatingConnectorRef, floatingConnectorRef] =
    useStateWithRefImmediate<FloatingConnector | null>(null);

  // size and position of the canvas, together with the mouse position in the document,
  //  is used to calculate the canvas coordinates
  const [size, $setSizeRef, sizeRef] = useStateWithRefImmediate<Size>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  // endregion

  // region: helper functions
  const $calculateCanvasCoordinates = React.useCallback(
    (docCoordinates: MouseCoordinates, size: Size) => {
      const { x, y } = docCoordinates;
      const coordX = x - size.left;
      const coordY = y - size.top;
      const isOut = coordX < 0 || coordY < 0 || coordX > size.width || coordY > size.height;
      $setMouseCanvasCoordinatesRef({
        x: coordX,
        y: coordY,
        in: !isOut,
      });
      if (!isOut && isMouseDownForDraggingBoxesRef.current) {
        $setLastMouseCoordinatesInCanvasRef({
          x: coordX,
          y: coordY,
          in: !isOut,
        });
      }
    },
    [
      $setLastMouseCoordinatesInCanvasRef,
      $setMouseCanvasCoordinatesRef,
      isMouseDownForDraggingBoxesRef,
    ],
  );
  // endregion

  // region: exposed event handlers
  const $onConnectorMouseDown = React.useCallback<CtxMethods['$onConnectorMouseDown']>(
    (connectorId) => {
      $setActiveBoxIdRef(0);
      $setActiveConnectorIdRef(connectorId);
    },
    [$setActiveBoxIdRef, $setActiveConnectorIdRef],
  );
  const $onNewBoxMouseDown = React.useCallback<CtxMethods['$onNewBoxMouseDown']>(
    (kind, params) => {
      $setAboutToDragNewBoxKindRef([kind, params] as BoxParams);
    },
    [$setAboutToDragNewBoxKindRef],
  );
  const $onNewBoxMouseUp = React.useCallback<CtxMethods['$onNewBoxMouseUp']>(() => {
    $setAboutToDragNewBoxKindRef(null);
  }, [$setAboutToDragNewBoxKindRef]);

  const $onConnectorPointMouseOut = React.useCallback<CtxMethods['$onConnectorPointMouseOut']>(
    (_portId, _portKind, _boxElement) => {
      // is this enough?
      if (!floatingConnectorRef.current) {
        return;
      }
      $setFloatingConnectorRef({ ...floatingConnectorRef.current, destinationBox: null });
    },
    [$setFloatingConnectorRef, floatingConnectorRef],
  );

  const $onConnectorPointMouseOver = React.useCallback<CtxMethods['$onConnectorPointMouseOver']>(
    (portId, portKind, boxElement) => {
      if (floatingConnectorRef.current === null) {
        return;
      }
      if (portKind === floatingConnectorRef.current.draggingFromPortKind) {
        // can only drag between inputs and outputs
        return;
      }
      const isGood = getActiveIsPortDraggable(portId, portKind, boxElement, sketchDataRef.current);
      if (!isGood) {
        return;
      }
      $setFloatingConnectorRef({
        ...floatingConnectorRef.current,
        destinationBox: { boxId: boxElement.id, portId },
      });
    },
    [$setFloatingConnectorRef, floatingConnectorRef, sketchDataRef],
  );
  const $onConnectorPointMouseDown = React.useCallback<CtxMethods['$onConnectorPointMouseDown']>(
    (portId, portKind, boxElement, mouseEvent) => {
      if (mouseEvent.button !== 0) {
        return;
      }
      if (!getActiveIsPortDraggable(portId, portKind, boxElement, sketchDataRef.current)) {
        return;
      }
      const boxPosition = getActiveBoxPosition(boxElement.id, sketchDataRef.current);
      const anchor = getPoint(boxElement, boxPosition, portId, sketchDataRef.current);
      const activeSketch = getActiveSketch(sketchDataRef.current);
      // TODO: extract these calculations
      const coordX =
        (mouseEvent.clientX - sizeRef.current.left) / activeSketch.state.zoomFactor +
        activeSketch.state.panX;
      const coordY =
        (mouseEvent.clientY - sizeRef.current.top) / activeSketch.state.zoomFactor +
        activeSketch.state.panY;

      const floating = { x: coordX, y: coordY };
      $setFloatingConnectorRef({
        fromBox: { boxId: boxElement.id, portId },
        from: anchor,
        to: floating,
        draggingFromPortKind: portKind,
        destinationBox: null,
      });
    },
    [$setFloatingConnectorRef, sizeRef, sketchDataRef],
  );

  const $onBoxWrapperClick = React.useCallback<CtxMethods['$onBoxWrapperClick']>(
    (_boxId, _mouseEvent) => {
      // nothing for now
    },
    [],
  );

  const $onBoxWrapperMouseDown = React.useCallback<CtxMethods['$onBoxWrapperMouseDown']>(
    (boxId, mouseEvent) => {
      // only left clicks
      if (mouseEvent.button !== 0) {
        return;
      }

      $setIsMouseDownForDraggingBoxesRef({
        ...getActiveBoxPosition(boxId, sketchDataRef.current).pos,
      });
      // setting the last mouse coordinates for the canvas:
      $calculateCanvasCoordinates(mouseDocCoordinatesRef.current, sizeRef.current);
      $setActiveBoxIdRef(boxId);
      $setActiveConnectorIdRef(0);
    },
    [
      $calculateCanvasCoordinates,
      $setActiveBoxIdRef,
      $setActiveConnectorIdRef,
      $setIsMouseDownForDraggingBoxesRef,
      mouseDocCoordinatesRef,
      sizeRef,
      sketchDataRef,
    ],
  );
  // endregion

  // region: event handlers
  const $handleDocumentMouseMoveMouseCoordinates = React.useCallback(
    (mouseEvent: MouseEvent) => {
      const docCoordintes = { x: mouseEvent.clientX, y: mouseEvent.clientY };
      const oldCanvasCoordinates = lastMouseCoordinatesInCanvasRef.current;
      $calculateCanvasCoordinates(docCoordintes, sizeRef.current);
      const newCanvasCoordinates = lastMouseCoordinatesInCanvasRef.current;
      if (isMouseDownForDraggingBoxesRef.current) {
        hasDraggedRef.current = true;
      }

      if (isMouseDownForDraggingBoxesRef.current && newCanvasCoordinates.in) {
        // move the active box
        const deltaX = newCanvasCoordinates.x - oldCanvasCoordinates.x;
        const deltaY = newCanvasCoordinates.y - oldCanvasCoordinates.y;
        // TODO: PERF: activeSketch should be moemoized since it does not change often
        const activeSketch = getActiveSketch(sketchDataRef.current);
        const newCoords = {
          x: isMouseDownForDraggingBoxesRef.current.x + deltaX / activeSketch.state.zoomFactor,
          y: isMouseDownForDraggingBoxesRef.current.y + deltaY / activeSketch.state.zoomFactor,
        };
        $setIsMouseDownForDraggingBoxesRef(newCoords);
        $setSketchData(
          actionSnapActiveBox(
            newCoords.x,
            newCoords.y,
            activeBoxIdRef.current,
            sketchDataRef.current,
          ),
        );
      }
      if (floatingConnectorRef.current !== null && mouseCanvasCoordinatesRef.current.in) {
        // TODO: PERF: activeSketch should be moemoized since it does not change often
        const activeSketch = getActiveSketch(sketchDataRef.current);
        const x =
          mouseCanvasCoordinatesRef.current.x / activeSketch.state.zoomFactor +
          activeSketch.state.panX;
        const y =
          mouseCanvasCoordinatesRef.current.y / activeSketch.state.zoomFactor +
          activeSketch.state.panY;
        $setFloatingConnectorRef({
          ...floatingConnectorRef.current,
          to: { x, y },
        });
      }

      if (aboutToDragNewBoxKindRef.current) {
        const activeSketch = getActiveSketch(sketchDataRef.current);
        // TODO: this positions the box at the mouseCanvasCoordinatesRef.current.x
        //   we should offset that so the cursor is at the center of the box
        const [{ newBox, newPosition }, newData] = actionActiveAddNewBox(
          aboutToDragNewBoxKindRef.current,
          mouseCanvasCoordinatesRef.current.x / activeSketch.state.zoomFactor +
            activeSketch.state.panX,
          mouseCanvasCoordinatesRef.current.y / activeSketch.state.zoomFactor +
            activeSketch.state.panY,
          sketchDataRef.current,
        );
        $setSketchData(newData);
        $setActiveBoxIdRef(newBox.id);
        $setActiveConnectorIdRef(0);
        $setLastMouseCoordinatesInCanvasRef({
          x: mouseCanvasCoordinatesRef.current.x,
          y: mouseCanvasCoordinatesRef.current.y,
          in: true,
        });
        $setIsMouseDownForDraggingBoxesRef(newPosition.pos);
        $setAboutToDragNewBoxKindRef(null);
      }
      $setMouseDocCoordinatesRef(docCoordintes);
    },
    [
      $calculateCanvasCoordinates,
      $setAboutToDragNewBoxKindRef,
      $setActiveBoxIdRef,
      $setActiveConnectorIdRef,
      $setFloatingConnectorRef,
      $setIsMouseDownForDraggingBoxesRef,
      $setLastMouseCoordinatesInCanvasRef,
      $setMouseDocCoordinatesRef,
      $setSketchData,
      aboutToDragNewBoxKindRef,
      activeBoxIdRef,
      floatingConnectorRef,
      isMouseDownForDraggingBoxesRef,
      lastMouseCoordinatesInCanvasRef,
      mouseCanvasCoordinatesRef,
      sizeRef,
      sketchDataRef,
    ],
  );
  const $handleDocumentKeyDown = React.useCallback(
    (keyEvent: KeyboardEvent) => {
      if (
        (keyEvent.code === 'ArrowRight' || keyEvent.code === 'ArrowLeft') &&
        activeConnectorIdRef.current !== 0 &&
        isMouseDownForDraggingBoxesRef.current === false &&
        floatingConnectorRef.current === null &&
        aboutToDragNewBoxKindRef.current === null
      ) {
        let bias = keyEvent.code === 'ArrowRight' ? -1 : 1;
        if (keyEvent.shiftKey) {
          bias *= 10;
        }
        $setSketchData(
          actionAdjustActiveConnectorBias(
            activeConnectorIdRef.current,
            bias,
            sketchDataRef.current,
          ),
        );
      }
      if (
        (keyEvent.code === 'KeyR' || keyEvent.code === 'r') &&
        activeConnectorIdRef.current !== 0 &&
        isMouseDownForDraggingBoxesRef.current === false &&
        floatingConnectorRef.current === null &&
        aboutToDragNewBoxKindRef.current === null
      ) {
        $setSketchData(
          actionResetActiveConnectorBias(activeConnectorIdRef.current, sketchDataRef.current),
        );
      }
      if (
        (keyEvent.code === 'Backspace' || keyEvent.code === 'Delete') &&
        isMouseDownForDraggingBoxesRef.current === false &&
        floatingConnectorRef.current === null &&
        aboutToDragNewBoxKindRef.current === null
      ) {
        console.log('delete');
        // if we allow deletion while dragging, we need to worry about cleaning up, normally mouse up would do it
        if (activeBoxIdRef.current !== 0) {
          $setSketchData(actionRemoveActiveBox(activeBoxIdRef.current, sketchDataRef.current));
          $setActiveBoxIdRef(0);
        }

        if (activeConnectorIdRef.current !== 0) {
          $setSketchData(
            actionRemoveActiveConnector(activeConnectorIdRef.current, sketchDataRef.current),
          );
          $setActiveConnectorIdRef(0);
        }
      }
    },
    [
      $setActiveBoxIdRef,
      $setActiveConnectorIdRef,
      $setSketchData,
      aboutToDragNewBoxKindRef,
      activeBoxIdRef,
      activeConnectorIdRef,
      floatingConnectorRef,
      isMouseDownForDraggingBoxesRef,
      sketchDataRef,
    ],
  );

  const $handleDocumentMouseMouseUp = React.useCallback(
    (_mouseEvent: MouseEvent) => {
      $setIsMouseDownForDraggingBoxesRef(false);
      hasDraggedRef.current = false;
      if (floatingConnectorRef.current !== null) {
        if (floatingConnectorRef.current.destinationBox !== null) {
          let { fromBox, destinationBox } = floatingConnectorRef.current;
          if (floatingConnectorRef.current.draggingFromPortKind === 'inputPort') {
            fromBox = floatingConnectorRef.current.destinationBox;
            destinationBox = floatingConnectorRef.current.fromBox;
          }
          $setSketchData(actionAddActiveConnector(fromBox, destinationBox, sketchDataRef.current));
        }
        $setFloatingConnectorRef(null);
      }
    },
    [
      $setFloatingConnectorRef,
      $setIsMouseDownForDraggingBoxesRef,
      $setSketchData,
      floatingConnectorRef,
      sketchDataRef,
    ],
  );

  const $handleSvgWheelPinch = React.useCallback(
    (wheelEvent: WheelEvent) => {
      // TODO: adjust zoom speed to have a linear movement on the screen
      const wheelEventDeltaY = -wheelEvent.deltaY;
      const sketchState = getActiveSketch(sketchDataRef.current).state;

      let factor = 40;
      if (sketchState.zoomFactor < 0.5) {
        factor = 80;
      } else if (sketchState.zoomFactor < 1) {
        factor = 60;
      }
      let zoomFactorDelta = wheelEventDeltaY / factor;
      let zoomFactor = sketchState.zoomFactor + wheelEventDeltaY / factor;
      if (zoomFactor < 0.2) {
        zoomFactorDelta = 0.2 - sketchState.zoomFactor;
        zoomFactor = 0.2;
      }

      const panX =
        sketchState.panX +
        (mouseCanvasCoordinatesRef.current.x / sketchState.zoomFactor) *
          (zoomFactorDelta / zoomFactor);
      const panY =
        sketchState.panY +
        (mouseCanvasCoordinatesRef.current.y / sketchState.zoomFactor) *
          (zoomFactorDelta / zoomFactor);

      $setSketchData(
        actionSetActiveSketchZoomAndPan(zoomFactor, panX, panY, sketchDataRef.current),
      );
    },
    [$setSketchData, mouseCanvasCoordinatesRef, sketchDataRef],
  );

  const $handleSvgWheelPan = React.useCallback(
    (wheelEvent: WheelEvent) => {
      const sketchState = getActiveSketch(sketchDataRef.current).state;
      // TODO: adjust speed, if the mouse is moving slowly, pan just by a small amount
      const panX = sketchState.panX + wheelEvent.deltaX / sketchState.zoomFactor;
      const panY = sketchState.panY + wheelEvent.deltaY / sketchState.zoomFactor;
      $setSketchData(actionSetActiveSketchPan(panX, panY, sketchDataRef.current));
    },
    [$setSketchData, sketchDataRef],
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
      $calculateCanvasCoordinates(mouseDocCoordinatesRef.current, size);
    },
    [$calculateCanvasCoordinates, $setSizeRef, mouseDocCoordinatesRef],
  );
  // endregion

  // region: react interface
  const svgRef = React.useCallback<React.RefCallback<SVGSVGElement>>(
    (el) => {
      const onWheel = (wheelEvent: WheelEvent) => {
        wheelEvent.preventDefault();
        if (wheelEvent.ctrlKey) {
          // pinch
          $handleSvgWheelPinch(wheelEvent);
        } else {
          $handleSvgWheelPan(wheelEvent);
        }
      };
      if (el) {
        document.addEventListener('mousemove', $handleDocumentMouseMoveMouseCoordinates);
        document.addEventListener('mouseup', $handleDocumentMouseMouseUp);
        document.addEventListener('keydown', $handleDocumentKeyDown);
        el.addEventListener('wheel', onWheel, { passive: false });
      }
      return () => {
        document.removeEventListener('mousemove', $handleDocumentMouseMoveMouseCoordinates);
        document.removeEventListener('mouseup', $handleDocumentMouseMouseUp);
        document.removeEventListener('keydown', $handleDocumentKeyDown);
        el?.removeEventListener('wheel', onWheel);
      };
    },
    [
      $handleDocumentKeyDown,
      $handleDocumentMouseMouseUp,
      $handleDocumentMouseMoveMouseCoordinates,
      $handleSvgWheelPan,
      $handleSvgWheelPinch,
    ],
  );

  const canvasRef = useElementLayoutWithRef<HTMLDivElement>($handleLayoutEvent);
  // endregion

  const contextVal = React.useMemo<CtxMethods>(() => {
    return {
      svgRef,
      canvasRef,
      $onBoxWrapperClick,
      $onBoxWrapperMouseDown,
      hasDraggedRef,
      $onConnectorPointMouseDown,
      $onConnectorPointMouseOver,
      $onConnectorPointMouseOut,
      $onNewBoxMouseDown,
      $onNewBoxMouseUp,
      $onConnectorMouseDown,
    } satisfies CtxMethods;
  }, [
    svgRef,
    canvasRef,
    $onBoxWrapperClick,
    $onBoxWrapperMouseDown,
    $onConnectorPointMouseDown,
    $onConnectorPointMouseOver,
    $onConnectorPointMouseOut,
    $onNewBoxMouseDown,
    $onNewBoxMouseUp,
    $onConnectorMouseDown,
  ]);

  const dataVal = React.useMemo<CtxData>(() => {
    return { size, activeBoxId, floatingConnector, activeConnectorId } satisfies CtxData;
  }, [size, activeBoxId, floatingConnector, activeConnectorId]);

  return (
    <InteractionsMethodsContext value={contextVal}>
      <InteractionsDataContext value={dataVal}>{children}</InteractionsDataContext>
    </InteractionsMethodsContext>
  );
};

export const useInteractionsMethods = () => {
  return React.useContext(InteractionsMethodsContext);
};
export const useInteractionsData = () => {
  return React.useContext(InteractionsDataContext);
};
