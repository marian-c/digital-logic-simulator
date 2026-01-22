import type { SketchForStorage, SketchWithSimulation } from '@/app/v4/types/data';
import type {
  BoxElement,
  CustomBoxElement,
  InputBoxElement,
  OutputBoxElement,
} from '@/app/v4/types/innerSketchStructure';
import { assertTrue, error } from '@/helpers/basics';
import { getSketchFromCustomBox } from '@/app/v4/data/getters/sketch';

export function getBoxByBoxId(boxId: number, data: SketchWithSimulation): BoxElement {
  for (const box of data.structure.boxes) {
    if (box.id === boxId) {
      return box;
    }
  }
  error('getBoxByBoxId: boxId not found');
}

export function getBoxesByBoxesIds(
  boxesIds: [number, number],
  data: SketchWithSimulation,
): [BoxElement, BoxElement];
export function getBoxesByBoxesIds(boxesIds: number[], data: SketchWithSimulation): BoxElement[] {
  const boxes: BoxElement[] = [];
  for (const box of data.structure.boxes) {
    if (boxesIds.includes(box.id)) {
      boxes.push(box);
    }
    if (boxes.length === boxesIds.length) {
      return boxes.sort((a, b) => boxesIds.indexOf(a.id) - boxesIds.indexOf(b.id));
    }
  }
  error('getBoxesByBoxesIds: not all boxes found');
}

export function getCustomBoxByBoxId(boxId: number, data: SketchWithSimulation): CustomBoxElement {
  const box = getBoxByBoxId(boxId, data);
  assertTrue(box.kind === 'custom', 'getCustomBoxByBoxId: box is not custom');
  return box;
}

export function getCustomBoxes(data: SketchForStorage): CustomBoxElement[] {
  const customBoxes: CustomBoxElement[] = [];
  for (const box of data.structure.boxes) {
    if (box.kind === 'custom') {
      customBoxes.push(box);
    }
  }
  return customBoxes;
}

export function getInputs(data: SketchForStorage): InputBoxElement[] {
  const inputs: InputBoxElement[] = [];
  for (const box of data.structure.boxes) {
    if (box.kind === 'input') {
      inputs.push(box);
    }
  }
  return inputs;
}
export function getOutputs(data: SketchForStorage): OutputBoxElement[] {
  const outputs: OutputBoxElement[] = [];
  for (const box of data.structure.boxes) {
    if (box.kind === 'output') {
      outputs.push(box);
    }
  }
  return outputs;
}

export function getUsableCustomBoxes(
  selectedSketchUuid: string,
  otherSketches: SketchForStorage[],
) {
  return otherSketches.filter(function isGoodSketch(sketch: SketchForStorage): boolean {
    // TODO: how many times do we call getCustomBoxes for the same sketch?
    const customBoxes = getCustomBoxes(sketch);
    for (const customBox of customBoxes) {
      if (customBox.p.uuid === selectedSketchUuid) {
        return false;
      }
      const customSketch = getSketchFromCustomBox(customBox, otherSketches);
      const isGood = isGoodSketch(customSketch);
      if (!isGood) {
        return false;
      }
    }
    return true;
  });
}
