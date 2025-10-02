import type { Sketch } from '@/app/v3/types/data';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {
  structure,
  meta,
  positions,
  inputs,
  simulation,
  state,
} = require('./stress_100_close.json');

export const sketch: Sketch = {
  structure,
  meta,
  positions,
  inputs,
  simulation,
  state,
};
