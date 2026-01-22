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
          kind: 'output',
          params: 'none',
        },
        {
          id: 7,
          kind: 'output',
          params: 'none',
        },
        {
          id: 8,
          kind: 'output',
          params: 'none',
        },
        {
          id: 9,
          kind: 'output',
          params: 'none',
        },
        {
          id: 10,
          kind: 'custom',
          params: {
            uuid: '019aa855-8e49-71e9-8849-0a546951199e',
          },
        },
        {
          id: 11,
          kind: 'custom',
          params: {
            uuid: '019aa855-8e49-71e9-8849-0a546951199e',
          },
        },
        {
          id: 12,
          kind: 'custom',
          params: {
            uuid: '019aa855-8e49-71e9-8849-0a546951199e',
          },
        },
        {
          id: 13,
          kind: 'custom',
          params: {
            uuid: '019aa855-8e49-71e9-8849-0a546951199e',
          },
        },
      ],
      connectorElements: [
        {
          id: 14,
          fromBoxId: 10,
          fromPortId: 11,
          toBoxId: 6,
          toPortId: 0,
        },
        {
          id: 15,
          fromBoxId: 11,
          fromPortId: 11,
          toBoxId: 7,
          toPortId: 0,
        },
        {
          id: 16,
          fromBoxId: 12,
          fromPortId: 11,
          toBoxId: 8,
          toPortId: 0,
        },
        {
          id: 17,
          fromBoxId: 13,
          fromPortId: 11,
          toBoxId: 9,
          toPortId: 0,
        },
        {
          id: 18,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 10,
          toPortId: 1,
        },
        {
          id: 19,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 11,
          toPortId: 1,
        },
        {
          id: 20,
          fromBoxId: 3,
          fromPortId: 0,
          toBoxId: 12,
          toPortId: 1,
        },
        {
          id: 21,
          fromBoxId: 4,
          fromPortId: 0,
          toBoxId: 13,
          toPortId: 1,
        },
        {
          id: 22,
          fromBoxId: 5,
          fromPortId: 0,
          toBoxId: 13,
          toPortId: 2,
        },
        {
          id: 23,
          fromBoxId: 5,
          fromPortId: 0,
          toBoxId: 12,
          toPortId: 2,
        },
        {
          id: 24,
          fromBoxId: 5,
          fromPortId: 0,
          toBoxId: 11,
          toPortId: 2,
        },
        {
          id: 25,
          fromBoxId: 5,
          fromPortId: 0,
          toBoxId: 10,
          toPortId: 2,
        },
      ],
    },
  },
  meta: {
    nextId: 26,
    uuid: '019aac31-6b04-7759-b69c-ef4c3024210c',
    name: '4bit register',
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
          x: 280,
          y: 190,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 280,
          y: 260,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 280,
          y: 330,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 280,
          y: 400,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 280,
          y: 470,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 990,
          y: 270,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 990,
          y: 310,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 990,
          y: 350,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 990,
          y: 390,
        },
      },
      {
        boxId: 10,
        pos: {
          x: 690,
          y: 180,
        },
      },
      {
        boxId: 11,
        pos: {
          x: 690,
          y: 250,
        },
      },
      {
        boxId: 12,
        pos: {
          x: 690,
          y: 320,
        },
      },
      {
        boxId: 13,
        pos: {
          x: 690,
          y: 390,
        },
      },
    ],
    connectorBiases: [
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
      {
        connectorId: 20,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 21,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 22,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 23,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 24,
        mid: 0,
        start: 0,
        end: 0,
      },
      {
        connectorId: 25,
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
        state: true,
      },
      {
        boxId: 2,
        state: false,
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
            state: false,
          },
        ],
      },
      {
        boxId: 10,
        simStatesInputs: [
          {
            portId: 1,
            state: true,
          },
          {
            portId: 2,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 11,
            state: true,
          },
        ],
      },
      {
        boxId: 11,
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
            portId: 11,
            state: false,
          },
        ],
      },
      {
        boxId: 12,
        simStatesInputs: [
          {
            portId: 1,
            state: true,
          },
          {
            portId: 2,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 11,
            state: true,
          },
        ],
      },
      {
        boxId: 13,
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
            portId: 11,
            state: false,
          },
        ],
      },
      {
        boxId: 6,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
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
        ],
        simStatesOutputs: [],
      },
      {
        boxId: 8,
        simStatesInputs: [
          {
            portId: 0,
            state: true,
          },
        ],
        simStatesOutputs: [],
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
        connectorId: 18,
        state: true,
      },
      {
        connectorId: 19,
        state: false,
      },
      {
        connectorId: 20,
        state: true,
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
        connectorId: 23,
        state: false,
      },
      {
        connectorId: 24,
        state: false,
      },
      {
        connectorId: 25,
        state: false,
      },
      {
        connectorId: 14,
        state: true,
      },
      {
        connectorId: 15,
        state: false,
      },
      {
        connectorId: 16,
        state: true,
      },
      {
        connectorId: 17,
        state: false,
      },
    ],
  },
  state: {
    zoomFactor: 1,
    panX: -22,
    panY: 27,
  },
  customSketchesSupportData: [
    {
      boxId: 10,
      inputs: {
        inputsState: [
          {
            boxId: 1,
            state: true,
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
            boxId: 3,
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
            boxId: 15,
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
            boxId: 4,
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
                portId: 14,
                state: false,
              },
              {
                portId: 15,
                state: true,
              },
            ],
            simStatesOutputs: [
              {
                portId: 18,
                state: false,
              },
            ],
          },
          {
            boxId: 6,
            simStatesInputs: [
              {
                portId: 14,
                state: false,
              },
              {
                portId: 15,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 18,
                state: true,
              },
            ],
          },
          {
            boxId: 11,
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
            connectorId: 13,
            state: true,
          },
          {
            connectorId: 16,
            state: true,
          },
          {
            connectorId: 14,
            state: false,
          },
          {
            connectorId: 17,
            state: false,
          },
          {
            connectorId: 9,
            state: false,
          },
          {
            connectorId: 18,
            state: false,
          },
          {
            connectorId: 10,
            state: false,
          },
          {
            connectorId: 8,
            state: true,
          },
          {
            connectorId: 7,
            state: false,
          },
          {
            connectorId: 12,
            state: true,
          },
        ],
      },
      customSketchesSupportData: [
        {
          boxId: 5,
          inputs: {
            inputsState: [
              {
                boxId: 14,
                state: false,
              },
              {
                boxId: 15,
                state: true,
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
                    state: true,
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
                boxId: 17,
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
                boxId: 18,
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
                connectorId: 19,
                state: false,
              },
              {
                connectorId: 20,
                state: true,
              },
              {
                connectorId: 21,
                state: true,
              },
              {
                connectorId: 22,
                state: false,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 16,
              inputs: {
                inputsState: [
                  {
                    boxId: 1,
                    state: false,
                  },
                  {
                    boxId: 2,
                    state: true,
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
                        state: true,
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
                    boxId: 3,
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
                    boxId: 4,
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
                    connectorId: 9,
                    state: true,
                  },
                  {
                    connectorId: 8,
                    state: false,
                  },
                  {
                    connectorId: 5,
                    state: true,
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
              ],
            },
          ],
        },
        {
          boxId: 6,
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
          customSketchesSupportData: [
            {
              boxId: 16,
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
        },
      ],
    },
    {
      boxId: 11,
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
            boxId: 15,
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
            boxId: 4,
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
            boxId: 5,
            simStatesInputs: [
              {
                portId: 14,
                state: false,
              },
              {
                portId: 15,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 18,
                state: true,
              },
            ],
          },
          {
            boxId: 6,
            simStatesInputs: [
              {
                portId: 14,
                state: true,
              },
              {
                portId: 15,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 18,
                state: false,
              },
            ],
          },
          {
            boxId: 11,
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
            connectorId: 13,
            state: false,
          },
          {
            connectorId: 16,
            state: false,
          },
          {
            connectorId: 14,
            state: false,
          },
          {
            connectorId: 17,
            state: false,
          },
          {
            connectorId: 9,
            state: false,
          },
          {
            connectorId: 18,
            state: true,
          },
          {
            connectorId: 10,
            state: false,
          },
          {
            connectorId: 8,
            state: false,
          },
          {
            connectorId: 7,
            state: true,
          },
          {
            connectorId: 12,
            state: false,
          },
        ],
      },
      customSketchesSupportData: [
        {
          boxId: 5,
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
          customSketchesSupportData: [
            {
              boxId: 16,
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
        },
        {
          boxId: 6,
          inputs: {
            inputsState: [
              {
                boxId: 14,
                state: true,
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
                    state: true,
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
                    state: true,
                  },
                  {
                    portId: 2,
                    state: false,
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
                boxId: 17,
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
                boxId: 18,
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
                connectorId: 19,
                state: true,
              },
              {
                connectorId: 20,
                state: false,
              },
              {
                connectorId: 21,
                state: true,
              },
              {
                connectorId: 22,
                state: false,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 16,
              inputs: {
                inputsState: [
                  {
                    boxId: 1,
                    state: true,
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
                    boxId: 6,
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
                    connectorId: 9,
                    state: false,
                  },
                  {
                    connectorId: 8,
                    state: true,
                  },
                  {
                    connectorId: 5,
                    state: true,
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
              ],
            },
          ],
        },
      ],
    },
    {
      boxId: 12,
      inputs: {
        inputsState: [
          {
            boxId: 1,
            state: true,
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
            boxId: 3,
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
            boxId: 15,
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
            boxId: 4,
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
                portId: 14,
                state: false,
              },
              {
                portId: 15,
                state: true,
              },
            ],
            simStatesOutputs: [
              {
                portId: 18,
                state: false,
              },
            ],
          },
          {
            boxId: 6,
            simStatesInputs: [
              {
                portId: 14,
                state: false,
              },
              {
                portId: 15,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 18,
                state: true,
              },
            ],
          },
          {
            boxId: 11,
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
            connectorId: 13,
            state: true,
          },
          {
            connectorId: 16,
            state: true,
          },
          {
            connectorId: 14,
            state: false,
          },
          {
            connectorId: 17,
            state: false,
          },
          {
            connectorId: 9,
            state: false,
          },
          {
            connectorId: 18,
            state: false,
          },
          {
            connectorId: 10,
            state: false,
          },
          {
            connectorId: 8,
            state: true,
          },
          {
            connectorId: 7,
            state: false,
          },
          {
            connectorId: 12,
            state: true,
          },
        ],
      },
      customSketchesSupportData: [
        {
          boxId: 5,
          inputs: {
            inputsState: [
              {
                boxId: 14,
                state: false,
              },
              {
                boxId: 15,
                state: true,
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
                    state: true,
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
                boxId: 17,
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
                boxId: 18,
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
                connectorId: 19,
                state: false,
              },
              {
                connectorId: 20,
                state: true,
              },
              {
                connectorId: 21,
                state: true,
              },
              {
                connectorId: 22,
                state: false,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 16,
              inputs: {
                inputsState: [
                  {
                    boxId: 1,
                    state: false,
                  },
                  {
                    boxId: 2,
                    state: true,
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
                        state: true,
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
                    boxId: 3,
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
                    boxId: 4,
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
                    connectorId: 9,
                    state: true,
                  },
                  {
                    connectorId: 8,
                    state: false,
                  },
                  {
                    connectorId: 5,
                    state: true,
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
              ],
            },
          ],
        },
        {
          boxId: 6,
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
          customSketchesSupportData: [
            {
              boxId: 16,
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
        },
      ],
    },
    {
      boxId: 13,
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
            boxId: 15,
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
            boxId: 4,
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
            boxId: 5,
            simStatesInputs: [
              {
                portId: 14,
                state: false,
              },
              {
                portId: 15,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 18,
                state: true,
              },
            ],
          },
          {
            boxId: 6,
            simStatesInputs: [
              {
                portId: 14,
                state: true,
              },
              {
                portId: 15,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 18,
                state: false,
              },
            ],
          },
          {
            boxId: 11,
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
            connectorId: 13,
            state: false,
          },
          {
            connectorId: 16,
            state: false,
          },
          {
            connectorId: 14,
            state: false,
          },
          {
            connectorId: 17,
            state: false,
          },
          {
            connectorId: 9,
            state: false,
          },
          {
            connectorId: 18,
            state: true,
          },
          {
            connectorId: 10,
            state: false,
          },
          {
            connectorId: 8,
            state: false,
          },
          {
            connectorId: 7,
            state: true,
          },
          {
            connectorId: 12,
            state: false,
          },
        ],
      },
      customSketchesSupportData: [
        {
          boxId: 5,
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
          customSketchesSupportData: [
            {
              boxId: 16,
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
        },
        {
          boxId: 6,
          inputs: {
            inputsState: [
              {
                boxId: 14,
                state: true,
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
                    state: true,
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
                    state: true,
                  },
                  {
                    portId: 2,
                    state: false,
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
                boxId: 17,
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
                boxId: 18,
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
                connectorId: 19,
                state: true,
              },
              {
                connectorId: 20,
                state: false,
              },
              {
                connectorId: 21,
                state: true,
              },
              {
                connectorId: 22,
                state: false,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 16,
              inputs: {
                inputsState: [
                  {
                    boxId: 1,
                    state: true,
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
                    boxId: 6,
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
                    connectorId: 9,
                    state: false,
                  },
                  {
                    connectorId: 8,
                    state: true,
                  },
                  {
                    connectorId: 5,
                    state: true,
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
              ],
            },
          ],
        },
      ],
    },
  ],
};
