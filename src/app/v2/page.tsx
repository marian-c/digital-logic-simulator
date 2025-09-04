'use client';

import { Simulator } from '@/app/v2/modules/simulator';
import { config } from '@/config';
import { examples } from '@/app/v2/data/loadExamples';
import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

type OptionKind = 'default' | 'blank' | 'example' | 'user';
type ValueKind = `${OptionKind}-${string}`;

const DEFAULT_OPTION = 'default-default';

const options: { label: string; value: ValueKind }[] = [
  { label: 'Load sketch..', value: DEFAULT_OPTION satisfies ValueKind as ValueKind },
].concat(
  examples.map((e) => {
    return {
      label: e,
      value: `example-${e}`,
    };
  }),
);

export default function V2() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const [selectedSketch, setSelectedSketch] = useState<ValueKind>(DEFAULT_OPTION);

  // https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams
  const updateExampleSearchParam = useCallback(
    (value: ValueKind) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('example', value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    console.log('params changed', searchParams);
    const example = searchParams.get('example') as ValueKind | null;
    if (example) {
      setSelectedSketch(example);
    }
  }, [searchParams]);

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
            value={selectedSketch}
            onChange={(e) => {
              console.log('change');

              // setSelectedSketch(e.target.value as ValueKind);
              router.push(`${pathName}?${updateExampleSearchParam(e.target.value as ValueKind)}`);
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
