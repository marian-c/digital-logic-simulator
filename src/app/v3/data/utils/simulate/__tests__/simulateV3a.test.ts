import { simulateV3a } from '../simulateV3a';

test('simulateV3a - simple', () => {
  // TODO: validate the input

  // [input}F---F{not}T---T{output]
  const result = simulateV3a({
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
                params: undefined,
              },
              { id: 2, kind: 'output', params: undefined },
              {
                id: 3,
                kind: 'not',
                params: undefined,
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
test('simulateV3a - customBox', () => {
  // TODO: validate the input

  // active: [input}F---F{custom(first)}T---T{output]
  // active: [input}T---T{custom(first)}F---F{output]
  // first: [input}---F{not}---{output]
  const result = simulateV3a({
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
                params: undefined,
              },
              { id: 2, kind: 'output', params: undefined },
              {
                id: 3,
                kind: 'not',
                params: undefined,
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
                params: undefined,
              },
              { id: 2, kind: 'output', params: undefined },
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
              params: undefined,
            },
            {
              id: 2,
              kind: 'output',
              params: undefined,
            },
            {
              id: 3,
              kind: 'not',
              params: undefined,
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
              params: undefined,
            },
            {
              id: 2,
              kind: 'output',
              params: undefined,
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
