import type { SketchWithSimulation } from '@/app/v4/types/data';
import { error } from '@/helpers/basics';
import type { InputState } from '@/app/v4/types/innerSketchInputs';

export function getInputStateByInputBoxId(
  inputBoxId: number,
  data: SketchWithSimulation,
): InputState {
  for (const input of data.inputs) {
    if (input.boxId === inputBoxId) {
      return input;
    }
  }
  error('getInputStateByInputBoxId: inputBoxId not found');
}
