import React from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import type { DataV3 } from '@/app/v3/types/data';
import { cleanupAllSketches, defaultExampleUUID } from '@/app/v3/data/helpers';
import {
  localStorageGetItemInCollection,
  localStorageSetItemInCollection,
} from '@/helpers/localStorage';
import { useFirstMount } from '@/hooks/useFirstMount';
import { isBrowser } from '@/helpers/basics';
import { examplesV3 } from '@/app/v3/data/load';
import { useStateWithRef } from '@/hooks/useStateWithRef';
import debounce from 'lodash/debounce';
import { simulate } from '@/app/v3/data/utils/simulate/simulate';

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
  // useStateWithRef sets the ref to be ready after it rendered
  // this is not an issue as long as there's only one update before a render cycle
  // const [_data, $_setData, sketchDataRef] = useStateWithRefImmediate<DataV3>(() => {
  const [_data, $_setData, sketchDataRef] = useStateWithRef<DataV3>(() => {
    const r = localStorageGetItemInCollection('v3Data', 'default') || {
      sketches: [],
      selectedSketchUuid: defaultExampleUUID,
    };
    const sane = cleanupAllSketches(r);
    // TODO: handle errors
    const rSimulated = simulate(sane).data;
    if (isBrowser) {
      (window as any).__DATA__ = rSimulated;
    }
    return rSimulated;
  });

  let data = _data;
  if (isFirstMount) {
    data = emptyData;
    sketchDataRef.current = emptyData;
  }

  console.log('sketchDataRef', sketchDataRef.current);

  const methods = React.useMemo<MethodsV3>(() => {
    return {
      $setSketchData(ssa) {
        console.log('setting');
        // TODO: only save when relevant stuff changes, for example simulation data change does not need to save
        //   also, for examples, maybe we don't need to save the input states changes
        safeToLocalStorage(ssa);

        // simulate
        // TODO: handle errors
        const ssaWithSimulation = simulate(ssa).data;
        console.log(
          'simulated',
          ssaWithSimulation.sketches.find((s) => s.meta.uuid === ssa.selectedSketchUuid),
        );
        (window as any).__DATA__ = ssaWithSimulation;
        // TODO: simulate only when relevant data changes, structure and inputs
        $_setData(ssaWithSimulation);
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
