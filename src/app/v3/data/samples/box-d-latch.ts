import type { Sketch } from '@/app/v3/types/data';

export const sketch: Sketch = {
  structure: {
    main: {
      boxElements: [
        {
          id: 1,
          kind: 'input',
          params: 'none',
          label: 'DATA',
        },
        {
          id: 2,
          kind: 'input',
          params: 'none',
          label: 'STORE',
        },
        {
          id: 3,
          kind: 'and',
          params: 'none',
        },
        {
          id: 4,
          kind: 'and',
          params: 'none',
        },
        {
          id: 5,
          kind: 'custom',
          params: {
            uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
          },
        },
        {
          id: 6,
          kind: 'custom',
          params: {
            uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
          },
        },
        {
          id: 11,
          kind: 'output',
          params: 'none',
        },
        {
          id: 15,
          kind: 'not',
          params: 'none',
        },
      ],
      connectorElements: [
        {
          id: 7,
          fromBoxId: 5,
          fromPortId: 18,
          toBoxId: 6,
          toPortId: 14,
        },
        {
          id: 8,
          fromBoxId: 6,
          fromPortId: 18,
          toBoxId: 5,
          toPortId: 15,
        },
        {
          id: 9,
          fromBoxId: 3,
          fromPortId: 2,
          toBoxId: 5,
          toPortId: 14,
        },
        {
          id: 10,
          fromBoxId: 4,
          fromPortId: 2,
          toBoxId: 6,
          toPortId: 15,
        },
        {
          id: 12,
          fromBoxId: 6,
          fromPortId: 18,
          toBoxId: 11,
          toPortId: 0,
        },
        {
          id: 13,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 3,
          toPortId: 0,
        },
        {
          id: 14,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 3,
          toPortId: 1,
        },
        {
          id: 16,
          fromBoxId: 1,
          fromPortId: 0,
          toBoxId: 15,
          toPortId: 0,
        },
        {
          id: 17,
          fromBoxId: 2,
          fromPortId: 0,
          toBoxId: 4,
          toPortId: 0,
        },
        {
          id: 18,
          fromBoxId: 15,
          fromPortId: 1,
          toBoxId: 4,
          toPortId: 1,
        },
      ],
    },
  },
  meta: {
    nextId: 19,
    uuid: '019aa855-8e49-71e9-8849-0a546951199e',
    name: 'D Latch',
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
          x: 440,
          y: 200,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 440,
          y: 330,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 680,
          y: 160,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 680,
          y: 340,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 870,
          y: 180,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 970,
          y: 340,
        },
      },
      {
        boxId: 11,
        pos: {
          x: 1290,
          y: 250,
        },
      },
      {
        boxId: 15,
        pos: {
          x: 560,
          y: 390,
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
  state: {
    zoomFactor: 1,
    panX: 0,
    panY: 0,
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
};
