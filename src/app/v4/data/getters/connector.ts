import type { SketchWithSimulation } from '@/app/v4/types/data';
import { error } from '@/helpers/basics';

export function getConnectorById(connectorId: number, data: SketchWithSimulation) {
  for (const connector of data.structure.connectors) {
    if (connector.id === connectorId) {
      return connector;
    }
  }
  error('getConnectorById: connector not found');
}
