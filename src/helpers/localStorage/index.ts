import { isBrowser } from '@/helpers/basics';
import type {
  SketchInputs,
  SketchMeta,
  SketchPositions,
  SketchSimulation,
  SketchState,
  SketchStructure,
} from '@/app/v2/types/data';

export type LocalStorageStructure = {
  selectedSketch: string;
  userSketchUUIDs: { name: string; uuid: string }[];
  // indexed by UUID
  sketchesStructure: SketchStructure;
  sketchesMeta: SketchMeta;
  sketchesPositions: SketchPositions;
  sketchesInputs: SketchInputs;
  sketchesSimulation: SketchSimulation;
  sketchesState: SketchState;
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
