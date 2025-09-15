'use client';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import React from 'react';
import { useSketchState } from '@/app/v2/modules/useSketchData';
import { useInteractions } from '@/app/v2/modules/interactions/provider';

const gridSize = 40;

export function CanvasV2() {
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  // on first render this will be 0-0, and will render again
  const canvasRef = useElementLayoutWithRef<HTMLDivElement>((e) => {
    // XXX: this renders un-throttled, remains to be seen if this is a
    //  performance issue, and careful consideration of what work needs to be done for the size change
    //  alternatively, we can throttle this state change
    setSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height });
  });
  const { sketchState, setSketchState } = useSketchState();
  const { zoomFactor } = sketchState;
  const { svgRef } = useInteractions();
  return (
    <div className="flex flex-col flex-grow bg-zinc-200">
      <div ref={canvasRef} className="flex-grow relative border border-green-500">
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          className="select-none bg-white bg-grid absolute"
          style={{
            backgroundSize: `${gridSize * zoomFactor}px ${gridSize * zoomFactor}px`, // TODO: use vars, might be faster
            backgroundPositionX: '-0.5px',
            backgroundPositionY: '-0.5px',
          }}
        ></svg>
      </div>
      <div>
        Bottom bar (w: {size.width} h: {size.height})
      </div>
    </div>
  );
}
