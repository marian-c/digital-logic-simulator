'use client';
import React from 'react';
import { useSketchState } from '@/app/v2/modules/useSketchData';
import { useInteractions } from '@/app/v2/modules/interactions/provider';

const gridSize = 40;

export function CanvasV2() {
  const { zoomFactor } = useSketchState();
  const { svgRef, canvasRef } = useInteractions();

  return (
    <div className="flex flex-col flex-grow bg-zinc-200">
      {/*canvasRef and svgRef MUST overlap perfectly*/}
      <div ref={canvasRef} className="flex-grow relative">
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
      <div>Bottom bar</div>
    </div>
  );
}
