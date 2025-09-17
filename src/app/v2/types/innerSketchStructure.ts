export interface ConnectorElement {
  id: number;
}

interface BoxElementBase {
  id: number;
  boxElementKind: 'custom' | 'nonCustom';
}

export interface NonCustomBoxElement extends BoxElementBase {
  boxElementKind: 'nonCustom';
  nonCustomElementKind: 'and' | 'not' | 'input' | 'output';
}

export interface CustomBoxElementCommon {
  boxElements: BoxElement[];
  connectorElements: ConnectorElement[];
}

export interface CustomBoxElementReduced extends CustomBoxElementCommon {
  onlyWhenIsMainTODO: true; // TODO: remove this
}

export interface CustomBoxElementFull extends CustomBoxElementCommon, BoxElementBase {
  boxElementKind: 'custom';
}

export type BoxElement = CustomBoxElementFull | NonCustomBoxElement;

export interface InnerSketchStructure {
  main: CustomBoxElementReduced;
}
