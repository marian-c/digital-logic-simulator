import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';

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

export const InteractionsProvider: FunctionComponentWithChildren = ({ children }) => {
  const mouseCoordinatesRef = React.useRef<MouseCoordinates>({
    x: 0,
    y: 0,
    out: false,
    empty: true,
  });
  const sizeRef = React.useRef<Size>({ width: 0, height: 0, left: 0, top: 0 });
  const svgRef = React.useCallback((el: SVGSVGElement | null) => {
    // attach zoom handler, would eventually need panning coordinates, which would be good to be refs
    // since we only need it in callbacks - no use rendering this context when that changes
    if (el) {
      document.addEventListener('mousemove', (event) => {
        const coordX = event.clientX - sizeRef.current.left;
        const coordY = event.clientY - sizeRef.current.top;
        const isOut =
          coordX < 0 ||
          coordY < 0 ||
          coordX > sizeRef.current.width ||
          coordY > sizeRef.current.height;
        mouseCoordinatesRef.current = {
          x: coordX,
          y: coordY,
          out: isOut,
        } satisfies MouseCoordinates;
      });
      el.addEventListener(
        'wheel',
        (wheelEvent) => {
          if (wheelEvent.ctrlKey) {
            // pinch
            wheelEvent.preventDefault();
          }
        },
        { passive: false },
      );
    }
  }, []);

  const canvasRef = useElementLayoutWithRef<HTMLDivElement>((e) => {
    console.log('setting the size', e.nativeEvent.layout);
    sizeRef.current = {
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      left: e.nativeEvent.layout.left,
      top: e.nativeEvent.layout.top,
    };
  });

  const contextVal = React.useMemo(() => {
    return { svgRef, canvasRef };
  }, []);

  return <InteractionsContext value={contextVal}>{children}</InteractionsContext>;
};

export const useInteractions = () => {
  return React.useContext(InteractionsContext);
};
