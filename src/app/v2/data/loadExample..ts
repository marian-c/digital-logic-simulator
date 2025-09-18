import {
  structure as structure1,
  meta as meta1,
  simulation as simulation1,
  state as state1,
  inputs as inputs1,
  positions as positions1,
} from './samples/x-1';
import {
  structure as structure2,
  meta as meta2,
  simulation as simulation2,
  state as state2,
  inputs as inputs2,
  positions as positions2,
} from './samples/example-2';
import {
  structure as structure3,
  meta as meta3,
  simulation as simulation3,
  state as state3,
  inputs as inputs3,
  positions as positions3,
} from './samples/example-3';
import type { Sketch } from '@/app/v2/types/data';

export const exampleSketches: Sketch[] = [
  {
    structure: structure1,
    meta: meta1,
    simulation: simulation1,
    state: state1,
    inputs: inputs1,
    positions: positions1,
  },
  {
    structure: structure2,
    meta: meta2,
    simulation: simulation2,
    state: state2,
    inputs: inputs2,
    positions: positions2,
  },
  {
    structure: structure3,
    meta: meta3,
    simulation: simulation3,
    state: state3,
    inputs: inputs3,
    positions: positions3,
  },
];

export const defaultExampleUUID = meta1.uuid;

// TODO: maybe fetch this dynamically or something
export function loadExampleSketch(uuid: string): Sketch {
  const sketch = exampleSketches.find((s) => s.meta.uuid === uuid);
  if (!sketch) {
    throw new Error(`Sketch not found for example, looking for ${uuid}`);
  }
  return sketch;
}
