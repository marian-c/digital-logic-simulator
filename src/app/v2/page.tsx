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
    'v2userSketchUUIDs',
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
          source on Github
        </a>
        )
      </div>
      <div>
        <select
          value={selectedSketchUUID}
          onChange={(e) => {
            const value = e.target.value;
            // TODO: maybe move this in the context
            localStorageSetItemInCollection('v2selectedSketch', 'default', value);
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
              localStorageGetItemInCollection('v2userSketchUUIDs', 'default') ?? [];

            userSketchUUIDs.push({ name, uuid });
            // TODO: maybe move this in the context
            const sketch = emptySketch({ name, uuid });
            localStorageSetItemInCollection('v2sketchesStructure', uuid, sketch.structure);
            localStorageSetItemInCollection('v2sketchesMeta', uuid, sketch.meta);
            localStorageSetItemInCollection('v2sketchesInputs', uuid, sketch.inputs);
            localStorageSetItemInCollection('v2sketchesPositions', uuid, sketch.positions);
            localStorageSetItemInCollection('v2sketchesSimulation', uuid, sketch.simulation);
            localStorageSetItemInCollection('v2sketchesState', uuid, sketch.state);
            localStorageSetItemInCollection('v2userSketchUUIDs', 'default', userSketchUUIDs);
            localStorageSetItemInCollection('v2selectedSketch', 'default', uuid);
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
