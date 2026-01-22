import type { Sketch } from '@/app/v3/types/data';

export type SimulationInput = Pick<
  Sketch,
  'structure' | 'inputs' | 'simulation' | 'customSketchesSupportData'
>;

export type SimulationErrorNotStable = {
  kind: 'simulation-not-stable';
  connectorIds: number[];
};

export type SimulationErrorIncompleteSimulation = {
  kind: 'incomplete-simulation';
  deltaBox: number;
  deltaConnector: number;
};

export type SimulationErrorType = SimulationErrorNotStable | SimulationErrorIncompleteSimulation;

export type SimulationResponse<R> = {
  data: R;
  errors: SimulationErrorType[];
};
