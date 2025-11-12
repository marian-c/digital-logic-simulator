import {
  localStorageGetItemInCollection,
  type LocalStorageKey,
  type LocalStorageStructure,
} from '@/helpers/localStorage';
import React from 'react';
import { useFirstMount } from '@/hooks/useFirstMount';

export function useLocalStorageItemInCollectionInitial<T extends LocalStorageKey>(
  key: T,
  identifier: string,
  defaultValue?: LocalStorageStructure[T],
): LocalStorageStructure[T] | null;
export function useLocalStorageItemInCollectionInitial<T extends LocalStorageKey>(
  key: T,
  identifier: string,
  defaultValue: LocalStorageStructure[T],
): LocalStorageStructure[T];
export function useLocalStorageItemInCollectionInitial<T extends LocalStorageKey>(
  key: T,
  identifier: string,
  defaultValue?: LocalStorageStructure[T],
): LocalStorageStructure[T] | null {
  // only get it once
  const item = React.useMemo(() => {
    const value = localStorageGetItemInCollection(key, identifier);
    if (value === null && defaultValue) {
      return defaultValue;
    }
    return value;
  }, []);
  return item;
}

export function useLocalStorageItemInCollectionInitialNoFirstMount<T extends LocalStorageKey>(
  key: T,
  identifier: string,
): LocalStorageStructure[T] | null;
export function useLocalStorageItemInCollectionInitialNoFirstMount<T extends LocalStorageKey>(
  key: T,
  identifier: string,
  defaultValue: LocalStorageStructure[T],
): LocalStorageStructure[T];
export function useLocalStorageItemInCollectionInitialNoFirstMount<T extends LocalStorageKey>(
  key: T,
  identifier: string,
  defaultValue?: LocalStorageStructure[T],
): LocalStorageStructure[T] | null {
  const firstMount = useFirstMount();
  // only get it once
  const item = useLocalStorageItemInCollectionInitial(key, identifier, defaultValue);
  if (firstMount) {
    return defaultValue ?? null;
  }
  return item;
}

// TODO: optimization: if it's not the first load of the app, first mount not matter
//   first mount is here to avoid the hydration warning
export function useLocalStorageCustom<T extends LocalStorageKey>(
  key: T,
  identifier: string,
  emptyValue: LocalStorageStructure[T],
  defaultValue: LocalStorageStructure[T],
  cacheKey: string,
): LocalStorageStructure[T] {
  const firstMount = useFirstMount();
  const value = React.useMemo(() => {
    return localStorageGetItemInCollection(key, identifier);
  }, [cacheKey]);
  if (firstMount) {
    return emptyValue;
  }
  return value ?? defaultValue;
}
