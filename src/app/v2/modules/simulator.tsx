import { Header } from '@/app/v2/molecules/header';
import { CanvasV2 } from '@/app/v2/modules/canvas';
import { Sidebar } from './sidebar';
import { useLocalStorageCustom } from '@/hooks/useLocalStorage';
import { defaultExampleUUID, loadExampleSketch } from '@/app/v2/data/loadExample.';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import type { Sketch } from '@/app/v2/types/data';
import { localStorageGetItemInCollection } from '@/helpers/localStorage';
import { assertNever } from '@/helpers/basics';

// TODO: maybe get the sketch from the context
const SimulatorInner: FunctionComponentWithChildren<Sketch> = function ({
  // structure,
  meta,
  // positions,
  // inputs,
  // state,
}) {
  return (
    <div className="flex flex-grow flex-col">
      <div>
        <Header meta={meta} />
      </div>
      <div className="flex flex-grow">
        <CanvasV2 />
        <Sidebar />
      </div>
    </div>
  );
};

export const Simulator: FunctionComponentWithChildren<{ selectedSketchUUID?: string }> = function ({
  selectedSketchUUID,
}) {
  const selectedExample = useLocalStorageCustom(
    'selectedSketch',
    'default',
    { kind: 'empty' },
    { kind: 'example', uuid: defaultExampleUUID },
    selectedSketchUUID ?? defaultExampleUUID,
  );
  let sketch: Sketch | null = null;
  switch (selectedExample.kind) {
    case 'example':
      sketch = loadExampleSketch(selectedExample.uuid);
      break;
    case 'user':
      const userSketch = localStorageGetItemInCollection('userSketches', selectedExample.uuid);
      if (!userSketch) {
        throw new Error('user sketch not found');
      }
      sketch = userSketch;
      break;
    case 'empty':
      break;
    default:
      assertNever(selectedExample);
  }
  if (!sketch) {
    return <div>LOADING</div>;
  }

  return (
    <SimulatorInner
      key={selectedSketchUUID ?? defaultExampleUUID}
      structure={sketch.structure}
      meta={sketch.meta}
      positions={sketch.positions}
      inputs={sketch.inputs}
      state={sketch.state}
    />
  );
};
