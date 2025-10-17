import type { Sketch } from '@/app/v3/types/data';
const {
  structure,
  meta,
  positions,
  inputs,
  simulation,
  state,
  customSketchesSupportData,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('./stress_500_close.json');

export const sketch: Sketch = {
  structure,
  meta,
  positions,
  inputs,
  simulation,
  state,
  customSketchesSupportData,
};
