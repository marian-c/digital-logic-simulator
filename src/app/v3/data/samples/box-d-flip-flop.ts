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
            uuid: '019aa855-8e49-71e9-8849-0a546951199e',
          },
        },
        {
          id: 4,
          kind: 'custom',
          params: {
            uuid: '019aa855-8e49-71e9-8849-0a546951199e',
          },
        },
        {
          id: 5,
          kind: 'not',
          params: 'none',
        },
        {
          id: 11,
          kind: 'output',
          params: 'none',
        },
      ],
      connectorElements: [
        {
          id: 6,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 3,
          toPortId: 1,
        },
        {
          id: 7,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 5,
          toPortId: 0,
        },
        {
          id: 8,
          fromBoxId: 5,
          fromPortId: 1,
          toBoxId: 3,
          toPortId: 2,
        },
        {
          id: 9,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 4,
          toPortId: 2,
        },
        {
          id: 10,
          fromBoxId: 3,
          fromPortId: 11,
          toBoxId: 4,
          toPortId: 1,
        },
        {
          id: 12,
          fromBoxId: 4,
          fromPortId: 11,
          toBoxId: 11,
          toPortId: 0,
        },
      ],
    },
  },
  meta: {
    nextId: 13,
    uuid: '019aad02-5606-74fb-b2f2-a7314bf4a827',
    name: 'D Flip-flop',
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
          x: 550,
          y: 260,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 550,
          y: 370,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 780,
          y: 220,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 1060,
          y: 340,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 680,
          y: 280,
        },
      },
      {
        boxId: 11,
        pos: {
          x: 1360,
          y: 360,
        },
      },
    ],
    connectorBiases: [
      {
        connectorId: 6,
        mid: 0,
        start: 0,
        end: 0,
      },
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
        boxId: 5,
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
            portId: 11,
            state: false,
          },
        ],
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
            portId: 11,
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
        connectorId: 6,
        state: false,
      },
      {
        connectorId: 7,
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
        connectorId: 10,
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
      boxId: 3,
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
            state: true,
          },
          {
            connectorId: 17,
            state: true,
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
            state: true,
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
                    state: true,
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
                state: true,
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
                    state: true,
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
                    state: true,
                  },
                  {
                    connectorId: 9,
                    state: false,
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
            },
          ],
        },
      ],
    },
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
