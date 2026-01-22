import type { Sketch } from '@/app/v3/types/data';

export const sketch: Sketch = {
  structure: {
    main: {
      boxElements: [
        {
          id: 1,
          kind: 'custom',
          params: {
            uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
          },
        },
        {
          id: 2,
          kind: 'input',
          params: 'none',
        },
        {
          id: 4,
          kind: 'custom',
          params: {
            uuid: '019a14ab-d0a8-77ef-bf6a-75dc38a57653',
          },
        },
        {
          id: 5,
          kind: 'custom',
          params: {
            uuid: '019a14c8-e0bb-775a-b2d8-632d15517a0b',
          },
        },
        {
          id: 9,
          kind: 'custom',
          params: {
            uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
          },
        },
        {
          id: 11,
          kind: 'custom',
          params: {
            uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
          },
        },
        {
          id: 12,
          kind: 'custom',
          params: {
            uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
          },
        },
        {
          id: 15,
          kind: 'custom',
          params: {
            uuid: '019a1295-bf4b-708e-a244-d666353ff74f',
          },
        },
      ],
      connectorElements: [
        {
          id: 3,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 1,
          toPortId: 4,
        },
        {
          id: 6,
          fromBoxId: 5,
          fromPortId: 49,
          toBoxId: 4,
          toPortId: 14,
        },
        {
          id: 7,
          fromBoxId: 5,
          fromPortId: 51,
          toBoxId: 4,
          toPortId: 15,
        },
        {
          id: 8,
          fromBoxId: 5,
          fromPortId: 53,
          toBoxId: 4,
          toPortId: 16,
        },
        {
          id: 10,
          fromBoxId: 9,
          fromPortId: 4,
          toBoxId: 5,
          toPortId: 6,
        },
        {
          id: 13,
          fromBoxId: 12,
          fromPortId: 18,
          toBoxId: 5,
          toPortId: 7,
        },
        {
          id: 14,
          fromBoxId: 4,
          fromPortId: 8,
          toBoxId: 11,
          toPortId: 2,
        },
      ],
    },
  },
  meta: {
    nextId: 16,
    uuid: '019aa284-ca54-714a-b335-564b7c1a0830',
    name: 'PG TEO',
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
          x: 820,
          y: 370,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 430,
          y: 300,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 740,
          y: 450,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 560,
          y: 440,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 440,
          y: 490,
        },
      },
      {
        boxId: 11,
        pos: {
          x: 1090,
          y: 500,
        },
      },
      {
        boxId: 12,
        pos: {
          x: 400,
          y: 530,
        },
      },
      {
        boxId: 15,
        pos: {
          x: 900,
          y: 320,
        },
      },
    ],
    connectorBiases: [
      {
        connectorId: 3,
        mid: 0,
        start: 0,
        end: 0,
      },
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
        connectorId: 10,
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
    ],
  },
  inputs: {
    inputsState: [
      {
        boxId: 2,
        state: false,
      },
    ],
  },
  simulation: {
    boxSimState: [
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
        boxId: 1,
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
        boxId: 9,
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
        boxId: 12,
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
        boxId: 15,
        simStatesInputs: [
          {
            portId: 1,
            state: false,
          },
          {
            portId: 2,
            state: false,
          },
          {
            portId: 3,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 9,
            state: false,
          },
          {
            portId: 10,
            state: false,
          },
        ],
      },
      {
        boxId: 5,
        simStatesInputs: [
          {
            portId: 1,
            state: false,
          },
          {
            portId: 2,
            state: false,
          },
          {
            portId: 3,
            state: false,
          },
          {
            portId: 4,
            state: false,
          },
          {
            portId: 5,
            state: false,
          },
          {
            portId: 6,
            state: false,
          },
          {
            portId: 7,
            state: true,
          },
          {
            portId: 8,
            state: false,
          },
          {
            portId: 9,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 49,
            state: false,
          },
          {
            portId: 51,
            state: false,
          },
          {
            portId: 53,
            state: false,
          },
          {
            portId: 55,
            state: false,
          },
          {
            portId: 56,
            state: false,
          },
          {
            portId: 57,
            state: true,
          },
          {
            portId: 58,
            state: false,
          },
        ],
      },
      {
        boxId: 4,
        simStatesInputs: [
          {
            portId: 14,
            state: false,
          },
          {
            portId: 15,
            state: false,
          },
          {
            portId: 16,
            state: false,
          },
          {
            portId: 17,
            state: false,
          },
          {
            portId: 18,
            state: false,
          },
          {
            portId: 19,
            state: false,
          },
          {
            portId: 20,
            state: false,
          },
          {
            portId: 21,
            state: false,
          },
          {
            portId: 22,
            state: false,
          },
        ],
        simStatesOutputs: [
          {
            portId: 4,
            state: false,
          },
          {
            portId: 5,
            state: false,
          },
          {
            portId: 6,
            state: false,
          },
          {
            portId: 7,
            state: false,
          },
          {
            portId: 8,
            state: false,
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
            portId: 4,
            state: false,
          },
        ],
      },
    ],
    connectorSimState: [
      {
        connectorId: 3,
        state: false,
      },
      {
        connectorId: 10,
        state: false,
      },
      {
        connectorId: 13,
        state: true,
      },
      {
        connectorId: 6,
        state: false,
      },
      {
        connectorId: 7,
        state: false,
      },
      {
        connectorId: 8,
        state: false,
      },
      {
        connectorId: 14,
        state: false,
      },
    ],
  },
  state: {
    zoomFactor: 1,
    panX: 0,
    panY: 109.7479248046875,
  },
  customSketchesSupportData: [
    {
      boxId: 1,
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
      boxId: 4,
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
          {
            boxId: 16,
            state: false,
          },
          {
            boxId: 17,
            state: false,
          },
          {
            boxId: 18,
            state: false,
          },
          {
            boxId: 19,
            state: false,
          },
          {
            boxId: 20,
            state: false,
          },
          {
            boxId: 21,
            state: false,
          },
          {
            boxId: 22,
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
            simStatesInputs: [],
            simStatesOutputs: [
              {
                portId: 0,
                state: false,
              },
            ],
          },
          {
            boxId: 17,
            simStatesInputs: [],
            simStatesOutputs: [
              {
                portId: 0,
                state: false,
              },
            ],
          },
          {
            boxId: 18,
            simStatesInputs: [],
            simStatesOutputs: [
              {
                portId: 0,
                state: false,
              },
            ],
          },
          {
            boxId: 19,
            simStatesInputs: [],
            simStatesOutputs: [
              {
                portId: 0,
                state: false,
              },
            ],
          },
          {
            boxId: 20,
            simStatesInputs: [],
            simStatesOutputs: [
              {
                portId: 0,
                state: false,
              },
            ],
          },
          {
            boxId: 21,
            simStatesInputs: [],
            simStatesOutputs: [
              {
                portId: 0,
                state: false,
              },
            ],
          },
          {
            boxId: 22,
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
            simStatesInputs: [
              {
                portId: 1,
                state: false,
              },
              {
                portId: 2,
                state: false,
              },
              {
                portId: 3,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 9,
                state: false,
              },
              {
                portId: 10,
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
              {
                portId: 3,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 9,
                state: false,
              },
              {
                portId: 10,
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
            simStatesOutputs: [],
          },
          {
            boxId: 2,
            simStatesInputs: [
              {
                portId: 1,
                state: false,
              },
              {
                portId: 2,
                state: false,
              },
              {
                portId: 3,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 9,
                state: false,
              },
              {
                portId: 10,
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
              {
                portId: 3,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 9,
                state: false,
              },
              {
                portId: 10,
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
            simStatesOutputs: [],
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
          {
            boxId: 8,
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
            connectorId: 28,
            state: false,
          },
          {
            connectorId: 29,
            state: false,
          },
          {
            connectorId: 30,
            state: false,
          },
          {
            connectorId: 31,
            state: false,
          },
          {
            connectorId: 32,
            state: false,
          },
          {
            connectorId: 33,
            state: false,
          },
          {
            connectorId: 34,
            state: false,
          },
          {
            connectorId: 35,
            state: false,
          },
          {
            connectorId: 23,
            state: false,
          },
          {
            connectorId: 13,
            state: false,
          },
          {
            connectorId: 24,
            state: false,
          },
          {
            connectorId: 12,
            state: false,
          },
          {
            connectorId: 25,
            state: false,
          },
          {
            connectorId: 11,
            state: false,
          },
          {
            connectorId: 26,
            state: false,
          },
          {
            connectorId: 10,
            state: false,
          },
          {
            connectorId: 27,
            state: false,
          },
        ],
      },
      customSketchesSupportData: [
        {
          boxId: 1,
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
                    state: false,
                  },
                ],
              },
              {
                boxId: 4,
                simStatesInputs: [
                  {
                    portId: 8,
                    state: false,
                  },
                  {
                    portId: 9,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 6,
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
                boxId: 6,
                simStatesInputs: [
                  {
                    portId: 8,
                    state: false,
                  },
                  {
                    portId: 9,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 6,
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
                boxId: 9,
                simStatesInputs: [
                  {
                    portId: 0,
                    state: false,
                  },
                ],
                simStatesOutputs: [],
              },
              {
                boxId: 10,
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
                connectorId: 11,
                state: false,
              },
              {
                connectorId: 16,
                state: false,
              },
              {
                connectorId: 13,
                state: false,
              },
              {
                connectorId: 15,
                state: false,
              },
              {
                connectorId: 18,
                state: false,
              },
              {
                connectorId: 20,
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
                connectorId: 21,
                state: false,
              },
              {
                connectorId: 23,
                state: false,
              },
              {
                connectorId: 22,
                state: false,
              },
              {
                connectorId: 24,
                state: false,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 4,
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
              customSketchesSupportData: [
                {
                  boxId: 1,
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
                {
                  boxId: 2,
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
            {
              boxId: 6,
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
              customSketchesSupportData: [
                {
                  boxId: 1,
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
                {
                  boxId: 2,
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
            {
              boxId: 8,
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
          boxId: 2,
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
                    state: false,
                  },
                ],
              },
              {
                boxId: 4,
                simStatesInputs: [
                  {
                    portId: 8,
                    state: false,
                  },
                  {
                    portId: 9,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 6,
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
                boxId: 6,
                simStatesInputs: [
                  {
                    portId: 8,
                    state: false,
                  },
                  {
                    portId: 9,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 6,
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
                boxId: 9,
                simStatesInputs: [
                  {
                    portId: 0,
                    state: false,
                  },
                ],
                simStatesOutputs: [],
              },
              {
                boxId: 10,
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
                connectorId: 11,
                state: false,
              },
              {
                connectorId: 16,
                state: false,
              },
              {
                connectorId: 13,
                state: false,
              },
              {
                connectorId: 15,
                state: false,
              },
              {
                connectorId: 18,
                state: false,
              },
              {
                connectorId: 20,
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
                connectorId: 21,
                state: false,
              },
              {
                connectorId: 23,
                state: false,
              },
              {
                connectorId: 22,
                state: false,
              },
              {
                connectorId: 24,
                state: false,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 4,
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
              customSketchesSupportData: [
                {
                  boxId: 1,
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
                {
                  boxId: 2,
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
            {
              boxId: 6,
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
              customSketchesSupportData: [
                {
                  boxId: 1,
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
                {
                  boxId: 2,
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
            {
              boxId: 8,
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
                    state: false,
                  },
                ],
              },
              {
                boxId: 4,
                simStatesInputs: [
                  {
                    portId: 8,
                    state: false,
                  },
                  {
                    portId: 9,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 6,
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
                boxId: 6,
                simStatesInputs: [
                  {
                    portId: 8,
                    state: false,
                  },
                  {
                    portId: 9,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 6,
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
                boxId: 9,
                simStatesInputs: [
                  {
                    portId: 0,
                    state: false,
                  },
                ],
                simStatesOutputs: [],
              },
              {
                boxId: 10,
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
                connectorId: 11,
                state: false,
              },
              {
                connectorId: 16,
                state: false,
              },
              {
                connectorId: 13,
                state: false,
              },
              {
                connectorId: 15,
                state: false,
              },
              {
                connectorId: 18,
                state: false,
              },
              {
                connectorId: 20,
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
                connectorId: 21,
                state: false,
              },
              {
                connectorId: 23,
                state: false,
              },
              {
                connectorId: 22,
                state: false,
              },
              {
                connectorId: 24,
                state: false,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 4,
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
              customSketchesSupportData: [
                {
                  boxId: 1,
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
                {
                  boxId: 2,
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
            {
              boxId: 6,
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
              customSketchesSupportData: [
                {
                  boxId: 1,
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
                {
                  boxId: 2,
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
            {
              boxId: 8,
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
          boxId: 9,
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
                    state: false,
                  },
                ],
              },
              {
                boxId: 4,
                simStatesInputs: [
                  {
                    portId: 8,
                    state: false,
                  },
                  {
                    portId: 9,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 6,
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
                boxId: 6,
                simStatesInputs: [
                  {
                    portId: 8,
                    state: false,
                  },
                  {
                    portId: 9,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 6,
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
                boxId: 9,
                simStatesInputs: [
                  {
                    portId: 0,
                    state: false,
                  },
                ],
                simStatesOutputs: [],
              },
              {
                boxId: 10,
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
                connectorId: 11,
                state: false,
              },
              {
                connectorId: 16,
                state: false,
              },
              {
                connectorId: 13,
                state: false,
              },
              {
                connectorId: 15,
                state: false,
              },
              {
                connectorId: 18,
                state: false,
              },
              {
                connectorId: 20,
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
                connectorId: 21,
                state: false,
              },
              {
                connectorId: 23,
                state: false,
              },
              {
                connectorId: 22,
                state: false,
              },
              {
                connectorId: 24,
                state: false,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 4,
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
              customSketchesSupportData: [
                {
                  boxId: 1,
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
                {
                  boxId: 2,
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
            {
              boxId: 6,
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
              customSketchesSupportData: [
                {
                  boxId: 1,
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
                {
                  boxId: 2,
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
            {
              boxId: 8,
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
      boxId: 5,
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
          {
            boxId: 3,
            state: false,
          },
          {
            boxId: 4,
            state: false,
          },
          {
            boxId: 5,
            state: false,
          },
          {
            boxId: 6,
            state: false,
          },
          {
            boxId: 7,
            state: true,
          },
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
            simStatesInputs: [],
            simStatesOutputs: [
              {
                portId: 0,
                state: false,
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
            simStatesInputs: [],
            simStatesOutputs: [
              {
                portId: 0,
                state: true,
              },
            ],
          },
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
            boxId: 10,
            simStatesInputs: [
              {
                portId: 8,
                state: false,
              },
              {
                portId: 9,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 6,
                state: false,
              },
            ],
          },
          {
            boxId: 11,
            simStatesInputs: [
              {
                portId: 8,
                state: false,
              },
              {
                portId: 9,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 6,
                state: false,
              },
            ],
          },
          {
            boxId: 12,
            simStatesInputs: [
              {
                portId: 8,
                state: true,
              },
              {
                portId: 9,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 6,
                state: true,
              },
            ],
          },
          {
            boxId: 14,
            simStatesInputs: [
              {
                portId: 8,
                state: false,
              },
              {
                portId: 9,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 6,
                state: false,
              },
            ],
          },
          {
            boxId: 13,
            simStatesInputs: [
              {
                portId: 14,
                state: false,
              },
              {
                portId: 15,
                state: false,
              },
              {
                portId: 16,
                state: false,
              },
              {
                portId: 17,
                state: false,
              },
              {
                portId: 18,
                state: false,
              },
              {
                portId: 19,
                state: false,
              },
              {
                portId: 20,
                state: true,
              },
              {
                portId: 21,
                state: false,
              },
              {
                portId: 22,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 4,
                state: false,
              },
              {
                portId: 5,
                state: false,
              },
              {
                portId: 6,
                state: true,
              },
              {
                portId: 7,
                state: false,
              },
              {
                portId: 8,
                state: false,
              },
            ],
          },
          {
            boxId: 32,
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
            boxId: 33,
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
            boxId: 34,
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
            boxId: 35,
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
            boxId: 51,
            simStatesInputs: [
              {
                portId: 0,
                state: false,
              },
            ],
            simStatesOutputs: [],
          },
          {
            boxId: 53,
            simStatesInputs: [
              {
                portId: 0,
                state: false,
              },
            ],
            simStatesOutputs: [],
          },
          {
            boxId: 55,
            simStatesInputs: [
              {
                portId: 0,
                state: false,
              },
            ],
            simStatesOutputs: [],
          },
          {
            boxId: 56,
            simStatesInputs: [
              {
                portId: 0,
                state: false,
              },
            ],
            simStatesOutputs: [],
          },
          {
            boxId: 57,
            simStatesInputs: [
              {
                portId: 0,
                state: true,
              },
            ],
            simStatesOutputs: [],
          },
          {
            boxId: 58,
            simStatesInputs: [
              {
                portId: 0,
                state: false,
              },
            ],
            simStatesOutputs: [],
          },
          {
            boxId: 36,
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
            boxId: 37,
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
            boxId: 38,
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
            boxId: 49,
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
            connectorId: 26,
            state: false,
          },
          {
            connectorId: 15,
            state: false,
          },
          {
            connectorId: 16,
            state: false,
          },
          {
            connectorId: 17,
            state: true,
          },
          {
            connectorId: 18,
            state: false,
          },
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
            state: false,
          },
          {
            connectorId: 31,
            state: false,
          },
          {
            connectorId: 27,
            state: false,
          },
          {
            connectorId: 28,
            state: false,
          },
          {
            connectorId: 29,
            state: true,
          },
          {
            connectorId: 30,
            state: false,
          },
          {
            connectorId: 39,
            state: false,
          },
          {
            connectorId: 40,
            state: false,
          },
          {
            connectorId: 41,
            state: true,
          },
          {
            connectorId: 42,
            state: false,
          },
          {
            connectorId: 52,
            state: false,
          },
          {
            connectorId: 54,
            state: false,
          },
          {
            connectorId: 59,
            state: false,
          },
          {
            connectorId: 60,
            state: false,
          },
          {
            connectorId: 61,
            state: true,
          },
          {
            connectorId: 62,
            state: false,
          },
          {
            connectorId: 43,
            state: true,
          },
          {
            connectorId: 44,
            state: true,
          },
          {
            connectorId: 45,
            state: false,
          },
          {
            connectorId: 47,
            state: true,
          },
          {
            connectorId: 46,
            state: true,
          },
          {
            connectorId: 48,
            state: false,
          },
          {
            connectorId: 50,
            state: false,
          },
        ],
      },
      customSketchesSupportData: [
        {
          boxId: 10,
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
          customSketchesSupportData: [
            {
              boxId: 1,
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
            {
              boxId: 2,
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
        {
          boxId: 11,
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
          customSketchesSupportData: [
            {
              boxId: 1,
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
            {
              boxId: 2,
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
        {
          boxId: 12,
          inputs: {
            inputsState: [
              {
                boxId: 8,
                state: true,
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
                    state: true,
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
                boxId: 2,
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
                boxId: 3,
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
                boxId: 6,
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
                connectorId: 12,
                state: true,
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
                state: true,
              },
              {
                connectorId: 5,
                state: true,
              },
              {
                connectorId: 7,
                state: true,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 1,
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
            {
              boxId: 2,
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
        {
          boxId: 13,
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
              {
                boxId: 16,
                state: false,
              },
              {
                boxId: 17,
                state: false,
              },
              {
                boxId: 18,
                state: false,
              },
              {
                boxId: 19,
                state: false,
              },
              {
                boxId: 20,
                state: true,
              },
              {
                boxId: 21,
                state: false,
              },
              {
                boxId: 22,
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
                simStatesInputs: [],
                simStatesOutputs: [
                  {
                    portId: 0,
                    state: false,
                  },
                ],
              },
              {
                boxId: 17,
                simStatesInputs: [],
                simStatesOutputs: [
                  {
                    portId: 0,
                    state: false,
                  },
                ],
              },
              {
                boxId: 18,
                simStatesInputs: [],
                simStatesOutputs: [
                  {
                    portId: 0,
                    state: false,
                  },
                ],
              },
              {
                boxId: 19,
                simStatesInputs: [],
                simStatesOutputs: [
                  {
                    portId: 0,
                    state: false,
                  },
                ],
              },
              {
                boxId: 20,
                simStatesInputs: [],
                simStatesOutputs: [
                  {
                    portId: 0,
                    state: true,
                  },
                ],
              },
              {
                boxId: 21,
                simStatesInputs: [],
                simStatesOutputs: [
                  {
                    portId: 0,
                    state: false,
                  },
                ],
              },
              {
                boxId: 22,
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
                simStatesInputs: [
                  {
                    portId: 1,
                    state: false,
                  },
                  {
                    portId: 2,
                    state: false,
                  },
                  {
                    portId: 3,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 9,
                    state: false,
                  },
                  {
                    portId: 10,
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
                    state: true,
                  },
                  {
                    portId: 3,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 9,
                    state: true,
                  },
                  {
                    portId: 10,
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
                simStatesOutputs: [],
              },
              {
                boxId: 2,
                simStatesInputs: [
                  {
                    portId: 1,
                    state: false,
                  },
                  {
                    portId: 2,
                    state: false,
                  },
                  {
                    portId: 3,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 9,
                    state: false,
                  },
                  {
                    portId: 10,
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
                  {
                    portId: 3,
                    state: false,
                  },
                ],
                simStatesOutputs: [
                  {
                    portId: 9,
                    state: false,
                  },
                  {
                    portId: 10,
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
                simStatesOutputs: [],
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
              {
                boxId: 8,
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
                connectorId: 28,
                state: false,
              },
              {
                connectorId: 29,
                state: false,
              },
              {
                connectorId: 30,
                state: false,
              },
              {
                connectorId: 31,
                state: false,
              },
              {
                connectorId: 32,
                state: false,
              },
              {
                connectorId: 33,
                state: false,
              },
              {
                connectorId: 34,
                state: true,
              },
              {
                connectorId: 35,
                state: false,
              },
              {
                connectorId: 23,
                state: false,
              },
              {
                connectorId: 13,
                state: false,
              },
              {
                connectorId: 24,
                state: false,
              },
              {
                connectorId: 12,
                state: true,
              },
              {
                connectorId: 25,
                state: false,
              },
              {
                connectorId: 11,
                state: false,
              },
              {
                connectorId: 26,
                state: false,
              },
              {
                connectorId: 10,
                state: false,
              },
              {
                connectorId: 27,
                state: false,
              },
            ],
          },
          customSketchesSupportData: [
            {
              boxId: 1,
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
                        state: false,
                      },
                    ],
                  },
                  {
                    boxId: 4,
                    simStatesInputs: [
                      {
                        portId: 8,
                        state: false,
                      },
                      {
                        portId: 9,
                        state: true,
                      },
                    ],
                    simStatesOutputs: [
                      {
                        portId: 6,
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
                        portId: 8,
                        state: true,
                      },
                      {
                        portId: 9,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [
                      {
                        portId: 6,
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
                    boxId: 9,
                    simStatesInputs: [
                      {
                        portId: 0,
                        state: true,
                      },
                    ],
                    simStatesOutputs: [],
                  },
                  {
                    boxId: 10,
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
                    connectorId: 11,
                    state: false,
                  },
                  {
                    connectorId: 16,
                    state: false,
                  },
                  {
                    connectorId: 13,
                    state: true,
                  },
                  {
                    connectorId: 15,
                    state: true,
                  },
                  {
                    connectorId: 18,
                    state: false,
                  },
                  {
                    connectorId: 20,
                    state: false,
                  },
                  {
                    connectorId: 17,
                    state: true,
                  },
                  {
                    connectorId: 19,
                    state: true,
                  },
                  {
                    connectorId: 21,
                    state: false,
                  },
                  {
                    connectorId: 23,
                    state: true,
                  },
                  {
                    connectorId: 22,
                    state: false,
                  },
                  {
                    connectorId: 24,
                    state: false,
                  },
                ],
              },
              customSketchesSupportData: [
                {
                  boxId: 4,
                  inputs: {
                    inputsState: [
                      {
                        boxId: 8,
                        state: false,
                      },
                      {
                        boxId: 9,
                        state: true,
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
                            state: true,
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
                        boxId: 2,
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
                        boxId: 3,
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
                        boxId: 6,
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
                        connectorId: 12,
                        state: false,
                      },
                      {
                        connectorId: 13,
                        state: true,
                      },
                      {
                        connectorId: 14,
                        state: true,
                      },
                      {
                        connectorId: 4,
                        state: true,
                      },
                      {
                        connectorId: 5,
                        state: true,
                      },
                      {
                        connectorId: 7,
                        state: true,
                      },
                    ],
                  },
                  customSketchesSupportData: [
                    {
                      boxId: 1,
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
                    {
                      boxId: 2,
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
                {
                  boxId: 6,
                  inputs: {
                    inputsState: [
                      {
                        boxId: 8,
                        state: true,
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
                            state: true,
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
                        boxId: 2,
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
                        boxId: 3,
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
                        boxId: 6,
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
                        connectorId: 12,
                        state: true,
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
                        state: true,
                      },
                      {
                        connectorId: 5,
                        state: true,
                      },
                      {
                        connectorId: 7,
                        state: true,
                      },
                    ],
                  },
                  customSketchesSupportData: [
                    {
                      boxId: 1,
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
                    {
                      boxId: 2,
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
                {
                  boxId: 8,
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
              boxId: 2,
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
                        state: false,
                      },
                    ],
                  },
                  {
                    boxId: 4,
                    simStatesInputs: [
                      {
                        portId: 8,
                        state: false,
                      },
                      {
                        portId: 9,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [
                      {
                        portId: 6,
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
                    boxId: 6,
                    simStatesInputs: [
                      {
                        portId: 8,
                        state: false,
                      },
                      {
                        portId: 9,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [
                      {
                        portId: 6,
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
                    boxId: 9,
                    simStatesInputs: [
                      {
                        portId: 0,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [],
                  },
                  {
                    boxId: 10,
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
                    connectorId: 11,
                    state: false,
                  },
                  {
                    connectorId: 16,
                    state: false,
                  },
                  {
                    connectorId: 13,
                    state: false,
                  },
                  {
                    connectorId: 15,
                    state: false,
                  },
                  {
                    connectorId: 18,
                    state: false,
                  },
                  {
                    connectorId: 20,
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
                    connectorId: 21,
                    state: false,
                  },
                  {
                    connectorId: 23,
                    state: false,
                  },
                  {
                    connectorId: 22,
                    state: false,
                  },
                  {
                    connectorId: 24,
                    state: false,
                  },
                ],
              },
              customSketchesSupportData: [
                {
                  boxId: 4,
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
                  customSketchesSupportData: [
                    {
                      boxId: 1,
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
                    {
                      boxId: 2,
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
                {
                  boxId: 6,
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
                  customSketchesSupportData: [
                    {
                      boxId: 1,
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
                    {
                      boxId: 2,
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
                {
                  boxId: 8,
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
                        state: false,
                      },
                    ],
                  },
                  {
                    boxId: 4,
                    simStatesInputs: [
                      {
                        portId: 8,
                        state: false,
                      },
                      {
                        portId: 9,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [
                      {
                        portId: 6,
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
                    boxId: 6,
                    simStatesInputs: [
                      {
                        portId: 8,
                        state: false,
                      },
                      {
                        portId: 9,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [
                      {
                        portId: 6,
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
                    boxId: 9,
                    simStatesInputs: [
                      {
                        portId: 0,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [],
                  },
                  {
                    boxId: 10,
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
                    connectorId: 11,
                    state: false,
                  },
                  {
                    connectorId: 16,
                    state: false,
                  },
                  {
                    connectorId: 13,
                    state: false,
                  },
                  {
                    connectorId: 15,
                    state: false,
                  },
                  {
                    connectorId: 18,
                    state: false,
                  },
                  {
                    connectorId: 20,
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
                    connectorId: 21,
                    state: false,
                  },
                  {
                    connectorId: 23,
                    state: false,
                  },
                  {
                    connectorId: 22,
                    state: false,
                  },
                  {
                    connectorId: 24,
                    state: false,
                  },
                ],
              },
              customSketchesSupportData: [
                {
                  boxId: 4,
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
                  customSketchesSupportData: [
                    {
                      boxId: 1,
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
                    {
                      boxId: 2,
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
                {
                  boxId: 6,
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
                  customSketchesSupportData: [
                    {
                      boxId: 1,
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
                    {
                      boxId: 2,
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
                {
                  boxId: 8,
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
              boxId: 9,
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
                        state: false,
                      },
                    ],
                  },
                  {
                    boxId: 4,
                    simStatesInputs: [
                      {
                        portId: 8,
                        state: false,
                      },
                      {
                        portId: 9,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [
                      {
                        portId: 6,
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
                    boxId: 6,
                    simStatesInputs: [
                      {
                        portId: 8,
                        state: false,
                      },
                      {
                        portId: 9,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [
                      {
                        portId: 6,
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
                    boxId: 9,
                    simStatesInputs: [
                      {
                        portId: 0,
                        state: false,
                      },
                    ],
                    simStatesOutputs: [],
                  },
                  {
                    boxId: 10,
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
                    connectorId: 11,
                    state: false,
                  },
                  {
                    connectorId: 16,
                    state: false,
                  },
                  {
                    connectorId: 13,
                    state: false,
                  },
                  {
                    connectorId: 15,
                    state: false,
                  },
                  {
                    connectorId: 18,
                    state: false,
                  },
                  {
                    connectorId: 20,
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
                    connectorId: 21,
                    state: false,
                  },
                  {
                    connectorId: 23,
                    state: false,
                  },
                  {
                    connectorId: 22,
                    state: false,
                  },
                  {
                    connectorId: 24,
                    state: false,
                  },
                ],
              },
              customSketchesSupportData: [
                {
                  boxId: 4,
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
                  customSketchesSupportData: [
                    {
                      boxId: 1,
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
                    {
                      boxId: 2,
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
                {
                  boxId: 6,
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
                  customSketchesSupportData: [
                    {
                      boxId: 1,
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
                    {
                      boxId: 2,
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
                {
                  boxId: 8,
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
          boxId: 14,
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
          customSketchesSupportData: [
            {
              boxId: 1,
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
            {
              boxId: 2,
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
    {
      boxId: 9,
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
    {
      boxId: 12,
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
      boxId: 15,
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
                state: false,
              },
            ],
          },
          {
            boxId: 4,
            simStatesInputs: [
              {
                portId: 8,
                state: false,
              },
              {
                portId: 9,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 6,
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
            boxId: 6,
            simStatesInputs: [
              {
                portId: 8,
                state: false,
              },
              {
                portId: 9,
                state: false,
              },
            ],
            simStatesOutputs: [
              {
                portId: 6,
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
            boxId: 9,
            simStatesInputs: [
              {
                portId: 0,
                state: false,
              },
            ],
            simStatesOutputs: [],
          },
          {
            boxId: 10,
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
            connectorId: 11,
            state: false,
          },
          {
            connectorId: 16,
            state: false,
          },
          {
            connectorId: 13,
            state: false,
          },
          {
            connectorId: 15,
            state: false,
          },
          {
            connectorId: 18,
            state: false,
          },
          {
            connectorId: 20,
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
            connectorId: 21,
            state: false,
          },
          {
            connectorId: 23,
            state: false,
          },
          {
            connectorId: 22,
            state: false,
          },
          {
            connectorId: 24,
            state: false,
          },
        ],
      },
      customSketchesSupportData: [
        {
          boxId: 4,
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
          customSketchesSupportData: [
            {
              boxId: 1,
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
            {
              boxId: 2,
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
        {
          boxId: 6,
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
          customSketchesSupportData: [
            {
              boxId: 1,
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
            {
              boxId: 2,
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
        {
          boxId: 8,
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
};
