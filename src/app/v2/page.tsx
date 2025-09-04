'use client';
import { Simulator } from '@/app/v2/modules/simulator';
import { config } from '@/config';
import { examples } from '@/app/v2/data/loadExampleNames';
import {
  localStorageGetItemInCollection,
  localStorageSetItemInCollection,
  type SelectedSketch,
  type SketchSelectionUser,
} from '@/helpers/localStorage';
import React from 'react';
import { emptySketch } from '@/app/v2/types/data';
import { useLocalStorageCustom } from '@/hooks/useLocalStorage';

type OptionKind = 'default' | 'blank' | 'example' | 'user';
type ValueKind = `${OptionKind}-${string}`;

const options: { label: string; value: ValueKind }[] = [
  { label: 'Load sketch...', value: 'default-default' satisfies ValueKind as ValueKind },
].concat(
  examples.map((e) => {
    const name = e.name;
    return {
      label: name,
      value: `example-${name}`,
    };
  }),
);

function V2Inner() {
  const [selectedSketchName, setSelectedSketchName] = React.useState<string | undefined>();
  const userOptions = useLocalStorageCustom(
    'userSketchesNames',
    'default',
    [],
    [],
    selectedSketchName ?? '',
  );
  const optionsToUse = React.useMemo(() => {
    return [
      ...options,
      ...userOptions.map((s) => {
        return { label: s, value: `user-${s}` };
      }),
    ];
  }, [userOptions, options]);
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
              const name = e.target.value;
              let v: SelectedSketch = { kind: 'empty' };
              // TODO: use the template type ValueKind here somehow?
              if (name.startsWith('example-')) {
                v = { kind: 'example', name: name.slice(8) };
              } else if (name.startsWith('user-')) {
                v = { kind: 'user', name: name.slice(5) };
              } else {
                // TODO: surface this error somehow
                throw new Error(`name '${name}' prefix not recognized`);
              }
              localStorageSetItemInCollection('selectedSketch', 'default', v);
              setSelectedSketchName(v.name);
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
              const names = localStorageGetItemInCollection('userSketchesNames', 'default') ?? [];
              if (names.includes(name)) {
                window.alert('Error: name already exists');
                return;
              }
              names.push(name);
              const sketch = emptySketch({ name });
              localStorageSetItemInCollection('userSketches', name, sketch);
              localStorageSetItemInCollection('userSketchesNames', 'default', names);
              const selectedSketch: SketchSelectionUser = { kind: 'user', name };
              localStorageSetItemInCollection('selectedSketch', 'default', selectedSketch);
              setSelectedSketchName(selectedSketch.name);
            }}
          >
            New empty sketch
          </button>
        </div>
      </div>
      <div className="flex flex-grow border border-amber-500">
        <Simulator selectedSketchName={selectedSketchName} />
      </div>
    </div>
  );
}

export default function V2() {
  return <V2Inner />;
}
