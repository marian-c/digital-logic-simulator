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
import { useStateWithRef } from '@/hooks/useStateWithRef';
import debounce from 'lodash/debounce';

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

type MethodsV3 = {
  $setSketchData: (oldData: DataV3) => void;
  sketchDataRef: React.RefObject<DataV3>;
};

const DataStorageProviderData = React.createContext<DataV3>(null as any);
DataStorageProviderData.displayName = 'DataStorageProviderData';
const DataStorageProviderMethods = React.createContext<MethodsV3>(null as any);
DataStorageProviderMethods.displayName = 'DataStorageProviderMethods';

const safeToLocalStorage = debounce((data: DataV3) => {
  try {
    localStorageSetItemInCollection('v3Data', 'default', data);
  } catch (e) {
    console.error(e);
  }
}, 2000);

export const DataStorageProvider: FunctionComponentWithChildren = ({ children }) => {
  const isFirstMount = useFirstMount();
  const [_data, $_setData, sketchDataRef] = useStateWithRef<DataV3>(() => {
    return (
      localStorageGetItemInCollection('v3Data', 'default') || {
        sketches: [],
        selectedSketchUuid: defaultExampleUUID,
      }
    );
  });

  let data = _data;
  if (isFirstMount) {
    data = emptyData;
    sketchDataRef.current = emptyData;
  }

  const methods = React.useMemo<MethodsV3>(() => {
    return {
      $setSketchData(ssa) {
        $_setData(ssa);
        // TODO: only save when relevant stuff changes, for example simulation data change does not need to save
        //   also, for examples, maybe we don't need to save the input states chagnes
        safeToLocalStorage(ssa);
      },
      sketchDataRef,
    };
  }, [$_setData, sketchDataRef]);

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
