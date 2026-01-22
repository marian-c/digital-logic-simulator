import type { SketchWithSimulation } from '@/app/v4/types/data';
import type { BoxInfo } from '@/app/v4/types/innerSketchElementsInfo';
import { error } from '@/helpers/basics';

export function getBoxInfoByBoxId(boxId: number, data: SketchWithSimulation): BoxInfo {
  for (const info of data.elementsInfo.boxes) {
    if (info.boxId === boxId) {
      return info;
    }
  }
  error('getBoxInfoByBoxId: boxId not found');
}

export function getConnectorInfoById(connectorId: number, data: SketchWithSimulation) {
  for (const info of data.elementsInfo.connectors) {
    if (info.connectorId === connectorId) {
      return info;
    }
  }
  error('getConnectorInfoById: not found');
}

export function getInfosByBoxesIds(
  boxesIds: [number, number],
  data: SketchWithSimulation,
): [BoxInfo, BoxInfo];
export function getInfosByBoxesIds(boxesIds: number[], data: SketchWithSimulation): BoxInfo[] {
  const infos: BoxInfo[] = [];
  for (const info of data.elementsInfo.boxes) {
    if (boxesIds.includes(info.boxId)) {
      infos.push(info);
    }
    if (infos.length === boxesIds.length) {
      return infos.sort((a, b) => boxesIds.indexOf(a.boxId) - boxesIds.indexOf(b.boxId));
    }
  }
  error('getPositionsByBoxesIds: not all info found');
}
