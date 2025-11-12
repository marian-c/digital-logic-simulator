import type { DataV3 } from '@/app/v3/types/data';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import {
  isSimulationError,
  simulationError,
  type SimulationInput,
  type SimulationResponse,
  simulationSuccess,
} from '@/app/v3/data/utils/simulate/types';
/**
 * simulation version that can handle cycles while taking into account previous simulation state
 * inspiration: https://github.com/SebLague/Digital-Logic-Sim/blob/main/Assets/Scripts/Simulation/Simulator.cs#L48
 *
 * We will consider the order of the chips from the structure, it must be the responsibility of the structure
 * change to leave it in a simulatable state, also maybe when loading (cleanupAllSketches). Well.. at some point,
 * right now we just clear the simulation.
 */

function simulateSketch(
  _simulationData: SimulationInput,
  _data: DataV3,
  _isMain = false,
): SimulationResponse<SimulationInput> {
  return 1 as any;
}

export function simulate(data: DataV3): SimulationResponse<DataV3> {
  // TODO: did we actually simulate everything?
  if (data.sketches.length === 0) {
    return simulationSuccess(data);
  }

  const { structure, inputs, simulation, customSketchesSupportData } = getActiveSketch(data);
  const simulationResult = simulateSketch(
    { structure, inputs, simulation, customSketchesSupportData },
    data,
    true,
  );
  if (isSimulationError(simulationResult)) {
    return simulationError({ ...simulationResult, data });
  }
  return simulationSuccess(data);
}
