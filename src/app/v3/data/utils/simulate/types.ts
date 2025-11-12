import type { Sketch } from '@/app/v3/types/data';

export type SimulationData = Pick<
  Sketch,
  'structure' | 'inputs' | 'simulation' | 'customSketchesSupportData'
>;
