// actual sketch and box connections
export type SketchStructure = {
  name: string;
  isExample: boolean;
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
export type SketchState = {
  todo: true;
};

export type Sketch = {
  structure: SketchStructure;
  positions: SketchPositions;
  inputs: SketchInputs;
  state: SketchState;
};
export function emptySketch({ name }: { name: string }): Sketch {
  return {
    structure: {
      name,
      isExample: false,
    },
    positions: { todo: true },
    inputs: { todo: true },
    state: { todo: true },
  };
}
