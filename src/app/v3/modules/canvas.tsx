'use client';
import React from 'react';
import { useInteractionsData, useInteractionsMethods } from '@/app/v3/providers/interactions';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { CanvasInner } from '@/app/v3/modules/canvas/inner';

const gridSize = 40;

export function CanvasV3() {
  const {
    state: { panY, panX, zoomFactor },
  } = getActiveSketch(useSketchStorageData());
  const { svgRef, canvasRef } = useInteractionsMethods();
  const { size } = useInteractionsData();
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
          <CanvasInner />
        </svg>
      </div>
      <div>Bottom bar</div>
    </div>
  );
}
