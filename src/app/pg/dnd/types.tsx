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

interface ConnectorElement extends BaseElement {
  elementKind: 'connector';
}

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
  let id = 1;
  sketch.theBox.id = id++;
  sketch.theBox.elements.forEach(function handleElement(e) {
    e.id = id++;
    if (e.elementKind === 'box' && e.boxKind === 'custom') {
      e.elements.forEach(handleElement);
    }
    return e;
  });
  sketch.nextId = id;
  return sketch;
};

export function getSample(): Sketch {
  const _sample: Sketch = {
    title: 'Sample',
    nextId: 0,
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
          id: 0,
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
          id: 0,
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
  };

  return addIds(_sample);
}
