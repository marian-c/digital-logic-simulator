import type { Sketch } from '@/app/v3/types/data';

export const sketch: Sketch = {
  structure: {
    main: {
      boxElements: [
        {
          id: 1,
          kind: 'input',
          params: 'none',
          label: 'InputA',
        },
        {
          id: 2,
          kind: 'input',
          params: 'none',
          label: 'InputB',
        },
        {
          id: 3,
          kind: 'custom',
          params: {
            uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
          },
          label: 'NAND',
        },
        {
          id: 4,
          kind: 'output',
          params: 'none',
          label: 'Output',
        },
        {
          id: 6,
          kind: 'not',
          params: 'none',
          label: 'NotA',
        },
        {
          id: 7,
          kind: 'not',
          params: 'none',
          label: 'NotB',
        },
      ],
      connectorElements: [
        {
          id: 5,
          fromBoxId: 3,
          fromPortId: 9,
          toBoxId: 4,
          toPortId: 0,
          label: 'Nand->Output',
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
          label: 'InputA->NotA',
        },
        {
          id: 11,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 7,
          toPortId: 0,
          label: 'InputB->NotB',
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
      {
        connectorId: 5,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 8,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 9,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 10,
        start: 0,
        end: 0,
        mid: 0,
      },
      {
        connectorId: 11,
        start: 0,
        end: 0,
        mid: 0,
      },
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
        connectorId: 11,
        state: false,
      },
      {
        connectorId: 9,
        state: true,
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
    panX: -208,
    panY: -93,
  },
  customSketchesSupportData: [
    {
      boxId: 3,
      inputs: {
        inputsState: [
          {
            boxId: 4,
            state: true,
          },
          {
            boxId: 6,
            state: true,
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
            boxId: 7,
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
            boxId: 9,
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
            state: true,
          },
          {
            connectorId: 11,
            state: true,
          },
          {
            connectorId: 12,
            state: true,
          },
          {
            connectorId: 13,
            state: false,
          },
        ],
      },
      customSketchesSupportData: [],
    },
  ],
};
