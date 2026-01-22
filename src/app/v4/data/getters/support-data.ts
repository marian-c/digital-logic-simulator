import type { CustomBoxElement } from '@/app/v4/types/innerSketchStructure';
import type { SketchWithSimulation } from '@/app/v4/types/data';
import type { CustomSketchesSupportData } from '@/app/v4/types/innerSketchSimulation';
import { error } from '@/helpers/basics';

export function getSupportDataFromCustomBox(
  customBox: CustomBoxElement,
  data: SketchWithSimulation,
): CustomSketchesSupportData {
  for (const cssd of data.simulation.customSketchesSupportData) {
    if (cssd.boxId === customBox.id) {
      return cssd;
    }
  }
  error('getSupportDataFromCustomBox: support data not found');
}
