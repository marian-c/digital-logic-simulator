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
    boxElements: [],
    connectorElements: [],
  },
};

export const meta: SketchMeta = {
  name: 'example 3',
  description: '',
  uuid: '01992561-7247-7216-8422-ee17075804e8',
  isExample: true,
  nextId: 1000,
};

export const positions: SketchPositions = {
  positions: [{ boxId: 0, pos: { x: 0, y: 0 } }],
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
