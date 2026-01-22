import type { PortKind } from '@/app/v4/types/other';
import type { SketchWithSimulation } from '@/app/v4/types/data';
import { assertNever } from '@/helpers/basics';

export function getDecideActiveIsPortDraggable(
  portId: number,
  portKind: PortKind,
  boxId: number,
  data: SketchWithSimulation,
) {
  switch (portKind) {
    case 'inputPort':
      for (const c of data.structure.connectors) {
        if (c.toBoxId === boxId && c.toPortId === portId) {
          return false;
        }
      }
      return true;
    case 'outputPort':
      return true;
    default:
      assertNever(portKind);
  }
}
