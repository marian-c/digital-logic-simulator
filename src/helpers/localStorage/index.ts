import { isBrowser } from '@/helpers/basics';
import type { Sketch } from '@/app/v2/types/data';

type Kind = 'user' | 'example' | 'empty';

type SketchSelectionBase = {
  kind: Kind;
};

interface SketchSelectionEmpty extends SketchSelectionBase {
  kind: 'empty';
}
interface SketchSelectionExample extends SketchSelectionBase {
  kind: 'example';
  name: string;
}
export interface SketchSelectionUser extends SketchSelectionBase {
  kind: 'user';
  name: string;
}

export type SelectedSketch = SketchSelectionEmpty | SketchSelectionExample | SketchSelectionUser;

export type LocalStorageStructure = {
  selectedSketch: SelectedSketch;
  userSketchesNames: string[];
  // userSketches is indexed by userSketchesNames
  userSketches: Sketch;
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
