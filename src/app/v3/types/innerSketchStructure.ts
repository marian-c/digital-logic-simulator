export interface ConnectorElement {
  id: number;
  fromBoxId: number;
  toBoxId: number;
  fromPortId: number;
  toPortId: number;
}

export type BoxElementKind = 'and' | 'not' | 'input' | 'output';

export interface BoxElementBase {
  id: number;
  boxElementKind: BoxElementKind;
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
  // TODO: flatten if there only one element (main)
  main: {
    boxElements: BoxElement[];
    connectorElements: ConnectorElement[];
  };
}
