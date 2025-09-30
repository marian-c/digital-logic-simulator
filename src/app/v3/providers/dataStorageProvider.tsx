import React from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import type { DataV3 } from '@/app/v3/types/data';
import { defaultExampleUUID } from '@/app/v3/data/helpers';
import {
  localStorageGetItemInCollection,
  localStorageSetItemInCollection,
} from '@/helpers/localStorage';
import { useFirstMount } from '@/hooks/useFirstMount';
import { isBrowser } from '@/helpers/basics';
import { examplesV3 } from '@/app/v3/data/load';

// it happens that empty data will not be written to
const emptyData: DataV3 = Object.freeze({ sketches: [], selectedSketchUuid: '' });

// make sure the examples are there
if (isBrowser) {
  const data = localStorageGetItemInCollection('v3Data', 'default');
  if (!data) {
    localStorageSetItemInCollection('v3Data', 'default', {
      sketches: examplesV3,
      selectedSketchUuid: defaultExampleUUID,
    });
  }
}

type MethodsV3 = { setData: (oldData: DataV3) => void };

const DataStorageProviderData = React.createContext<DataV3>(null as any);
DataStorageProviderData.displayName = 'DataStorageProviderData';
const DataStorageProviderMethods = React.createContext<MethodsV3>(null as any);
DataStorageProviderMethods.displayName = 'DataStorageProviderMethods';

export const DataStorageProvider: FunctionComponentWithChildren = ({ children }) => {
  const isFirstMount = useFirstMount();
  const [_data, _setData] = React.useState<DataV3>(() => {
    return (
      localStorageGetItemInCollection('v3Data', 'default') || {
        sketches: [],
        selectedSketchUuid: defaultExampleUUID,
      }
    );
  });

  const data = isFirstMount ? emptyData : _data;

  const methods = React.useMemo<MethodsV3>(() => {
    return {
      setData(ssa) {
        // TODO: save to localstorage throttled
        _setData(ssa);
      },
    };
  }, []);

  return (
    <DataStorageProviderData value={data}>
      <DataStorageProviderMethods value={methods}>{children}</DataStorageProviderMethods>
    </DataStorageProviderData>
  );
};

export const useSketchStorageData = () => {
  return React.useContext(DataStorageProviderData);
};
export const useSketchStorageMethods = () => {
  return React.useContext(DataStorageProviderMethods);
};
