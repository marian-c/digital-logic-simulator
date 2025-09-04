import {
  structure as structure1,
  state as state1,
  inputs as inputs1,
  positions as positions1,
} from './samples/x-1';
import {
  structure as structure2,
  state as state2,
  inputs as inputs2,
  positions as positions2,
} from './samples/example-2-default';
import {
  structure as structure3,
  state as state3,
  inputs as inputs3,
  positions as positions3,
} from './samples/example-3';
import type { Sketch } from '@/app/v2/types/data';

const exampleSketches: Record<string, Sketch> = {
  ['x-1']: { structure: structure1, state: state1, inputs: inputs1, positions: positions1 },
  ['example-2']: { structure: structure2, state: state2, inputs: inputs2, positions: positions2 },
  ['example-3']: { structure: structure3, state: state3, inputs: inputs3, positions: positions3 },
};

// TODO: fetch this dynamically or something
export function loadExampleSketch(exampleName: string): Sketch {
  const sketch = exampleSketches[exampleName];
  if (!sketch) {
    throw new Error(`Sketch not found for example, looking for ${exampleName}`);
  }
  return sketch;
}
