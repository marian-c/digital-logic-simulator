import type { Sketch } from '@/app/v3/types/data';

export const sketch: Sketch = {
  structure: {
    main: {
      boxElements: [
        {
          id: 1,
          kind: 'custom',
          params: {
            uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
          },
        },
        {
          id: 2,
          kind: 'custom',
          params: {
            uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
          },
        },
        {
          id: 3,
          kind: 'and',
          params: 'none',
        },
        {
          id: 6,
          kind: 'output',
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
      ],
      connectorElements: [
        {
          id: 4,
          fromBoxId: 1,
          fromPortId: 4,
          toBoxId: 3,
          toPortId: 0,
        },
        {
          id: 5,
          fromBoxId: 2,
          fromPortId: 9,
          toBoxId: 3,
          toPortId: 1,
        },
        {
          id: 7,
          fromBoxId: 3,
          fromPortId: 2,
          toBoxId: 6,
          toPortId: 0,
        },
        {
          id: 10,
          fromBoxId: 8,
          fromPortId: 0,
          toBoxId: 1,
          toPortId: 1,
        },
        {
          id: 12,
          fromBoxId: 8,
          fromPortId: 0,
          toBoxId: 2,
          toPortId: 4,
        },
        {
          id: 13,
          fromBoxId: 9,
          fromPortId: 0,
          toBoxId: 1,
          toPortId: 2,
        },
        {
          id: 14,
          fromBoxId: 9,
          fromPortId: 0,
          toBoxId: 2,
          toPortId: 6,
        },
      ],
    },
  },
  meta: {
    nextId: 15,
    uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
    name: 'XOR',
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
          x: 620,
          y: 130,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 620,
          y: 240,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 890,
          y: 190,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 1050,
          y: 210,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 400,
          y: 140,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 400,
          y: 270,
        },
      },
    ],
    connectorBiases: [
      { connectorId: 4, bias: 0 },
      { connectorId: 5, bias: 0 },
      { connectorId: 7, bias: 0 },
      { connectorId: 10, bias: 0 },
      { connectorId: 12, bias: 0 },
      { connectorId: 13, bias: 0 },
      { connectorId: 14, bias: 0 },
    ],
  },
  inputs: {
    inputsState: [
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
        boxId: 1,
        simStatesInputs: [
          {
            portId: 1,
            state: false,
          },
          {
            portId: 2,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 4,
            state: false,
          },
        ],
      },
      {
        boxId: 2,
        simStatesInputs: [
          {
            portId: 4,
            state: false,
          },
          {
            portId: 6,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 9,
            state: true,
          },
        ],
      },
      {
        boxId: 3,
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
        boxId: 6,
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
        connectorId: 12,
        state: false,
      },
      {
        connectorId: 13,
        state: false,
      },
      {
        connectorId: 14,
        state: false,
      },
      {
        connectorId: 4,
        state: false,
      },
      {
        connectorId: 5,
        state: true,
      },
      {
        connectorId: 7,
        state: false,
      },
    ],
  },
  state: {
    zoomFactor: 1,
    panX: 0,
    panY: 0,
  },
  customSketchesSupportData: [],
};
