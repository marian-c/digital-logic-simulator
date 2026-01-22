import type { Sketch } from '@/app/v3/types/data';

export const sketch: Sketch = {
  structure: {
    main: {
      boxElements: [
        {
          id: 1,
          kind: 'input',
          params: 'none',
          label: 'Data',
        },
        {
          id: 2,
          kind: 'output',
          params: 'none',
        },
        {
          id: 3,
          kind: 'input',
          params: 'none',
          label: 'Store',
        },
        {
          id: 4,
          kind: 'custom',
          params: {
            uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
          },
        },
        {
          id: 5,
          kind: 'custom',
          params: {
            uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
          },
        },
        {
          id: 6,
          kind: 'custom',
          params: {
            uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
          },
        },
        {
          id: 7,
          kind: 'custom',
          params: {
            uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
          },
        },
        {
          id: 8,
          kind: 'custom',
          params: {
            uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
          },
        },
      ],
      connectorElements: [
        {
          id: 9,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 8,
          toPortId: 4,
        },
        {
          id: 10,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 8,
          toPortId: 6,
        },
        {
          id: 11,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 6,
          toPortId: 4,
        },
        {
          id: 12,
          fromBoxId: 4,
          fromPortId: 9,
          toBoxId: 2,
          toPortId: 0,
        },
        {
          id: 13,
          fromBoxId: 5,
          fromPortId: 9,
          toBoxId: 4,
          toPortId: 6,
        },
        {
          id: 14,
          fromBoxId: 4,
          fromPortId: 9,
          toBoxId: 5,
          toPortId: 4,
        },
        {
          id: 15,
          fromBoxId: 7,
          fromPortId: 9,
          toBoxId: 5,
          toPortId: 6,
        },
        {
          id: 16,
          fromBoxId: 8,
          fromPortId: 9,
          toBoxId: 7,
          toPortId: 6,
        },
        {
          id: 17,
          fromBoxId: 3,
          fromPortId: 0,
          toBoxId: 6,
          toPortId: 6,
        },
        {
          id: 18,
          fromBoxId: 3,
          fromPortId: 0,
          toBoxId: 7,
          toPortId: 4,
        },
        {
          id: 19,
          fromBoxId: 6,
          fromPortId: 9,
          toBoxId: 4,
          toPortId: 4,
        },
      ],
    },
  },
  meta: {
    nextId: 20,
    uuid: '019aa85d-66ca-702e-987d-fe61455f4c48',
    name: 'D Latch (nand)',
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
          x: 520,
          y: 210,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 1270,
          y: 310,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 550,
          y: 340,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 1000,
          y: 200,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 1100,
          y: 390,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 810,
          y: 160,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 850,
          y: 370,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 700,
          y: 420,
        },
      },
    ],
    connectorBiases: [
      {
        connectorId: 9,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 10,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 11,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 12,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 13,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 14,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 15,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 16,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 17,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 18,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 19,
        mid: 0,
        start: 0,
        end: 0,
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
        boxId: 8,
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
        boxId: 7,
        simStatesInputs: [
          {
            portId: 4,
            state: false,
          },
          {
            portId: 6,
            state: true,
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
        boxId: 4,
        simStatesInputs: [
          {
            portId: 4,
            state: true,
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
        boxId: 2,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
        ],
        simStatesOutputs: [],
      },
      {
        boxId: 5,
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
    ],
    connectorSimState: [
      {
        connectorId: 9,
        state: false,
      },
      {
        connectorId: 10,
        state: false,
      },
      {
        connectorId: 11,
        state: false,
      },
      {
        connectorId: 17,
        state: false,
      },
      {
        connectorId: 18,
        state: false,
      },
      {
        connectorId: 19,
        state: true,
      },
      {
        connectorId: 16,
        state: true,
      },
      {
        connectorId: 15,
        state: true,
      },
      {
        connectorId: 13,
        state: false,
      },
      {
        connectorId: 12,
        state: true,
      },
      {
        connectorId: 14,
        state: true,
      },
    ],
  },
  state: {
    zoomFactor: 1,
    panX: 0,
    panY: 0,
  },
  customSketchesSupportData: [
    {
      boxId: 4,
      inputs: {
        inputsState: [
          {
            boxId: 4,
            state: true,
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
                state: false,
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
            state: true,
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
      customSketchesSupportData: [],
    },
    {
      boxId: 5,
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
    {
      boxId: 6,
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
      customSketchesSupportData: [],
    },
    {
      boxId: 7,
      inputs: {
        inputsState: [
          {
            boxId: 4,
            state: false,
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
            state: true,
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
      customSketchesSupportData: [],
    },
    {
      boxId: 8,
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
      customSketchesSupportData: [],
    },
  ],
};
