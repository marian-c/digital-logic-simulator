import { simulate } from '../simulate';

test('simulate - simple', () => {
  // TODO: validate the input

  // [input}F---F{not}T---T{output]
  const result = simulate({
    sketches: [
      {
        meta: {
          uuid: '0199f15c-a047-782e-863e-5c52a1834926',
          nextId: 1000,
          isExample: true,
          name: 'first',
          isChip: true,
          description: '',
        },
        structure: {
          main: {
            boxElements: [
              {
                id: 1,
                kind: 'input',
                params: 'none',
              },
              { id: 2, kind: 'output', params: 'none' },
              {
                id: 3,
                kind: 'not',
                params: 'none',
              },
            ],
            connectorElements: [
              {
                id: 4,
                fromBoxId: 1,
                fromPortId: 0,
                toBoxId: 3,
                toPortId: 0,
              },
              {
                id: 5,
                fromBoxId: 3,
                fromPortId: 1,
                toBoxId: 2,
                toPortId: 0,
              },
            ],
          },
        },
        inputs: { inputsState: [{ boxId: 1, state: false }] },
        positions: {
          boxPositions: [
            { boxId: 1, pos: { x: 0, y: 0 } },
            { boxId: 2, pos: { x: 0, y: 0 } },
            { boxId: 3, pos: { x: 0, y: 0 } },
          ],
          connectorBiases: [
            { connectorId: 4, bias: 0 },
            { connectorId: 5, bias: 0 },
          ],
        },
        state: { zoomFactor: 1, panX: 0, panY: 0 },
        simulation: { boxSimState: [], connectorSimState: [] },
        customSketchesSupportData: [],
      },
    ],
    selectedSketchUuid: '0199f15c-a047-782e-863e-5c52a1834926',
  });

  expect(result.sketches[0]!.simulation).toMatchObject({
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
        boxId: 2,
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
        connectorId: 4,
        state: false,
      },
      {
        connectorId: 5,
        state: true,
      },
    ],
  });
});
test('simulate - customBox', () => {
  // TODO: validate the input

  // active: [input}F---F{custom(first)}T---T{output]
  // active: [input}T---T{custom(first)}F---F{output]
  // first: [input}---F{not}---{output]
  const result = simulate({
    sketches: [
      {
        meta: {
          uuid: '0199f15c-a047-782e-863e-5c52a1834926',
          nextId: 1000,
          isExample: true,
          name: 'first',
          isChip: true,
          description: '',
        },
        structure: {
          main: {
            boxElements: [
              {
                id: 1,
                kind: 'input',
                params: 'none',
              },
              { id: 2, kind: 'output', params: 'none' },
              {
                id: 3,
                kind: 'not',
                params: 'none',
              },
            ],
            connectorElements: [
              {
                id: 4,
                fromBoxId: 1,
                fromPortId: 0,
                toBoxId: 3,
                toPortId: 0,
              },
              {
                id: 5,
                fromBoxId: 3,
                fromPortId: 1,
                toBoxId: 2,
                toPortId: 0,
              },
            ],
          },
        },
        inputs: { inputsState: [{ boxId: 1, state: false }] },
        positions: {
          boxPositions: [
            { boxId: 1, pos: { x: 0, y: 0 } },
            { boxId: 2, pos: { x: 0, y: 0 } },
            { boxId: 3, pos: { x: 0, y: 0 } },
          ],
          connectorBiases: [
            { connectorId: 4, bias: 0 },
            { connectorId: 5, bias: 0 },
          ],
        },
        state: { zoomFactor: 1, panX: 0, panY: 0 },
        simulation: { boxSimState: [], connectorSimState: [] },
        customSketchesSupportData: [],
      },
      {
        meta: {
          uuid: '0199f1f3-411b-74d9-a96e-c28d634c5133',
          nextId: 1000,
          isExample: true,
          name: 'second',
          description: '',
        },
        structure: {
          main: {
            boxElements: [
              {
                id: 1,
                kind: 'input',
                params: 'none',
              },
              { id: 2, kind: 'output', params: 'none' },
              {
                id: 3,
                kind: 'custom',
                params: {
                  uuid: '0199f15c-a047-782e-863e-5c52a1834926',
                },
              },
            ],
            connectorElements: [
              {
                id: 4,
                fromBoxId: 1,
                fromPortId: 0,
                toBoxId: 3,
                toPortId: 1,
              },
              {
                id: 5,
                fromBoxId: 3,
                fromPortId: 2,
                toBoxId: 2,
                toPortId: 0,
              },
            ],
          },
        },
        inputs: { inputsState: [{ boxId: 1, state: false }] },
        positions: {
          boxPositions: [
            { boxId: 1, pos: { x: 0, y: 0 } },
            { boxId: 2, pos: { x: 0, y: 0 } },
            { boxId: 3, pos: { x: 0, y: 0 } },
          ],
          connectorBiases: [
            { connectorId: 4, bias: 0 },
            { connectorId: 5, bias: 0 },
          ],
        },
        state: { zoomFactor: 1, panX: 0, panY: 0 },
        simulation: { boxSimState: [], connectorSimState: [] },
        customSketchesSupportData: [
          {
            boxId: 3,
            simulation: { boxSimState: [], connectorSimState: [] },
            inputs: { inputsState: [] },
            customSketchesSupportData: [],
          },
        ],
      },
    ],
    selectedSketchUuid: '0199f1f3-411b-74d9-a96e-c28d634c5133',
  });

  expect(result.sketches).toMatchObject([
    {
      customSketchesSupportData: [],
      inputs: {
        inputsState: [
          {
            boxId: 1,
            state: false,
          },
        ],
      },
      meta: {
        description: '',
        isChip: true,
        isExample: true,
        name: 'first',
        nextId: 1000,
        uuid: '0199f15c-a047-782e-863e-5c52a1834926',
      },
      positions: {
        boxPositions: [
          {
            boxId: 1,
            pos: {
              x: 0,
              y: 0,
            },
          },
          {
            boxId: 2,
            pos: {
              x: 0,
              y: 0,
            },
          },
          {
            boxId: 3,
            pos: {
              x: 0,
              y: 0,
            },
          },
        ],
      },
      simulation: {
        boxSimState: [],
        connectorSimState: [],
      },
      state: {
        panX: 0,
        panY: 0,
        zoomFactor: 1,
      },
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
              kind: 'output',
              params: 'none',
            },
            {
              id: 3,
              kind: 'not',
              params: 'none',
            },
          ],
          connectorElements: [
            {
              fromBoxId: 1,
              fromPortId: 0,
              id: 4,
              toBoxId: 3,
              toPortId: 0,
            },
            {
              fromBoxId: 3,
              fromPortId: 1,
              id: 5,
              toBoxId: 2,
              toPortId: 0,
            },
          ],
        },
      },
    },
    {
      customSketchesSupportData: [
        {
          boxId: 3,
          customSketchesSupportData: [],
          inputs: {
            inputsState: [
              {
                boxId: 1,
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
                boxId: 2,
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
                connectorId: 4,
                state: false,
              },
              {
                connectorId: 5,
                state: true,
              },
            ],
          },
        },
      ],
      inputs: {
        inputsState: [
          {
            boxId: 1,
            state: false,
          },
        ],
      },
      meta: {
        description: '',
        isExample: true,
        name: 'second',
        nextId: 1000,
        uuid: '0199f1f3-411b-74d9-a96e-c28d634c5133',
      },
      positions: {
        boxPositions: [
          {
            boxId: 1,
            pos: {
              x: 0,
              y: 0,
            },
          },
          {
            boxId: 2,
            pos: {
              x: 0,
              y: 0,
            },
          },
          {
            boxId: 3,
            pos: {
              x: 0,
              y: 0,
            },
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
            simStatesInputs: [
              {
                portId: 1,
                state: false,
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
            boxId: 2,
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
            connectorId: 4,
            state: false,
          },
          {
            connectorId: 5,
            state: true,
          },
        ],
      },
      state: {
        panX: 0,
        panY: 0,
        zoomFactor: 1,
      },
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
              kind: 'output',
              params: 'none',
            },
            {
              id: 3,
              kind: 'custom',
              params: {
                uuid: '0199f15c-a047-782e-863e-5c52a1834926',
              },
            },
          ],
          connectorElements: [
            {
              fromBoxId: 1,
              fromPortId: 0,
              id: 4,
              toBoxId: 3,
              toPortId: 1,
            },
            {
              fromBoxId: 3,
              fromPortId: 2,
              id: 5,
              toBoxId: 2,
              toPortId: 0,
            },
          ],
        },
      },
    },
  ]);
});

test('simulate - customBox', () => {
  // TODO: validate the input

  // active: [input}F---F{custom(first)}T---T{output]
  // active: [input}T---T{custom(first)}F---F{output]
  // first: [input}---F{not}---{output]
  const result = simulate({
    selectedSketchUuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
    sketches: [
      {
        structure: {
          main: {
            boxElements: [
              {
                id: 1,
                kind: 'and',
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
                kind: 'custom',
                params: {
                  uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
                },
              },
              {
                id: 8,
                kind: 'not',
                params: 'none',
              },
            ],
            connectorElements: [
              {
                id: 9,
                fromBoxId: 1,
                fromPortId: 2,
                toBoxId: 6,
                toPortId: 0,
              },
              {
                id: 10,
                fromBoxId: 5,
                fromPortId: 0,
                toBoxId: 8,
                toPortId: 0,
              },
              {
                id: 11,
                fromBoxId: 8,
                fromPortId: 1,
                toBoxId: 1,
                toPortId: 1,
              },
              {
                id: 12,
                fromBoxId: 4,
                fromPortId: 0,
                toBoxId: 7,
                toPortId: 2,
              },
              {
                id: 13,
                fromBoxId: 7,
                fromPortId: 4,
                toBoxId: 1,
                toPortId: 0,
              },
            ],
          },
        },
        meta: {
          nextId: 14,
          uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
          name: 'asd',
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
                x: 810,
                y: 160,
              },
            },
            {
              boxId: 4,
              pos: {
                x: 390,
                y: 170,
              },
            },
            {
              boxId: 5,
              pos: {
                x: 390,
                y: 210,
              },
            },
            {
              boxId: 6,
              pos: {
                x: 990,
                y: 210,
              },
            },
            {
              boxId: 7,
              pos: {
                x: 550,
                y: 130,
              },
            },
            {
              boxId: 8,
              pos: {
                x: 540,
                y: 230,
              },
            },
          ],
          connectorBiases: [
            {
              connectorId: 9,
              bias: 0,
            },
            {
              connectorId: 10,
              bias: 0,
            },
            {
              connectorId: 11,
              bias: 0,
            },
            {
              connectorId: 12,
              bias: 0,
            },
            {
              connectorId: 13,
              bias: 0,
            },
          ],
        },
        inputs: {
          inputsState: [
            {
              boxId: 4,
              state: true,
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
              boxId: 7,
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
              boxId: 1,
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
              connectorId: 12,
              state: true,
            },
            {
              connectorId: 13,
              state: true,
            },
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
          ],
        },
        state: {
          zoomFactor: 1,
          panX: 0,
          panY: 0,
        },
        customSketchesSupportData: [
          {
            boxId: 7,
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
                  connectorId: 9,
                  state: true,
                },
                {
                  connectorId: 11,
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
    ],
  });
  expect(result).toMatchInlineSnapshot();
});
