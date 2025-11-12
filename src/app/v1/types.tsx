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
export interface CustomBoxElement extends BoxElementBase {
  boxKind: 'custom';
  boxElements: BoxElement[];
  connectorElements: ConnectorElement[];
}
export interface InputBoxElement extends BoxElementBase {
  boxKind: 'input';
  // user can set this, false by default
  state: boolean;
}

interface OutputBoxElement extends BoxElementBase {
  boxKind: 'output';
  state: boolean;
}

interface NotBoxElement extends ProvidedBoxElementBase {
  boxKind: 'provided';
  providedKind: 'not';
  state: boolean;
}

export interface AndBoxElement extends ProvidedBoxElementBase {
  boxKind: 'provided';
  providedKind: 'and';
  state: boolean;
}

interface ConnectorElementBase extends BaseElement {
  elementKind: 'connector';
  connectorKind: 'smart' | 'plain';
  startElementId: number;
  endElementId: number;
  startElementOutputId: number;
  endElementInputId: number;
  state: boolean;
}

export interface SmartConnectorElement extends ConnectorElementBase {
  connectorKind: 'smart';
}
export interface PlainConnectorElement extends ConnectorElementBase {
  connectorKind: 'plain';
}

export type ProvidedBoxElement = NotBoxElement | AndBoxElement;
export type BoxElement = ProvidedBoxElement | CustomBoxElement | InputBoxElement | OutputBoxElement;
export type ConnectorElement = SmartConnectorElement | PlainConnectorElement;

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
  const inputId = nextId++;
  const outputId = nextId++;
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
          id: nextId++,
          elementKind: 'connector',
          connectorKind: 'plain',
          startElementId: inputId,
          endElementId: boxId1,
          startElementOutputId: 0,
          endElementInputId: 0,
          state: false,
        },
        {
          id: nextId++,
          elementKind: 'connector',
          connectorKind: 'plain',
          startElementId: boxId1,
          endElementId: boxId2,
          startElementOutputId: 0,
          endElementInputId: 0,
          state: false,
        } satisfies ConnectorElement,
        {
          id: nextId++,
          elementKind: 'connector',
          connectorKind: 'plain',
          startElementId: boxId1,
          endElementId: boxId3,
          startElementOutputId: 0,
          endElementInputId: 0,
          state: false,
        } satisfies ConnectorElement,
        {
          id: nextId++,
          elementKind: 'connector',
          connectorKind: 'plain',
          startElementId: boxId3,
          endElementId: outputId,
          startElementOutputId: 1,
          endElementInputId: 0,
          state: false,
        } satisfies ConnectorElement,
      ],
      boxElements: [
        {
          id: inputId,
          // TODO: change elementkind?
          elementKind: 'box',
          boxKind: 'input',
          userLabel: '',
          pos: {
            x: 120,
            y: 170,
          },
          state: false,
        },
        {
          id: 0,
          elementKind: 'box',
          boxKind: 'input',
          userLabel: '',
          pos: {
            x: 120,
            y: 270,
          },
          state: false,
        },
        {
          id: outputId,
          elementKind: 'box',
          boxKind: 'output',
          userLabel: '',
          pos: {
            x: 530,
            y: 240,
          },
          state: false,
        },
        {
          id: 0,
          elementKind: 'box',
          boxKind: 'provided',
          providedKind: 'not',
          userLabel: '',
          pos: {
            x: 200,
            y: 260,
          },
          state: false,
        },
        {
          id: boxId1,
          elementKind: 'box',
          boxKind: 'provided',
          providedKind: 'not',
          userLabel: '',
          pos: {
            x: 200,
            y: 230,
          },
          state: false,
        },
        {
          id: boxId2,
          elementKind: 'box',
          boxKind: 'provided',
          providedKind: 'not',
          userLabel: '',
          pos: {
            x: 300,
            y: 290,
          },
          state: false,
        },
        {
          id: boxId3,
          elementKind: 'box',
          boxKind: 'provided',
          providedKind: 'not',
          userLabel: '',
          pos: {
            x: 300,
            y: 180,
          },
          state: false,
        },
        ...Array.from({ length: 20 }).map(() => {
          return {
            id: nextId++,
            elementKind: 'box',
            boxKind: 'provided',
            providedKind: 'not',
            userLabel: '',
            pos: {
              x: 300,
              y: 180,
            },
            state: false,
          } as const;
        }),
      ],
    },
    nextId: nextId++,
  };

  return addIds(_sample);
}
