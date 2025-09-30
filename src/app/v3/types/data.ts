import type { InnerSketchStructure } from '@/app/v3/types/innerSketchStructure';
import type { InnerSketchPositions } from '@/app/v3/types/innerSketchPositions';

// actual sketch and box connections
export type SketchStructure = InnerSketchStructure;

export type SketchMeta = {
  uuid: string;
  nextId: number;
  isExample?: true;
  isChip?: true;
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
};

export type Sketch = {
  structure: SketchStructure;
  meta: SketchMeta;
  positions: SketchPositions;
  inputs: SketchInputs;
  simulation: SketchSimulation;
  state: SketchState;
};

export type DataV3 = {
  sketches: Sketch[];
  selectedSketchUuid: string;
};
