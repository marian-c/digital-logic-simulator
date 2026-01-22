import { isBrowser } from '@/helpers/basics';
import type {
  SketchInputs,
  SketchMeta,
  SketchPositions,
  SketchSimulation,
  SketchState,
  SketchStructure,
} from '@/app/v2/types/data';
import type { DataV3 } from '@/app/v3/types/data';
import type { V4Settings } from '@/app/v4/types/other';

export type LocalStorageStructure = {
  v2selectedSketch: string; // single
  v2userSketchUUIDs: { name: string; uuid: string }[]; // single (array value)
  v2sketchesStructure: SketchStructure; // collection indexed by UUID
  v2sketchesMeta: SketchMeta; // collection indexed by UUID
  v2sketchesPositions: SketchPositions; // collection indexed by UUID
  v2sketchesInputs: SketchInputs; // collection indexed by UUID
  v2sketchesSimulation: SketchSimulation; // collection indexed by UUID
  v2sketchesState: SketchState; // collection indexed by UUID
  v3Data: DataV3;
  v4Settings: V4Settings;
};

export type LocalStorageKey = keyof LocalStorageStructure;

// TODO: debounced version?
export function localStorageSetItemInCollection<T extends LocalStorageKey>(
  key: T,
  identifier: string,
  value: LocalStorageStructure[T],
) {
  localStorage.setItem('__mcw__' + key + '__' + identifier, JSON.stringify(value));
}

export function localStorageGetItemInCollection<T extends LocalStorageKey>(
  key: T,
  identifier: string,
): LocalStorageStructure[T] | null {
  if (!isBrowser) {
    return null;
  }
  const data = localStorage.getItem('__mcw__' + key + '__' + identifier);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export function localStorageGetItemInCollectionOrThrow<T extends LocalStorageKey>(
  key: T,
  identifier: string,
): LocalStorageStructure[T] {
  const r = localStorageGetItemInCollection(key, identifier);
  if (!r) {
    throw new Error('Data not found in localStorage');
  }
  return r;
}
