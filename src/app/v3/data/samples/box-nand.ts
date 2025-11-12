import type { Sketch } from '@/app/v3/types/data';

export const sketch: Sketch = {
  structure: {
    main: {
      boxElements: [
        {
          id: 4,
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
          kind: 'and',
          params: 'none',
        },
        {
          id: 8,
          kind: 'not',
          params: 'none',
        },
        {
          id: 9,
          kind: 'output',
          params: 'none',
        },
      ],
      connectorElements: [
        {
          id: 10,
          fromBoxId: 4,
          fromPortId: 0,
          toBoxId: 7,
          toPortId: 0,
        },
        {
          id: 11,
          fromBoxId: 6,
          fromPortId: 0,
          toBoxId: 7,
          toPortId: 1,
        },
        {
          id: 12,
          fromBoxId: 7,
          fromPortId: 2,
          toBoxId: 8,
          toPortId: 0,
        },
        {
          id: 13,
          fromBoxId: 8,
          fromPortId: 1,
          toBoxId: 9,
          toPortId: 0,
        },
      ],
    },
  },
  meta: {
    nextId: 14,
    uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
    name: 'NAND',
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
        boxId: 4,
        pos: {
          x: 280,
          y: 80,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 280,
          y: 160,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 440,
          y: 100,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 600,
          y: 110,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 760,
          y: 120,
        },
      },
    ],
    connectorBiases: [
      {
        connectorId: 10,
        start: 0,
        end: 0,
        mid: 0,
      },
      { connectorId: 11, start: 0, end: 0, mid: 0 },
      { connectorId: 12, start: 0, end: 0, mid: 0 },
      { connectorId: 13, start: 0, end: 0, mid: 0 },
    ],
  },
  inputs: {
    inputsState: [
      {
        boxId: 4,
        state: false,
      },
      {
        boxId: 6,
        state: false,
      },
    ],
  },
  simulation: {
    boxSimState: [
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
        boxId: 6,
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
        boxId: 8,
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
        boxId: 9,
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
        connectorId: 10,
        state: false,
      },
      {
        connectorId: 11,
        state: false,
      },
      {
        connectorId: 12,
        state: false,
      },
      {
        connectorId: 13,
        state: true,
      },
    ],
  },
  state: {
    zoomFactor: 1,
    panX: -128,
    panY: -74,
  },
  customSketchesSupportData: [],
};
