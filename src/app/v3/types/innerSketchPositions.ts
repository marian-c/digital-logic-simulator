export interface SketchBoxPosition {
  boxId: number;
  pos: {
    x: number;
    y: number;
  };
}

export interface InnerSketchPositions {
  // TODO: flatten if there only one element
  boxPositions: SketchBoxPosition[];
}
