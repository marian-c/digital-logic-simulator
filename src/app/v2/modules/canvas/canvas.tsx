'use client';
import React from 'react';
import { useSketchState } from '@/app/v2/modules/useSketchData';
import { useInteractions, useSize } from '@/app/v2/modules/interactions/provider';
import { Boxes } from '@/app/v2/modules/canvas/boxes';

const gridSize = 40;

export function CanvasV2() {
  const { zoomFactor } = useSketchState();
  const { svgRef, canvasRef } = useInteractions();
  const size = useSize();
  return (
    <div className="flex flex-col flex-grow bg-zinc-200">
      {/*canvasRef and svgRef MUST overlap perfectly*/}
      <div ref={canvasRef} className="flex-grow relative overflow-hidden">
        <svg
          ref={svgRef}
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width / zoomFactor} ${size.height / zoomFactor}`}
          className="select-none bg-white bg-grid absolute"
          style={{
            backgroundSize: `${gridSize * zoomFactor}px ${gridSize * zoomFactor}px`, // TODO: OPT: use vars, might be faster
            backgroundPositionX: '-0.5px',
            backgroundPositionY: '-0.5px',
          }}
        >
          <Boxes />
        </svg>
      </div>
      <div>Bottom bar</div>
    </div>
  );
}
