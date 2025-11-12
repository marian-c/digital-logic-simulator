import { assertNever } from '@/helpers/basics';
import type { DataV3 } from '@/app/v3/types/data';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import type {
  AndBoxElement,
  BoxElement,
  CustomBoxElement,
  InputBoxElement,
  NotBoxElement,
  OutputBoxElement,
} from '@/app/v3/types/innerSketchStructure';
import type { BoxSimulationState } from '@/app/v3/types/innerSketchSimulation';
import { getElementsWithoutOutput, getUpstreamBox } from '@/app/v3/data/utils/simulate/helpers';
import type { SimulationData } from '@/app/v3/data/utils/simulate/types';

/**
 * Strategy: start simulating from the extremities of the graph,
 * then recurse up until the dependency chain is solved
 */

/**
 * +-------+
 * | INPUT |----O
 * +-------+
 */
function handleInputBox(
  boxElement: InputBoxElement,
  simulationData: SimulationData,
  _data: DataV3,
): BoxSimulationState {
  const { inputs } = simulationData;
  // TODO: handle not found either by throwing or validating at the beginning
  const state = inputs.inputsState.find((s) => s.boxId === boxElement.id)!.state;
  return {
    boxId: boxElement.id,
    simStatesInputs: [],
    simStatesOutputs: [{ portId: 0, state }],
  };
}

/**
 *      +--------+
 * 0----| OUTPUT |
 *      +--------+
 */
function handleOutputBox(
  boxElement: OutputBoxElement,
  simulationData: SimulationData,
  data: DataV3,
): BoxSimulationState {
  const ingress = getUpstreamSignal(boxElement.id, 0, simulationData, data) || false;
  return {
    boxId: boxElement.id,
    simStatesInputs: [{ portId: 0, state: ingress }],
    simStatesOutputs: [],
  };
}

/**
 *      +-------+
 * O----|  NOT  |----1
 *      +-------+
 */
function handleNotBox(
  boxElement: NotBoxElement,
  simulaationData: SimulationData,
  data: DataV3,
): BoxSimulationState {
  const ingress = getUpstreamSignal(boxElement.id, 0, simulaationData, data) || false;
  const out = !ingress;
  return {
    boxId: boxElement.id,
    simStatesInputs: [{ portId: 0, state: ingress }],
    simStatesOutputs: [{ portId: 1, state: out }],
  };
}

/**
 *      +-------+
 * O----|       |
 *      |  AND  |----2
 * 1----|       |
 *      +-------+
 */
function handleAndBox(
  boxElement: AndBoxElement,
  simulationData: SimulationData,
  data: DataV3,
): BoxSimulationState {
  const in0 = getUpstreamSignal(boxElement.id, 0, simulationData, data) || false;
  const in1 = getUpstreamSignal(boxElement.id, 1, simulationData, data) || false;
  const out = in0 && in1;
  return {
    boxId: boxElement.id,
    simStatesInputs: [
      { portId: 0, state: in0 },
      { portId: 1, state: in1 },
    ],
    simStatesOutputs: [{ portId: 2, state: out }],
  };
}

/**
 *      +----------+
 * O----|          |---- n+1
 * .    |          |      .
 * .    |  custom  |      .
 * .    |          |      .
 * n----|          |---- n+m
 *      +----------+
 */
function handleCustomBox(
  boxElement: CustomBoxElement,
  simulationData: SimulationData,
  data: DataV3,
): BoxSimulationState {
  const customSketch = data.sketches.find((s) => s.meta.uuid === boxElement.params.uuid)!;

  const inputsForCustomSketch = customSketch.structure.main.boxElements.filter((boxElement) => {
    return boxElement.kind === 'input';
  });

  const supportData = simulationData.customSketchesSupportData.find(
    (cssd) => cssd.boxId === boxElement.id,
  )!;

  // TODO: maybe don't reset and re-use the instances and only change the `state`.
  supportData.inputs.inputsState = [];

  inputsForCustomSketch.forEach((input) => {
    const signal = getUpstreamSignal(boxElement.id, input.id, simulationData, data) || false;
    supportData.inputs.inputsState.push({
      boxId: input.id,
      state: signal,
    });
  });

  simulateSketch({ ...supportData, structure: customSketch.structure }, data);
  return {
    boxId: boxElement.id,
    simStatesInputs: supportData.inputs.inputsState.map((i) => {
      return { portId: i.boxId, state: i.state };
    }),
    simStatesOutputs: customSketch.structure.main.boxElements
      .filter((b) => b.kind === 'output')
      .map((o) => {
        return {
          portId: o.id,
          state: supportData.simulation.boxSimState.find((s) => s.boxId === o.id)!
            .simStatesInputs[0]!.state,
        };
      }),
  };
}

function getUpstreamSignal(
  originBoxId: number,
  portNumber: number,
  simulationData: SimulationData,
  data: DataV3,
) {
  const upstream = getUpstreamBox(originBoxId, portNumber, simulationData);
  if (!upstream) {
    return undefined;
  }
  const [upstreamBox, upstreamConnector] = upstream;
  const sim = handleBox(upstreamBox, simulationData, data);
  const ingress =
    sim.simStatesOutputs.find((o) => o.portId === upstreamConnector.fromPortId)!.state || false;
  return ingress;
}

function handleBox(
  boxToHandle: BoxElement,
  simulationData: SimulationData,
  data: DataV3,
): BoxSimulationState {
  // TODO: detect cycles and fix some how (random?)

  const { structure, simulation } = simulationData;
  const simulated = simulation.boxSimState.find((s) => s.boxId === boxToHandle.id);
  if (simulated) {
    return simulated;
  }

  let handled: BoxSimulationState;

  switch (boxToHandle.kind) {
    case 'input':
      handled = handleInputBox(boxToHandle, simulationData, data);
      break;
    case 'output':
      handled = handleOutputBox(boxToHandle, simulationData, data);
      break;
    case 'not':
      handled = handleNotBox(boxToHandle, simulationData, data);
      break;
    case 'and':
      handled = handleAndBox(boxToHandle, simulationData, data);
      break;
    case 'custom':
      handled = handleCustomBox(boxToHandle, simulationData, data);
      break;
    default:
      assertNever(boxToHandle);
  }

  handled.simStatesOutputs.forEach((output) => {
    const connectors = structure.main.connectorElements.filter(function (connector) {
      return connector.fromBoxId === boxToHandle.id && connector.fromPortId === output.portId;
    });
    for (const connector of connectors) {
      simulation.connectorSimState.push({
        connectorId: connector.id,
        state: output.state,
      });
    }
  });
  simulation.boxSimState.push(handled);
  return handled;
}

function simulateSketch(simulationData: SimulationData, data: DataV3) {
  // clean old sim data
  // TODO: maybe if we don't clean it up we can avoid recreating all those objects
  //   and just mutate what's there
  simulationData.simulation.boxSimState = [];
  simulationData.simulation.connectorSimState = [];

  // start from the pieces that don't have outputs
  const startingPoints = getElementsWithoutOutput(simulationData, data);

  startingPoints.forEach((box) => {
    handleBox(box, simulationData, data);
  });

  // TODO: have we handled all the pieces?
}

export function simulate(data: DataV3): DataV3 {
  if (data.sketches.length === 0) {
    return data;
  }

  const { structure, inputs, simulation, customSketchesSupportData } = getActiveSketch(data);
  simulateSketch({ structure, inputs, simulation, customSketchesSupportData }, data);

  // TODO: if after handling all the starting points and their dependencies,
  //   we still have unsolved boxes, the rest are in a cycle and we need to pic a random one maybe
  //   or detect the cycle and apply "the" fix

  return data;
}
