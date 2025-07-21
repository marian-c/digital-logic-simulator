interface BaseElement {
  elementKind: 'box' | 'connector'; // this is not that useful anymore
  id: number;
}

interface BoxElementBase extends BaseElement {
  elementKind: 'box';
  boxKind: 'provided' | 'custom' | 'input' | 'output';
  userLabel: string;
  pos: {
    x: number;
    y: number;
  };
}

interface ProvidedBoxElementBase extends BoxElementBase {
  boxKind: 'provided';
  providedKind: 'not' | 'and';
}
interface CustomBoxElement extends BoxElementBase {
  boxKind: 'custom';
  boxElements: BoxElement[];
  connectorElements: ConnectorElement[];
}
interface InputBoxElement extends BoxElementBase {
  boxKind: 'input';
}

interface OutputBoxElement extends BoxElementBase {
  boxKind: 'output';
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
  startElementId: number;
  endElementId: number;
  startElementOutputId: number;
  endElementInputId: number;
}

interface SmartConnectorElement extends ConnectorElementBase {
  connectorKind: 'smart';
}
interface PlainConnectorElement extends ConnectorElementBase {
  connectorKind: 'plain';
}

type ProvidedBoxElement = NotBoxElement | AndBoxElement;
type BoxElement = ProvidedBoxElement | CustomBoxElement | InputBoxElement | OutputBoxElement;
type ConnectorElement = SmartConnectorElement | PlainConnectorElement;

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
  [...sketch.theBox.boxElements, ...sketch.theBox.connectorElements].forEach(
    function handleElement(e) {
      if (!e.id) {
        e.id = id++;
      }
      if (e.elementKind === 'box' && e.boxKind === 'custom') {
        e.boxElements.forEach(handleElement);
      }
      return e;
    },
  );
  sketch.nextId = id;
  return sketch;
};

export function getSample(): Sketch {
  let nextId = 1;
  const boxId1 = nextId++;
  const boxId2 = nextId++;
  const boxId3 = nextId++;
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
      connectorElements: [
        {
          id: 0,
          elementKind: 'connector',
          connectorKind: 'plain',
          startElementId: boxId1,
          endElementId: boxId2,
          startElementOutputId: 0,
          endElementInputId: 0,
        } satisfies ConnectorElement,
        {
          id: 0,
          elementKind: 'connector',
          connectorKind: 'plain',
          startElementId: boxId1,
          endElementId: boxId3,
          startElementOutputId: 0,
          endElementInputId: 0,
        } satisfies ConnectorElement,
      ],
      boxElements: [
        // {
        //   id: 0,
        //   elementKind: 'box',
        //   boxKind: 'input',
        //   userLabel: '',
        //   pos: {
        //     x: 0,
        //     y: 0,
        //   },
        // },
        {
          id: boxId1,
          elementKind: 'box',
          boxKind: 'provided',
          providedKind: 'not',
          userLabel: '',
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
          userLabel: '',
          pos: {
            x: 500,
            y: 500,
          },
        },
        {
          id: boxId3,
          elementKind: 'box',
          boxKind: 'provided',
          providedKind: 'not',
          userLabel: '',
          pos: {
            x: 40,
            y: 40,
          },
        },
      ],
    },
    nextId: nextId++,
  };

  return addIds(_sample);
}
