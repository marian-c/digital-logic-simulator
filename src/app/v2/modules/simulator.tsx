import { Breadcrumbs } from '@/app/v2/molecules/breadcrumbs';
import { CanvasV2 } from '@/app/v2/modules/canvas';
import { Sidebar } from './sidebar';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';
import { useSelectedSketchInfo } from '@/app/v2/modules/useSketch';
import { SketchDataProvider } from '@/app/v2/modules/useSketchData';

const SimulatorInner: FunctionComponentWithChildren = function () {
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
  // const selectedExample = useLocalStorageCustom(
  //   'selectedSketch',
  //   'default',
  //   { kind: 'empty' },
  //   { kind: 'example', uuid: defaultExampleUUID },
  //   selectedSketchUUID ?? defaultExampleUUID,
  // );
  // let sketch: Sketch | null = null;
  // switch (selectedExample.kind) {
  //   case 'example':
  //     sketch = loadExampleSketch(selectedExample.uuid);
  //     break;
  //   case 'user':
  //     const userSketch = {
  //       structure: localStorageGetItemInCollectionOrThrow(
  //         'userSketchesStructure',
  //         selectedExample.uuid,
  //       ),
  //       meta: localStorageGetItemInCollectionOrThrow('userSketchesMeta', selectedExample.uuid),
  //       inputs: localStorageGetItemInCollectionOrThrow('userSketchesInputs', selectedExample.uuid),
  //       positions: localStorageGetItemInCollectionOrThrow(
  //         'userSketchesPositions',
  //         selectedExample.uuid,
  //       ),
  //       simulation: localStorageGetItemInCollectionOrThrow(
  //         'userSketchesSimulation',
  //         selectedExample.uuid,
  //       ),
  //       state: localStorageGetItemInCollectionOrThrow('userSketchesState', selectedExample.uuid),
  //     };
  //     if (!userSketch.inputs) {
  //       throw new Error('user sketch not found');
  //     }
  //     sketch = userSketch;
  //     break;
  //   case 'empty':
  //     break;
  //   default:
  //     assertNever(selectedExample);
  // }

  if (!selectedSketchUUID) {
    return <div>LOADING</div>;
  }

  return <SimulatorInner key={selectedSketchUUID} />;
};
