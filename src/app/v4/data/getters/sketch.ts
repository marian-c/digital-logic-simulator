import type { CustomBoxElement } from '@/app/v4/types/innerSketchStructure';
import type { SketchForStorage } from '@/app/v4/types/data';
import { error } from '@/helpers/basics';

export function getSketchFromCustomBox(
  customBox: CustomBoxElement,
  sketches: SketchForStorage[],
): SketchForStorage {
  for (const sketch of sketches) {
    if (sketch.uuid === customBox.p.uuid) {
      return sketch;
    }
  }
  error('getSketchFromCustomBox: sketch not found');
}
