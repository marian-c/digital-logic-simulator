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
  name: 'example 2',
  description: '',
  uuid: '01992560-b150-7a41-9ddb-98cf1fdd6cdc',
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
