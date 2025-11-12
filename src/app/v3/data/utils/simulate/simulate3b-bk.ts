/**
 * simulation version that can handle cycles while taking into account previous simulation state
 * inspiration: https://github.com/SebLague/Digital-Logic-Sim/blob/main/Assets/Scripts/Simulation/Simulator.cs#L48
 *
 * We will consider the order of the chips from the structure, it must be the responsibility of the structure
 * change to leave it in a simulatable state, also maybe when loading (cleanupAllSketches). Well.. at some point,
 * right now we just clear the simulation.
 */
import type { DataV3 } from '@/app/v3/types/data';
import { getActiveSketch, getConnectorComputedLabel } from '@/app/v3/data/utils/selectors';
import type { SimulationInput } from '@/app/v3/data/utils/simulate/types';
import { assertNever } from '@/helpers/basics';
import type { BoxElement } from '@/app/v3/types/innerSketchStructure';

function simulateSketch(simulationData: SimulationInput, data: DataV3, isMain = false) {
  process.env.NEXT_PUBLIC_LOGS === '1' && isMain && console.log('=== START SIMULATION ===');
  const randomsSavedForLater: number[] = [];
  const _oldSimBoxState = simulationData.simulation.boxSimState;
  const oldSimConnectorState = simulationData.simulation.connectorSimState;
  simulationData.simulation.boxSimState = [];
  simulationData.simulation.connectorSimState = [];
  // start from the inputs
  const inputBoxes = simulationData.structure.main.boxElements.filter((b) => b.kind === 'input');
  inputBoxes.forEach((inputBox) => {
    const state = simulationData.inputs.inputsState.find((s) => s.boxId === inputBox.id)!.state;
    simulationData.simulation.boxSimState.push({
      boxId: inputBox.id,
      simStatesInputs: [],
      simStatesOutputs: [{ portId: 0, state }],
    });
    process.env.NEXT_PUBLIC_LOGS === '1' &&
      isMain &&
      console.log(`[BOX-${inputBox.kind}]: "${inputBox.label}(${inputBox.id})", state: ${state}`);
    const connectors = simulationData.structure.main.connectorElements.filter(
      (c) => c.fromBoxId === inputBox.id,
    );
    for (const connector of connectors) {
      simulationData.simulation.connectorSimState.push({ connectorId: connector.id, state });
      process.env.NEXT_PUBLIC_LOGS === '1' &&
        isMain &&
        console.log(
          `[CONNECTOR]: "${getConnectorComputedLabel(connector.id, simulationData.structure)}(${connector.id})", state: ${state}`,
        );
    }
  });

  function findNextBoxes() {
    const nextBoxes = simulationData.structure.main.boxElements.filter((b) => {
      if (b.kind === 'input') {
        return false;
      }
      // find box that is not yet simulated and can be simulated;
      const isSimulated = simulationData.simulation.boxSimState.some((s) => s.boxId === b.id);
      if (isSimulated) {
        return false;
      }

      // not the random handled ones if we can help it
      if (randomsSavedForLater.includes(b.id)) {
        return false;
      }

      const connectorsIn = simulationData.structure.main.connectorElements
        .filter((c) => c.toBoxId === b.id)
        .map((c) => c.id);
      const isReady = connectorsIn.every((c) =>
        simulationData.simulation.connectorSimState.some((s) => s.connectorId === c),
      );
      return isReady;
    });

    if (!nextBoxes.length) {
      // if no boxes are ready, we need to pick a random one (first, in this case),
      //   but also pre-seed the sim state with old sim state
      // XXX: ignore the ones that have been simulated and deleted, leave those for the end
      const randomBox = simulationData.structure.main.boxElements.find((b) => {
        if (b.kind === 'input') {
          return false;
        }
        const isSimulated = simulationData.simulation.boxSimState.some((s) => s.boxId === b.id);
        if (isSimulated) {
          return false;
        }
        // not the random handled ones if we can help it
        if (randomsSavedForLater.includes(b.id)) {
          return false;
        }
        return true;
      });
      if (randomBox) {
        // make sure all connectors are simulated
        const connectorsIn = simulationData.structure.main.connectorElements.filter(
          (c) => c.toBoxId === randomBox.id,
        );

        const connectorsWithOldState: number[] = [];
        for (const connectorIn of connectorsIn) {
          const isSimulated = simulationData.simulation.connectorSimState.some(
            (s) => s.connectorId === connectorIn.id,
          );
          if (!isSimulated) {
            const connectorSimState = oldSimConnectorState.find(
              (s) => s.connectorId === connectorIn.id,
            );
            if (connectorSimState !== undefined) {
              connectorsWithOldState.push(connectorIn.id);
            }
            simulationData.simulation.connectorSimState.push({
              connectorId: connectorIn.id,
              state: connectorSimState?.state || false,
            });
          }
        }
        return { randomBox, connectorsWithOldState };
      } else {
        return randomsSavedForLater.map(
          (id) => simulationData.structure.main.boxElements.find((b) => b.id === id)!,
        );
      }
    }

    return nextBoxes;
  }
  let guard = 1000;
  while (true && guard > 0) {
    process.env.NEXT_PUBLIC_LOGS === '1' && isMain && console.log('SIM STEP', 1000 - guard);
    // TODO: alert & handle when guard is hit
    if (guard === 1) {
      console.error('Simulate3b: guard hit!');
    }
    guard--;
    const boxesToSimulate = findNextBoxes();
    if (Array.isArray(boxesToSimulate) && boxesToSimulate.length === 0) {
      process.env.NEXT_PUBLIC_LOGS === '1' && isMain && console.log(' no more boxes to simulate');
      break;
    }
    let boxes: BoxElement[] = [];
    let randomSimData: {
      randomBox: BoxElement;
      connectorsWithOldState: number[];
    } | null = null;
    if (!Array.isArray(boxesToSimulate)) {
      boxes = [boxesToSimulate.randomBox];
      randomSimData = boxesToSimulate;
      process.env.NEXT_PUBLIC_LOGS === '1' &&
        isMain &&
        console.log(
          `found random box to simulate "${boxesToSimulate.randomBox.label}"(${boxesToSimulate.randomBox.id})`,
        );
      process.env.NEXT_PUBLIC_LOGS === '1' &&
        isMain &&
        boxesToSimulate.connectorsWithOldState.forEach((c) => {
          console.log(
            `   connectorWithOldState: "${getConnectorComputedLabel(c, simulationData.structure)}"(${c})`,
          );
        });
    } else {
      boxes = boxesToSimulate;
      process.env.NEXT_PUBLIC_LOGS === '1' && isMain && console.log('found some boxes to simulate');
      process.env.NEXT_PUBLIC_LOGS === '1' &&
        isMain &&
        boxes.forEach((b) => {
          console.log(`    box to simulate:  "${b.label}"(${b.id})`);
        });
    }

    for (const boxToSimulate of boxes) {
      const wasSavedForLaterIdx = randomsSavedForLater.indexOf(boxToSimulate.id);
      switch (boxToSimulate.kind) {
        case 'input':
          // already handled
          break;
        case 'not':
          {
            const connectorIn = simulationData.structure.main.connectorElements.find(
              (c) => c.toBoxId === boxToSimulate.id,
            );
            let ingress = false;
            if (connectorIn) {
              ingress = simulationData.simulation.connectorSimState.find(
                (s) => s.connectorId === connectorIn.id,
              )!.state;
            }
            const out = !ingress;
            simulationData.simulation.boxSimState.push({
              boxId: boxToSimulate.id,
              simStatesInputs: [{ portId: 0, state: ingress }],
              simStatesOutputs: [{ portId: 1, state: out }],
            });
            const connectorsOut = simulationData.structure.main.connectorElements.filter(
              (c) => c.fromBoxId === boxToSimulate.id,
            );
            for (const connectorOut of connectorsOut) {
              // if it's there, don't push a duplicate and check it hasn't changed only if this wasn't saved for later
              const found = simulationData.simulation.connectorSimState.find(
                (css) => css.connectorId === connectorOut.id,
              );
              if (found) {
                const wasSavedForLater = randomsSavedForLater.includes(boxToSimulate.id);
                if (found.state !== out && !wasSavedForLater) {
                  return {
                    kind: 'error',
                    type: 'connector-loop-conflict',
                    message: `Connector ${getConnectorComputedLabel(connectorOut.id, simulationData.structure)}(${connectorOut.id}) has changed state from ${found.state} to ${out} during simulation`,
                  };
                } else {
                  found.state = out;
                }
              } else {
                simulationData.simulation.connectorSimState.push({
                  connectorId: connectorOut.id,
                  state: out,
                });
              }
            }
          }
          break;
        case 'and':
          {
            const connectorIn0 = simulationData.structure.main.connectorElements.find(
              (c) => c.toBoxId === boxToSimulate.id && c.toPortId === 0,
            );
            const connectorIn1 = simulationData.structure.main.connectorElements.find(
              (c) => c.toBoxId === boxToSimulate.id && c.toPortId === 1,
            );
            let ingress0 = false;
            let ingress1 = false;
            if (connectorIn0) {
              ingress0 = simulationData.simulation.connectorSimState.find(
                (s) => s.connectorId === connectorIn0.id,
              )!.state;
            }
            if (connectorIn1) {
              ingress1 = simulationData.simulation.connectorSimState.find(
                (s) => s.connectorId === connectorIn1.id,
              )!.state;
            }
            const out = ingress0 && ingress1;
            simulationData.simulation.boxSimState.push({
              boxId: boxToSimulate.id,
              simStatesInputs: [
                { portId: 0, state: ingress0 },
                { portId: 1, state: ingress1 },
              ],
              simStatesOutputs: [{ portId: 2, state: out }],
            });
            const connectorsOut = simulationData.structure.main.connectorElements.filter(
              (c) => c.fromBoxId === boxToSimulate.id,
            );
            for (const connectorOut of connectorsOut) {
              // if it's there, don't push a duplicate and check it hasn't changed only if this wasn't saved for later
              const found = simulationData.simulation.connectorSimState.find(
                (css) => css.connectorId === connectorOut.id,
              );
              if (found) {
                const wasSavedForLater = randomsSavedForLater.includes(boxToSimulate.id);
                if (found.state !== out && !wasSavedForLater) {
                  return {
                    kind: 'error',
                    type: 'connector-loop-conflict',
                    message: `Connector ${getConnectorComputedLabel(connectorOut.id, simulationData.structure)}(${connectorOut.id}) has changed state from ${found.state} to ${out} during simulation`,
                  };
                } else {
                  found.state = out;
                }
              } else {
                simulationData.simulation.connectorSimState.push({
                  connectorId: connectorOut.id,
                  state: out,
                });
              }
            }
          }
          break;
        case 'output':
          {
            const connectorIn = simulationData.structure.main.connectorElements.find(
              (c) => c.toBoxId === boxToSimulate.id,
            );
            let ingress = false;
            if (connectorIn) {
              ingress = simulationData.simulation.connectorSimState.find(
                (s) => s.connectorId === connectorIn.id,
              )!.state;
            }
            simulationData.simulation.boxSimState.push({
              boxId: boxToSimulate.id,
              simStatesInputs: [{ portId: 0, state: ingress }],
              simStatesOutputs: [],
            });
          }
          break;
        case 'custom':
          {
            process.env.NEXT_PUBLIC_LOGS === '1' &&
              isMain &&
              console.log(`Simulating custom box "${boxToSimulate.label}"(${boxToSimulate.id})`);
            const customSketch = data.sketches.find(
              (s) => s.meta.uuid === boxToSimulate.params.uuid,
            )!;
            const additionalData = simulationData.customSketchesSupportData.find(
              (cssd) => cssd.boxId === boxToSimulate.id,
            )!;
            additionalData.inputs.inputsState = [];
            const inputsForCustomSketch = customSketch.structure.main.boxElements.filter(
              (b) => b.kind === 'input',
            );
            inputsForCustomSketch.forEach((input) => {
              let state = false;
              const connector = simulationData.structure.main.connectorElements.find((c) => {
                return c.toBoxId === boxToSimulate.id && c.toPortId === input.id;
              });
              if (connector) {
                const connectorSimState = simulationData.simulation.connectorSimState.find(
                  (s) => s.connectorId === connector.id,
                );
                if (connectorSimState) {
                  state = connectorSimState.state;
                }
              }
              additionalData.inputs.inputsState.push({ boxId: input.id, state });
            });
            simulateSketch({ ...additionalData, structure: customSketch.structure }, data);
            const handled = {
              boxId: boxToSimulate.id,
              simStatesInputs: additionalData.inputs.inputsState.map((i) => {
                return { portId: i.boxId, state: i.state };
              }),
              simStatesOutputs: customSketch.structure.main.boxElements
                .filter((b) => b.kind === 'output')
                .map((o) => {
                  return {
                    portId: o.id,
                    state: additionalData.simulation.boxSimState.find((s) => s.boxId === o.id)!
                      .simStatesInputs[0]!.state,
                  };
                }),
            };
            simulationData.simulation.boxSimState.push(handled);
            for (const output of handled.simStatesOutputs) {
              const connectors = simulationData.structure.main.connectorElements.filter(
                function (connector) {
                  return (
                    connector.fromBoxId === boxToSimulate.id &&
                    connector.fromPortId === output.portId
                  );
                },
              );
              process.env.NEXT_PUBLIC_LOGS === '1' &&
                isMain &&
                console.log(
                  'connectors',
                  connectors.map((c) => getConnectorComputedLabel(c.id, simulationData.structure)),
                );
              for (const connectorOut of connectors) {
                // if it's there, don't push a duplicate and check it hasn't changed only if this wasn't saved for later
                const found = simulationData.simulation.connectorSimState.find(
                  (css) => css.connectorId === connectorOut.id,
                );
                process.env.NEXT_PUBLIC_LOGS === '1' && isMain && console.log('->>found', found);
                if (found) {
                  const wasSavedForLater = randomsSavedForLater.includes(boxToSimulate.id);
                  process.env.NEXT_PUBLIC_LOGS === '1' &&
                    isMain &&
                    console.log('->>wasSavedForLater', wasSavedForLater);
                  if (found.state !== output.state && !wasSavedForLater) {
                    console.error({
                      kind: 'error',
                      type: 'connector-loop-conflict',
                      message: `Connector ${getConnectorComputedLabel(connectorOut.id, simulationData.structure)}(${connectorOut.id}) has changed state from ${found.state} to ${output.state} during simulation`,
                    });
                    return {
                      kind: 'error',
                      type: 'connector-loop-conflict',
                      message: `Connector ${getConnectorComputedLabel(connectorOut.id, simulationData.structure)}(${connectorOut.id}) has changed state from ${found.state} to ${output.state} during simulation`,
                    };
                  } else {
                    process.env.NEXT_PUBLIC_LOGS === '1' &&
                      process.env.NEXT_PUBLIC_LOGS === '1' &&
                      isMain &&
                      console.log('->>settings state', output.state);
                    found.state = output.state;
                  }
                } else {
                  process.env.NEXT_PUBLIC_LOGS === '1' &&
                    isMain &&
                    console.log(`->>pushing state ${connectorOut.id}`, output.state);
                  simulationData.simulation.connectorSimState.push({
                    connectorId: connectorOut.id,
                    state: output.state,
                  });
                }
              }
            }
          }
          break;
        default:
          assertNever(boxToSimulate);
      }
      // remove from randoms saved for later if it's there
      if (wasSavedForLaterIdx !== -1) {
        randomsSavedForLater.splice(wasSavedForLaterIdx, 1);
      }
    }

    if (randomSimData !== null) {
      // this box was simulated based off the old state, remove that assumption and this box sim
      // and allow it to be simulated again; leave the output because on the next iteration,
      const idx = simulationData.simulation.boxSimState.findIndex(
        (b) => b.boxId === randomSimData.randomBox.id,
      );
      process.env.NEXT_PUBLIC_LOGS === '1' &&
        isMain &&
        console.log(
          `Random box was simulated "${randomSimData.randomBox.label}"(${randomSimData.randomBox.id})"`,
        );
      process.env.NEXT_PUBLIC_LOGS === '1' &&
        isMain &&
        console.log(
          '   removing old state for it: ',
          simulationData.simulation.boxSimState[idx]!.simStatesOutputs[0],
        );
      simulationData.simulation.boxSimState.splice(idx, 1);
      for (const connectorId of randomSimData.connectorsWithOldState) {
        // could just be a reversed for loop
        const idx = simulationData.simulation.connectorSimState.findIndex(
          (c) => c.connectorId === connectorId,
        );
        process.env.NEXT_PUBLIC_LOGS === '1' &&
          isMain &&
          console.log(
            `   and removing old state for connector: ${getConnectorComputedLabel(connectorId, simulationData.structure)}(${connectorId})`,
          );
        simulationData.simulation.connectorSimState.splice(idx, 1);
      }
      // make a note of this random box so we leave it to the end
      randomsSavedForLater.push(randomSimData.randomBox.id);
    }
  }
  process.env.NEXT_PUBLIC_LOGS === '1' &&
    isMain &&
    console.log(`=== END SIMULATION - ${1000 - guard} guards used ===`);
  return simulationData;
}

export function simulate(data: DataV3): DataV3 {
  // TODO: did we actually simulate everything?
  if (data.sketches.length === 0) {
    return data;
  }

  const { structure, inputs, simulation, customSketchesSupportData } = getActiveSketch(data);
  simulateSketch({ structure, inputs, simulation, customSketchesSupportData }, data, true);

  // TODO: if after handling all the starting points and their dependencies,
  //   we still have unsolved boxes, the rest are in a cycle and we need to pic a random one maybe
  //   or detect the cycle and apply "the" fix

  return data;
}
