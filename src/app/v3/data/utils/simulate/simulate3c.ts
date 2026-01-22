import type { DataV3 } from '@/app/v3/types/data';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import {
  type SimulationErrorType,
  type SimulationInput,
  type SimulationResponse,
} from '@/app/v3/data/utils/simulate/types';
import type { BoxElement, InputBoxElement } from '@/app/v3/types/innerSketchStructure';
import { assertNever } from '@/helpers/basics';
/**
 * simulation version that can handle cycles while taking into account previous simulation state
 * inspiration: https://github.com/SebLague/Digital-Logic-Sim/blob/main/Assets/Scripts/Simulation/Simulator.cs#L48
 *
 * We will consider the order of the chips from the structure, it must be the responsibility of the structure
 * change to leave it in a simulatable state, also maybe when loading (cleanupAllSketches). Well.. at some point,
 * right now we just clear the simulation.
 */

// TODO: have a version of this replacing find, filter, forEach with a for loop, and test performance
// TODO: also a version with creating some initial cache maps to avoid the need to re-find things
// TODO: also for perf, inline all the helper functions, see if that helps

const REPLACE_LIMIT_1 = 10;
const REPLACE_LIMIT_2 = 15;
const REPLACE_LIMIT_3 = 20;

function getInputBoxes(simulationData: SimulationInput) {
  return simulationData.structure.main.boxElements.filter((b) => b.kind === 'input');
}

function getInputState(simulationData: SimulationInput, inputBox: InputBoxElement) {
  return simulationData.inputs.inputsState.find((s) => s.boxId === inputBox.id)!.state;
}

function getBoxConnectorsOut(simulationData: SimulationInput, box: BoxElement) {
  return simulationData.structure.main.connectorElements.filter((c) => c.fromBoxId === box.id);
}
function getBoxConnectorsIn(simulationData: SimulationInput, box: BoxElement) {
  return simulationData.structure.main.connectorElements.filter((c) => c.toBoxId === box.id);
}

function pushInputAndConnectorsSim(
  simulationData: SimulationInput,
  inputBox: InputBoxElement,
  state: boolean,
  level: number,
  pad: string,
) {
  simulationData.simulation.boxSimState.push({
    boxId: inputBox.id,
    simStatesInputs: [],
    simStatesOutputs: [{ portId: 0, state }],
  });
  const connectorsOut = getBoxConnectorsOut(simulationData, inputBox);
  connectorsOut.forEach((connectorOut) => {
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
      level === 0 &&
      console.log(
        `${pad} -- push connector ${connectorOut.label}(${connectorOut.id}) state: ${state}`,
      );
    simulationData.simulation.connectorSimState.push({ connectorId: connectorOut.id, state });
  });
}

function pushBoxFullSimState(
  simulationData: SimulationInput,
  box: BoxElement,
  ingress: [number, boolean][],
  egress: [number, boolean][],
  localState: { stopReplacing: boolean; replacedConnectorIds: Map<number, number> },
  level: number,
  pad: string,
) {
  simulationData.simulation.boxSimState.push({
    boxId: box.id,
    simStatesInputs: ingress.map(([portId, state]) => ({ portId, state })),
    simStatesOutputs: egress.map(([portId, state]) => ({ portId, state })),
  });
  const connectorsOut = getBoxConnectorsOut(simulationData, box);
  connectorsOut.forEach((connectorOut) => {
    const state = egress.find((e) => e[0] === connectorOut.fromPortId)![1];
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
      level === 0 &&
      console.log(
        `${pad} -- push connector ${connectorOut.label}(${connectorOut.id}) state: ${state}`,
      );

    const found = simulationData.simulation.connectorSimState.find(
      (s) => s.connectorId === connectorOut.id,
    );
    if (found) {
      // connector has been simulated already
      if (found.state !== state) {
        // mark the fact that it switched, hope it's enough1
        const replacedAlready = (localState.replacedConnectorIds.get(connectorOut.id) || 0) + 1;
        localState.replacedConnectorIds.set(connectorOut.id, replacedAlready);
        process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
          level === 0 &&
          console.log(`Connector ${connectorOut.id} replaced ${replacedAlready} times`);
        if (replacedAlready > REPLACE_LIMIT_2) {
          localState.stopReplacing = true;
        }
        if (replacedAlready <= REPLACE_LIMIT_2 && !localState.stopReplacing) {
          // TODO: stop replacing if only one has reached the limit
          //   because one could react the limit, others are still low and cause
          const idx = simulationData.simulation.boxSimState.findIndex(
            (bss) => bss.boxId === connectorOut.toBoxId,
          );

          if (idx !== -1) {
            process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
              level === 0 &&
              console.log(
                `${pad} -- state for connector "${connectorOut.label}"(${connectorOut.id}) has changed from:${found.state} to ${state}, removing destination ${idx}`,
              );
            simulationData.simulation.boxSimState.splice(idx, 1);
          }
          found.state = state;
        }
      }
    } else {
      simulationData.simulation.connectorSimState.push({ connectorId: connectorOut.id, state });
    }
  });
}

function getBoxConnectorInState(
  box: BoxElement,
  simulationData: SimulationInput,
  data: DataV3,
): [number, boolean][] {
  switch (box.kind) {
    case 'input':
      return [];
    case 'not':
    case 'output':
      {
        const connectorIn = simulationData.structure.main.connectorElements.find(
          (c) => c.toBoxId === box.id,
        );
        let ingress = false;
        if (connectorIn) {
          ingress = simulationData.simulation.connectorSimState.find(
            (s) => s.connectorId === connectorIn.id,
          )!.state;
        }
        return [[0, ingress]];
      }
      break;
    case 'and':
      {
        const connectorIn0 = simulationData.structure.main.connectorElements.find(
          (c) => c.toBoxId === box.id && c.toPortId === 0,
        );
        const connectorIn1 = simulationData.structure.main.connectorElements.find(
          (c) => c.toBoxId === box.id && c.toPortId === 1,
        );
        return [connectorIn0, connectorIn1].map((c, idx) => {
          let ingress = false;
          if (c) {
            ingress = simulationData.simulation.connectorSimState.find(
              (s) => s.connectorId === c.id,
            )!.state;
          }
          return [idx, ingress];
        });
      }
      break;

    case 'custom':
      {
        const customSketch = data.sketches.find((s) => s.meta.uuid === box.params.uuid)!;
        const inputsForCustomSketch = customSketch.structure.main.boxElements.filter(
          (b) => b.kind === 'input',
        );
        return inputsForCustomSketch.map((i) => {
          const connectorIn = simulationData.structure.main.connectorElements.find(
            (c) => c.toBoxId === box.id && c.toPortId === i.id,
          );
          let ingress = false;
          if (connectorIn) {
            ingress = simulationData.simulation.connectorSimState.find(
              (s) => s.connectorId === connectorIn.id,
            )!.state;
          }
          return [i.id, ingress];
        });
      }
      break;
    default:
      assertNever(box);
  }
}

function simulateSketch(
  simData: SimulationInput,
  data: DataV3,
  level: number,
): SimulationResponse<SimulationInput> {
  const errors: SimulationErrorType[] = [];
  let pad = ' '.repeat(level * 2) + `[lvl${level}]`;
  process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
    level === 0 &&
    console.log(`${pad}=== START SIMULATION ${level} ===`);
  process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
    level === 0 &&
    console.log(`${pad} all data`, JSON.parse(JSON.stringify(simData)));
  const _oldSimBoxState = simData.simulation.boxSimState;
  const oldSimConnectorState = simData.simulation.connectorSimState;
  simData.simulation.boxSimState = [];
  simData.simulation.connectorSimState = [];

  // inputs first
  getInputBoxes(simData).forEach((inputBox) => {
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
      level === 0 &&
      console.log(`${pad} handle input box "${inputBox.label}"(${inputBox.id})`);
    const state = getInputState(simData, inputBox);
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
      level === 0 &&
      console.log(`${pad} -- State for input: `, state);
    pushInputAndConnectorsSim(simData, inputBox, state, level, pad);
  });

  function findNextBoxes(): { nextBoxes: BoxElement[]; isRandom: boolean } {
    const originalPad = pad;
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
      level === 0 &&
      console.log(`${pad} -- finding ready boxes`);
    pad += '    ';
    const nextBoxes = simData.structure.main.boxElements.filter((b) => {
      if (b.kind === 'input') {
        return false;
      }

      const isSimulated = simData.simulation.boxSimState.some((s) => s.boxId === b.id);
      if (isSimulated) {
        return false;
      }

      const connectorsIn = getBoxConnectorsIn(simData, b);
      const isReady = connectorsIn.every((c) =>
        simData.simulation.connectorSimState.some((s) => s.connectorId === c.id),
      );
      process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
        level === 0 &&
        console.log(`${pad} -- box "${b.label}"(${b.id}) is ready: ${isReady}`);
      return isReady;
    });
    pad = originalPad;
    if (nextBoxes.length) {
      process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
        level === 0 &&
        console.log(`${pad} -- Found ready boxes`);
      return { nextBoxes, isRandom: false };
    }
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
      level === 0 &&
      console.log(`${pad} -- noReadyBoxes, finding a random one`);
    const randomBox = simData.structure.main.boxElements.find((b) => {
      if (b.kind === 'input' || b.kind === 'output') {
        return false;
      }

      const isSimulated = simData.simulation.boxSimState.some((s) => s.boxId === b.id);
      if (isSimulated) {
        return false;
      }
      // TODO: actually random
      return true;
    });
    if (randomBox) {
      process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
        level === 0 &&
        console.log(`${pad} -- found random box "${randomBox.label}"(${randomBox.id})`);
      const connectorsIn = simData.structure.main.connectorElements.filter(
        (c) => c.toBoxId === randomBox.id,
      );

      for (const connectorIn of connectorsIn) {
        const isSimulated = simData.simulation.connectorSimState.some(
          (s) => s.connectorId === connectorIn.id,
        );
        if (!isSimulated) {
          const connectorSimState = oldSimConnectorState.find(
            (s) => s.connectorId === connectorIn.id,
          );
          const state = connectorSimState?.state || false;
          simData.simulation.connectorSimState.push({
            connectorId: connectorIn.id,
            state,
          });
        }
      }
      return { nextBoxes: [randomBox], isRandom: true };
    } else {
      process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
        level === 0 &&
        console.log(`${pad} -- no random box found`);
      return { nextBoxes: [], isRandom: false };
    }
  }

  const state = { stopReplacing: false, replacedConnectorIds: new Map<number, number>() };
  let guard = 1;
  const limit = simData.structure.main.boxElements.length * 100;
  while (guard < limit) {
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
      level === 0 &&
      console.log(`${pad} SIM STEP ${guard}/${limit}`);
    guard++;
    const nextStuff = findNextBoxes();
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
      level === 0 &&
      console.log(`${pad} next boxes total ${nextStuff.nextBoxes.length}`);
    const boxesToSimulate = nextStuff.nextBoxes;
    if (boxesToSimulate.length === 0) {
      process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
        level === 0 &&
        console.log(`${pad} -- no more boxes to simulate`);
      break;
    }
    for (const boxToSimulate of boxesToSimulate) {
      process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
        level === 0 &&
        console.log(`${pad} BOX "${boxToSimulate.label}"(${boxToSimulate.id})`);
      const inState = getBoxConnectorInState(boxToSimulate, simData, data);
      let outState: [number, boolean][] | null;
      switch (boxToSimulate.kind) {
        case 'input':
          outState = null;
          break;
        case 'not':
          {
            outState = [[1, !inState[0]![1]]];
          }
          break;
        case 'output':
          {
            outState = [];
          }
          break;
        case 'and':
          {
            outState = [[2, inState[0]![1] && inState[1]![1]]];
          }
          break;
        case 'custom':
          {
            const additionalData = simData.customSketchesSupportData.find(
              (cssd) => cssd.boxId === boxToSimulate.id,
            )!;
            additionalData.inputs.inputsState = [];
            inState.forEach(([boxId, state]) => {
              additionalData.inputs.inputsState.push({ boxId, state });
            });

            const customSketch = data.sketches.find(
              (s) => s.meta.uuid === boxToSimulate.params.uuid,
            )!;
            process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
              level === 0 &&
              console.log(`${pad} -- about to simulate custom sketch "${customSketch.meta.name}"`);
            const simResult = simulateSketch(
              { ...additionalData, structure: customSketch.structure },
              data,
              level + 1,
            );
            errors.push(...simResult.errors);
            process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
              level === 0 &&
              console.log(`${pad} -- done`, simResult);
            outState = simResult.data.structure.main.boxElements
              .filter((b) => b.kind === 'output')
              .map((o) => {
                const state = simResult.data.simulation.boxSimState.find((s) => s.boxId === o.id)!
                  .simStatesInputs[0]!.state;
                return [o.id, state];
              });
          }
          break;
        default:
          assertNever(boxToSimulate);
      }
      process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
        level === 0 &&
        console.log(`${pad} -- State transition ${inState} => ${outState}`);
      if (outState !== null) {
        pushBoxFullSimState(simData, boxToSimulate, inState, outState, state, level, pad);
      }
    }

    const exceeded = !!state.replacedConnectorIds
      .entries()
      .find(([_, count]) => count > REPLACE_LIMIT_3);
    if (exceeded) {
      break;
    }
  }

  const exceedingConnectorIds = state.replacedConnectorIds.entries().reduce((acc, [id, count]) => {
    if (count > REPLACE_LIMIT_1) {
      acc.push(id);
    }
    return acc;
  }, [] as number[]);
  if (exceedingConnectorIds.length) {
    errors.push({ kind: 'simulation-not-stable', connectorIds: exceedingConnectorIds });
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' &&
      level === 0 &&
      console.log('%cSIMULATION NOT STABLE', 'color: red;', exceedingConnectorIds);
  }

  // TODO: error when guard is hit

  // finish up
  if (
    simData.simulation.boxSimState.length !== simData.structure.main.boxElements.length ||
    simData.simulation.connectorSimState.length !== simData.structure.main.connectorElements.length
  ) {
    // TODO: which one failed? keep track of the path to it through recusion?
    // TODO: remove alert
    alert('NOT ENOUGH SIMULATION');
  }
  return { data: simData, errors };
}

export function simulate(data: DataV3): SimulationResponse<DataV3> {
  // TODO: did we actually simulate everything?
  if (data.sketches.length === 0) {
    return { data, errors: [] };
  }

  const { structure, inputs, simulation, customSketchesSupportData } = getActiveSketch(data);
  const simulationResult = simulateSketch(
    { structure, inputs, simulation, customSketchesSupportData },
    data,
    0,
  );

  return {
    data,
    errors: simulationResult.errors,
  };
}
