import { assertNever } from '@/helpers/basics';
import type { DataV3 } from '@/app/v3/types/data';
import type { SimulationInput } from '@/app/v3/data/utils/simulate/types';

export function getUpstreamBox(
  downstreamBoxId: number,
  downstreamPortNumber: number,
  simulationData: SimulationInput,
) {
  // XXX structure assumption
  const connector = simulationData.structure.main.connectorElements.find(function (connector) {
    return connector.toBoxId === downstreamBoxId && connector.toPortId === downstreamPortNumber;
  });
  if (connector) {
    const foundBox = simulationData.structure.main.boxElements.find(function (boxElement) {
      return boxElement.id === connector.fromBoxId;
    });
    if (foundBox) {
      return [foundBox, connector] as const;
    }
  }
  return undefined;
}

export function hasConnectorOut(
  boxElementId: number,
  simulationData: SimulationInput,
  _data: DataV3,
) {
  return simulationData.structure.main.connectorElements.some(function (connector) {
    return connector.fromBoxId === boxElementId;
  });
}

export function getElementsWithoutOutput(simulationData: SimulationInput, data: DataV3) {
  return simulationData.structure.main.boxElements.filter(function (boxElement) {
    switch (boxElement.kind) {
      case 'not':
        return !hasConnectorOut(boxElement.id, simulationData, data);
      case 'input':
        return !hasConnectorOut(boxElement.id, simulationData, data);
      case 'and':
        return !hasConnectorOut(boxElement.id, simulationData, data);
      case 'custom':
        return !hasConnectorOut(boxElement.id, simulationData, data);
      case 'output':
        return true;
      default:
        assertNever(boxElement);
    }
  });
}
