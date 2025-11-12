import type { DataV3, Sketch } from '@/app/v3/types/data';
import { meta as meta1 } from '@/app/v3/data/samples/x-1';
import { generateBoxCustomSketchesSupportData } from '@/app/v3/data/utils/generate';
import {
  actionRemoveMutateActiveBox,
  actionRemoveMutateActiveConnector,
} from '@/app/v3/data/utils/actions';

export const defaultExampleUUID = meta1.uuid;

export function generateEmptySketch({ name, uuid }: { name: string; uuid: string }): Sketch {
  return {
    structure: {
      main: {
        boxElements: [],
        connectorElements: [],
      },
    },
    meta: {
      nextId: 1,
      uuid,
      name,
      description: '',
    },
    positions: { boxPositions: [{ boxId: 0, pos: { x: 0, y: 0 } }], connectorBiases: [] },
    inputs: {
      inputsState: [],
    },
    simulation: { boxSimState: [], connectorSimState: [] },
    state: { zoomFactor: 1, panX: 0, panY: 0 },
    customSketchesSupportData: [],
  };
}

export function validateSketch(_sketch: Sketch): boolean {
  // TODO: implement this
  /**
   * all box elements have IDs;
   * nextId is bigger than the biggest existing id;
   * all IDs are unique;
   * focused element ID exists;
   * connector ids exist as boxes;
   * can't have multiple connectors coming into an input (possible when coming out of an output);
   * connector must start from an output and end at an input - in this order;
   * InnerSketchInputs must refer to valid inputs
   * attachedSketchesStuff exists for sketches with attached sketches
   *    - and have valid data
   * connectors from/to custom boxes must have valid port ids (ids of inputs/outputs of the custom box)
   */
  return true;
}

export function cleanupAllSketches(data: DataV3): DataV3 {
  data.sketches.forEach((sketch) => {
    sketch.customSketchesSupportData = [];
    sketch.structure.main.boxElements.forEach((boxElement) => {
      if (boxElement.kind !== 'custom') {
        return;
      }

      // only need to reference existing elements
      const sketchForCustom = data.sketches.find((s) => s.meta.uuid === boxElement.params.uuid);

      if (!sketchForCustom) {
        actionRemoveMutateActiveBox(boxElement.id, sketch);
      } else {
        const inputIds = sketchForCustom.structure.main.boxElements
          .filter((b) => b.kind === 'input')
          .map((b) => b.id);
        const outputIds = sketchForCustom.structure.main.boxElements
          .filter((b) => b.kind === 'output')
          .map((b) => b.id);

        sketch.structure.main.connectorElements.forEach((connectorElement) => {
          if (
            connectorElement.toBoxId === boxElement.id &&
            !inputIds.includes(connectorElement.toPortId)
          ) {
            console.log('invalid connector a', connectorElement);
            actionRemoveMutateActiveConnector(connectorElement.id, sketch);
          }
          if (
            connectorElement.fromBoxId === boxElement.id &&
            !outputIds.includes(connectorElement.fromPortId)
          ) {
            console.log('invalid connector b', connectorElement);
            actionRemoveMutateActiveConnector(connectorElement.id, sketch);
          }
        });
        const customForThis = generateBoxCustomSketchesSupportData(
          boxElement.id,
          boxElement.params.uuid,
          sketch,
          data,
        );
        sketch.customSketchesSupportData.push(customForThis);
      }
    });
  });
  return { ...data };
}
