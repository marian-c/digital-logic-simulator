/**
 * simulation version that can handle cycles while taking into account previous simulation state
 * inspiration: https://github.com/SebLague/Digital-Logic-Sim/blob/main/Assets/Scripts/Simulation/Simulator.cs#L48
 *
 * We will consider the order of the chips from the structure, it must be the responsibility of the structure
 * change to leave it in a simulatable state, also maybe when loading (cleanupAllSketches). Well.. at some point,
 * right now we just clear the simulation.
 */
import type { DataV3 } from '@/app/v3/types/data';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import type { SimulationData } from '@/app/v3/data/utils/simulate/types';
import { assertNever } from '@/helpers/basics';

function simulateSketch(simulationData: SimulationData, data: DataV3) {
  console.log('simulateSketch');
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
    const connectors = simulationData.structure.main.connectorElements.filter(
      (c) => c.fromBoxId === inputBox.id,
    );
    for (const connector of connectors) {
      simulationData.simulation.connectorSimState.push({ connectorId: connector.id, state });
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
      const randomBox = simulationData.structure.main.boxElements.find((b) => {
        if (b.kind === 'input') {
          return false;
        }
        const isSimulated = simulationData.simulation.boxSimState.some((s) => s.boxId === b.id);
        if (isSimulated) {
          return false;
        }
        return true;
      });
      if (randomBox) {
        // make sure all connectors are simulated
        const connectorsIn = simulationData.structure.main.connectorElements.filter(
          (c) => c.toBoxId === randomBox.id,
        );
        for (const connectorIn of connectorsIn) {
          const isSimulated = simulationData.simulation.connectorSimState.some(
            (s) => s.connectorId === connectorIn.id,
          );
          if (!isSimulated) {
            const connectorSimState = oldSimConnectorState.find(
              (s) => s.connectorId === connectorIn.id,
            );
            simulationData.simulation.connectorSimState.push({
              connectorId: connectorIn.id,
              state: connectorSimState?.state || false,
            });
          }
        }
        return [randomBox];
      }
    }

    return nextBoxes;
  }
  let guard = 10;
  while (true && guard > 0) {
    // TODO: alert when guard is hit
    guard--;
    const boxesToSimulate = findNextBoxes();
    if (boxesToSimulate.length === 0) {
      break;
    }
    for (const boxToSimulate of boxesToSimulate) {
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
              simulationData.simulation.connectorSimState.push({
                connectorId: connectorOut.id,
                state: out,
              });
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
              simulationData.simulation.connectorSimState.push({
                connectorId: connectorOut.id,
                state: out,
              });
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
            handled.simStatesOutputs.forEach((output) => {
              const connectors = simulationData.structure.main.connectorElements.filter(
                function (connector) {
                  return (
                    connector.fromBoxId === boxToSimulate.id &&
                    connector.fromPortId === output.portId
                  );
                },
              );
              for (const connector of connectors) {
                simulationData.simulation.connectorSimState.push({
                  connectorId: connector.id,
                  state: output.state,
                });
              }
            });
          }
          break;
        default:
          assertNever(boxToSimulate);
      }
    }
  }
  return simulationData;
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
