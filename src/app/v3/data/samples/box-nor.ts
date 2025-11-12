import type { Sketch } from '@/app/v3/types/data';

export const sketch: Sketch = {
  structure: {
    main: {
      boxElements: [
        {
          id: 14,
          kind: 'input',
          params: 'none',
        },
        {
          id: 15,
          kind: 'input',
          params: 'none',
        },
        {
          id: 16,
          kind: 'custom',
          params: {
            uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
          },
        },
        {
          id: 17,
          kind: 'not',
          params: 'none',
        },
        {
          id: 18,
          kind: 'output',
          params: 'none',
        },
      ],
      connectorElements: [
        {
          id: 19,
          fromBoxId: 14,
          fromPortId: 0,
          toBoxId: 16,
          toPortId: 1,
        },
        {
          id: 20,
          fromBoxId: 15,
          fromPortId: 0,
          toBoxId: 16,
          toPortId: 2,
        },
        {
          id: 21,
          fromBoxId: 16,
          fromPortId: 4,
          toBoxId: 17,
          toPortId: 0,
        },
        {
          id: 22,
          fromBoxId: 17,
          fromPortId: 1,
          toBoxId: 18,
          toPortId: 0,
        },
      ],
    },
  },
  meta: {
    nextId: 23,
    uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
    name: 'NOR',
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
        boxId: 14,
        pos: {
          x: 310,
          y: 100,
        },
      },
      {
        boxId: 15,
        pos: {
          x: 310,
          y: 170,
        },
      },
      {
        boxId: 16,
        pos: {
          x: 490,
          y: 120,
        },
      },
      {
        boxId: 17,
        pos: {
          x: 630,
          y: 130,
        },
      },
      {
        boxId: 18,
        pos: {
          x: 840,
          y: 140,
        },
      },
    ],
    connectorBiases: [
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
        mid: 0,
      },
      {
        connectorId: 22,
        start: 0,
        end: 0,
        mid: 0,
      },
    ],
  },
  inputs: {
    inputsState: [
      {
        boxId: 14,
        state: false,
      },
      {
        boxId: 15,
        state: false,
      },
    ],
  },
  simulation: {
    boxSimState: [
      {
        boxId: 14,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: false,
          },
        ],
      },
      {
        boxId: 15,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: false,
          },
        ],
      },
      {
        boxId: 16,
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
        boxId: 17,
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
        boxId: 18,
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
        state: true,
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
