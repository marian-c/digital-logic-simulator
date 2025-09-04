import { Header } from '@/app/v2/molecules/header';
import { CanvasV2 } from '@/app/v2/modules/canvas';
import { Sidebar } from './sidebar';
import {
  useLocalStorageCustom,
  useLocalStorageItemInCollectionInitialNoFirstMount,
} from '@/hooks/useLocalStorage';
import { defaultExampleName } from '@/app/v2/data/loadExamples';

function SimulatorInner() {
  // control the loading process
  return (
    <div className="flex flex-grow flex-col">
      <div>
        <Header />
      </div>
      <div className="flex flex-grow">
        <CanvasV2 />

        <Sidebar />
      </div>
    </div>
  );
}

export function Simulator() {
  console.log('RENDER Simulator');
  // what is the data?
  const selectedExample = useLocalStorageCustom(
    'sketchSelection',
    'default',
    { kind: 'empty' },
    { kind: 'example', name: defaultExampleName },
  );
  console.log('selectedExample', selectedExample);
  return <SimulatorInner />;
}
