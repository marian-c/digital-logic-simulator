import type { Sketch } from '@/app/v3/types/data';

export type SimulationInput = Pick<
  Sketch,
  'structure' | 'inputs' | 'simulation' | 'customSketchesSupportData'
>;

export type SimulationSuccess<R> = {
  kind: 'success';
  data: R;
};

export type SimulationErrorConnectorLoopConflict = {
  kind: 'connector-loop-conflict';
  connectorId: number;
  fromState: boolean;
  toState: boolean;
};
export type SimulationErrorType = SimulationErrorConnectorLoopConflict;
export type SimulationError<R> = {
  kind: 'error';
  type: SimulationErrorType;
  message: string;
  data: R;
};

export type SimulationResponse<R> = SimulationSuccess<R> | SimulationError<R>;
export function simulationSuccess<R>(data: R): SimulationSuccess<R> {
  return { kind: 'success', data };
}
export function simulationError<R>({
  type,
  message,
  data,
}: {
  type: SimulationErrorType;
  message: string;
  data: R;
}): SimulationError<R> {
  return { kind: 'error', type, message, data };
}
export function isSimulationError<R>(
  response: SimulationResponse<R>,
): response is SimulationError<R> {
  return response.kind === 'error';
}
