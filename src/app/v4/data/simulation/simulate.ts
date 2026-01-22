import type { SketchForStorage, SketchWithSimulation } from '@/app/v4/types/data';
import type {
  BoxSimulationState,
  ConnectorSimState,
  CustomSketchesSupportData,
  SimulationErrorType,
  SimulationInput,
  SketchSimulation,
} from '@/app/v4/types/innerSketchSimulation';
import type { InputState, SketchInputs } from '@/app/v4/types/innerSketchInputs';
import { assertIsDefined, assertNever, assertTrue } from '@/helpers/basics';
import type { BoxElement } from '@/app/v4/types/innerSketchStructure';
import type { State } from '@/app/v4/types/other';
import { genNumWiresState } from '@/app/v4/data/gen-empty-sketch';

const REPLACE_LIMIT_1 = 10;
const REPLACE_LIMIT_2 = 15;
const REPLACE_LIMIT_3 = 20;

// XXX: having 3-state state everywhere forces it to be array
//   otherwise we could have replaced the array with an int plus some binary magic
function compareArr(a: unknown[], b: unknown[]) {
  if (a.length !== b.length) {
    return false;
  }
  let result = true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      result = false;
      break;
    }
  }
  return result;
}

function findNextBoxes(
  input: SimulationInput,
  result: SketchSimulation,
): { nextBoxes: BoxElement[]; isRandom: boolean } {
  // XXX: perf: we're doing a lot of work which ultimately
  //   just decides a order in which the boxes are handled
  //   and this can be cached if the structure does not change

  const nextBoxes: BoxElement[] = [];
  for (const box of input.structure.boxes) {
    if (box.kind === 'input') {
      continue;
    }

    let isSimulated = false;
    // XXX: perf: another loop in loop could benefit from indexing
    for (const bss of result.boxSimState) {
      if (bss.boxId === box.id) {
        isSimulated = true;
        break;
      }
    }
    if (isSimulated) {
      continue;
    }

    let isReady = true;
    // XXX: loop in loop
    for (const connector of input.structure.connectors) {
      if (connector.toBoxId === box.id) {
        let foundConnectorState: ConnectorSimState | null = null;
        // XXX: perf: loop in loop in loop
        for (const css of result.connectorSimState) {
          if (css.connectorId === connector.id) {
            foundConnectorState = css;
            break;
          }
        }
        if (foundConnectorState === null) {
          isReady = false;
        } else {
          process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
            assertTrue(foundConnectorState.state.kind === connector.p.numWires);
        }
      }
      if (!isReady) {
        break;
      }
    }
    if (!isReady) {
      continue;
    }

    // is ready, simulated and not input
    nextBoxes.push(box);
  }
  if (nextBoxes.length) {
    return { nextBoxes, isRandom: false };
  }
  let randomBox: BoxElement | null = null;
  for (const box of input.structure.boxes) {
    if (box.kind === 'input' || box.kind === 'output') {
      continue;
    }

    let isSimulated = false;
    // XXX: perf: another loop in loop could benefit from indexing
    for (const bss of result.boxSimState) {
      if (bss.boxId === box.id) {
        isSimulated = true;
        break;
      }
    }
    if (isSimulated) {
      continue;
    }

    // TODO: actually random
    randomBox = box;
    break;
  }
  if (!randomBox) {
    return { nextBoxes, isRandom: false };
  }

  for (const connector of input.structure.connectors) {
    if (connector.toBoxId !== randomBox.id) continue;
    let isSimulated = false;
    for (const css of result.connectorSimState) {
      if (css.connectorId === connector.id) {
        isSimulated = true;
        break;
      }
    }
    if (!isSimulated) {
      let oldState: ConnectorSimState | null = null;
      for (const oldCss of input.simulation.connectorSimState) {
        if (oldCss.connectorId === connector.id) {
          oldState = oldCss;
          break;
        }
      }
      assertIsDefined(oldState);
      process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
        assertTrue(oldState.state.kind === connector.p.numWires);
      result.connectorSimState.push({
        connectorId: connector.id,
        state: oldState.state,
      });
    }
  }
  nextBoxes.push(randomBox);
  return { nextBoxes, isRandom: true };
}

function simulateSketch(
  input: SimulationInput,
  otherSketches: SketchForStorage[],
): SketchSimulation {
  const errors: SimulationErrorType[] = [];
  const boxSimState: BoxSimulationState[] = [];
  const connectorSimState: ConnectorSimState[] = [];
  const customSketchesSupportData: CustomSketchesSupportData[] = [];
  const result: SketchSimulation = {
    errors,
    boxSimState,
    connectorSimState,
    customSketchesSupportData,
  };

  // region: INPUTS first
  for (const box of input.structure.boxes) {
    // XXX: perf: we could pre-filter the inputs ahead of time - long shot
    if (box.kind === 'input') {
      let foudInputState: InputState | null = null;
      // XXX: perf: we could map this ahead if time <inputBoxId, InputState>
      for (const inputState of input.inputs) {
        if (inputState.boxId === box.id) {
          foudInputState = inputState;
          break;
        }
      }
      assertIsDefined(foudInputState);
      process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
        assertTrue(foudInputState.state.kind === box.p.numWires);
      boxSimState.push({
        boxId: box.id,
        simStatesInputs: [],
        simStatesOutputs: [
          {
            portId: 0,
            state: foudInputState.state,
          },
        ],
      });

      // XXX: perf: we could map this ahead of time
      for (const connector of input.structure.connectors) {
        if (connector.fromBoxId === box.id) {
          process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
            assertTrue(connector.p.numWires === box.p.numWires);
          connectorSimState.push({
            connectorId: connector.id,
            state: foudInputState.state,
          });
        }
      }
    }
  }
  // endregion

  let guard = 1;
  const limit = input.structure.boxes.length * 100;
  const localState = { stopReplacing: false, replacedConnectorIds: new Map<number, number>() };

  while (guard < limit) {
    guard++;
    const nextStuff = findNextBoxes(input, result);
    if (!nextStuff.nextBoxes.length) {
      break;
    }
    for (const boxToSimulate of nextStuff.nextBoxes) {
      if (boxToSimulate.kind === 'input') continue;
      const inStateMap0: Map<number, State> = new Map();
      const inStateMap: Map<number, State> = new Map();
      const outStateMap: Map<number, State> = new Map();

      for (const connector of input.structure.connectors) {
        if (connector.toBoxId !== boxToSimulate.id) continue;
        let state: State | null = null;
        for (const css of result.connectorSimState) {
          if (css.connectorId === connector.id) {
            state = css.state;
            break;
          }
        }
        assertIsDefined(state);
        process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
          assertTrue(state.kind === connector.p.numWires);
        inStateMap0.set(connector.toPortId, state);
      }
      switch (boxToSimulate.kind) {
        case 'not':
          {
            const inState = inStateMap0.get(0) || { kind: 1, value: [false] };
            inStateMap.set(0, inState);
            process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' && assertTrue(inState.kind === 1);
            outStateMap.set(1, { kind: 1, value: [!inState.value[0]] });
          }
          break;
        case 'output':
          {
            const inState = inStateMap0.get(0) || genNumWiresState(boxToSimulate.p.numWires);
            process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
              assertTrue(inState.kind === boxToSimulate.p.numWires);
            inStateMap.set(0, inState);
          }
          break;
        case 'and':
          {
            const inState0 = inStateMap0.get(0) || genNumWiresState(1);
            const inState1 = inStateMap0.get(1) || genNumWiresState(1);
            inStateMap.set(0, inState0);
            inStateMap.set(1, inState1);
            process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
              assertTrue(inState0.kind === 1) &&
              assertTrue(inState1.kind === 1);
            outStateMap.set(2, { kind: 1, value: [inState0.value[0] && inState1.value[0]] });
          }
          break;
        case 'split':
          {
            const inState = inStateMap0.get(0) || genNumWiresState(boxToSimulate.p.fromNumWires);
            inStateMap.set(0, inState);
            process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
              assertTrue(inState.kind === boxToSimulate.p.fromNumWires);

            for (let i = 0; i < boxToSimulate.p.fromNumWires; i++) {
              outStateMap.set(i + 1, { kind: 1, value: [inState.value[i]!] });
            }
          }
          break;
        case 'join':
          {
            const values = [];
            for (let i = 0; i < boxToSimulate.p.toNumWires; i++) {
              const s = inStateMap0.get(i) || genNumWiresState(1);

              inStateMap.set(i, s);

              process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' && assertTrue(s.kind === 1);
              const v = s.value[0];
              values.push(v);
            }
            outStateMap.set(boxToSimulate.p.toNumWires, {
              kind: boxToSimulate.p.toNumWires,
              value: values as any,
            });
          }
          break;
        case 'custom':
          {
            // TODO: inline the loop
            const extra = input.simulation.customSketchesSupportData.find((cssd) => {
              return cssd.boxId === boxToSimulate.id;
            });
            assertIsDefined(extra);
            const extraSketch = otherSketches.find((os) => os.uuid === boxToSimulate.p.uuid);
            assertIsDefined(extraSketch);
            // TODO: inputs can be reused if structure does not change - first level;
            //   olso on deeper levels, the structure for sure does not change
            const inputs: SketchInputs = [];
            // TODO: inline the loop
            extraSketch.structure.boxes
              .filter((b) => b.kind === 'input')
              .forEach((inB) => {
                const inState = inStateMap0.get(inB.id) || genNumWiresState(inB.p.numWires);
                process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
                  assertTrue(inState.kind === inB.p.numWires);
                inStateMap.set(inB.id, inState);
              });
            inStateMap.entries().forEach(([boxId, state]) => {
              inputs.push({ boxId, state });
            });
            const simResult = simulateSketch(
              {
                inputs: inputs,
                structure: extraSketch.structure,
                simulation: extra.simulation,
              },
              otherSketches,
            );
            result.errors.push(...simResult.errors);
            // TODO: inline the loops
            extraSketch.structure.boxes
              .filter((b) => {
                return b.kind === 'output';
              })
              .forEach((outB) => {
                const state = simResult.boxSimState.find((bss) => bss.boxId === outB.id);
                assertIsDefined(state);
                // TODO: I skipped over some assertions
                outStateMap.set(state.boxId, state.simStatesInputs[0]!.state);
              });
            result.customSketchesSupportData.push({
              boxId: boxToSimulate.id,
              inputs,
              simulation: simResult,
            });
          }
          break;
        default:
          assertNever(boxToSimulate);
      }

      // i. START PUSHING SIM STATE FOR THIS COMPONENT
      // ii. First the box
      result.boxSimState.push({
        boxId: boxToSimulate.id,
        simStatesInputs: inStateMap
          .entries()
          .map(([portId, state]) => {
            return { portId, state };
          })
          .toArray(),
        simStatesOutputs: outStateMap
          .entries()
          .map(([portId, state]) => {
            return { portId, state };
          })
          .toArray(),
      });
      // ii. set the connectors out of this box
      for (const connector of input.structure.connectors) {
        if (connector.fromBoxId !== boxToSimulate.id) continue;
        const stateForConnector = outStateMap.get(connector.fromPortId);
        assertIsDefined(stateForConnector);
        process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
          assertTrue(connector.p.numWires === stateForConnector.kind);
        // iii. is this connector already simulated
        let connectorOutSimFound: ConnectorSimState | null = null;
        for (const css of result.connectorSimState) {
          if (css.connectorId === connector.id) {
            connectorOutSimFound = css;
            break;
          }
        }
        if (connectorOutSimFound) {
          process.env.NEXT_PUBLIC_EXTRA_CHECKS === '1' &&
            assertTrue(connectorOutSimFound.state.kind === stateForConnector.kind);
          // iv. connector is already simulated
          if (!compareArr(connectorOutSimFound.state.value, stateForConnector.value)) {
            const replacedAlready = (localState.replacedConnectorIds.get(connector.id) || 0) + 1;
            localState.replacedConnectorIds.set(connector.id, replacedAlready);

            if (replacedAlready > REPLACE_LIMIT_2) {
              localState.stopReplacing = true;
            }
            if (replacedAlready <= REPLACE_LIMIT_2 && !localState.stopReplacing) {
              connectorOutSimFound.state.value = stateForConnector.value;
              for (let i = 0, len = result.boxSimState.length; i < len; i++) {
                const bss = result.boxSimState[i]!;
                if (bss.boxId === connector.toBoxId) {
                  result.boxSimState.splice(i, 1);
                  break;
                }
              }
            }
          }
        } else {
          // iv. connector is not yet simulated, just push
          result.connectorSimState.push({ connectorId: connector.id, state: stateForConnector });
        }
      }
    }
    const exceeded = localState.replacedConnectorIds.values().some((v) => v > REPLACE_LIMIT_3);
    if (exceeded) {
      break;
    }
  }

  const exceedingConnectorIds = localState.replacedConnectorIds
    .entries()
    .filter(([, count]) => {
      return count > REPLACE_LIMIT_1;
    })
    .map(([id]) => id)
    .toArray();
  if (exceedingConnectorIds.length) {
    errors.push({
      kind: 'simulation-not-stable',
      connectorIds: exceedingConnectorIds,
    });
  }

  const deltaBox = input.structure.boxes.length - result.boxSimState.length;
  const deltaConnector = input.structure.connectors.length - result.connectorSimState.length;
  if (deltaBox !== 0 || deltaConnector !== 0) {
    errors.push({
      kind: 'incomplete-simulation',
      deltaBox,
      deltaConnector,
    });
  }

  return result;
}

export function simulate(
  sketch: SketchWithSimulation,
  otherSketches: SketchForStorage[],
): SketchSimulation {
  process.env.NEXT_PUBLIC_PERF_SIM === '1' && console.time('simulate');
  // XXX: we're throwing away the old sim state and creating it from scratch
  //   maybe it might be faster if we reuse the old instances and just flip some states
  //   especially if the structure hasn't changed
  // XXX: maybe we could index everything before simulating, finding connectors for a box
  //   for example is quite common
  const input: SimulationInput = {
    structure: sketch.structure,
    inputs: sketch.inputs,
    simulation: sketch.simulation,
  };
  const result = simulateSketch(input, otherSketches);
  process.env.NEXT_PUBLIC_PERF_SIM === '1' && console.timeEnd('simulate');

  return result;
}
