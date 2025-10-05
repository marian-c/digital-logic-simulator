// The logic here assumes zoom will not happen while dragging

import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import type { LayoutEvent } from '@/types/rnw';
import { useStateWithRef } from '@/hooks/useStateWithRef';
import { useSketchStorageMethods } from '@/app/v3/providers/dataStorageProvider';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import {
  actionMoveActiveBoxBy,
  actionSetActiveSketchPan,
  actionSetActiveSketchZoomAndPan,
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
  const [, $setMouseDocCoordinates, mouseDocCoordinatesRef] =
    useStateWithRefImmediate<MouseCoordinates>({
      x: 0,
      y: 0,
    });
  const [, $setMouseCanvasCoordinates, mouseCanvasCoordinatesRef] =
    useStateWithRefImmediate<MouseCanvasCoordinates>({
      x: 0,
      y: 0,
      in: true,
      empty: true,
    });
  const [, $setLastMouseCanvasCoordinates, lastMouseCanvasCoordinatesRef] =
    useStateWithRefImmediate<MouseCanvasCoordinates>({
      x: 0,
      y: 0,
      in: true,
      empty: true,
    });
  const [, $setIsMouseDownForDraggingBoxes, isMouseDownForDraggingBoxesRef] =
    useStateWithRefImmediate<boolean>(false);
  const [activeBoxId, $setActiveBoxId, activeBoxIdRef] = useStateWithRefImmediate<number>(0);
  const [size, $setSize, sizeRef] = useStateWithRefImmediate<Size>({
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
      $setMouseCanvasCoordinates({
        x: coordX,
        y: coordY,
        in: !isOut,
      });
      if (!isOut && isMouseDownForDraggingBoxesRef.current) {
        $setLastMouseCanvasCoordinates({
          x: coordX,
          y: coordY,
          in: !isOut,
        });
      }
    },
    [$setLastMouseCanvasCoordinates, $setMouseCanvasCoordinates, isMouseDownForDraggingBoxesRef],
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

      $setIsMouseDownForDraggingBoxes(true);
      // setting the last mouse coordinates for the canvas:
      $calculateCanvasCoordinates(mouseDocCoordinatesRef.current, sizeRef.current);
      $setActiveBoxId(boxId);
    },
    [$setActiveBoxId, $setIsMouseDownForDraggingBoxes],
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
        $setSketchData(
          actionMoveActiveBoxBy(deltaX, deltaY, activeBoxIdRef.current, sketchDataRef.current),
        );
      }

      $setMouseDocCoordinates(docCoordintes);
    },
    [
      $calculateCanvasCoordinates,
      $setMouseDocCoordinates,
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
      $setIsMouseDownForDraggingBoxes(false);
    },
    [$setIsMouseDownForDraggingBoxes],
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
      $setSize(size);
      $calculateCanvasCoordinates(mouseDocCoordinatesRef.current, size);
    },
    [$calculateCanvasCoordinates, $setSize, mouseDocCoordinatesRef],
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
