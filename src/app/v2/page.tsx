'use client';
import { Simulator } from '@/app/v2/modules/simulator';
import { config } from '@/config';
import {
  localStorageGetItemInCollection,
  localStorageSetItemInCollection,
  type SelectedSketch,
  type SketchSelectionUser,
} from '@/helpers/localStorage';
import React from 'react';
import { emptySketch } from '@/app/v2/types/data';
import { useLocalStorageCustom } from '@/hooks/useLocalStorage';
import { v7 as uuidv7 } from 'uuid';
import { exampleSketches } from '@/app/v2/data/loadExample.';

type OptionKind = 'default' | 'blank' | 'example' | 'user';
type ValueKind = `${OptionKind}-${string}`;

const options: { label: string; value: ValueKind }[] = [
  { label: 'Load sketch...', value: 'default-default' satisfies ValueKind as ValueKind },
].concat(
  exampleSketches.map((s) => {
    return {
      label: s.meta.name,
      value: `example-${s.meta.uuid}`,
    };
  }),
);

function V2Inner() {
  const [selectedSketchUUID, setSelectedSketchUUID] = React.useState<string | undefined>();
  const userSketches = useLocalStorageCustom(
    'userSketchUUIDs',
    'default',
    [],
    [],
    selectedSketchUUID ?? '',
  );
  const optionsToUse = React.useMemo(() => {
    return [
      ...options,
      ...userSketches.map((s) => {
        return { label: s.name, value: `user-${s.uuid}` };
      }),
    ];
  }, [userSketches]);
  return (
    <div className="min-h-dvh flex flex-col">
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
            value="default-default"
            onChange={(e) => {
              const value = e.target.value;
              let v: SelectedSketch = { kind: 'empty' };
              // TODO: use the template type ValueKind here somehow?
              if (value.startsWith('example-')) {
                v = { kind: 'example', uuid: value.slice(8) };
              } else if (value.startsWith('user-')) {
                v = { kind: 'user', uuid: value.slice(5) };
              } else {
                // TODO: surface this error somehow
                throw new Error(`name '${value}' prefix not recognized`);
              }
              localStorageSetItemInCollection('selectedSketch', 'default', v);
              setSelectedSketchUUID(v.uuid);
            }}
          >
            {optionsToUse.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
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
              const sketch = emptySketch({ name, uuid });
              localStorageSetItemInCollection('userSketchesStructure', uuid, sketch.structure);
              localStorageSetItemInCollection('userSketchesMeta', uuid, sketch.meta);
              localStorageSetItemInCollection('userSketchesInputs', uuid, sketch.inputs);
              localStorageSetItemInCollection('userSketchesPositions', uuid, sketch.positions);
              localStorageSetItemInCollection('userSketchesSimulation', uuid, sketch.simulation);
              localStorageSetItemInCollection('userSketchesState', uuid, sketch.state);
              localStorageSetItemInCollection('userSketchUUIDs', 'default', userSketchUUIDs);
              const selectedSketch: SketchSelectionUser = { kind: 'user', uuid };
              localStorageSetItemInCollection('selectedSketch', 'default', selectedSketch);
              setSelectedSketchUUID(selectedSketch.uuid);
            }}
          >
            New empty sketch
          </button>
        </div>
      </div>
      <div className="flex flex-grow border border-amber-500">
        <Simulator selectedSketchUUID={selectedSketchUUID} />
      </div>
    </div>
  );
}

export default function V2() {
  // separate for context, if needed
  return <V2Inner />;
}
