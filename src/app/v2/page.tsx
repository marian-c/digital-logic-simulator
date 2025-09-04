'use client';
import { Simulator } from '@/app/v2/modules/simulator';
import { config } from '@/config';
import { examples } from '@/app/v2/data/loadExamples';

type OptionKind = 'default' | 'blank' | 'example' | 'user';
type ValueKind = `${OptionKind}-${string}`;

const options: { label: string; value: ValueKind }[] = [
  { label: 'Load sketch..', value: 'default-default' satisfies ValueKind as ValueKind },
].concat(
  examples.map((e) => {
    return {
      label: e,
      value: `example-${e}`,
    };
  }),
);

function V2Inner() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="flex flex-row justify-between">
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
            onChange={() => {
              console.log('change');
            }}
          >
            {options.map((option) => {
              return <option key={option.value}>{option.label}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-grow border border-amber-500 flex">
        <Simulator />
      </div>
    </div>
  );
}

export default function V2() {
  return <V2Inner />;
}
