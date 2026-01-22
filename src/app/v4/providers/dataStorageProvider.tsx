'use client';
import React from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { defaultExampleUUID } from '@/app/v4/samples/_';
import type {
  SketchWithSimulation,
  SketchForStorage,
  PanAndZoomTree,
  PanAndZoomInfo,
} from '@/app/v4/types/data';
import {
  localStorageGetItemInCollection,
  localStorageSetItemInCollection,
} from '@/helpers/localStorage';
import type { V4Settings } from '@/app/v4/types/other';
import { assertIsDefined, isBrowser } from '@/helpers/basics';
import { useStateWithRefImmediate } from '@/hooks/useStateWithRefImmediate';
import { useFirstMount } from '@/hooks/useFirstMount';
import { simulate } from '@/app/v4/data/simulation/simulate';
import { v7 as uuidv7 } from 'uuid';
import { deleteSketch, persistSketch } from '@/app/v4/providers/persist/persistSketches';
import { deletePanAndZoom, persistPanAndZoom } from '@/app/v4/providers/persist/persistPanAndZoom';
import { fetchPanAndZoom, fetchSketches } from '@/app/v4/providers/persist/fetch';
import { ensureSimulation } from '@/app/v4/data/ensure-simulation';
import { cleanupAllSketches } from '@/app/v4/data/cleanup-all-sketches';
import { genEmptySketch } from '@/app/v4/data/gen-empty-sketch';
import { validateSketch } from '@/app/v4/data/validate-sketch';
import { getCustomBoxByBoxId } from '@/app/v4/data/getters/box';
import { getSketchFromCustomBox } from '@/app/v4/data/getters/sketch';
import { getSupportDataFromCustomBox } from '@/app/v4/data/getters/support-data';

type Methods = {
  $setSelectedSketchUUID: (selectedSketchUUID: string) => void;
  $addSketch: (name: string) => void;
  $deleteSketch: (uuid: string) => void;
  $updateSelectedSketch: (sketch: SketchWithSimulation) => void;
  settingsRef: React.RefObject<V4Settings>;
  otherSketchesRef: React.RefObject<SketchForStorage[]>;
  selectedSketchRef: React.RefObject<SketchWithSimulation>;
  $updateFocusPath: (newPath: number[]) => void;
  focusPathRef: React.RefObject<number[]>;
  focusDataRef: React.RefObject<SketchWithSimulation>;
  $updatePanAndZoom: (panX: number, panY: number, zoomFactor: number) => void;
  panAndZoomRef: React.RefObject<PanAndZoomInfo>;
  isReadOnlyRef: React.RefObject<boolean>;
};

const DataStorageProviderSettings = React.createContext<V4Settings>(null as any);
DataStorageProviderSettings.displayName = 'DataStorageProviderSettings';
const DataStorageProviderData = React.createContext<SketchWithSimulation>(null as any);
DataStorageProviderData.displayName = 'DataStorageProviderData';
const DataStorageProviderFocusData = React.createContext<SketchWithSimulation>(null as any);
DataStorageProviderFocusData.displayName = 'DataStorageProviderFocusData';
const DataStorageProviderFocusPath = React.createContext<number[]>(null as any);
DataStorageProviderFocusPath.displayName = 'DataStorageProviderFocusPath';
const DataStorageProviderIsReadOnly = React.createContext<boolean>(null as any);
DataStorageProviderIsReadOnly.displayName = 'DataStorageProviderIsReadOnly';
const DataStorageProviderPanAndZoom = React.createContext<PanAndZoomInfo>(null as any);
DataStorageProviderPanAndZoom.displayName = 'DataStorageProviderPanAndZoom';
const DataStorageProviderMethods = React.createContext<Methods>(null as any);
DataStorageProviderMethods.displayName = 'DataStorageProviderMethods';

const defaultSettings: V4Settings = Object.freeze({
  selectedSketchUUID: defaultExampleUUID,
  notLoadedYet: true,
});

let initialSettings: V4Settings = { ...defaultSettings };

if (isBrowser) {
  const storedSettings =
    localStorageGetItemInCollection('v4Settings', 'default') || initialSettings;
  delete storedSettings.notLoadedYet;
  initialSettings = storedSettings;
  localStorageSetItemInCollection('v4Settings', 'default', initialSettings);
}

const emptySketch: SketchWithSimulation = ensureSimulation(genEmptySketch(), []);

export const DataStorageProvider: FunctionComponentWithChildren = ({ children }) => {
  const isFirstMount = useFirstMount();

  const [_settings, $setSettings, settingsRef] = useStateWithRefImmediate<V4Settings>(() => {
    return initialSettings;
  });

  let settings = _settings;
  if (isFirstMount) {
    settings = defaultSettings;
    settingsRef.current = defaultSettings;
  } else {
    settings = _settings;
    settingsRef.current = _settings;
  }

  const otherSketchesRef = React.useRef<SketchForStorage[]>([]);
  const [selectedSketch, $_updateSelectedSketch, selectedSketchRef] =
    useStateWithRefImmediate<SketchWithSimulation>(emptySketch);

  const panAndZoomCollectionRef = React.useRef<Record<string, PanAndZoomTree>>({});
  const [panAndZoomTree, $updatePanAndZoomTree, panAndZoomTreeRef] =
    useStateWithRefImmediate<PanAndZoomTree>({ data: { panX: 0, panY: 0, zoomFactor: 1 } });
  const [focusPath, $updateFocusPath, focusPathRef] = useStateWithRefImmediate<number[]>([]);

  const isReadOnly =
    focusPath.length > 0 ||
    (!!selectedSketch.meta.isExample && process.env.NODE_ENV !== 'development');
  const isReadOnlyRef = React.useRef(isReadOnly);
  isReadOnlyRef.current = isReadOnly;

  const panAndZoom: PanAndZoomInfo = React.useMemo(() => {
    let tree = panAndZoomTree;

    for (const p of focusPath) {
      const newTree = tree[p];
      assertIsDefined(newTree);
      tree = newTree;
    }
    return tree.data;
  }, [focusPath, panAndZoomTree]);
  const panAndZoomRef = React.useRef(panAndZoom);
  panAndZoomRef.current = panAndZoom;

  const focusData: SketchWithSimulation = React.useMemo(() => {
    process.env.NEXT_PUBLIC_LOGS_DEBUG && console.group('DERIVE focusData');
    // TODO: this logic can be moved into its own function inside composers-immutable.ts
    if (focusPath.length) {
      let curr: SketchWithSimulation = selectedSketch;
      for (const p of focusPath) {
        const customBox = getCustomBoxByBoxId(p, curr);
        const sketch = getSketchFromCustomBox(customBox, otherSketchesRef.current);
        const supportData = getSupportDataFromCustomBox(customBox, curr);
        curr = {
          uuid: sketch.uuid,
          structure: sketch.structure,
          meta: sketch.meta,
          elementsInfo: sketch.elementsInfo,
          inputs: supportData.inputs,
          simulation: supportData.simulation,
        };
      }
    }
    process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
    // TODO: shouldn't this return curr
    return selectedSketch;
  }, [focusPath, selectedSketch]);
  const focusDataRef = React.useRef(focusData);
  focusDataRef.current = focusData;

  const $updatePanAndZoom = React.useCallback(
    (panX: number, panY: number, zoomFactor: number) => {
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.group('CALL $updatePanAndZoom');
      // TODO: might as well bail out if it's not different
      // TODO: this logic can be moved into its own function inside actions-immutable.ts
      const orig = { ...panAndZoomTreeRef.current };

      let curr: PanAndZoomTree = orig;
      for (const p of focusPathRef.current) {
        const exists = curr[p];
        if (!exists) {
          curr[p] = { data: { panX: 0, panY: 0, zoomFactor: 1 } };
        } else {
          curr[p] = { ...curr[p]! };
        }
        curr = curr[p];
      }
      curr.data = { panX, panY, zoomFactor };
      panAndZoomCollectionRef.current[selectedSketchRef.current.uuid] = orig;
      $updatePanAndZoomTree(orig);
      void persistPanAndZoom(selectedSketchRef.current.uuid, orig);
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
    },
    [$updatePanAndZoomTree, focusPathRef, panAndZoomTreeRef, selectedSketchRef],
  );

  const $updateSelectedSketch = React.useCallback(
    (newSketch: SketchWithSimulation) => {
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.group('CALL $updateSelectedSketch');
      // newSketch is a new reference, and this function should not get called when in focus mode
      if (focusPathRef.current.length) {
        // simulation coming as a result of ticks of clock components need to come in via
        //   another function, not $updateSelectedSketch
        window.alert('Cannot set sketch while in focus mode');
      }
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.log('newSketch', newSketch);
      process.env.NEXT_PUBLIC_SKETCH_VALIDATION === '1' &&
        validateSketch(newSketch, otherSketchesRef.current);

      let newSketchWithSim = newSketch;
      try {
        const simulation = simulate(newSketch, otherSketchesRef.current);
        newSketchWithSim = { ...newSketch, simulation };
      } catch (e) {
        console.error('ERROR while simulating', e);
      }
      // TODO: do we need two validations
      process.env.NEXT_PUBLIC_SKETCH_VALIDATION === '1' &&
        validateSketch(newSketchWithSim, otherSketchesRef.current);
      $_updateSelectedSketch(newSketchWithSim);
      void persistSketch(newSketchWithSim);
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
    },
    [$_updateSelectedSketch, focusPathRef],
  );

  const $setSelectedSketchUUID = React.useCallback(
    (selectedSketchUUID: string, skipHistory = false) => {
      process.env.NEXT_PUBLIC_LOGS_DEBUG &&
        console.group('CALL $setSelectedSketchUUID', { selectedSketchUUID });
      const oldSketch = selectedSketchRef.current;
      const newSettings = { ...settingsRef.current, selectedSketchUUID };
      delete newSettings.notLoadedYet;
      localStorageSetItemInCollection('v4Settings', 'default', newSettings);
      $setSettings(newSettings);

      const panAndZoomCollection = panAndZoomCollectionRef.current;
      const sketches = otherSketchesRef.current;
      assertIsDefined(selectedSketchRef.current.meta.indexInList);
      sketches.splice(selectedSketchRef.current.meta.indexInList, 0, selectedSketchRef.current);

      const selectedSketchIdx = sketches.findIndex((s) => s.uuid === selectedSketchUUID);
      if (selectedSketchIdx === -1) {
        console.error('Selected sketch not found in sketches');
        return;
      }
      cleanupAllSketches(sketches, panAndZoomCollection);
      const [selectedSketch] = sketches.splice(selectedSketchIdx, 1);
      assertIsDefined(selectedSketch);
      selectedSketch.meta.indexInList = selectedSketchIdx;
      otherSketchesRef.current = sketches;
      $updateFocusPath([]);
      $updateSelectedSketch(ensureSimulation(selectedSketch, sketches));

      let panAndZoom = panAndZoomCollection[selectedSketch.uuid];
      if (!panAndZoom) {
        panAndZoom = panAndZoomCollection[selectedSketch.uuid] = {
          data: { panX: 0, panY: 0, zoomFactor: 1 },
        };
      }
      $updatePanAndZoom(panAndZoom.data.panX, panAndZoom.data.panY, panAndZoom.data.zoomFactor);
      if (!skipHistory) {
        const historyState = window.history.state || {};
        historyState.__APP_V4_PREV_SKETCH = { uuid: oldSketch.uuid, name: oldSketch.meta.name };
        window.history.replaceState(historyState, '');
      }
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
    },
    [
      $setSettings,
      $updateFocusPath,
      $updatePanAndZoom,
      $updateSelectedSketch,
      selectedSketchRef,
      settingsRef,
    ],
  );

  const $addSketch = React.useCallback(
    (name: string) => {
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.group('CALL $addSketch');
      const uuid = uuidv7();
      const newSketch = genEmptySketch({ name, uuid });
      // put the sketch at the end
      otherSketchesRef.current.push(newSketch);
      panAndZoomCollectionRef.current[uuid] = { data: { panX: 0, panY: 0, zoomFactor: 1 } };
      $setSelectedSketchUUID(uuid);
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
    },
    [$setSelectedSketchUUID],
  );

  const $deleteSketch = React.useCallback(
    (uuid: string) => {
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.group('CALL $deleteSketch');
      const nextUUID = uuid === settingsRef.current.selectedSketchUUID ? defaultExampleUUID : uuid;
      const sketches = otherSketchesRef.current;

      assertIsDefined(selectedSketchRef.current.meta.indexInList);
      sketches.splice(selectedSketchRef.current.meta.indexInList, 0, selectedSketchRef.current);

      const toDeleteIdx = sketches.findIndex((s) => s.uuid === uuid);
      if (toDeleteIdx === -1) {
        console.error('Sketch to delete not found in sketches');
      } else {
        sketches.splice(toDeleteIdx, 1);
      }

      void deleteSketch(uuid);
      void deletePanAndZoom(uuid);

      const tempNewSketch = sketches[0];
      assertIsDefined(tempNewSketch);
      tempNewSketch.meta.indexInList = 0;
      // @ts-expect-error: this is temporary;
      selectedSketchRef.current = tempNewSketch;
      sketches.splice(0, 1);
      delete panAndZoomCollectionRef.current[uuid];
      $setSelectedSketchUUID(nextUUID, true);
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
    },
    [$setSelectedSketchUUID, selectedSketchRef, settingsRef],
  );

  const methods = React.useMemo<Methods>(() => {
    return {
      $addSketch,
      $deleteSketch,
      $setSelectedSketchUUID,
      $updateFocusPath,
      $updatePanAndZoom,
      $updateSelectedSketch,
      selectedSketchRef,
      otherSketchesRef,
      panAndZoomRef,
      focusDataRef,
      settingsRef,
      focusPathRef,
      isReadOnlyRef,
    } satisfies Methods;
  }, [
    $addSketch,
    $deleteSketch,
    $setSelectedSketchUUID,
    $updateFocusPath,
    $updatePanAndZoom,
    $updateSelectedSketch,
    focusPathRef,
    selectedSketchRef,
    settingsRef,
  ]);

  React.useEffect(() => {
    let ignore = false;

    async function startFetching() {
      let sketches;
      let panAndZoomRecord;
      try {
        sketches = await fetchSketches();
        panAndZoomRecord = await fetchPanAndZoom();
        console.log('Fetched sketches and panAndZoom', panAndZoomRecord);
      } catch (e) {
        if (ignore) {
          return;
        }
        // TODO: toast error
        console.error('Error fetching data:', e);
        return;
      }
      if (ignore) {
        return;
      }
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.group('CALL initial load', [...sketches]);
      let selectedSketchIdx = sketches.findIndex(
        (s) => s.uuid === settingsRef.current.selectedSketchUUID,
      );
      if (selectedSketchIdx === -1) {
        // TODO: toast error
        console.error(
          'Could not find selected sketch, defaulting to defaltExample',
          defaultExampleUUID,
        );
        selectedSketchIdx = sketches.findIndex((s) => s.uuid === defaultExampleUUID);
      }
      selectedSketchIdx = (selectedSketchIdx + 1) % sketches.length;
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.log({ selectedSketchIdx });

      const [selectedSketch] = sketches.splice(selectedSketchIdx, 1);
      assertIsDefined(selectedSketch);
      selectedSketch.meta.indexInList = selectedSketchIdx;
      otherSketchesRef.current = sketches;
      // @ts-expect-error: this is temporary;
      selectedSketchRef.current = selectedSketch;
      panAndZoomCollectionRef.current = panAndZoomRecord;
      $setSelectedSketchUUID(settingsRef.current.selectedSketchUUID, true);
      process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
    }

    void startFetching();
    return () => {
      ignore = true;
    };
  }, [$setSelectedSketchUUID, selectedSketchRef, settingsRef]);

  return (
    <DataStorageProviderSettings value={settings}>
      <DataStorageProviderData value={selectedSketch}>
        <DataStorageProviderFocusData value={focusData}>
          <DataStorageProviderFocusPath value={focusPath}>
            <DataStorageProviderPanAndZoom value={panAndZoom}>
              <DataStorageProviderIsReadOnly value={isReadOnly}>
                <DataStorageProviderMethods value={methods}>{children}</DataStorageProviderMethods>
              </DataStorageProviderIsReadOnly>
            </DataStorageProviderPanAndZoom>
          </DataStorageProviderFocusPath>
        </DataStorageProviderFocusData>
      </DataStorageProviderData>
    </DataStorageProviderSettings>
  );
};

export const useSketchStorageData = () => {
  return React.useContext(DataStorageProviderData);
};
export const useSketchStorageFocusData = () => {
  return React.useContext(DataStorageProviderFocusData);
};
export const useSketchStorageFocusPath = () => {
  return React.useContext(DataStorageProviderFocusPath);
};
export const useSketchStoragePanAndZoom = () => {
  return React.useContext(DataStorageProviderPanAndZoom);
};
export const useSketchStorageIsReadOnly = () => {
  return React.useContext(DataStorageProviderIsReadOnly);
};
export const useSketchStorageMethods = () => {
  return React.useContext(DataStorageProviderMethods);
};
