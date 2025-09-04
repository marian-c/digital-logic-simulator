'use client';
import { Simulator } from '@/app/v2/modules/simulator';
import { config } from '@/config';
import { examples } from '@/app/v2/data/loadExampleNames';
import { localStorageSetItemInCollection, type SketchSelection } from '@/helpers/localStorage';

type OptionKind = 'default' | 'blank' | 'example' | 'user';
type ValueKind = `${OptionKind}-${string}`;

const options: { label: string; value: ValueKind }[] = [
  { label: 'Load sketch..', value: 'default-default' satisfies ValueKind as ValueKind },
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
              // TODO: we need to distinguish examples from user created sketches
              console.log('change ', e.target.value);

              const name = e.target.value;
              let v: SketchSelection = { kind: 'empty' };
              // TODO: use the template type ValueKind here somehow?
              if (name.startsWith('example-')) {
                v = { kind: 'example', name: name.slice(8) };
              } else if (name.startsWith('user-')) {
                v = { kind: 'user', name: name.slice(5) };
              } else {
                // TODO: surface this error somehow
                throw new Error(`name '${name}' prefix not recognized`);
              }
              localStorageSetItemInCollection('sketchSelection', 'default', v);
            }}
          >
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-grow border border-amber-500">
        <Simulator />
      </div>
    </div>
  );
}

export default function V2() {
  return <V2Inner />;
}
