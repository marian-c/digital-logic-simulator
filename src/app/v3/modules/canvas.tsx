'use client';
import React from 'react';
import { useInteractionsData, useInteractionsMethods } from '@/app/v3/providers/interactions';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { CanvasInner } from '@/app/v3/modules/canvas/inner';

const gridSize = 40;
const cn = 'border border-amber-700 cursor-pointer';

export function CanvasV3() {
  const {
    state: { panY, panX, zoomFactor },
  } = getActiveSketch(useSketchStorageData());
  const { svgRef, canvasRef, $onNewBoxMouseDown, $onNewBoxMouseUp } = useInteractionsMethods();
  const { size } = useInteractionsData();
  return (
    <div className="flex flex-col flex-grow bg-zinc-200 relative">
      {/*canvasRef and svgRef MUST overlap perfectly*/}
      <div ref={canvasRef} className="flex-grow relative overflow-hidden">
        <div className="bg-amber-500 absolute top-0 left-0 w-10 h-full z-20 select-none">
          <div
            className={cn}
            onMouseDown={() => {
              $onNewBoxMouseDown('input');
            }}
            onMouseUp={() => {
              $onNewBoxMouseUp('input');
            }}
          >
            Input
          </div>
          <div
            className={cn}
            onMouseDown={() => {
              $onNewBoxMouseDown('output');
            }}
            onMouseUp={() => {
              $onNewBoxMouseUp('output');
            }}
          >
            Output
          </div>
          <div
            className={cn}
            onMouseDown={() => {
              $onNewBoxMouseDown('not');
            }}
            onMouseUp={() => {
              $onNewBoxMouseUp('not');
            }}
          >
            Not
          </div>
          <div
            className={cn}
            onMouseDown={() => {
              $onNewBoxMouseDown('and');
            }}
            onMouseUp={() => {
              $onNewBoxMouseUp('and');
            }}
          >
            And
          </div>
        </div>
        <svg
          ref={svgRef}
          className="select-none bg-white bg-grid absolute top-0 left-0"
          width={size.width}
          height={size.height}
          viewBox={`${panX} ${panY} ${size.width / zoomFactor} ${size.height / zoomFactor}`} // TODO: OPT: are css vars faster?
          style={{
            backgroundSize: `${gridSize * zoomFactor}px ${gridSize * zoomFactor}px`, // TODO: OPT: use vars, might be faster
            backgroundPositionX: `${-(panX * zoomFactor) - 0.5}px`,
            backgroundPositionY: `${-(panY * zoomFactor) - 0.5}px`,
          }}
        >
          <defs>
            <filter id="f1">
              <feOffset in="SourceAlpha" dx="0" dy="0" />
              <feGaussianBlur stdDeviation="2" />
              <feBlend in="SourceGraphic" in2="blurOut" />
            </filter>
            <filter id="f2">
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
