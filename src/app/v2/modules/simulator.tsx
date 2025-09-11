import { Breadcrumbs } from '@/app/v2/molecules/breadcrumbs';
import { CanvasV2 } from '@/app/v2/modules/canvas';
import { Sidebar } from './sidebar';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';
import { useSelectedSketchInfo } from '@/app/v2/modules/useSketch';
import { SketchDataProvider } from '@/app/v2/modules/useSketchData';

const SimulatorInner: FunctionComponentWithChildren = function () {
  console.log('R SimulatorInner');
  return (
    <SketchDataProvider>
      <div className="flex flex-grow flex-col">
        <div>
          <Breadcrumbs />
        </div>
        <div className="flex flex-grow">
          <CanvasV2 />
          <Sidebar />
        </div>
      </div>
    </SketchDataProvider>
  );
};

export const Simulator: FunctionComponentWithChildren = function () {
  const { selectedSketchUUID } = useSelectedSketchInfo();

  if (!selectedSketchUUID) {
    return <div>LOADING</div>;
  }

  return <SimulatorInner key={selectedSketchUUID} />;
};
