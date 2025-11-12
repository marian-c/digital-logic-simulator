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
          kind: 'custom',
          params: {
            uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
          },
        },
        {
          id: 4,
          kind: 'output',
          params: 'none',
        },
        {
          id: 6,
          kind: 'not',
          params: 'none',
        },
        {
          id: 7,
          kind: 'not',
          params: 'none',
        },
      ],
      connectorElements: [
        {
          id: 5,
          fromBoxId: 3,
          fromPortId: 9,
          toBoxId: 4,
          toPortId: 0,
        },
        {
          id: 8,
          fromBoxId: 7,
          fromPortId: 1,
          toBoxId: 3,
          toPortId: 6,
        },
        {
          id: 9,
          fromBoxId: 6,
          fromPortId: 1,
          toBoxId: 3,
          toPortId: 4,
        },
        {
          id: 10,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 6,
          toPortId: 0,
        },
        {
          id: 11,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 7,
          toPortId: 0,
        },
      ],
    },
  },
  meta: {
    nextId: 12,
    uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
    name: 'OR',
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
          x: 330,
          y: 110,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 330,
          y: 170,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 620,
          y: 120,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 880,
          y: 140,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 460,
          y: 60,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 460,
          y: 180,
        },
      },
    ],
    connectorBiases: [
      { connectorId: 5, start: 0, end: 0, mid: 0 },
      { connectorId: 8, start: 0, end: 0, mid: 0 },
      { connectorId: 9, start: 0, end: 0, mid: 0 },
      { connectorId: 10, start: 0, end: 0, mid: 0 },
      { connectorId: 11, start: 0, end: 0, mid: 0 },
    ],
  },
  inputs: {
    inputsState: [
      {
        boxId: 1,
        state: false,
      },
      {
        boxId: 2,
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
            state: false,
          },
        ],
      },
      {
        boxId: 6,
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
        boxId: 2,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: false,
          },
        ],
      },
      {
        boxId: 7,
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
        boxId: 3,
        simStatesInputs: [
          {
            portId: 4,
            state: true,
          },
          {
            portId: 6,
            state: true,
          },
        ],
        simStatesOutputs: [
          {
            portId: 9,
            state: false,
          },
        ],
      },
      {
        boxId: 4,
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
        connectorId: 10,
        state: false,
      },
      {
        connectorId: 9,
        state: true,
      },
      {
        connectorId: 11,
        state: false,
      },
      {
        connectorId: 8,
        state: true,
      },
      {
        connectorId: 5,
        state: false,
      },
    ],
  },
  state: {
    zoomFactor: 1,
    panX: -186,
    panY: -148,
  },
  customSketchesSupportData: [],
};
