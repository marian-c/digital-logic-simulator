export type BoxSimulationState = {
  boxId: number;
  simStatesInputs: {
    portId: number;
    state: boolean;
  }[];
  // simStatesOutputs these are not strictly necessary, but it's faster
  //   for the simulation to do it instead walking the connector at the
  //   render time
  simStatesOutputs: {
    portId: number;
    state: boolean;
  }[];
};

// not strictly necessary since we have the inputs
// but storing connectors also, will avoid lookup at render time
export type ConnectorSimState = {
  connectorId: number;
  state: boolean;
};

export type InnerSketchSimulation = {
  boxSimState: BoxSimulationState[];
  connectorSimState: ConnectorSimState[];
};
