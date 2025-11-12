export interface SketchPosition {
  boxId: number;
  pos: {
    x: number;
    y: number;
  };
}

export interface InnerSketchPositions {
  positions: SketchPosition[];
}
