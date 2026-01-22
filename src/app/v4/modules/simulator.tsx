import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { useSketchStorageData } from '@/app/v4/providers/dataStorageProvider';
import React from 'react';
import { InteractionsProvider } from '@/app/v4/providers/interactionsProvider';
import { Sidebar } from '@/app/v4/modules/sidebar';
import { CanvasV4 } from '@/app/v4/modules/canvas';
import { CanvasInner } from '@/app/v4/modules/canvas/inner';

function SimulatorInnerInner() {
  // having this component separate makes the react devtools not freak out and show
  // correct render times; otherwise it shows the exaggerated render times
  return (
    <div className="flex flex-grow flex-col">
      <div>{/*<Breadcrumbs />*/}</div>
      <div className="flex flex-grow">
        <CanvasV4>
          <CanvasInner />
        </CanvasV4>
        <Sidebar />
      </div>
    </div>
  );
}

function SimulatorInner() {
  return (
    <InteractionsProvider>
      <SimulatorInnerInner />
    </InteractionsProvider>
  );
}

export const Simulator: FunctionComponentWithChildren = function () {
  const sketch = useSketchStorageData();

  if (!sketch.uuid) {
    return <div>LOADING</div>;
  }

  return <SimulatorInner key={sketch.uuid} />;
};
