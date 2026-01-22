import type { SketchWithSimulation } from '@/app/v4/types/data';
import type { BoxInfo } from '@/app/v4/types/innerSketchElementsInfo';
import { error } from '@/helpers/basics';

export function actionMoveByBoxIdDelta(
  boxId: number,
  deltaX: number,
  deltaY: number,
  sketch: SketchWithSimulation,
): SketchWithSimulation {
  // TODO: also the focus data
  const info: BoxInfo[] = sketch.elementsInfo.boxes.slice();
  for (let i = 0, len = info.length; i < len; i++) {
    const box = info[i]!;
    if (box.boxId === boxId) {
      info[i] = { ...box, pos: { x: box.pos.x + deltaX, y: box.pos.y + deltaY } };
      return {
        ...sketch,
        elementsInfo: {
          ...sketch.elementsInfo,
          boxes: info,
        },
      };
    }
  }
  error('actionMoveByBoxIdDelta: boxId not found');
}

export function actionSetBoxColorByBoxId(
  boxId: number,
  main: string,
  on: string,
  off: string,
  sketch: SketchWithSimulation,
): SketchWithSimulation {
  const info: BoxInfo[] = sketch.elementsInfo.boxes.slice();
  for (let i = 0, len = info.length; i < len; i++) {
    const box = info[i]!;
    if (box.boxId === boxId) {
      info[i] = { ...box, colors: { main, on, off } };
      return {
        ...sketch,
        elementsInfo: {
          ...sketch.elementsInfo,
          boxes: info,
        },
      };
    }
  }
  error('actionSetBoxColorByBoxId: boxId not found');
}

export function actionDeleteColorByBoxId(
  boxId: number,
  sketch: SketchWithSimulation,
): SketchWithSimulation {
  const info: BoxInfo[] = sketch.elementsInfo.boxes.slice();
  for (let i = 0, len = info.length; i < len; i++) {
    const box = info[i]!;
    if (box.boxId === boxId) {
      const newBox = { ...box };
      delete newBox.colors;
      info[i] = newBox;
      return {
        ...sketch,
        elementsInfo: {
          ...sketch.elementsInfo,
          boxes: info,
        },
      };
    }
  }
  error('actionDeleteColorByBoxId: boxId not found');
}

export function actionSetColorizeConnectorsByBoxId(
  boxId: number,
  newVal: boolean,
  sketch: SketchWithSimulation,
): SketchWithSimulation {
  const info: BoxInfo[] = sketch.elementsInfo.boxes.slice();
  for (let i = 0, len = info.length; i < len; i++) {
    const box = info[i]!;
    if (box.boxId === boxId) {
      info[i] = { ...box, colorizeConnectors: newVal };
      return {
        ...sketch,
        elementsInfo: {
          ...sketch.elementsInfo,
          boxes: info,
        },
      };
    }
  }
  error('actionSetColorizeConnectorsByBoxId: boxId not found');
}

export function actionSetBoxLabelByBoxId(
  boxId: number,
  newLabel: string,
  sketch: SketchWithSimulation,
): SketchWithSimulation {
  const info: BoxInfo[] = sketch.elementsInfo.boxes.slice();
  for (let i = 0, len = info.length; i < len; i++) {
    const box = info[i]!;
    if (box.boxId === boxId) {
      info[i] = { ...box, label: newLabel };
      return {
        ...sketch,
        elementsInfo: {
          ...sketch.elementsInfo,
          boxes: info,
        },
      };
    }
  }
  error('actionSetBoxLabelByBoxId: boxId not found');
}
