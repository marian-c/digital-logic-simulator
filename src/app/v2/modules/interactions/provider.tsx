import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import type { LayoutEvent } from '@/types/rnw';
import { useSketchDataMethods } from '@/app/v2/modules/useSketchData';
import type { SketchState } from '@/app/v2/types/data';

type Size = { width: number; height: number; left: number; top: number };

type MouseCoordinates = {
  x: number;
  y: number;
  out: boolean;
  empty?: true;
};

type Ctx = {
  svgRef: React.RefCallback<SVGSVGElement>;
  canvasRef: React.RefObject<HTMLDivElement | null>;
};

const InteractionsContext = React.createContext<Ctx>(null as any);

const SizeContext = React.createContext<Size>({ width: 0, height: 0, left: 0, top: 0 });

export const InteractionsProvider: FunctionComponentWithChildren = ({ children }) => {
  const { setSketchState } = useSketchDataMethods();

  // region: variables
  const mouseDocCoordinatesRefObject = React.useRef({ x: 0, y: 0 });
  const mouseCanvasCoordinatesRefObject = React.useRef<MouseCoordinates>({
    x: 0,
    y: 0,
    out: false,
    empty: true,
  });
  // TODO: when position changes, a bunch of callbacks reattach, this can be avoided
  //   if we keep a ref to the size as well
  const [size, setSize] = React.useState<Size>({ width: 0, height: 0, left: 0, top: 0 });
  // endregion

  // region: helper functions
  const setCanvasCoordinates = React.useCallback(() => {
    const { x, y } = mouseDocCoordinatesRefObject.current;
    const coordX = x - size.left;
    const coordY = y - size.top;
    const isOut = coordX < 0 || coordY < 0 || coordX > size.width || coordY > size.height;

    mouseCanvasCoordinatesRefObject.current = {
      x: coordX,
      y: coordY,
      out: isOut,
    } satisfies MouseCoordinates;
  }, [size]);
  // endregion

  // region: event handlers
  const handleDocumentMouseMoveMouseCoordinates = React.useCallback(
    (event: MouseEvent) => {
      const { clientX, clientY } = event;
      mouseDocCoordinatesRefObject.current = { x: clientX, y: clientY };
      setCanvasCoordinates();
    },
    [setCanvasCoordinates],
  );

  const handleSvgWheelPinch = React.useCallback(
    (wheelEvent: WheelEvent) => {
      setSketchState((oldState) => {
        let factor = 40;
        if (oldState.zoomFactor < 0.5) {
          factor = 80;
        } else if (oldState.zoomFactor < 1) {
          factor = 60;
        }
        let zoomFactor = oldState.zoomFactor - wheelEvent.deltaY / factor;
        if (zoomFactor < 0.2) {
          zoomFactor = 0.2;
        }
        return { ...oldState, zoomFactor } satisfies SketchState;
      });
    },
    [setSketchState],
  );

  const handleSvgWheelPan = React.useCallback(
    (wheelEvent: WheelEvent) => {
      setSketchState((oldState) => {
        return {
          ...oldState,
          panX: oldState.panX + wheelEvent.deltaX / oldState.zoomFactor,
          panY: oldState.panY + wheelEvent.deltaY / oldState.zoomFactor,
        } satisfies SketchState;
      });
    },
    [setSketchState],
  );

  const handleLayoutEvent = React.useCallback(
    (layoutEvent: LayoutEvent) => {
      setSize({
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
        el.addEventListener('wheel', onWheel, { passive: false });
      }
      return () => {
        document.removeEventListener('mousemove', handleDocumentMouseMoveMouseCoordinates);
        document.removeEventListener('wheel', onWheel);
      };
    },
    [handleDocumentMouseMoveMouseCoordinates, handleSvgWheelPan, handleSvgWheelPinch],
  );
  const canvasRef = useElementLayoutWithRef<HTMLDivElement>(handleLayoutEvent);
  // endregion

  const contextVal = React.useMemo(() => {
    return { svgRef, canvasRef };
  }, [canvasRef, svgRef]);

  return (
    <InteractionsContext value={contextVal}>
      <SizeContext value={size}>{children}</SizeContext>
    </InteractionsContext>
  );
};

export const useInteractions = () => {
  return React.useContext(InteractionsContext);
};

export const useSize = () => {
  return React.useContext(SizeContext);
};
