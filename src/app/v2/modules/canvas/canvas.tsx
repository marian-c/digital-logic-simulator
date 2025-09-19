'use client';
import React from 'react';
import { useSketchState } from '@/app/v2/modules/useSketchData';
import { useInteractions, useSize } from '@/app/v2/modules/interactions/provider';
import { Boxes } from '@/app/v2/modules/canvas/boxes';

const gridSize = 40;

function CanvasV2Inner() {
  return (
    <>
      {/*render connectors first because they would go over connection points, and we make use of mouseOver events
         for those points
      */}
      <Boxes />
    </>
  );
}

const CanvasV2InnerMemo = React.memo(CanvasV2Inner);

export function CanvasV2() {
  const { zoomFactor, panX, panY } = useSketchState();
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
          viewBox={`${panX} ${panY} ${size.width / zoomFactor} ${size.height / zoomFactor}`} // TODO: OPT: are css vars faster?
          className="select-none bg-white bg-grid absolute"
          style={{
            backgroundSize: `${gridSize * zoomFactor}px ${gridSize * zoomFactor}px`, // TODO: OPT: use vars, might be faster
            backgroundPositionX: `${-(panX * zoomFactor) - 0.5}px`,
            backgroundPositionY: `${-(panY * zoomFactor) - 0.5}px`,
          }}
        >
          <defs>
            <filter id="f1" width="" height="">
              <feOffset in="SourceAlpha" dx="0" dy="0" />
              <feGaussianBlur stdDeviation="2" />
              <feBlend in="SourceGraphic" in2="blurOut" />
            </filter>
            <filter id="f2" width="" height="">
              <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="orange" />
            </filter>
          </defs>
          <CanvasV2InnerMemo />
        </svg>
      </div>
      <div>Bottom bar</div>
    </div>
  );
}
