import type { InnerSketchStructure } from '@/app/v2/types/innerSketchStructure';
import type { InnerSketchPositions } from '@/app/v2/types/innerSketchPositions';

// actual sketch and box connections
export type SketchStructure = InnerSketchStructure;

export type SketchMeta = {
  uuid: string;
  nextId: number;
  isExample?: true;
  name: string;
  description: string;
};

// positions of boxes and what not
export type SketchPositions = InnerSketchPositions;

// state of the inputs and other interactive elements
export type SketchInputs = {
  todo: true;
};

// type of the data for calculated connector states
export type SketchSimulation = {
  todo: true;
};

// zoom and panning
export type SketchState = {
  zoomFactor: number;
  panX: number;
  panY: number;
  /**
   * @deprecated
   */
  focusedElementId: number | null;
};

export type Sketch = {
  structure: SketchStructure;
  meta: SketchMeta;
  positions: SketchPositions;
  inputs: SketchInputs;
  simulation: SketchSimulation;
  state: SketchState;
};

export function emptySketch({ name, uuid }: { name: string; uuid: string }): Sketch {
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
    positions: { positions: [{ boxId: 0, pos: { x: 0, y: 0 } }] },
    inputs: { todo: true },
    simulation: { todo: true },
    state: { zoomFactor: 1, panX: 0, panY: 0, focusedElementId: null },
  };
}

export function validateSketch(_sketch: Sketch): boolean {
  // TODO: implement this
  /**
   * all box elements have IDs
   * nextId is bigger than the biggest existing id
   * all IDs are unique
   * focused element ID exists
   */
  return true;
}
