export interface ConnectorElement {
  id: number;
  label?: string;
  hideLabel?: boolean;
  fromBoxId: number;
  toBoxId: number;
  fromPortId: number;
  toPortId: number;
}

export type BoxElementKind = 'and' | 'not' | 'input' | 'output' | 'custom';

export type BoxParams =
  | ['and', undefined]
  | ['not', undefined]
  | ['input', undefined]
  | ['output', undefined]
  | ['custom', { uuid: string }];

export type BoxElement =
  | NotBoxElement
  | AndBoxElement
  | InputBoxElement
  | OutputBoxElement
  | CustomBoxElement;

export type KindToElement<Kind extends BoxElementKind = any> = Kind extends 'and'
  ? AndBoxElement
  : Kind extends 'not'
    ? NotBoxElement
    : Kind extends 'input'
      ? InputBoxElement
      : Kind extends 'output'
        ? OutputBoxElement
        : Kind extends 'custom'
          ? CustomBoxElement
          : never;

export interface BoxElementBase {
  id: number;
  label?: string;
  hideLabel?: boolean;
  kind: BoxElementKind;
  params: unknown;
}

export interface NotBoxElement extends BoxElementBase {
  kind: 'not';
  params: 'none';
}
export interface AndBoxElement extends BoxElementBase {
  kind: 'and';
  params: 'none';
}
export interface InputBoxElement extends BoxElementBase {
  kind: 'input';
  params: 'none';
}
export interface OutputBoxElement extends BoxElementBase {
  kind: 'output';
  params: 'none';
}

export interface CustomBoxElement extends BoxElementBase {
  kind: 'custom';
  params: {
    uuid: string;
  };
}

export interface InnerSketchStructure {
  // TODO: flatten if there only one element (main)
  main: {
    boxElements: BoxElement[];
    connectorElements: ConnectorElement[];
  };
}
