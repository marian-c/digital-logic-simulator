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
        },
        {
          id: 3,
          kind: 'custom',
          params: {
            uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
          },
        },
        {
          id: 4,
          kind: 'custom',
          params: {
            uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
          },
        },
        {
          id: 9,
          kind: 'output',
          params: 'none',
        },
      ],
      connectorElements: [
        {
          id: 5,
          fromBoxId: 3,
          fromPortId: 18,
          toBoxId: 4,
          toPortId: 14,
        },
        {
          id: 6,
          fromBoxId: 4,
          fromPortId: 18,
          toBoxId: 3,
          toPortId: 15,
        },
        {
          id: 7,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 3,
          toPortId: 14,
        },
        {
          id: 8,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 4,
          toPortId: 15,
        },
        {
          id: 10,
          fromBoxId: 4,
          fromPortId: 18,
          toBoxId: 9,
          toPortId: 0,
        },
      ],
    },
  },
  meta: {
    nextId: 11,
    uuid: '019a9d1a-233a-707e-866d-8a3e8d37ed93',
    name: 'SR Latch 2',
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
          x: 450,
          y: 280,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 450,
          y: 400,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 770,
          y: 230,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 860,
          y: 400,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 1170,
          y: 360,
        },
      },
    ],
    connectorBiases: [
      {
        connectorId: 5,
        mid: 8,
        start: -15,
        end: 0,
      },
      {
        connectorId: 6,
        mid: 6,
        start: 23,
        end: -8,
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
        ],
        simStatesOutputs: [
          {
            portId: 18,
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
        connectorId: 7,
        state: false,
      },
      {
        connectorId: 8,
        state: false,
      },
      {
        connectorId: 6,
        state: true,
      },
      {
        connectorId: 5,
        state: false,
      },
      {
        connectorId: 10,
        state: true,
      },
    ],
  },
  state: {
    zoomFactor: 1,
    panX: -25,
    panY: 111,
  },
  customSketchesSupportData: [
    {
      boxId: 3,
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
};
