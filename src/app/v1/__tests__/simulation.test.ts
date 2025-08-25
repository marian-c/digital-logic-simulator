import {
  addIds,
  type AndBoxElement,
  type BoxElement,
  type ConnectorElement,
  type CustomBoxElement,
  type InputBoxElement,
  type PlainConnectorElement,
} from '@/app/v1/types';
import { simulate } from '@/app/v1/simulation';

function prepare(data: { boxes: BoxElement[]; connectors: ConnectorElement[] }): CustomBoxElement {
  const nextId = 100000;
  const box: CustomBoxElement = addIds({
    nextId,
    title: '',
    theBox: {
      elementKind: 'box',
      boxKind: 'custom',
      pos: { x: 0, y: 0 },
      userLabel: '',
      id: 0,
      boxElements: data.boxes,
      connectorElements: data.connectors,
    },
  }).theBox;

  return box;
}

describe('Simulation', () => {
  test('very simple', () => {
    const result = simulate(prepare({ boxes: [], connectors: [] }));
    expect(result).toMatchInlineSnapshot(`
      {
        "boxElements": [],
        "boxKind": "custom",
        "connectorElements": [],
        "elementKind": "box",
        "id": 100000,
        "pos": {
          "x": 0,
          "y": 0,
        },
        "userLabel": "",
      }
    `);
  });

  test('just inputs', () => {
    const result = simulate(
      prepare({
        boxes: [
          {
            id: 0,
            elementKind: 'box',
            boxKind: 'input',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: false,
          } satisfies InputBoxElement,
        ],
        connectors: [],
      }),
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "boxElements": [
          {
            "boxKind": "input",
            "elementKind": "box",
            "id": 100001,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "state": false,
            "userLabel": "",
          },
        ],
        "boxKind": "custom",
        "connectorElements": [],
        "elementKind": "box",
        "id": 100000,
        "pos": {
          "x": 0,
          "y": 0,
        },
        "userLabel": "",
      }
    `);
  });
  test('just inputs - opposite', () => {
    const result = simulate(
      prepare({
        boxes: [
          {
            id: 0,
            elementKind: 'box',
            boxKind: 'input',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: true,
          } satisfies InputBoxElement,
        ],
        connectors: [],
      }),
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "boxElements": [
          {
            "boxKind": "input",
            "elementKind": "box",
            "id": 100001,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "state": true,
            "userLabel": "",
          },
        ],
        "boxKind": "custom",
        "connectorElements": [],
        "elementKind": "box",
        "id": 100000,
        "pos": {
          "x": 0,
          "y": 0,
        },
        "userLabel": "",
      }
    `);
  });

  test('simple and', () => {
    const result = simulate(
      prepare({
        boxes: [
          {
            id: 0,
            elementKind: 'box',
            boxKind: 'provided',
            providedKind: 'and',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: false,
          } satisfies AndBoxElement,
        ],
        connectors: [],
      }),
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "boxElements": [
          {
            "boxKind": "provided",
            "elementKind": "box",
            "id": 100001,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "providedKind": "and",
            "state": false,
            "userLabel": "",
          },
        ],
        "boxKind": "custom",
        "connectorElements": [],
        "elementKind": "box",
        "id": 100000,
        "pos": {
          "x": 0,
          "y": 0,
        },
        "userLabel": "",
      }
    `);
  });

  test('simple and - opposite', () => {
    const result = simulate(
      prepare({
        boxes: [
          {
            id: 0,
            elementKind: 'box',
            boxKind: 'provided',
            providedKind: 'and',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: true, // should turn to false
          } satisfies AndBoxElement,
        ],
        connectors: [],
      }),
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "boxElements": [
          {
            "boxKind": "provided",
            "elementKind": "box",
            "id": 100001,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "providedKind": "and",
            "state": false,
            "userLabel": "",
          },
        ],
        "boxKind": "custom",
        "connectorElements": [],
        "elementKind": "box",
        "id": 100000,
        "pos": {
          "x": 0,
          "y": 0,
        },
        "userLabel": "",
      }
    `);
  });

  test("Input and 'and' but not connected", () => {
    const result = simulate(
      prepare({
        boxes: [
          {
            id: 0,
            elementKind: 'box',
            boxKind: 'provided',
            providedKind: 'and',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: false,
          } satisfies AndBoxElement,
          {
            id: 0,
            elementKind: 'box',
            boxKind: 'input',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: false,
          } satisfies InputBoxElement,
        ],
        connectors: [],
      }),
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "boxElements": [
          {
            "boxKind": "provided",
            "elementKind": "box",
            "id": 100001,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "providedKind": "and",
            "state": false,
            "userLabel": "",
          },
          {
            "boxKind": "input",
            "elementKind": "box",
            "id": 100002,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "state": false,
            "userLabel": "",
          },
        ],
        "boxKind": "custom",
        "connectorElements": [],
        "elementKind": "box",
        "id": 100000,
        "pos": {
          "x": 0,
          "y": 0,
        },
        "userLabel": "",
      }
    `);
  });

  test("Input and 'and' connected and off", () => {
    const result = simulate(
      prepare({
        boxes: [
          {
            id: 1,
            elementKind: 'box',
            boxKind: 'provided',
            providedKind: 'and',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: false,
          } satisfies AndBoxElement,
          {
            id: 2,
            elementKind: 'box',
            boxKind: 'input',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: false,
          } satisfies InputBoxElement,
        ],
        connectors: [
          {
            id: 3,
            elementKind: 'connector',
            connectorKind: 'plain',
            startElementId: 1,
            endElementId: 2,
            startElementOutputId: 0,
            endElementInputId: 0,
            state: false,
          } satisfies PlainConnectorElement,
        ],
      }),
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "boxElements": [
          {
            "boxKind": "provided",
            "elementKind": "box",
            "id": 1,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "providedKind": "and",
            "state": false,
            "userLabel": "",
          },
          {
            "boxKind": "input",
            "elementKind": "box",
            "id": 2,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "state": false,
            "userLabel": "",
          },
        ],
        "boxKind": "custom",
        "connectorElements": [
          {
            "connectorKind": "plain",
            "elementKind": "connector",
            "endElementId": 2,
            "endElementInputId": 0,
            "id": 3,
            "startElementId": 1,
            "startElementOutputId": 0,
            "state": false,
          },
        ],
        "elementKind": "box",
        "id": 100000,
        "pos": {
          "x": 0,
          "y": 0,
        },
        "userLabel": "",
      }
    `);
  });

  test("Input and 'and' connected and on", () => {
    const result = simulate(
      prepare({
        boxes: [
          {
            id: 1,
            elementKind: 'box',
            boxKind: 'provided',
            providedKind: 'and',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: false,
          } satisfies AndBoxElement,
          {
            id: 2,
            elementKind: 'box',
            boxKind: 'input',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: true,
          } satisfies InputBoxElement,
          {
            id: 3,
            elementKind: 'box',
            boxKind: 'input',
            pos: { x: 0, y: 0 },
            userLabel: '',
            state: true,
          } satisfies InputBoxElement,
        ],
        connectors: [
          {
            id: 4,
            elementKind: 'connector',
            connectorKind: 'plain',
            startElementId: 2,
            endElementId: 1,
            startElementOutputId: 0,
            endElementInputId: 0,
            state: false,
          } satisfies PlainConnectorElement,
          {
            id: 4,
            elementKind: 'connector',
            connectorKind: 'plain',
            startElementId: 3,
            endElementId: 1,
            startElementOutputId: 0,
            endElementInputId: 1,
            state: false,
          } satisfies PlainConnectorElement,
        ],
      }),
    );
    expect(result).toMatchInlineSnapshot(`
      {
        "boxElements": [
          {
            "boxKind": "provided",
            "elementKind": "box",
            "id": 1,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "providedKind": "and",
            "state": true,
            "userLabel": "",
          },
          {
            "boxKind": "input",
            "elementKind": "box",
            "id": 2,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "state": true,
            "userLabel": "",
          },
          {
            "boxKind": "input",
            "elementKind": "box",
            "id": 3,
            "pos": {
              "x": 0,
              "y": 0,
            },
            "state": true,
            "userLabel": "",
          },
        ],
        "boxKind": "custom",
        "connectorElements": [
          {
            "connectorKind": "plain",
            "elementKind": "connector",
            "endElementId": 1,
            "endElementInputId": 0,
            "id": 4,
            "startElementId": 2,
            "startElementOutputId": 0,
            "state": false,
          },
          {
            "connectorKind": "plain",
            "elementKind": "connector",
            "endElementId": 1,
            "endElementInputId": 1,
            "id": 4,
            "startElementId": 3,
            "startElementOutputId": 0,
            "state": false,
          },
        ],
        "elementKind": "box",
        "id": 100000,
        "pos": {
          "x": 0,
          "y": 0,
        },
        "userLabel": "",
      }
    `);
  });
});
