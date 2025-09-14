// actual sketch and box connections
export type SketchStructure = {
  todo: true;
};

export type SketchMeta = {
  uuid: string;
  isExample?: true;
  name: string;
  description: string;
};

// positions of boxes and what not
export type SketchPositions = {
  todo: true;
};

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
      todo: true,
    },
    meta: {
      uuid,
      name,
      description: '',
    },
    positions: { todo: true },
    inputs: { todo: true },
    simulation: { todo: true },
    state: { zoomFactor: 1 },
  };
}
