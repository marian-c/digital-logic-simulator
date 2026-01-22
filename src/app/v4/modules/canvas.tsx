import React from 'react';
import {
  useInteractionsData,
  useInteractionsMethods,
} from '@/app/v4/providers/interactionsProvider';
import {
  useSketchStorageFocusPath,
  useSketchStoragePanAndZoom,
} from '@/app/v4/providers/dataStorageProvider';
import { BottomBar } from '@/app/v4/modules/bottomBar';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { NewBoxes } from '@/app/v4/modules/new-boxes';
import { Busses } from '@/app/v4/modules/busses';

const gridSize = 40;

export const CanvasV4: FunctionComponentWithChildren = ({ children }) => {
  const { panX, panY, zoomFactor } = useSketchStoragePanAndZoom();
  const focusPath = useSketchStorageFocusPath();
  const { size } = useInteractionsData();
  const { canvasRef } = useInteractionsMethods();
  return (
    <div className="flex flex-col flex-grow bg-zinc-200 relative">
      {/*canvasRef and svg MUST overlap perfectly*/}
      <div ref={canvasRef} className="flex-grow relative" tabIndex={0}>
        {/* TODO: [perf] pass these in, they don't need to render when panning */}
        {focusPath.length === 0 && <NewBoxes />}
        {focusPath.length === 0 && <Busses />}
        <svg
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
              <feGaussianBlur stdDeviation="3" />
              <feBlend in="SourceGraphic" in2="blurOut" />
            </filter>
            <filter id="f2">
              <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="orange" />
            </filter>
          </defs>
          {children}
        </svg>
      </div>
      <BottomBar />
    </div>
  );
};
