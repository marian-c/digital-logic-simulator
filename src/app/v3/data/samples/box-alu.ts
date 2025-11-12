import type { Sketch } from '@/app/v3/types/data';

export const sketch: Sketch = {
  structure: {
    main: {
      boxElements: [
        {
          id: 1,
          kind: 'input',
          params: 'none',
        },
        {
          id: 2,
          kind: 'input',
          params: 'none',
        },
        {
          id: 3,
          kind: 'input',
          params: 'none',
        },
        {
          id: 4,
          kind: 'input',
          params: 'none',
        },
        {
          id: 5,
          kind: 'input',
          params: 'none',
        },
        {
          id: 6,
          kind: 'input',
          params: 'none',
        },
        {
          id: 7,
          kind: 'input',
          params: 'none',
        },
        {
          id: 8,
          kind: 'input',
          params: 'none',
        },
        {
          id: 9,
          kind: 'input',
          params: 'none',
        },
        {
          id: 10,
          kind: 'custom',
          params: {
            uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
          },
        },
        {
          id: 11,
          kind: 'custom',
          params: {
            uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
          },
        },
        {
          id: 12,
          kind: 'custom',
          params: {
            uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
          },
        },
        {
          id: 13,
          kind: 'custom',
          params: {
            uuid: '019a14ab-d0a8-77ef-bf6a-75dc38a57653',
          },
        },
        {
          id: 14,
          kind: 'custom',
          params: {
            uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
          },
        },
        {
          id: 32,
          kind: 'not',
          params: 'none',
        },
        {
          id: 33,
          kind: 'not',
          params: 'none',
        },
        {
          id: 34,
          kind: 'not',
          params: 'none',
        },
        {
          id: 35,
          kind: 'not',
          params: 'none',
        },
        {
          id: 36,
          kind: 'and',
          params: 'none',
        },
        {
          id: 37,
          kind: 'and',
          params: 'none',
        },
        {
          id: 38,
          kind: 'and',
          params: 'none',
        },
        {
          id: 49,
          kind: 'output',
          params: 'none',
        },
        {
          id: 51,
          kind: 'output',
          params: 'none',
        },
        {
          id: 53,
          kind: 'output',
          params: 'none',
        },
        {
          id: 55,
          kind: 'output',
          params: 'none',
        },
        {
          id: 56,
          kind: 'output',
          params: 'none',
        },
        {
          id: 57,
          kind: 'output',
          params: 'none',
        },
        {
          id: 58,
          kind: 'output',
          params: 'none',
        },
      ],
      connectorElements: [
        {
          id: 15,
          fromBoxId: 5,
          fromPortId: 0,
          toBoxId: 10,
          toPortId: 8,
        },
        {
          id: 16,
          fromBoxId: 6,
          fromPortId: 0,
          toBoxId: 11,
          toPortId: 8,
        },
        {
          id: 17,
          fromBoxId: 7,
          fromPortId: 0,
          toBoxId: 12,
          toPortId: 8,
        },
        {
          id: 18,
          fromBoxId: 8,
          fromPortId: 0,
          toBoxId: 14,
          toPortId: 8,
        },
        {
          id: 19,
          fromBoxId: 9,
          fromPortId: 0,
          toBoxId: 10,
          toPortId: 9,
        },
        {
          id: 20,
          fromBoxId: 9,
          fromPortId: 0,
          toBoxId: 11,
          toPortId: 9,
        },
        {
          id: 21,
          fromBoxId: 9,
          fromPortId: 0,
          toBoxId: 12,
          toPortId: 9,
        },
        {
          id: 22,
          fromBoxId: 9,
          fromPortId: 0,
          toBoxId: 14,
          toPortId: 9,
        },
        {
          id: 23,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 13,
          toPortId: 14,
        },
        {
          id: 24,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 13,
          toPortId: 15,
        },
        {
          id: 25,
          fromBoxId: 3,
          fromPortId: 0,
          toBoxId: 13,
          toPortId: 16,
        },
        {
          id: 26,
          fromBoxId: 4,
          fromPortId: 0,
          toBoxId: 13,
          toPortId: 17,
        },
        {
          id: 27,
          fromBoxId: 10,
          fromPortId: 6,
          toBoxId: 13,
          toPortId: 18,
        },
        {
          id: 28,
          fromBoxId: 11,
          fromPortId: 6,
          toBoxId: 13,
          toPortId: 19,
        },
        {
          id: 29,
          fromBoxId: 12,
          fromPortId: 6,
          toBoxId: 13,
          toPortId: 20,
        },
        {
          id: 30,
          fromBoxId: 14,
          fromPortId: 6,
          toBoxId: 13,
          toPortId: 21,
        },
        {
          id: 31,
          fromBoxId: 9,
          fromPortId: 0,
          toBoxId: 13,
          toPortId: 22,
        },
        {
          id: 39,
          fromBoxId: 13,
          fromPortId: 4,
          toBoxId: 32,
          toPortId: 0,
        },
        {
          id: 40,
          fromBoxId: 13,
          fromPortId: 5,
          toBoxId: 33,
          toPortId: 0,
        },
        {
          id: 41,
          fromBoxId: 13,
          fromPortId: 6,
          toBoxId: 34,
          toPortId: 0,
        },
        {
          id: 42,
          fromBoxId: 13,
          fromPortId: 7,
          toBoxId: 35,
          toPortId: 0,
        },
        {
          id: 43,
          fromBoxId: 32,
          fromPortId: 1,
          toBoxId: 36,
          toPortId: 0,
        },
        {
          id: 44,
          fromBoxId: 33,
          fromPortId: 1,
          toBoxId: 36,
          toPortId: 1,
        },
        {
          id: 45,
          fromBoxId: 34,
          fromPortId: 1,
          toBoxId: 37,
          toPortId: 1,
        },
        {
          id: 46,
          fromBoxId: 36,
          fromPortId: 2,
          toBoxId: 37,
          toPortId: 0,
        },
        {
          id: 47,
          fromBoxId: 35,
          fromPortId: 1,
          toBoxId: 38,
          toPortId: 1,
        },
        {
          id: 48,
          fromBoxId: 37,
          fromPortId: 2,
          toBoxId: 38,
          toPortId: 0,
        },
        {
          id: 50,
          fromBoxId: 38,
          fromPortId: 2,
          toBoxId: 49,
          toPortId: 0,
        },
        {
          id: 52,
          fromBoxId: 13,
          fromPortId: 4,
          toBoxId: 51,
          toPortId: 0,
        },
        {
          id: 54,
          fromBoxId: 13,
          fromPortId: 8,
          toBoxId: 53,
          toPortId: 0,
        },
        {
          id: 59,
          fromBoxId: 13,
          fromPortId: 4,
          toBoxId: 55,
          toPortId: 0,
        },
        {
          id: 60,
          fromBoxId: 13,
          fromPortId: 5,
          toBoxId: 56,
          toPortId: 0,
        },
        {
          id: 61,
          fromBoxId: 13,
          fromPortId: 6,
          toBoxId: 57,
          toPortId: 0,
        },
        {
          id: 62,
          fromBoxId: 13,
          fromPortId: 7,
          toBoxId: 58,
          toPortId: 0,
        },
      ],
    },
  },
  meta: {
    nextId: 63,
    uuid: '019a14c8-e0bb-775a-b2d8-632d15517a0b',
    name: 'ALU',
    description: '',
  },
  positions: {
    boxPositions: [
      {
        boxId: 0,
        pos: {
          x: 0,
          y: 0,
        },
      },
      {
        boxId: 1,
        pos: {
          x: 250,
          y: 30,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 250,
          y: 60,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 250,
          y: 90,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 250,
          y: 120,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 250,
          y: 170,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 250,
          y: 220,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 250,
          y: 270,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 250,
          y: 330,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 250,
          y: 380,
        },
      },
      {
        boxId: 10,
        pos: {
          x: 440,
          y: 160,
        },
      },
      {
        boxId: 11,
        pos: {
          x: 440,
          y: 210,
        },
      },
      {
        boxId: 12,
        pos: {
          x: 440,
          y: 260,
        },
      },
      {
        boxId: 13,
        pos: {
          x: 680,
          y: 70,
        },
      },
      {
        boxId: 14,
        pos: {
          x: 440,
          y: 320,
        },
      },
      {
        boxId: 32,
        pos: {
          x: 970,
          y: 280,
        },
      },
      {
        boxId: 33,
        pos: {
          x: 970,
          y: 310,
        },
      },
      {
        boxId: 34,
        pos: {
          x: 970,
          y: 340,
        },
      },
      {
        boxId: 35,
        pos: {
          x: 970,
          y: 370,
        },
      },
      {
        boxId: 36,
        pos: {
          x: 1100,
          y: 260,
        },
      },
      {
        boxId: 37,
        pos: {
          x: 1200,
          y: 300,
        },
      },
      {
        boxId: 38,
        pos: {
          x: 1270,
          y: 350,
        },
      },
      {
        boxId: 49,
        pos: {
          x: 1430,
          y: 300,
        },
      },
      {
        boxId: 51,
        pos: {
          x: 1430,
          y: 270,
        },
      },
      {
        boxId: 53,
        pos: {
          x: 1430,
          y: 240,
        },
      },
      {
        boxId: 55,
        pos: {
          x: 1430,
          y: 80,
        },
      },
      {
        boxId: 56,
        pos: {
          x: 1430,
          y: 120,
        },
      },
      {
        boxId: 57,
        pos: {
          x: 1430,
          y: 160,
        },
      },
      {
        boxId: 58,
        pos: {
          x: 1430,
          y: 200,
        },
      },
    ],
    connectorBiases: [
      {
        connectorId: 15,
        bias: 40,
      },
      {
        connectorId: 16,
        bias: 26,
      },
      {
        connectorId: 17,
        bias: 20,
      },
      {
        connectorId: 18,
        bias: 20,
      },
      {
        connectorId: 19,
        bias: 0,
      },
      {
        connectorId: 20,
        bias: 0,
      },
      {
        connectorId: 21,
        bias: 0,
      },
      {
        connectorId: 22,
        bias: 0,
      },
      {
        connectorId: 23,
        bias: 0,
      },
      {
        connectorId: 24,
        bias: 0,
      },
      {
        connectorId: 25,
        bias: 0,
      },
      {
        connectorId: 26,
        bias: 0,
      },
      {
        connectorId: 27,
        bias: -20,
      },
      {
        connectorId: 28,
        bias: -30,
      },
      {
        connectorId: 29,
        bias: -40,
      },
      {
        connectorId: 30,
        bias: -50,
      },
      {
        connectorId: 31,
        bias: -160,
      },
      {
        connectorId: 39,
        bias: -15,
      },
      {
        connectorId: 40,
        bias: 0,
      },
      {
        connectorId: 41,
        bias: 15,
      },
      {
        connectorId: 42,
        bias: 31,
      },
      {
        connectorId: 43,
        bias: 0,
      },
      {
        connectorId: 44,
        bias: 0,
      },
      {
        connectorId: 45,
        bias: 0,
      },
      {
        connectorId: 46,
        bias: 0,
      },
      {
        connectorId: 47,
        bias: 0,
      },
      {
        connectorId: 48,
        bias: 0,
      },
      {
        connectorId: 50,
        bias: 0,
      },
      {
        connectorId: 52,
        bias: -250,
      },
      {
        connectorId: 54,
        bias: 0,
      },
      {
        connectorId: 59,
        bias: 0,
      },
      {
        connectorId: 60,
        bias: 0,
      },
      {
        connectorId: 61,
        bias: 0,
      },
      {
        connectorId: 62,
        bias: 0,
      },
    ],
  },
  inputs: {
    inputsState: [
      {
        boxId: 1,
        state: true,
      },
      {
        boxId: 2,
        state: true,
      },
      {
        boxId: 3,
        state: true,
      },
      {
        boxId: 4,
        state: false,
      },
      {
        boxId: 5,
        state: true,
      },
      {
        boxId: 6,
        state: true,
      },
      {
        boxId: 7,
        state: false,
      },
      {
        boxId: 8,
        state: false,
      },
      {
        boxId: 9,
        state: false,
      },
    ],
  },
  simulation: {
    boxSimState: [
      {
        boxId: 1,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: true,
          },
        ],
      },
      {
        boxId: 2,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: true,
          },
        ],
      },
      {
        boxId: 3,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: true,
          },
        ],
      },
      {
        boxId: 4,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: false,
          },
        ],
      },
      {
        boxId: 5,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: true,
          },
        ],
      },
      {
        boxId: 9,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: false,
          },
        ],
      },
      {
        boxId: 10,
        simStatesInputs: [
          {
            portId: 8,
            state: true,
          },
          {
            portId: 9,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 6,
            state: true,
          },
        ],
      },
      {
        boxId: 6,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: true,
          },
        ],
      },
      {
        boxId: 11,
        simStatesInputs: [
          {
            portId: 8,
            state: true,
          },
          {
            portId: 9,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 6,
            state: true,
          },
        ],
      },
      {
        boxId: 7,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: false,
          },
        ],
      },
      {
        boxId: 12,
        simStatesInputs: [
          {
            portId: 8,
            state: false,
          },
          {
            portId: 9,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 6,
            state: false,
          },
        ],
      },
      {
        boxId: 8,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: false,
          },
        ],
      },
      {
        boxId: 14,
        simStatesInputs: [
          {
            portId: 8,
            state: false,
          },
          {
            portId: 9,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 6,
            state: false,
          },
        ],
      },
      {
        boxId: 13,
        simStatesInputs: [
          {
            portId: 14,
            state: true,
          },
          {
            portId: 15,
            state: true,
          },
          {
            portId: 16,
            state: true,
          },
          {
            portId: 17,
            state: false,
          },
          {
            portId: 18,
            state: true,
          },
          {
            portId: 19,
            state: true,
          },
          {
            portId: 20,
            state: false,
          },
          {
            portId: 21,
            state: false,
          },
          {
            portId: 22,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 4,
            state: true,
          },
          {
            portId: 5,
            state: false,
          },
          {
            portId: 6,
            state: true,
          },
          {
            portId: 7,
            state: false,
          },
          {
            portId: 8,
            state: true,
          },
        ],
      },
      {
        boxId: 32,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
        ],
        simStatesOutputs: [
          {
            portId: 1,
            state: false,
          },
        ],
      },
      {
        boxId: 33,
        simStatesInputs: [
          {
            portId: 0,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 1,
            state: true,
          },
        ],
      },
      {
        boxId: 36,
        simStatesInputs: [
          {
            portId: 0,
            state: false,
          },
          {
            portId: 1,
            state: true,
          },
        ],
        simStatesOutputs: [
          {
            portId: 2,
            state: false,
          },
        ],
      },
      {
        boxId: 34,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
        ],
        simStatesOutputs: [
          {
            portId: 1,
            state: false,
          },
        ],
      },
      {
        boxId: 37,
        simStatesInputs: [
          {
            portId: 0,
            state: false,
          },
          {
            portId: 1,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 2,
            state: false,
          },
        ],
      },
      {
        boxId: 35,
        simStatesInputs: [
          {
            portId: 0,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 1,
            state: true,
          },
        ],
      },
      {
        boxId: 38,
        simStatesInputs: [
          {
            portId: 0,
            state: false,
          },
          {
            portId: 1,
            state: true,
          },
        ],
        simStatesOutputs: [
          {
            portId: 2,
            state: false,
          },
        ],
      },
      {
        boxId: 49,
        simStatesInputs: [
          {
            portId: 0,
            state: false,
          },
        ],
        simStatesOutputs: [],
      },
      {
        boxId: 51,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
        ],
        simStatesOutputs: [],
      },
      {
        boxId: 53,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
        ],
        simStatesOutputs: [],
      },
      {
        boxId: 55,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
        ],
        simStatesOutputs: [],
      },
      {
        boxId: 56,
        simStatesInputs: [
          {
            portId: 0,
            state: false,
          },
        ],
        simStatesOutputs: [],
      },
      {
        boxId: 57,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
        ],
        simStatesOutputs: [],
      },
      {
        boxId: 58,
        simStatesInputs: [
          {
            portId: 0,
            state: false,
          },
        ],
        simStatesOutputs: [],
      },
    ],
    connectorSimState: [
      {
        connectorId: 23,
        state: true,
      },
      {
        connectorId: 24,
        state: true,
      },
      {
        connectorId: 25,
        state: true,
      },
      {
        connectorId: 26,
        state: false,
      },
      {
        connectorId: 15,
        state: true,
      },
      {
        connectorId: 19,
        state: false,
      },
      {
        connectorId: 20,
        state: false,
      },
      {
        connectorId: 21,
        state: false,
      },
      {
        connectorId: 22,
        state: false,
      },
      {
        connectorId: 31,
        state: false,
      },
      {
        connectorId: 27,
        state: true,
      },
      {
        connectorId: 16,
        state: true,
      },
      {
        connectorId: 28,
        state: true,
      },
      {
        connectorId: 17,
        state: false,
      },
      {
        connectorId: 29,
        state: false,
      },
      {
        connectorId: 18,
        state: false,
      },
      {
        connectorId: 30,
        state: false,
      },
      {
        connectorId: 39,
        state: true,
      },
      {
        connectorId: 52,
        state: true,
      },
      {
        connectorId: 59,
        state: true,
      },
      {
        connectorId: 40,
        state: false,
      },
      {
        connectorId: 60,
        state: false,
      },
      {
        connectorId: 41,
        state: true,
      },
      {
        connectorId: 61,
        state: true,
      },
      {
        connectorId: 42,
        state: false,
      },
      {
        connectorId: 62,
        state: false,
      },
      {
        connectorId: 54,
        state: true,
      },
      {
        connectorId: 43,
        state: false,
      },
      {
        connectorId: 44,
        state: true,
      },
      {
        connectorId: 46,
        state: false,
      },
      {
        connectorId: 45,
        state: false,
      },
      {
        connectorId: 48,
        state: false,
      },
      {
        connectorId: 47,
        state: true,
      },
      {
        connectorId: 50,
        state: false,
      },
    ],
  },
  state: {
    zoomFactor: 0.8430634527156756,
    panX: 265.7048263753073,
    panY: -18.37933284604577,
  },
  customSketchesSupportData: [],
};
