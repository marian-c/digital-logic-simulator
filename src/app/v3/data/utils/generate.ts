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
import type { BoxSimulationState } from '@/app/v3/types/innerSketchSimulation';
import type { InputState } from '@/app/v3/types/innerSketchInputs';

export function genNewBox(boxId: number, boxParams: BoxParams): BoxElement {
  switch (boxParams[0]) {
    case 'output':
      return { id: boxId, kind: boxParams[0], params: undefined } satisfies OutputBoxElement;
    case 'input':
      return { id: boxId, kind: boxParams[0], params: undefined } satisfies InputBoxElement;
    case 'and':
      return { id: boxId, kind: boxParams[0], params: undefined } satisfies AndBoxElement;
    case 'not':
      return { id: boxId, kind: boxParams[0], params: undefined } satisfies NotBoxElement;
    case 'custom':
      return { id: boxId, kind: boxParams[0], params: boxParams[1] } satisfies CustomBoxElement;
    default:
      assertNever(boxParams[0]);
  }
}

export function generateBoxSimState(boxId: number, boxParams: BoxParams): BoxSimulationState {
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
    case 'custom':
      return {
        boxId,
        simStatesInputs: [], // TODO: XXX
        simStatesOutputs: [], // TODO: XXX
      };
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
