import type { Sketch } from '@/app/v3/types/data';

export const sketch: Sketch = {
  structure: {
    main: {
      boxElements: [
        {
          id: 1,
          kind: 'input',
          params: 'none',
          label: 'SET',
        },
        {
          id: 2,
          kind: 'input',
          params: 'none',
          label: 'RESET',
          hideLabel: false,
        },
        {
          id: 3,
          kind: 'not',
          params: 'none',
          label: 'NOT',
        },
        {
          id: 4,
          kind: 'custom',
          params: {
            uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
          },
          label: 'OR',
        },
        {
          id: 5,
          kind: 'and',
          params: 'none',
          label: 'AND',
        },
        {
          id: 6,
          kind: 'output',
          params: 'none',
          label: 'Out',
        },
      ],
      connectorElements: [
        {
          id: 7,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 4,
          toPortId: 2,
          label: 'Set->Or',
        },
        {
          id: 8,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 3,
          toPortId: 0,
          label: 'Reset->Not',
        },
        {
          id: 9,
          fromBoxId: 3,
          fromPortId: 1,
          toBoxId: 5,
          toPortId: 1,
          label: 'Not->and',
        },
        {
          id: 10,
          fromBoxId: 4,
          fromPortId: 4,
          toBoxId: 5,
          toPortId: 0,
          label: 'Or->And',
        },
        {
          id: 11,
          fromBoxId: 5,
          fromPortId: 2,
          toBoxId: 4,
          toPortId: 1,
          label: 'And->Or',
        },
        {
          id: 12,
          fromBoxId: 5,
          fromPortId: 2,
          toBoxId: 6,
          toPortId: 0,
          label: 'And->Out',
        },
      ],
    },
  },
  meta: {
    nextId: 13,
    uuid: '019a9b06-98a3-74de-b01d-c3c54a113684',
    name: 'SR Latch 1',
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
          x: 430,
          y: 220,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 430,
          y: 310,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 620,
          y: 300,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 740,
          y: 190,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 940,
          y: 250,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 1140,
          y: 270,
        },
      },
    ],
    connectorBiases: [
      {
        connectorId: 7,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 8,
        mid: 0,
        start: 0,
        end: 0,
      },
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
        mid: 87,
        start: 0,
        end: 0,
      },
      {
        connectorId: 12,
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
        boxId: 3,
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
        boxId: 5,
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
      {
        boxId: 4,
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
    ],
    connectorSimState: [
      {
        connectorId: 7,
        state: false,
      },
      {
        connectorId: 8,
        state: false,
      },
      {
        connectorId: 9,
        state: true,
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
        connectorId: 12,
        state: false,
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
    },
  ],
};
