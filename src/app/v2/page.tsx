'use client';
import { Simulator } from '@/app/v2/modules/simulator';
import { config } from '@/config';
import {
  localStorageGetItemInCollection,
  localStorageSetItemInCollection,
} from '@/helpers/localStorage';
import React from 'react';
import { emptySketch } from '@/app/v2/types/data';
import { useLocalStorageCustom } from '@/hooks/useLocalStorage';
import { v7 as uuidv7 } from 'uuid';
import { exampleSketches } from '@/app/v2/data/loadExample.';
import { SketchProvider, useSelectedSketchInfo } from '@/app/v2/modules/useSketch';

const options = exampleSketches.map((s) => {
  return {
    label: `${s.meta.name} (Example)`,
    value: s.meta.uuid,
  };
});

function Header() {
  const { selectedSketchUUID, setSelectedSketchUUID } = useSelectedSketchInfo();
  const userSketches = useLocalStorageCustom(
    'userSketchUUIDs',
    'default',
    [],
    [],
    selectedSketchUUID,
  );
  const optionsToUse = React.useMemo(() => {
    return [
      ...options,
      ...userSketches.map((s) => {
        return { label: s.name, value: s.uuid };
      }),
    ];
  }, [userSketches]);

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="inline font-bold">Digital logic simulator</h1> (
        <a className="text-blue-500" href={config.sourceCodeUrl}>
          source on Github {selectedSketchUUID}
        </a>
        )
      </div>
      <div>
        <select
          value={selectedSketchUUID}
          onChange={(e) => {
            const value = e.target.value;
            // TODO: maybe move this in the context
            localStorageSetItemInCollection('selectedSketch', 'default', value);
            setSelectedSketchUUID(value);
          }}
        >
          {selectedSketchUUID
            ? optionsToUse.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                );
              })
            : null}
        </select>
        <button
          className="border border-amber-500"
          onClick={() => {
            const name = window.prompt('Provide a unique name for this sketch');
            // TODO: restrict name length
            if (!name) {
              return;
            }

            const uuid = uuidv7();

            const userSketchUUIDs =
              localStorageGetItemInCollection('userSketchUUIDs', 'default') ?? [];

            userSketchUUIDs.push({ name, uuid });
            // TODO: maybe move this in the context
            const sketch = emptySketch({ name, uuid });
            localStorageSetItemInCollection('sketchesStructure', uuid, sketch.structure);
            localStorageSetItemInCollection('sketchesMeta', uuid, sketch.meta);
            localStorageSetItemInCollection('sketchesInputs', uuid, sketch.inputs);
            localStorageSetItemInCollection('sketchesPositions', uuid, sketch.positions);
            localStorageSetItemInCollection('sketchesSimulation', uuid, sketch.simulation);
            localStorageSetItemInCollection('sketchesState', uuid, sketch.state);
            localStorageSetItemInCollection('userSketchUUIDs', 'default', userSketchUUIDs);
            localStorageSetItemInCollection('selectedSketch', 'default', uuid);
            setSelectedSketchUUID(uuid);
          }}
        >
          New empty sketch
        </button>
      </div>
    </div>
  );
}

function V2Inner() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <div className="flex flex-grow border border-amber-500">
        <Simulator />
      </div>
    </div>
  );
}

export default function V2() {
  // separate for context, if needed
  return (
    <SketchProvider>
      <V2Inner />
    </SketchProvider>
  );
}
