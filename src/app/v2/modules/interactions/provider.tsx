import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import type { LayoutEvent } from '@/types/rnw';

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
  // region: variables
  const mouseDocCoordinatesRefObject = React.useRef({ x: 0, y: 0 });
  const mouseCanvasCoordinatesRefObject = React.useRef<MouseCoordinates>({
    x: 0,
    y: 0,
    out: false,
    empty: true,
  });
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

  const handleSvgWheelPinch = React.useCallback((wheelEvent: WheelEvent) => {
    // TODO: implement me
  }, []);

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
  const svgRef = React.useCallback((el: SVGSVGElement | null) => {
    // attach zoom handler, would eventually need panning coordinates, which would be good to be refs
    // since we only need it in callbacks - no use rendering this context when that changes
    if (el) {
      document.addEventListener('mousemove', handleDocumentMouseMoveMouseCoordinates);
      el.addEventListener(
        'wheel',
        (wheelEvent) => {
          wheelEvent.preventDefault();
          if (wheelEvent.ctrlKey) {
            // pinch
            handleSvgWheelPinch(wheelEvent);
          } else {
            // pan
          }
        },
        { passive: false },
      );
    }
  }, []);
  const canvasRef = useElementLayoutWithRef<HTMLDivElement>(handleLayoutEvent);
  // endregion

  const contextVal = React.useMemo(() => {
    return { svgRef, canvasRef };
  }, []);

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
