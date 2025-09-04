import { sketch as sketch1 } from './samples/x-1';
import { sketch as sketch2 } from './samples/example-2-default';
import { sketch as sketch3 } from './samples/example-3';
import type { Sketch } from '@/app/v2/types/data';

const sketches: Record<string, Sketch> = {
  ['x-1']: sketch1,
  ['example-2']: sketch2,
  ['example-3']: sketch3,
};

export type Example = { sketch: Sketch };

// TODO: fetch this dynamically or something
export function loadExample(exampleName: string): Example {
  const sketch = sketches[exampleName];
  if (!sketch) {
    throw new Error(`Sketch not found for example, looking for ${exampleName}`);
  }
  return {
    sketch,
  };
}
