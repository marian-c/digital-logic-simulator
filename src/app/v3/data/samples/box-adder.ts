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
          kind: 'custom',
          params: {
            uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
          },
        },
        {
          id: 5,
          kind: 'and',
          params: 'none',
        },
        {
          id: 6,
          kind: 'custom',
          params: {
            uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
          },
        },
        {
          id: 7,
          kind: 'and',
          params: 'none',
        },
        {
          id: 8,
          kind: 'custom',
          params: {
            uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
          },
        },
        {
          id: 9,
          kind: 'output',
          params: 'none',
        },
        {
          id: 10,
          kind: 'output',
          params: 'none',
        },
      ],
      connectorElements: [
        {
          id: 11,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 4,
          toPortId: 8,
        },
        {
          id: 13,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 4,
          toPortId: 9,
        },
        {
          id: 15,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 5,
          toPortId: 1,
        },
        {
          id: 16,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 5,
          toPortId: 0,
        },
        {
          id: 17,
          fromBoxId: 4,
          fromPortId: 6,
          toBoxId: 6,
          toPortId: 8,
        },
        {
          id: 18,
          fromBoxId: 3,
          fromPortId: 0,
          toBoxId: 6,
          toPortId: 9,
        },
        {
          id: 19,
          fromBoxId: 4,
          fromPortId: 6,
          toBoxId: 7,
          toPortId: 0,
        },
        {
          id: 20,
          fromBoxId: 3,
          fromPortId: 0,
          toBoxId: 7,
          toPortId: 1,
        },
        {
          id: 21,
          fromBoxId: 5,
          fromPortId: 2,
          toBoxId: 8,
          toPortId: 2,
        },
        {
          id: 22,
          fromBoxId: 7,
          fromPortId: 2,
          toBoxId: 8,
          toPortId: 1,
        },
        {
          id: 23,
          fromBoxId: 6,
          fromPortId: 6,
          toBoxId: 9,
          toPortId: 0,
        },
        {
          id: 24,
          fromBoxId: 8,
          fromPortId: 4,
          toBoxId: 10,
          toPortId: 0,
        },
      ],
    },
  },
  meta: {
    nextId: 25,
    uuid: '019a1295-bf4b-708e-a244-d666353ff74f',
    name: 'ADDER',
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
          x: 380,
          y: 90,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 380,
          y: 130,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 380,
          y: 170,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 530,
          y: 20,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 530,
          y: 200,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 840,
          y: 30,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 720,
          y: 140,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 940,
          y: 150,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 1160,
          y: 120,
        },
      },
      {
        boxId: 10,
        pos: {
          x: 1160,
          y: 170,
        },
      },
    ],
    connectorBiases: [
      {
        connectorId: 11,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 13,
        start: 0,
        end: 0,
        mid: -21,
      },
      {
        connectorId: 15,
        start: 0,
        end: 0,
        mid: -19,
      },
      {
        connectorId: 16,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 17,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 18,
        start: 0,
        end: 0,
        mid: 25,
      },
      {
        connectorId: 19,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 20,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 21,
        start: 0,
        end: 0,
        mid: -61,
      },
      {
        connectorId: 22,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 23,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 24,
        start: 0,
        end: 0,
        mid: -5,
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
        boxId: 4,
        simStatesInputs: [
          {
            portId: 8,
            state: true,
          },
          {
            portId: 9,
            state: true,
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
        boxId: 3,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: false,
          },
        ],
      },
      {
        boxId: 6,
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
        boxId: 9,
        simStatesInputs: [
          {
            portId: 0,
            state: false,
          },
        ],
        simStatesOutputs: [],
      },
      {
        boxId: 7,
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
        boxId: 5,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
          {
            portId: 1,
            state: true,
          },
        ],
        simStatesOutputs: [
          {
            portId: 2,
            state: true,
          },
        ],
      },
      {
        boxId: 8,
        simStatesInputs: [
          {
            portId: 1,
            state: false,
          },
          {
            portId: 2,
            state: true,
          },
        ],
        simStatesOutputs: [
          {
            portId: 4,
            state: true,
          },
        ],
      },
      {
        boxId: 10,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
        ],
        simStatesOutputs: [],
      },
    ],
    connectorSimState: [
      {
        connectorId: 11,
        state: true,
      },
      {
        connectorId: 16,
        state: true,
      },
      {
        connectorId: 13,
        state: true,
      },
      {
        connectorId: 15,
        state: true,
      },
      {
        connectorId: 17,
        state: false,
      },
      {
        connectorId: 19,
        state: false,
      },
      {
        connectorId: 18,
        state: false,
      },
      {
        connectorId: 20,
        state: false,
      },
      {
        connectorId: 23,
        state: false,
      },
      {
        connectorId: 22,
        state: false,
      },
      {
        connectorId: 21,
        state: true,
      },
      {
        connectorId: 24,
        state: true,
      },
    ],
  },
  state: {
    zoomFactor: 1,
    panX: -133,
    panY: -125,
  },
  customSketchesSupportData: [],
};
