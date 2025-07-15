interface BaseElement {
  elementKind: 'box' | 'connector';
  id: number;
  pos: {
    x: number;
    y: number;
  };
}

interface BoxElementBase extends BaseElement {
  elementKind: 'box';
  boxKind: 'provided' | 'custom';
  userLabel: string;
}

interface ProvidedBoxElementBase extends BoxElementBase {
  boxKind: 'provided';
  providedKind: 'not' | 'and';
}
interface CustomBoxElement extends BoxElementBase {
  boxKind: 'custom';
  elements: Elem[];
}

interface NotBoxElement extends ProvidedBoxElementBase {
  boxKind: 'provided';
  providedKind: 'not';
}

interface AndBoxElement extends ProvidedBoxElementBase {
  boxKind: 'provided';
  providedKind: 'and';
}

interface ConnectorElementBase extends BaseElement {
  elementKind: 'connector';
  connectorKind: 'smart' | 'plain';
}

interface SmartConnectorElement extends ConnectorElementBase {
  connectorKind: 'smart';
}
interface PlainConnectorElement extends ConnectorElementBase {
  connectorKind: 'plain';
}

type ConnectorElement = SmartConnectorElement | PlainConnectorElement;
type ProvidedBoxElement = NotBoxElement | AndBoxElement;
type BoxElement = ProvidedBoxElement | CustomBoxElement;
type Elem = BoxElement | ConnectorElement;

export interface Sketch {
  title: string;
  nextId: number;
  theBox: CustomBoxElement;
}

/**
 * MUTATES
 */
export const addIds = (sketch: Sketch): Sketch => {
  let id = sketch.nextId;
  if (!sketch.theBox.id) {
    sketch.theBox.id = id++;
  }
  sketch.theBox.elements.forEach(function handleElement(e) {
    if (!e.id) {
      e.id = id++;
    }
    if (e.elementKind === 'box' && e.boxKind === 'custom') {
      e.elements.forEach(handleElement);
    }
    return e;
  });
  sketch.nextId = id;
  return sketch;
};

export function getSample(): Sketch {
  let nextId = 1;
  const boxId1 = nextId++;
  const boxId2 = nextId++;
  const _sample: Sketch = {
    title: 'Sample',
    theBox: {
      id: 0,
      elementKind: 'box',
      boxKind: 'custom',
      userLabel: 'The sketch',
      pos: {
        x: 0,
        y: 0,
      },
      elements: [
        {
          id: boxId1,
          elementKind: 'box',
          boxKind: 'provided',
          providedKind: 'not',
          userLabel: 'first',
          pos: {
            x: 0,
            y: 0,
          },
        },
        {
          id: boxId2,
          elementKind: 'box',
          boxKind: 'provided',
          providedKind: 'not',
          userLabel: 'second',
          pos: {
            x: 400,
            y: 300,
          },
        },
        {
          id: 0,
          elementKind: 'box',
          boxKind: 'provided',
          providedKind: 'not',
          userLabel: 'third',
          pos: {
            x: 795,
            y: 595,
          },
        },
      ],
    },
    nextId: nextId++,
  };

  return addIds(_sample);
}
