import type { DataV3, Sketch } from '@/app/v3/types/data';

export function getActiveSketch(data: DataV3) {
  // TODO: error handling
  return data.sketches.find((s) => s.meta.uuid === data.selectedSketchUuid)!;
}

export function getActiveBox(boxId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  // TODO: error handling
  return activeSketch.structure.main.boxElements.find((b) => b.id === boxId)!;
}

export function getActiveBoxPosition(boxId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  return getBoxPositionFromSketch(boxId, activeSketch);
}

export function getBoxPositionFromSketch(boxId: number, activeSketch: Sketch) {
  return activeSketch.positions.boxPositions.find((p) => p.boxId === boxId)!;
}
