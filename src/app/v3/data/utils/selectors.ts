import type { DataV3, Sketch } from '@/app/v3/types/data';
import type { ConnectorElement } from '@/app/v3/types/innerSketchStructure';

export function getActiveSketch(data: DataV3) {
  // TODO: error handling
  return data.sketches.find((s) => s.meta.uuid === data.selectedSketchUuid)!;
}

export function getBoxById(boxId: number, activeSketch: Sketch) {
  return activeSketch.structure.main.boxElements.find((b) => b.id === boxId)!;
}

export function getActiveBox(boxId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  return getBoxById(boxId, activeSketch);
}

export function getActiveBoxPosition(boxId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  return getBoxPositionById(boxId, activeSketch);
}

export function getBoxPositionById(boxId: number, activeSketch: Sketch) {
  return activeSketch.positions.boxPositions.find((p) => p.boxId === boxId)!;
}

export function getActiveConnectorData(connectorElement: ConnectorElement, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  const fromBox = getBoxById(connectorElement.fromBoxId, activeSketch);
  const fromBoxPosition = getBoxPositionById(connectorElement.fromBoxId, activeSketch);
  const toBox = getBoxById(connectorElement.toBoxId, activeSketch);
  const toBoxPosition = getBoxPositionById(connectorElement.toBoxId, activeSketch);
  return {
    fromBox,
    fromBoxPosition,
    toBox,
    toBoxPosition,
  };
}
