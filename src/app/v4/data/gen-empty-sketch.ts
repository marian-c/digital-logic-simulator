import type { SketchForStorage } from '@/app/v4/types/data';
import type { NumWires, State, StateValue } from '@/app/v4/types/other';
import { assertNever } from '@/helpers/basics';

export function genEmptySketch(params?: { name: string; uuid: string }): SketchForStorage {
  return {
    uuid: params?.uuid || '',
    inputs: [],
    structure: { extra: { nextId: 1 }, boxes: [], connectors: [] },
    meta: {
      name: params?.name || '',
      description: '',
      indexInList: -1,
      isChip: true,
    },
    elementsInfo: { boxes: [], connectors: [] },
    simulation: {
      errors: [],
      boxSimState: [],
      connectorSimState: [],
      customSketchesSupportData: [],
    },
  };
}
export function genNumWiresState(numWires: NumWires, value: StateValue = false): State {
  switch (numWires) {
    case 1:
      return { kind: numWires, value: [value] };
    case 4:
      return { kind: numWires, value: [value, value, value, value] };
    case 8:
      return { kind: numWires, value: [value, value, value, value, value, value, value, value] };
    default:
      assertNever(numWires);
  }
}

export function genNumWiresPortState(
  numWires: NumWires,
  startAt: number,
  value: StateValue = false,
) {
  const result: {
    portId: number;
    state: State;
  }[] = [];
  for (let i = startAt; i < startAt + numWires; i++) {
    result.push({ portId: i, state: { kind: 1, value: [value] } });
  }

  return result;
}
