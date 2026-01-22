import type { SketchWithSimulation } from '@/app/v4/types/data';
import { error } from '@/helpers/basics';
import type { BoxSimulationState, ConnectorSimState } from '@/app/v4/types/innerSketchSimulation';

export function getBoxSimStateByBoxId(
  boxId: number,
  data: SketchWithSimulation,
): BoxSimulationState {
  for (const boxSimState of data.simulation.boxSimState) {
    if (boxSimState.boxId === boxId) {
      return boxSimState;
    }
  }
  error('getBoxSimStateByBoxId: boxSimState not found for boxId: ' + boxId + '');
}

export function getConnectorSimStateByConnectorId(
  connectorId: number,
  data: SketchWithSimulation,
): ConnectorSimState {
  for (const connectorSimState of data.simulation.connectorSimState) {
    if (connectorSimState.connectorId === connectorId) {
      return connectorSimState;
    }
  }
  error(
    'getConnectorSimStateByConnectorId: connectorSimState not found for connectorId: ' +
      connectorId +
      '',
  );
}
