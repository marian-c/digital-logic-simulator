import React, { useState } from 'react';
import type {
  SketchInputs,
  SketchMeta,
  SketchPositions,
  SketchSimulation,
  SketchState,
  SketchStructure,
} from '@/app/v2/types/data';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { useSelectedSketchInfo } from '@/app/v2/modules/useSketch';
import { exampleSketches } from '@/app/v2/data/loadExample.';
import { isBrowser } from '@/helpers/basics';
import {
  localStorageGetItemInCollection,
  localStorageGetItemInCollectionOrThrow,
  localStorageSetItemInCollection,
} from '@/helpers/localStorage';

if (isBrowser) {
  // TODO: should probably store only on change, and not everything, for example the structure is not changeable for examples
  exampleSketches.forEach((sketch) => {
    const structure = localStorageGetItemInCollection('v2sketchesStructure', sketch.meta.uuid);
    if (!structure) {
      localStorageSetItemInCollection('v2sketchesStructure', sketch.meta.uuid, sketch.structure);
    }

    const meta = localStorageGetItemInCollection('v2sketchesMeta', sketch.meta.uuid);
    if (!meta) {
      localStorageSetItemInCollection('v2sketchesMeta', sketch.meta.uuid, sketch.meta);
    }

    const positions = localStorageGetItemInCollection('v2sketchesPositions', sketch.meta.uuid);
    if (!positions) {
      localStorageSetItemInCollection('v2sketchesPositions', sketch.meta.uuid, sketch.positions);
    }

    const inputs = localStorageGetItemInCollection('v2sketchesInputs', sketch.meta.uuid);
    if (!inputs) {
      localStorageSetItemInCollection('v2sketchesInputs', sketch.meta.uuid, sketch.inputs);
    }

    const simulation = localStorageGetItemInCollection('v2sketchesSimulation', sketch.meta.uuid);
    if (!simulation) {
      localStorageSetItemInCollection('v2sketchesSimulation', sketch.meta.uuid, sketch.simulation);
    }

    const state = localStorageGetItemInCollection('v2sketchesState', sketch.meta.uuid);
    if (!state) {
      localStorageSetItemInCollection('v2sketchesState', sketch.meta.uuid, sketch.state);
    }
  });
}

const SketchDataMethodsContext = React.createContext<{
  $setSketchStructure: React.Dispatch<React.SetStateAction<SketchStructure>>;
  $setSketchMeta: React.Dispatch<React.SetStateAction<SketchMeta>>;
  $setSketchPositions: React.Dispatch<React.SetStateAction<SketchPositions>>;
  $setSketchInputs: React.Dispatch<React.SetStateAction<SketchInputs>>;
  $setSketchSimulation: React.Dispatch<React.SetStateAction<SketchSimulation>>;
  $setSketchState: React.Dispatch<React.SetStateAction<SketchState>>;
}>(null as any);

const SketchStructureContext = React.createContext<SketchStructure>(null as any);

const SketchMetaContext = React.createContext<SketchMeta>(null as any);

const SketchPositionsContext = React.createContext<SketchPositions>(null as any);

const SketchInputsContext = React.createContext<SketchInputs>(null as any);

const SketchSimulationContext = React.createContext<SketchSimulation>(null as any);

const SketchStateContext = React.createContext<SketchState>(null as any);

export const SketchDataProvider: FunctionComponentWithChildren = ({ children }) => {
  const { selectedSketchUUID } = useSelectedSketchInfo();
  if (!selectedSketchUUID) {
    throw new Error('SelectedSketchUUID is required');
  }

  const [sketchStructure, $setSketchStructure] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('v2sketchesStructure', selectedSketchUUID);
  });

  const [sketchMeta, $setSketchMeta] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('v2sketchesMeta', selectedSketchUUID);
  });

  const [sketchPositions, $setSketchPositions] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('v2sketchesPositions', selectedSketchUUID);
  });

  const [sketchInputs, $setSketchInputs] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('v2sketchesInputs', selectedSketchUUID);
  });

  const [sketchSimulation, $setSketchSimulation] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('v2sketchesSimulation', selectedSketchUUID);
  });

  const [sketchState, $setSketchState] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('v2sketchesState', selectedSketchUUID);
  });
  const callbacks = React.useMemo(() => {
    return {
      $setSketchStructure,
      $setSketchMeta,
      $setSketchPositions,
      $setSketchInputs,
      $setSketchSimulation,
      $setSketchState,
    };
  }, [
    $setSketchStructure,
    $setSketchMeta,
    $setSketchPositions,
    $setSketchInputs,
    $setSketchSimulation,
    $setSketchState,
  ]);

  return (
    <SketchStructureContext value={sketchStructure}>
      <SketchMetaContext value={sketchMeta}>
        <SketchPositionsContext value={sketchPositions}>
          <SketchInputsContext value={sketchInputs}>
            <SketchSimulationContext value={sketchSimulation}>
              <SketchStateContext value={sketchState}>
                <SketchDataMethodsContext value={callbacks}>{children}</SketchDataMethodsContext>
              </SketchStateContext>
            </SketchSimulationContext>
          </SketchInputsContext>
        </SketchPositionsContext>
      </SketchMetaContext>
    </SketchStructureContext>
  );
};

export const useSketchStructure = () => {
  return React.useContext(SketchStructureContext);
};

export const useSketchMeta = () => {
  return React.useContext(SketchMetaContext);
};

export const useSketchPositions = () => {
  return React.useContext(SketchPositionsContext);
};

export const useSketchInputs = () => {
  return React.useContext(SketchInputsContext);
};

export const useSketchSimulation = () => {
  return React.useContext(SketchSimulationContext);
};

export const useSketchState = () => {
  return React.useContext(SketchStateContext);
};

export const useSketchDataMethods = () => {
  return React.useContext(SketchDataMethodsContext);
};
