import { Connectors } from '@/app/v4/modules/canvas/connectors';
import { Boxes } from '@/app/v4/modules/canvas/boxes';
import { FloatingConnector } from '@/app/v4/modules/canvas/floating-connector';

export function CanvasInner() {
  return (
    <>
      <Connectors />
      <Boxes />
      <FloatingConnector />
    </>
  );
}
