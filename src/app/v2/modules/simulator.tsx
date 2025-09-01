import { Header } from '@/app/v2/molecules/header';
import { CanvasV2 } from '@/app/v2/modules/canvas';
import { Sidebar } from './sidebar';

function SimulatorInner() {
  // control the loading process
  return (
    <div className="flex-grow flex flex-col">
      <div>
        <Header />
      </div>
      <div className="flex-grow flex">
        <CanvasV2 />

        <Sidebar />
      </div>
    </div>
  );
}

export function Simulator() {
  return <SimulatorInner />;
}
