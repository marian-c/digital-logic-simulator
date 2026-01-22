import type { SketchWithSimulation } from '@/app/v4/types/data';

export function actionChangeName(name: string, sketch: SketchWithSimulation): SketchWithSimulation {
  return {
    ...sketch,
    meta: {
      ...sketch.meta,
      name,
    },
  };
}
export function actionChangeDescription(
  description: string,
  sketch: SketchWithSimulation,
): SketchWithSimulation {
  return {
    ...sketch,
    meta: {
      ...sketch.meta,
      description,
    },
  };
}

export function actionChangeShouldSaveSimulation(
  value: boolean,
  sketch: SketchWithSimulation,
): SketchWithSimulation {
  return {
    ...sketch,
    meta: {
      ...sketch.meta,
      shouldSaveSimulation: value,
    },
  };
}

export function actionChangeIsChip(
  value: boolean,
  sketch: SketchWithSimulation,
): SketchWithSimulation {
  return {
    ...sketch,
    meta: {
      ...sketch.meta,
      isChip: value,
    },
  };
}
