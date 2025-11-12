import type {
  SketchStructure,
  SketchInputs,
  SketchPositions,
  SketchSimulation,
  SketchMeta,
  SketchState,
  Sketch,
} from '@/app/v3/types/data';

export const structure: SketchStructure = {
  main: {
    boxElements: [
      { id: 1, kind: 'not', params: 'none' },
      { id: 2, kind: 'not', params: 'none' },
      { id: 3, kind: 'not', params: 'none' },
      { id: 4, kind: 'output', params: 'none' },
      { id: 5, kind: 'input', params: 'none' },
      { id: 6, kind: 'and', params: 'none' },
    ],
    connectorElements: [
      {
        id: 7,
        fromBoxId: 1,
        fromPortId: 1,
        toBoxId: 2,
        toPortId: 0,
      },
    ],
  },
};

export const meta: SketchMeta = {
  name: 'example 1',
  description: '',
  uuid: '01992562-2f16-7c1b-b06f-f08513dcc388',
  isExample: true,
  nextId: 1000,
};

export const positions: SketchPositions = {
  boxPositions: [
    { boxId: 0, pos: { x: 30, y: 0 } },
    { boxId: 1, pos: { x: 30, y: 30 } },
    { boxId: 2, pos: { x: 30, y: 60 } },
    { boxId: 3, pos: { x: 30, y: 90 } },
    { boxId: 4, pos: { x: 100, y: 30 } },
    { boxId: 5, pos: { x: 100, y: 60 } },
    { boxId: 6, pos: { x: 30, y: 140 } },
  ],
  connectorBiases: [{ connectorId: 7, bias: 10 }],
};

export const inputs: SketchInputs = {
  inputsState: [{ boxId: 5, state: false }],
};

export const simulation: SketchSimulation = {
  boxSimState: [],
  connectorSimState: [],
};

export const state: SketchState = {
  zoomFactor: 1,
  panX: 0,
  panY: 0,
};

export const sketch: Sketch = {
  structure,
  meta,
  positions,
  inputs,
  simulation,
  state,
  customSketchesSupportData: [],
};
