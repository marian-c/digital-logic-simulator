// The logic here assumes zoom will not happen while dragging

import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import type { LayoutEvent } from '@/types/rnw';
import { useSketchDataMethods } from '@/app/v2/modules/useSketchData';
import type { SketchState } from '@/app/v2/types/data';
import { LogicProvider } from '@/app/v2/modules/interactions/logicProvider';
import { find } from 'lodash';

type Size = { width: number; height: number; left: number; top: number };

type MouseCoordinates = {
  x: number;
  y: number;
};

type MouseCanvasCoordinates = {
  x: number;
  y: number;
  in: boolean;
  empty?: true;
};

type InteractionData = {
  /**
   * when mouse moves, we look at isMouseDown to see if we drag
   */
  isMouseDownForDraggingBoxes: boolean;
  // should be an array in the future to allow multiple selections
  activeBoxInfo: { activeBoxId: number; mousePositionOffsetForDragging: { x: number; y: number } };
};

type Ctx = {
  svgRef: React.RefCallback<SVGSVGElement>;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  $onBoxWrapperClick: (boxId: number, mouseEvent: React.MouseEvent<SVGElement, MouseEvent>) => void;
  $onBoxWrapperMouseDown: (
    boxId: number,
    mouseEvent: React.MouseEvent<SVGElement, MouseEvent>,
  ) => void;
};

const InteractionsContext = React.createContext<Ctx>(null as any);

const SizeContext = React.createContext<Size>({ width: 0, height: 0, left: 0, top: 0 });

export const InteractionsProviderInner: FunctionComponentWithChildren = ({ children }) => {
  const { $setSketchState, $setSketchPositions } = useSketchDataMethods();

  // region: variables
  const mouseDocCoordinatesRefObject = React.useRef<MouseCoordinates>({ x: 0, y: 0 });
  const mouseCanvasCoordinatesRefObject = React.useRef<MouseCanvasCoordinates>({
    x: 0,
    y: 0,
    in: true,
    /**
     * marker to say this hasn't been set yet
     */
    empty: true,
  });
  const interactionDataRef = React.useRef<InteractionData>({
    isMouseDownForDraggingBoxes: false,
    activeBoxInfo: { activeBoxId: 0, mousePositionOffsetForDragging: { x: 0, y: 0 } },
  });
  // TODO: when position changes, a bunch of callbacks reattach, this can be avoided
  //   if we keep a ref to the size as well
  const [size, $setSize] = React.useState<Size>({ width: 0, height: 0, left: 0, top: 0 });
  // endregion

  // region: helper functions
  // TODO: size is state and callback changes, this can be avoided if we keep a ref
  const setCanvasCoordinates = React.useCallback(() => {
    const { x, y } = mouseDocCoordinatesRefObject.current;
    const coordX = x - size.left;
    const coordY = y - size.top;
    const isOut = coordX < 0 || coordY < 0 || coordX > size.width || coordY > size.height;
    mouseCanvasCoordinatesRefObject.current = {
      x: coordX,
      y: coordY,
      in: !isOut,
    };
  }, [size]);
  // endregion

  // region: exposed event handlers
  const $onBoxWrapperClick = React.useCallback<Ctx['$onBoxWrapperClick']>((_boxId, _mouseEvent) => {
    // nothing for now
  }, []);

  const $onBoxWrapperMouseDown = React.useCallback<Ctx['$onBoxWrapperMouseDown']>(
    (boxId, mouseEvent) => {
      // only left clicks
      if (mouseEvent.button !== 0) {
        return;
      }

      // XXX: just mutates
      interactionDataRef.current.isMouseDownForDraggingBoxes = true;

      // TODO: calculate mousePositionOffset
      const mousePositionOffset = { x: 0, y: 0 };
      // XXX: just mutates
      interactionDataRef.current.activeBoxInfo = {
        activeBoxId: boxId,
        mousePositionOffsetForDragging: mousePositionOffset,
      };
    },
    [],
  );
  // endregion

  // region: event handlers
  const handleDocumentMouseMoveMouseCoordinates = React.useCallback(
    (mouseEvent: MouseEvent) => {
      mouseDocCoordinatesRefObject.current = { x: mouseEvent.clientX, y: mouseEvent.clientY };
      setCanvasCoordinates();
      console.log('handleDocumentMouseMoveMouseCoordinates', mouseEvent);
      if (
        interactionDataRef.current.isMouseDownForDraggingBoxes &&
        mouseCanvasCoordinatesRefObject.current.in
      ) {
        // move the active box
        $setSketchPositions((oldSketchPos) => {
          const found = find(oldSketchPos.positions, {
            boxId: interactionDataRef.current.activeBoxInfo.activeBoxId,
          });
          if (!found) {
            throw new Error(
              `Logic error: dragged box id not found in positions data ({boxId: ${interactionDataRef.current.activeBoxInfo.activeBoxId}})`,
            );
          }
          // XXX: just mutates
          found.pos = {
            x: mouseCanvasCoordinatesRefObject.current.x,
            y: mouseCanvasCoordinatesRefObject.current.y,
          };
          return {
            ...oldSketchPos,
          };
        });
      }
    },
    [setCanvasCoordinates],
  );
  const $handleDocumentMouseMouseUp = React.useCallback((_mouseEvent: MouseEvent) => {
    // XXX: just mutates
    interactionDataRef.current.isMouseDownForDraggingBoxes = false;
    interactionDataRef.current.activeBoxInfo.mousePositionOffsetForDragging = { x: 0, y: 0 };
  }, []);

  const handleSvgWheelPinch = React.useCallback(
    (wheelEvent: WheelEvent) => {
      // TODO: adjust zoom speed to have a linear movement on the screen
      const wheelEventdeltaY = -wheelEvent.deltaY;
      $setSketchState((oldState: SketchState) => {
        let factor = 40;
        if (oldState.zoomFactor < 0.5) {
          factor = 80;
        } else if (oldState.zoomFactor < 1) {
          factor = 60;
        }
        let zoomFactorDelta = wheelEventdeltaY / factor;
        let zoomFactor = oldState.zoomFactor + wheelEventdeltaY / factor;
        if (zoomFactor < 0.2) {
          zoomFactorDelta = 0.2 - oldState.zoomFactor;
          zoomFactor = 0.2;
        }

        const panX =
          oldState.panX +
          (mouseCanvasCoordinatesRefObject.current.x / oldState.zoomFactor) *
            (zoomFactorDelta / zoomFactor);
        const panY =
          oldState.panY +
          (mouseCanvasCoordinatesRefObject.current.y / oldState.zoomFactor) *
            (zoomFactorDelta / zoomFactor);

        return { ...oldState, zoomFactor, panX, panY } satisfies SketchState;
      });
    },
    [$setSketchState],
  );

  const handleSvgWheelPan = React.useCallback(
    (wheelEvent: WheelEvent) => {
      $setSketchState((oldState) => {
        // TODO: adjust speed, if the mouse is moving slowly, pan just by a small amount
        return {
          ...oldState,
          panX: oldState.panX + wheelEvent.deltaX / oldState.zoomFactor,
          panY: oldState.panY + wheelEvent.deltaY / oldState.zoomFactor,
        } satisfies SketchState;
      });
    },
    [$setSketchState],
  );

  const handleLayoutEvent = React.useCallback(
    (layoutEvent: LayoutEvent) => {
      $setSize({
        width: layoutEvent.nativeEvent.layout.width,
        height: layoutEvent.nativeEvent.layout.height,
        left: layoutEvent.nativeEvent.layout.left,
        top: layoutEvent.nativeEvent.layout.top,
      });
      setCanvasCoordinates();
    },
    [setCanvasCoordinates],
  );
  // endregion

  // region: react interface
  const svgRef = React.useCallback<React.RefCallback<SVGSVGElement>>(
    (el) => {
      const onWheel = (wheelEvent: WheelEvent) => {
        wheelEvent.preventDefault();
        if (wheelEvent.ctrlKey) {
          // pinch
          handleSvgWheelPinch(wheelEvent);
        } else {
          handleSvgWheelPan(wheelEvent);
        }
      };
      if (el) {
        document.addEventListener('mousemove', handleDocumentMouseMoveMouseCoordinates);
        // XXX: this reattaches because of handleDocumentMouseMoveMouseCoordinates
        document.addEventListener('mouseup', $handleDocumentMouseMouseUp);
        el.addEventListener('wheel', onWheel, { passive: false });
      }
      return () => {
        document.removeEventListener('mousemove', handleDocumentMouseMoveMouseCoordinates);
        document.removeEventListener('mouseup', $handleDocumentMouseMouseUp);
        document.removeEventListener('wheel', onWheel);
      };
    },
    [handleDocumentMouseMoveMouseCoordinates, handleSvgWheelPan, handleSvgWheelPinch],
  );

  const canvasRef = useElementLayoutWithRef<HTMLDivElement>(handleLayoutEvent);
  // endregion

  const contextVal = React.useMemo<Ctx>(() => {
    return { svgRef, canvasRef, $onBoxWrapperClick, $onBoxWrapperMouseDown };
  }, [canvasRef, svgRef]);

  return (
    <InteractionsContext value={contextVal}>
      <SizeContext value={size}>{children}</SizeContext>
    </InteractionsContext>
  );
};

export const InteractionsProvider: FunctionComponentWithChildren = ({ children }) => {
  return (
    <LogicProvider>
      <InteractionsProviderInner>{children}</InteractionsProviderInner>
    </LogicProvider>
  );
};

export const useInteractions = () => {
  return React.useContext(InteractionsContext);
};

export const useSize = () => {
  return React.useContext(SizeContext);
};
