// The logic here assumes zoom will not happen while dragging

import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import type { LayoutEvent } from '@/types/rnw';
import { useSketchStorageMethods } from '@/app/v3/providers/dataStorageProvider';
import { getActiveBoxPosition, getActiveSketch } from '@/app/v3/data/utils/selectors';
import {
  actionSetActiveSketchPan,
  actionSetActiveSketchZoomAndPan,
  actionSnapActiveBox,
} from '@/app/v3/data/utils/actions';
import { useStateWithRefImmediate } from '@/hooks/useStateWithRefImmediate';

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

type CtxMethods = {
  svgRef: React.RefCallback<SVGSVGElement>;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  $onBoxWrapperClick: (boxId: number, mouseEvent: React.MouseEvent<SVGElement, MouseEvent>) => void;
  $onBoxWrapperMouseDown: (
    boxId: number,
    mouseEvent: React.MouseEvent<SVGElement, MouseEvent>,
  ) => void;
};

type CtxData = {
  size: Size;
  activeBoxId: number;
};

const InteractionsMethodsContext = React.createContext<CtxMethods>(null as any);
const InteractionsDataContext = React.createContext<CtxData>(null as any);

export const InteractionsProvider: FunctionComponentWithChildren = ({ children }) => {
  const { sketchDataRef, $setSketchData } = useSketchStorageMethods();

  // region: variables
  const [, $setMouseDocCoordinatesRef, mouseDocCoordinatesRef] =
    useStateWithRefImmediate<MouseCoordinates>({
      x: 0,
      y: 0,
    });
  const [, $setMouseCanvasCoordinatesRef, mouseCanvasCoordinatesRef] =
    useStateWithRefImmediate<MouseCanvasCoordinates>({
      x: 0,
      y: 0,
      in: true,
      empty: true,
    });
  const [, $setLastMouseCanvasCoordinatesRef, lastMouseCanvasCoordinatesRef] =
    useStateWithRefImmediate<MouseCanvasCoordinates>({
      x: 0,
      y: 0,
      in: true,
      empty: true,
    });
  const [, $setIsMouseDownForDraggingBoxesRef, isMouseDownForDraggingBoxesRef] =
    useStateWithRefImmediate<false | MouseCoordinates>(false);
  const [activeBoxId, $setActiveBoxIdRef, activeBoxIdRef] = useStateWithRefImmediate<number>(0);
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
        $setLastMouseCanvasCoordinatesRef({
          x: coordX,
          y: coordY,
          in: !isOut,
        });
      }
    },
    [
      $setLastMouseCanvasCoordinatesRef,
      $setMouseCanvasCoordinatesRef,
      isMouseDownForDraggingBoxesRef,
    ],
  );
  // endregion

  // region: exposed event handlers
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
    },
    [
      $calculateCanvasCoordinates,
      $setActiveBoxIdRef,
      $setIsMouseDownForDraggingBoxesRef,
      mouseDocCoordinatesRef,
      sizeRef,
    ],
  );
  // endregion

  // region: event handlers
  const $handleDocumentMouseMoveMouseCoordinates = React.useCallback(
    (mouseEvent: MouseEvent) => {
      const docCoordintes = { x: mouseEvent.clientX, y: mouseEvent.clientY };
      const oldCanvasCoordinates = lastMouseCanvasCoordinatesRef.current;
      $calculateCanvasCoordinates(docCoordintes, sizeRef.current);
      const newCanvasCoordinates = lastMouseCanvasCoordinatesRef.current;

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

      $setMouseDocCoordinatesRef(docCoordintes);
    },
    [
      $calculateCanvasCoordinates,
      $setMouseDocCoordinatesRef,
      $setSketchData,
      activeBoxIdRef,
      isMouseDownForDraggingBoxesRef,
      lastMouseCanvasCoordinatesRef,
      sizeRef,
      sketchDataRef,
    ],
  );
  const $handleDocumentMouseMouseUp = React.useCallback(
    (_mouseEvent: MouseEvent) => {
      $setIsMouseDownForDraggingBoxesRef(false);
    },
    [$setIsMouseDownForDraggingBoxesRef],
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
        el.addEventListener('wheel', onWheel, { passive: false });
      }
      return () => {
        document.removeEventListener('mousemove', $handleDocumentMouseMoveMouseCoordinates);
        document.removeEventListener('mouseup', $handleDocumentMouseMouseUp);
        el?.removeEventListener('wheel', onWheel);
      };
    },
    [
      $handleDocumentMouseMouseUp,
      $handleDocumentMouseMoveMouseCoordinates,
      $handleSvgWheelPan,
      $handleSvgWheelPinch,
    ],
  );

  const canvasRef = useElementLayoutWithRef<HTMLDivElement>($handleLayoutEvent);
  // endregion

  const contextVal = React.useMemo<CtxMethods>(() => {
    return { svgRef, canvasRef, $onBoxWrapperClick, $onBoxWrapperMouseDown };
  }, [$onBoxWrapperClick, $onBoxWrapperMouseDown, canvasRef, svgRef]);

  const dataVal = React.useMemo<CtxData>(() => {
    return { size, activeBoxId };
  }, [size, activeBoxId]);

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
