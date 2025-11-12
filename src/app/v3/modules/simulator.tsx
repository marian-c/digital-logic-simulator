import React from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { Sidebar } from './sidebar';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { CanvasV3 } from '@/app/v3/modules/canvas';
import { InteractionsProvider } from '@/app/v3/providers/interactions';

function SimulatorInnerInner() {
  // having this component separate makes the react devtools not freak out and show
  // correct render times; otherwise it shows the exaggerated render times
  return (
    <div className="flex flex-grow flex-col">
      <div>{/*<Breadcrumbs />*/}</div>
      <div className="flex flex-grow">
        <CanvasV3 />
        <Sidebar />
      </div>
    </div>
  );
}

const SimulatorInner: FunctionComponentWithChildren = function () {
  return (
    <InteractionsProvider>
      <SimulatorInnerInner />
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
