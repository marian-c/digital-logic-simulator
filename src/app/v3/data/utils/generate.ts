import type {
  AndBoxElement,
  BoxElement,
  BoxParams,
  CustomBoxElement,
  InputBoxElement,
  NotBoxElement,
  OutputBoxElement,
} from '@/app/v3/types/innerSketchStructure';
import { assertNever } from '@/helpers/basics';
import type { BoxSimulationState, ConnectorSimState } from '@/app/v3/types/innerSketchSimulation';
import type { InputState } from '@/app/v3/types/innerSketchInputs';
import type { CustomSketchesSupportData, DataV3, Sketch } from '@/app/v3/types/data';

export function genNewBox(boxId: number, boxParams: BoxParams): BoxElement {
  switch (boxParams[0]) {
    case 'output':
      return { id: boxId, kind: boxParams[0], params: 'none' } satisfies OutputBoxElement;
    case 'input':
      return { id: boxId, kind: boxParams[0], params: 'none' } satisfies InputBoxElement;
    case 'and':
      return { id: boxId, kind: boxParams[0], params: 'none' } satisfies AndBoxElement;
    case 'not':
      return { id: boxId, kind: boxParams[0], params: 'none' } satisfies NotBoxElement;
    case 'custom':
      return { id: boxId, kind: boxParams[0], params: boxParams[1] } satisfies CustomBoxElement;
    default:
      assertNever(boxParams[0]);
  }
}

export function generateBoxSimState(
  boxId: number,
  boxParams: BoxParams,
  data: DataV3,
): BoxSimulationState {
  const kind = boxParams[0];
  switch (kind) {
    case 'and':
      return {
        boxId,
        simStatesInputs: [
          { portId: 0, state: false },
          { portId: 1, state: false },
        ],
        simStatesOutputs: [{ portId: 2, state: false }],
      };
    case 'not':
      return {
        boxId,
        simStatesInputs: [{ portId: 0, state: false }],
        simStatesOutputs: [{ portId: 1, state: false }],
      };
    case 'output':
      return {
        boxId,
        simStatesInputs: [{ portId: 0, state: false }],
        simStatesOutputs: [],
      };
    case 'input':
      return {
        boxId,
        simStatesInputs: [],
        simStatesOutputs: [{ portId: 0, state: false }],
      };
    case 'custom': {
      const customSketch = data.sketches.find((s) => s.meta.uuid === boxParams[1].uuid)!;
      return {
        boxId,
        simStatesInputs: customSketch.structure.main.boxElements
          .filter((b) => b.kind === 'input')
          .map((i) => {
            return { portId: i.id, state: false };
          }),
        simStatesOutputs: customSketch.structure.main.boxElements
          .filter((b) => b.kind === 'output')
          .map((i) => {
            return { portId: i.id, state: false };
          }),
      };
    }
    default:
      assertNever(kind);
  }
}

export function generateBoxInputState(boxId: number, boxParams: BoxParams): InputState | null {
  const kind = boxParams[0];
  switch (kind) {
    case 'and':
      return null;
    case 'custom':
      return null;
    case 'not':
      return null;
    case 'output':
      return null;
    case 'input':
      return {
        boxId,
        state: false,
      };
    default:
      assertNever(kind);
  }
}

export function generateBoxCustomSketchesSupportData(
  boxId: number,
  referencedUuid: string,
  _sketch: Sketch,
  data: DataV3,
): CustomSketchesSupportData {
  const referencedSketch = data.sketches.find((s) => s.meta.uuid === referencedUuid)!;
  const inputs = referencedSketch.structure.main.boxElements.filter((boxElement) => {
    return boxElement.kind === 'input';
  });
  const inputsState: InputState[] = inputs.map((input) => {
    return { boxId: input.id, state: false };
  });

  const boxSimState: BoxSimulationState[] = referencedSketch.structure.main.boxElements.map((b) => {
    return generateBoxSimState(b.id, [b.kind, b.params] as BoxParams, data);
  });

  const connectorSimState: ConnectorSimState[] =
    referencedSketch.structure.main.connectorElements.map((c) => {
      return {
        connectorId: c.id,
        state: false,
      };
    });

  const customSketchesSupportData: CustomSketchesSupportData[] =
    referencedSketch.structure.main.boxElements
      .filter((b) => b.kind === 'custom')
      .map((b) => {
        return generateBoxCustomSketchesSupportData(b.id, b.params.uuid, referencedSketch, data);
      });

  return {
    boxId,
    inputs: {
      inputsState,
    },
    simulation: {
      boxSimState,
      connectorSimState,
    },
    customSketchesSupportData,
  };
}

export function generateBoxSketchesSupportData(
  boxId: number,
  boxParams: BoxParams,
  sketch: Sketch,
  data: DataV3,
) {
  const kind = boxParams[0];
  switch (kind) {
    case 'output':
    case 'not':
    case 'and':
    case 'input':
      break;
    case 'custom':
      return generateBoxCustomSketchesSupportData(boxId, boxParams[1].uuid, sketch, data);
    default:
      assertNever(kind);
  }
}
