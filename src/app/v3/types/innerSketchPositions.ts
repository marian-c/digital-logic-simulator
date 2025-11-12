export interface SketchBoxPosition {
  boxId: number;
  pos: {
    x: number;
    y: number;
  };
}

export interface InnerSketchPositions {
  boxPositions: SketchBoxPosition[];
  connectorBiases: {
    connectorId: number;
    bias: number;
  }[];
}
