// we could have multiple wire inputs, but this will do for now
export interface InputState {
  boxId: number; // inputId
  state: boolean;
}

export interface InnerSketchInputs {
  // TODO: flatten if there only one element
  inputsState: InputState[];
}
