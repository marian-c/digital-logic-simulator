import type { ConnectorData, SketchForStorage, SketchWithSimulation } from '@/app/v4/types/data';
import { getConnectorById } from '@/app/v4/data/getters/connector';
import { getBoxesByBoxesIds } from '@/app/v4/data/getters/box';
import { getConnectorInfoById, getInfosByBoxesIds } from '@/app/v4/data/getters/info';
import type {
  BoxElement,
  InputBoxElement,
  OutputBoxElement,
} from '@/app/v4/types/innerSketchStructure';

export function getConnectorData(connectorId: number, data: SketchWithSimulation): ConnectorData {
  const connector = getConnectorById(connectorId, data);
  const [fromBox, toBox] = getBoxesByBoxesIds([connector.fromBoxId, connector.toBoxId], data);
  const [fromBoxInfo, toBoxInfo] = getInfosByBoxesIds([fromBox.id, toBox.id], data);
  const connectorInfo = getConnectorInfoById(connectorId, data);

  return {
    connector,
    fromBox,
    toBox,
    fromBoxInfo,
    toBoxInfo,
    connectorInfo,
  };
}

// TODO: cood candidate to memoize_one -> memoize
export function getOrderedInputsAndOutputs(data: SketchForStorage) {
  const inputs: InputBoxElement[] = [];
  const outputs: OutputBoxElement[] = [];
  const infoCache = new Map<number, number>();
  for (const info of data.elementsInfo.boxes) {
    infoCache.set(info.boxId, info.pos.y);
  }
  for (const box of data.structure.boxes) {
    if (box.kind === 'input') {
      inputs.push(box);
    }
    if (box.kind === 'output') {
      outputs.push(box);
    }
  }
  const sorter = (a: BoxElement, b: BoxElement) => {
    return infoCache.get(a.id)! - infoCache.get(b.id)!;
  };
  inputs.sort(sorter);
  outputs.sort(sorter);
  return { inputs, outputs };
}
