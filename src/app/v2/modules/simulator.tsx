import { Header } from '@/app/v2/molecules/header';
import { CanvasV2 } from '@/app/v2/modules/canvas';
import { Sidebar } from './sidebar';
import { useLocalStorageCustom } from '@/hooks/useLocalStorage';
import { defaultExampleName } from '@/app/v2/data/loadExampleNames';
import { loadExampleSketch } from '@/app/v2/data/loadExample.';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import type { Sketch } from '@/app/v2/types/data';
import { localStorageGetItemInCollection } from '@/helpers/localStorage';
import { assertNever } from '@/helpers/basics';

// TODO: maybe get the sketch from the context
const SimulatorInner: FunctionComponentWithChildren<Sketch> = function ({
  structure,
  // positions,
  // inputs,
  // state,
}) {
  return (
    <div className="flex flex-grow flex-col">
      <div>
        <Header structure={structure} />
      </div>
      <div className="flex flex-grow">
        <CanvasV2 />
        <Sidebar />
      </div>
    </div>
  );
};

export const Simulator: FunctionComponentWithChildren<{ selectedSketchName?: string }> = function ({
  selectedSketchName,
}) {
  const selectedExample = useLocalStorageCustom(
    'selectedSketch',
    'default',
    { kind: 'empty' },
    { kind: 'example', name: defaultExampleName },
    selectedSketchName ?? defaultExampleName,
  );
  let sketch: Sketch | null = null;
  switch (selectedExample.kind) {
    case 'example':
      sketch = loadExampleSketch(selectedExample.name);
      break;
    case 'user':
      const userSketch = localStorageGetItemInCollection('userSketches', selectedExample.name);
      if (!userSketch) {
        throw new Error('user not found');
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
      key={selectedSketchName ?? defaultExampleName}
      structure={sketch.structure}
      positions={sketch.positions}
      inputs={sketch.inputs}
      state={sketch.state}
    />
  );
};
