import { Header } from '@/app/v2/molecules/header';
import { CanvasV2 } from '@/app/v2/modules/canvas';
import { Sidebar } from './sidebar';
import { useLocalStorageCustom } from '@/hooks/useLocalStorage';
import { defaultExampleName } from '@/app/v2/data/loadExampleNames';
import { type Example, loadExample } from '@/app/v2/data/loadExample.';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import type { Sketch } from '@/app/v2/types/data';

// TODO: maybe get the sketch from the context
const SimulatorInner: FunctionComponentWithChildren<{ sketch: Sketch }> = function ({ sketch }) {
  return (
    <div className="flex flex-grow flex-col">
      <div>
        <Header sketch={sketch} />
      </div>
      <div className="flex flex-grow">
        <CanvasV2 />

        <Sidebar />
      </div>
    </div>
  );
};

export function Simulator() {
  console.log('RENDER Simulator');
  // what is the data?
  const selectedExample = useLocalStorageCustom(
    'sketchSelection',
    'default',
    { kind: 'empty' },
    { kind: 'example', name: defaultExampleName },
  );
  let sketch: null | Example = null;
  switch (selectedExample.kind) {
    case 'example':
      sketch = loadExample(selectedExample.name);
      break;
    case 'user':
      throw new Error('not implemented yet');
    case 'empty':
      break;
  }
  if (!sketch) {
    return <div>LOADING</div>;
  }

  return <SimulatorInner sketch={sketch?.sketch ?? undefined} />;
}
