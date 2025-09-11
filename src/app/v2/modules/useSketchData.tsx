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
  exampleSketches.forEach((sketch) => {
    const structure = localStorageGetItemInCollection('sketchesStructure', sketch.meta.uuid);
    if (!structure) {
      localStorageSetItemInCollection('sketchesStructure', sketch.meta.uuid, sketch.structure);
    }

    const meta = localStorageGetItemInCollection('sketchesMeta', sketch.meta.uuid);
    if (!meta) {
      localStorageSetItemInCollection('sketchesMeta', sketch.meta.uuid, sketch.meta);
    }

    const positions = localStorageGetItemInCollection('sketchesPositions', sketch.meta.uuid);
    if (!positions) {
      localStorageSetItemInCollection('sketchesPositions', sketch.meta.uuid, sketch.positions);
    }

    const inputs = localStorageGetItemInCollection('sketchesInputs', sketch.meta.uuid);
    if (!inputs) {
      localStorageSetItemInCollection('sketchesInputs', sketch.meta.uuid, sketch.inputs);
    }

    const simulation = localStorageGetItemInCollection('sketchesSimulation', sketch.meta.uuid);
    if (!simulation) {
      localStorageSetItemInCollection('sketchesSimulation', sketch.meta.uuid, sketch.simulation);
    }

    const state = localStorageGetItemInCollection('sketchesState', sketch.meta.uuid);
    if (!state) {
      localStorageSetItemInCollection('sketchesState', sketch.meta.uuid, sketch.state);
    }
  });
}

const SketchStructureContext = React.createContext<{
  sketchStructure: SketchStructure;
  setSketchStructure: React.Dispatch<React.SetStateAction<SketchStructure>>;
}>(null as any);

const SketchMetaContext = React.createContext<{
  sketchMeta: SketchMeta;
  setSketchMeta: React.Dispatch<React.SetStateAction<SketchMeta>>;
}>(null as any);

const SketchPositionsContext = React.createContext<{
  sketchPositions: SketchPositions;
  setSketchPositions: React.Dispatch<React.SetStateAction<SketchPositions>>;
}>(null as any);

const SketchInputsContext = React.createContext<{
  sketchInputs: SketchInputs;
  setSketchInputs: React.Dispatch<React.SetStateAction<SketchInputs>>;
}>(null as any);

const SketchSimulationContext = React.createContext<{
  sketchSimulation: SketchSimulation;
  setSketchSimulation: React.Dispatch<React.SetStateAction<SketchSimulation>>;
}>(null as any);

const SketchStateContext = React.createContext<{
  sketchState: SketchState;
  setSketchState: React.Dispatch<React.SetStateAction<SketchState>>;
}>(null as any);

export const SketchDataProvider: FunctionComponentWithChildren = ({ children }) => {
  const { selectedSketchUUID } = useSelectedSketchInfo();
  if (!selectedSketchUUID) {
    throw new Error('SelectedSketchUUID is required');
  }

  const [sketchStructure, setSketchStructure] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('sketchesStructure', selectedSketchUUID);
  });
  const structureData = React.useMemo(() => {
    return { sketchStructure, setSketchStructure };
  }, [sketchStructure, setSketchStructure]);

  const [sketchMeta, setSketchMeta] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('sketchesMeta', selectedSketchUUID);
  });
  const metaData = React.useMemo(() => {
    return { sketchMeta, setSketchMeta };
  }, [sketchMeta, setSketchMeta]);

  const [sketchPositions, setSketchPositions] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('sketchesPositions', selectedSketchUUID);
  });
  const positionsData = React.useMemo(() => {
    return { sketchPositions, setSketchPositions };
  }, [sketchPositions, setSketchPositions]);

  const [sketchInputs, setSketchInputs] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('sketchesInputs', selectedSketchUUID);
  });
  const inputsData = React.useMemo(() => {
    return { sketchInputs, setSketchInputs };
  }, [sketchInputs, setSketchInputs]);

  const [sketchSimulation, setSketchSimulation] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('sketchesSimulation', selectedSketchUUID);
  });
  const simulationData = React.useMemo(() => {
    return { sketchSimulation, setSketchSimulation };
  }, [sketchSimulation, setSketchSimulation]);

  const [sketchState, setSketchState] = useState(() => {
    return localStorageGetItemInCollectionOrThrow('sketchesState', selectedSketchUUID);
  });
  const stateData = React.useMemo(() => {
    return { sketchState, setSketchState };
  }, [sketchState, setSketchState]);

  return (
    <SketchStructureContext value={structureData}>
      <SketchMetaContext value={metaData}>
        <SketchPositionsContext value={positionsData}>
          <SketchInputsContext value={inputsData}>
            <SketchSimulationContext value={simulationData}>
              <SketchStateContext value={stateData}>{children}</SketchStateContext>
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
