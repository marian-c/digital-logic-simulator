import { isBrowser } from '@/helpers/basics';

export type LocalStorageStructure = {
  reader_books: {
    currentPage: number;
  };
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
    console.log('is server');
    return null;
  }
  console.log('is browser');
  const data = localStorage.getItem('__mcw__' + key + '__' + identifier);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}
