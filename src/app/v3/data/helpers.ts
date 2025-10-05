import type { Sketch } from '@/app/v3/types/data';
import { meta as meta1 } from '@/app/v3/data/samples/x-1';

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
    positions: { boxPositions: [{ boxId: 0, pos: { x: 0, y: 0 } }] },
    inputs: { todo: true },
    simulation: { todo: true },
    state: { zoomFactor: 1, panX: 0, panY: 0 },
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
   * connector must start from an output and end at an input;
   */
  return true;
}
