import type { SketchForStorage, SketchWithSimulation } from '@/app/v4/types/data';
import type {
  BoxSimulationState,
  CustomSketchesSupportData,
  SketchSimulation,
} from '@/app/v4/types/innerSketchSimulation';
import { assertNever } from '@/helpers/basics';
import { genNumWiresPortState, genNumWiresState } from '@/app/v4/data/gen-empty-sketch';
import type { BoxElement } from '@/app/v4/types/innerSketchStructure';

type Data = Pick<SketchForStorage, 'structure'>;

export function _genBoxSimAndExtra(
  box: BoxElement,
  allSketches: SketchForStorage[],
): [BoxSimulationState, CustomSketchesSupportData | null] {
  switch (box.kind) {
    case 'input':
      return [
        {
          boxId: box.id,
          simStatesInputs: [],
          simStatesOutputs: [{ portId: 0, state: genNumWiresState(box.p.numWires) }],
        },
        null,
      ];
    case 'output':
      return [
        {
          boxId: box.id,
          simStatesInputs: [{ portId: 0, state: genNumWiresState(box.p.numWires) }],
          simStatesOutputs: [],
        },
        null,
      ];
    case 'not':
      return [
        {
          boxId: box.id,
          simStatesInputs: [{ portId: 0, state: genNumWiresState(1) }],
          simStatesOutputs: [{ portId: 1, state: genNumWiresState(1) }],
        },
        null,
      ];
    case 'split':
      return [
        {
          boxId: box.id,
          simStatesInputs: [{ portId: 0, state: genNumWiresState(box.p.fromNumWires) }],
          simStatesOutputs: genNumWiresPortState(box.p.fromNumWires, 1),
        },
        null,
      ];
    case 'join':
      return [
        {
          boxId: box.id,
          simStatesInputs: genNumWiresPortState(box.p.toNumWires, 0),
          simStatesOutputs: [
            { portId: box.p.toNumWires, state: genNumWiresState(box.p.toNumWires) },
          ],
        },
        null,
      ];
    case 'and':
      return [
        {
          boxId: box.id,
          simStatesInputs: [
            { portId: 0, state: genNumWiresState(1) },
            { portId: 1, state: genNumWiresState(1) },
          ],
          simStatesOutputs: [{ portId: 2, state: genNumWiresState(1) }],
        },
        null,
      ];
    case 'custom': {
      const uuid = box.p.uuid;
      const sketch = allSketches.find((s) => s.uuid === uuid)!;
      const boxSim: BoxSimulationState = {
        boxId: box.id,
        simStatesInputs: [],
        simStatesOutputs: [],
      };
      const customSketchSupportData: CustomSketchesSupportData = {
        boxId: box.id,
        inputs: [],
        simulation: generateDummySimulation({ structure: sketch.structure }, allSketches),
      };
      for (const sketchBox of sketch.structure.boxes) {
        switch (sketchBox.kind) {
          case 'custom':
          case 'not':
          case 'and':
          case 'split':
          case 'join':
            break;
          case 'input':
            customSketchSupportData.inputs.push({
              boxId: sketchBox.id,
              state: genNumWiresState(sketchBox.p.numWires),
            });
            boxSim.simStatesInputs.push({
              portId: sketchBox.id,
              state: genNumWiresState(sketchBox.p.numWires),
            });
            break;
          case 'output':
            boxSim.simStatesOutputs.push({
              portId: sketchBox.id,
              state: genNumWiresState(sketchBox.p.numWires),
            });
            break;
          default:
            assertNever(sketchBox);
        }
      }
      return [boxSim, customSketchSupportData];
    }
    default:
      assertNever(box);
  }
}

function generateDummySimulation(sketch: Data, allSketches: SketchForStorage[]): SketchSimulation {
  const simulation: SketchSimulation = {
    errors: [],
    boxSimState: [],
    connectorSimState: [],
    customSketchesSupportData: [],
  };
  for (const connector of sketch.structure.connectors) {
    simulation.connectorSimState.push({
      connectorId: connector.id,
      state: genNumWiresState(connector.p.numWires),
    });
  }

  for (const box of sketch.structure.boxes) {
    // TODO: extract duplicated logic - action-structure-add.ts#_genSimForBox()
    const [sim, extra] = _genBoxSimAndExtra(box, allSketches);
    simulation.boxSimState.push(sim);
    if (extra) {
      simulation.customSketchesSupportData.push(extra);
    }
  }
  return simulation;
}

export function ensureSimulation(
  sketch: SketchForStorage,
  otherSketches: SketchForStorage[],
): SketchWithSimulation {
  if (sketch.simulation !== undefined) {
    return { ...sketch, simulation: sketch.simulation };
  }
  const allSketches = [sketch, ...otherSketches];
  const simulation = generateDummySimulation({ structure: sketch.structure }, allSketches);

  const sketchWithSimulation: SketchWithSimulation = { ...sketch, simulation };
  return sketchWithSimulation;
}
