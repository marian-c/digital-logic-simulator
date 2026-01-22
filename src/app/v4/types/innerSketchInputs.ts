// we could have multiple wire inputs, but this will do for now
import type { State } from '@/app/v4/types/other';

export interface InputState {
  boxId: number; // inputId
  state: State;
}

export type SketchInputs = InputState[];
