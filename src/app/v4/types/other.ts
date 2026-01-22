export type PortKind = 'inputPort' | 'outputPort';
export type V4Settings = {
  selectedSketchUUID: string;
  notLoadedYet?: true;
};

export type NumWires = 1 | 4 | 8;
export type NumWiresMulti = Exclude<NumWires, 1>;

export type StateValue = boolean | null;
interface StateBase {
  kind: NumWires;
}
interface State1 extends StateBase {
  kind: 1;
  value: [StateValue];
}
interface State4 extends StateBase {
  kind: 4;
  value: [StateValue, StateValue, StateValue, StateValue];
}
interface State8 extends StateBase {
  kind: 8;
  value: [
    StateValue,
    StateValue,
    StateValue,
    StateValue,
    StateValue,
    StateValue,
    StateValue,
    StateValue,
  ];
}
export type State = State1 | State4 | State8;
