import React from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { Sidebar } from './sidebar';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { Breadcrumbs } from '@/app/v3/modules/breadcrumbs';
import { CanvasV3 } from '@/app/v3/modules/canvas';
import { InteractionsProvider } from '@/app/v3/providers/interactions';

const SimulatorInner: FunctionComponentWithChildren = function () {
  console.log('R SimulatorInner');
  return (
    <InteractionsProvider>
      <div className="flex flex-grow flex-col">
        <div>
          <Breadcrumbs />
        </div>
        <div className="flex flex-grow">
          <CanvasV3 />
          <Sidebar />
        </div>
      </div>
    </InteractionsProvider>
  );
};

export const Simulator: FunctionComponentWithChildren = function () {
  const { selectedSketchUuid } = useSketchStorageData();

  if (!selectedSketchUuid) {
    return <div>LOADING</div>;
  }

  return <SimulatorInner key={selectedSketchUuid} />;
};
