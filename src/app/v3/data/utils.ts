import type { DataV3 } from '@/app/v3/types/data';
import { v7 as uuidv7 } from 'uuid';
import { generateEmptySketch } from '@/app/v3/data/helpers';

export function addEmptySketchAndSelect(newName: string, oldData: DataV3) {
  const uuid = uuidv7();
  const newSketch = generateEmptySketch({ name: newName, uuid });
  // XXX: just mutates
  oldData.sketches.push(newSketch);
  // XXX: just mutates
  oldData.selectedSketchUuid = uuid;
  return { ...oldData };
}

export function selectSketch(uuid: string, oldData: DataV3) {
  // XXX: just mutates
  oldData.selectedSketchUuid = uuid;
  return { ...oldData };
}
