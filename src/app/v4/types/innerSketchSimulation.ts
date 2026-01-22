import type { SketchInputs } from '@/app/v4/types/innerSketchInputs';
import type { State } from '@/app/v4/types/other';
import type { SketchWithSimulation } from '@/app/v4/types/data';

export type BoxSimulationState = {
  boxId: number;
  simStatesInputs: {
    portId: number;
    state: State;
  }[];
  // simStatesOutputs these are not strictly necessary, but it's faster
  //   for the simulation to do it instead walking the connector at the
  //   render time
  simStatesOutputs: {
    portId: number;
    state: State;
  }[];
};

// not strictly necessary since we have the inputs
// but storing connectors also, will avoid lookup at render time
export type ConnectorSimState = {
  connectorId: number;
  state: State;
};

export type CustomSketchesSupportData = {
  boxId: number;
  inputs: SketchInputs;
  simulation: SketchSimulation;
  // TODO: is this right?
  // customSketchesSupportData: CustomSketchesSupportData[];
};

export type SketchSimulation = {
  errors: SimulationErrorType[];
  boxSimState: BoxSimulationState[];
  connectorSimState: ConnectorSimState[];
  customSketchesSupportData: CustomSketchesSupportData[];
};

export type SimulationInput = Pick<SketchWithSimulation, 'structure' | 'inputs' | 'simulation'>;

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
