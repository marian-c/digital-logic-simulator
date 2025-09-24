import type {
  SketchStructure,
  SketchInputs,
  SketchPositions,
  SketchSimulation,
  SketchMeta,
  SketchState,
} from '@/app/v2/types/data';

export const structure: SketchStructure = {
  main: {
    boxElements: [
      { id: 1, boxElementKind: 'not' },
      { id: 2, boxElementKind: 'not' },
      { id: 3, boxElementKind: 'not' },
    ],
    connectorElements: [],
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
  positions: [
    { boxId: 0, pos: { x: 0, y: 0 } },
    { boxId: 1, pos: { x: 40, y: 40 } },
    { boxId: 2, pos: { x: 40, y: 60 } },
    { boxId: 3, pos: { x: 40, y: 80 } },
  ],
};

export const inputs: SketchInputs = {
  todo: true,
};

export const simulation: SketchSimulation = {
  todo: true,
};

export const state: SketchState = {
  zoomFactor: 1,
  panX: 0,
  panY: 0,
  focusedElementId: null,
};
