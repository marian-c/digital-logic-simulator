import type { SketchWithSimulation } from '@/app/v4/types/data';
import { error } from '@/helpers/basics';

export function actionToggleInputState(
  inputBoxId: number,
  stateIdx: number,
  data: SketchWithSimulation,
): SketchWithSimulation {
  const inputs = data.inputs.slice();
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]!;
    if (input.boxId === inputBoxId) {
      const v = !input.state.value[stateIdx];
      inputs[i] = {
        ...input,
        state: {
          ...input.state,
          value: input.state.value.toSpliced(stateIdx, 1, v) as any,
        },
      };
      return { ...data, inputs };
    }
  }
  error('actionToggleInputState: input state not found');
}
