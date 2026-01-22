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
          kind: 'input',
          params: 'none',
          label: 'Store',
        },
        {
          id: 3,
          kind: 'input',
          params: 'none',
          label: 'Clock',
        },
        {
          id: 4,
          kind: 'custom',
          params: {
            uuid: '019aad02-5606-74fb-b2f2-a7314bf4a827',
          },
        },
        {
          id: 6,
          kind: 'output',
          params: 'none',
        },
        {
          id: 7,
          kind: 'not',
          params: 'none',
        },
        {
          id: 8,
          kind: 'and',
          params: 'none',
        },
        {
          id: 9,
          kind: 'and',
          params: 'none',
        },
        {
          id: 10,
          kind: 'custom',
          params: {
            uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
          },
        },
      ],
      connectorElements: [
        {
          id: 5,
          fromBoxId: 3,
          fromPortId: 0,
          toBoxId: 4,
          toPortId: 2,
        },
        {
          id: 11,
          fromBoxId: 4,
          fromPortId: 11,
          toBoxId: 6,
          toPortId: 0,
        },
        {
          id: 12,
          fromBoxId: 4,
          fromPortId: 11,
          toBoxId: 8,
          toPortId: 0,
        },
        {
          id: 13,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 9,
          toPortId: 1,
        },
        {
          id: 14,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 9,
          toPortId: 0,
        },
        {
          id: 15,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 7,
          toPortId: 0,
        },
        {
          id: 16,
          fromBoxId: 7,
          fromPortId: 1,
          toBoxId: 8,
          toPortId: 1,
        },
        {
          id: 17,
          fromBoxId: 9,
          fromPortId: 2,
          toBoxId: 10,
          toPortId: 2,
        },
        {
          id: 18,
          fromBoxId: 8,
          fromPortId: 2,
          toBoxId: 10,
          toPortId: 1,
        },
        {
          id: 19,
          fromBoxId: 10,
          fromPortId: 4,
          toBoxId: 4,
          toPortId: 1,
        },
      ],
    },
  },
  meta: {
    nextId: 20,
    uuid: '019aad05-15bc-750f-9cdc-f6ba977e865d',
    name: '1bit register (clock)',
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
          x: 460,
          y: 190,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 460,
          y: 290,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 460,
          y: 370,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 1040,
          y: 260,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 1490,
          y: 280,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 620,
          y: 130,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 770,
          y: 50,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 770,
          y: 160,
        },
      },
      {
        boxId: 10,
        pos: {
          x: 920,
          y: 100,
        },
      },
    ],
    connectorBiases: [
      {
        connectorId: 5,
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
        mid: 163,
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
        mid: -36,
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
        boxId: 2,
        state: true,
      },
      {
        boxId: 3,
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
        boxId: 4,
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
        boxId: 8,
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
        boxId: 10,
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
        connectorId: 13,
        state: false,
      },
      {
        connectorId: 14,
        state: true,
      },
      {
        connectorId: 15,
        state: true,
      },
      {
        connectorId: 5,
        state: true,
      },
      {
        connectorId: 16,
        state: false,
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
        connectorId: 11,
        state: false,
      },
      {
        connectorId: 12,
        state: false,
      },
      {
        connectorId: 18,
        state: false,
      },
    ],
  },
  state: {
    zoomFactor: 1,
    panX: 11,
    panY: -166,
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
            boxId: 5,
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
            boxId: 4,
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
            connectorId: 10,
            state: false,
          },
          {
            connectorId: 12,
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
          boxId: 4,
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
      ],
    },
    {
      boxId: 10,
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
