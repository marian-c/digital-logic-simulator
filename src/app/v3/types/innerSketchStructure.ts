export interface ConnectorElement {
  id: number;
}

export interface BoxElementBase {
  id: number;
  boxElementKind: 'and' | 'not' | 'input' | 'output';
}

export interface NotBoxElement extends BoxElementBase {
  boxElementKind: 'not';
}
export interface AndBoxElement extends BoxElementBase {
  boxElementKind: 'and';
}
export interface InputBoxElement extends BoxElementBase {
  boxElementKind: 'input';
}
export interface OutputBoxElement extends BoxElementBase {
  boxElementKind: 'output';
}

export type BoxElement = NotBoxElement | AndBoxElement | InputBoxElement | OutputBoxElement;

export interface InnerSketchStructure {
  main: {
    boxElements: BoxElement[];
    connectorElements: ConnectorElement[];
  };
}
