import type { NumWires, NumWiresMulti } from '@/app/v4/types/other';

export interface ConnectorElement {
  id: number;
  fromBoxId: number;
  toBoxId: number;
  fromPortId: number;
  toPortId: number;
  p: {
    numWires: NumWires;
  };
}

export type BoxElementKind = 'and' | 'not' | 'input' | 'output' | 'split' | 'join' | 'custom';

export type BoxParams =
  | ['and', 0]
  | ['not', 0]
  | ['input', { numWires: NumWires }]
  | ['output', { numWires: NumWires }]
  | ['split', { fromNumWires: NumWiresMulti }]
  | ['join', { toNumWires: NumWiresMulti }]
  | ['custom', { uuid: string }];

export type BoxElement =
  | NotBoxElement
  | AndBoxElement
  | InputBoxElement
  | OutputBoxElement
  | SplitBoxElement
  | JoinBoxElement
  | CustomBoxElement;

export type KindToElement<Kind extends BoxElementKind = any> = Kind extends 'and'
  ? AndBoxElement
  : Kind extends 'not'
    ? NotBoxElement
    : Kind extends 'input'
      ? InputBoxElement
      : Kind extends 'output'
        ? OutputBoxElement
        : Kind extends 'split'
          ? SplitBoxElement
          : Kind extends 'join'
            ? JoinBoxElement
            : Kind extends 'custom'
              ? CustomBoxElement
              : never;

export interface BoxElementBase {
  id: number;
  kind: BoxElementKind;
  p: unknown;
}

export interface NotBoxElement extends BoxElementBase {
  kind: 'not';
  p: 0;
}
export interface AndBoxElement extends BoxElementBase {
  kind: 'and';
  p: 0;
}
export interface InputBoxElement extends BoxElementBase {
  kind: 'input';
  p: {
    numWires: NumWires;
  };
}
export interface OutputBoxElement extends BoxElementBase {
  kind: 'output';
  p: {
    numWires: NumWires;
  };
}
export interface SplitBoxElement extends BoxElementBase {
  kind: 'split';
  p: {
    fromNumWires: NumWiresMulti;
  };
}
export interface JoinBoxElement extends BoxElementBase {
  kind: 'join';
  p: {
    toNumWires: NumWiresMulti;
  };
}

export interface CustomBoxElement extends BoxElementBase {
  kind: 'custom';
  p: {
    uuid: string;
  };
}

export interface SketchStructure {
  boxes: BoxElement[];
  connectors: ConnectorElement[];
  extra: {
    nextId: number;
  };
}

export type ElementType = 'boxes' | 'connectors';
