import type { PanAndZoomTree, SketchForStorage } from '@/app/v4/types/data';
import { assertNever } from '@/helpers/basics';
import {
  actionRemoveBoxByBoxId,
  actionRemoveConnectorByConnectorId,
  actionRemovePanAndZoomByBoxId,
} from '@/app/v4/data/action/action-structure-remove';

class FancyMap<K, V> {
  private map = new Map<K, V[]>();
  push(key: K, value: V) {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    this.map.get(key)!.push(value);
  }
  has(key: K, value: V) {
    return this.map.has(key) && this.map.get(key)!.includes(value);
  }
}

export function cleanupAllSketches(
  sketches: SketchForStorage[],
  panAndZoomCollection: Record<string, PanAndZoomTree>,
) {
  /**
   * These operations don't update all sketches, but potentially impact all of them
   * - in case a sketch has been deleted
   * - in case an input or an output has been deleted
   */
  const sketchUUIDs = new Set<string>();
  const inputsCache = new FancyMap<string, number>();
  const outputsCache = new FancyMap<string, number>();
  for (const sketch of sketches) {
    sketchUUIDs.add(sketch.uuid);
    for (const box of sketch.structure.boxes) {
      switch (box.kind) {
        case 'custom':
        case 'not':
        case 'and':
        case 'split':
        case 'join':
          break;
        case 'input':
          inputsCache.push(sketch.uuid, box.id);
          break;
        case 'output':
          outputsCache.push(sketch.uuid, box.id);
          break;
        default:
          assertNever(box);
      }
    }
  }

  for (const sketchIdx in sketches) {
    const sketch = sketches[sketchIdx]!;
    if (!sketch.meta.shouldSaveSimulation) {
      delete sketch.simulation;
    }
    // all custom boxes reference existing sketches
    let newSketch = sketch;
    const boxId2SketchUUID = new Map<number, string>();
    for (const box of sketch.structure.boxes) {
      if (box.kind !== 'custom') {
        continue;
      }

      if (!sketchUUIDs.has(box.p.uuid)) {
        const newSketchWithBoxRemoved = actionRemoveBoxByBoxId(box.id, newSketch);
        const newPanAndZoom = actionRemovePanAndZoomByBoxId(
          box.id,
          panAndZoomCollection[sketch.uuid]!,
        );
        newSketch = newSketchWithBoxRemoved;
        panAndZoomCollection[sketch.uuid] = newPanAndZoom;
      } else {
        boxId2SketchUUID.set(box.id, box.p.uuid);
      }
    }
    for (const connector of newSketch.structure.connectors) {
      const toSketchUUID = boxId2SketchUUID.get(connector.toBoxId);
      const fromSketchUUID = boxId2SketchUUID.get(connector.fromBoxId);

      if (
        (toSketchUUID && !inputsCache.has(toSketchUUID, connector.toPortId)) ||
        (fromSketchUUID && !outputsCache.has(fromSketchUUID, connector.fromPortId))
      ) {
        newSketch = actionRemoveConnectorByConnectorId(connector.id, newSketch);
      }
    }
    sketches[sketchIdx] = newSketch;
  }

  for (const pazKey in panAndZoomCollection) {
    if (!sketchUUIDs.has(pazKey)) {
      delete panAndZoomCollection[pazKey];
    }
  }
}
