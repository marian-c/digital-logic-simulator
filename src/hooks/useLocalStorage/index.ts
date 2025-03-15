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
