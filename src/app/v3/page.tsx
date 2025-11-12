'use client';
import { config } from '@/config';
import React from 'react';
import {
  DataStorageProvider,
  useSketchStorageData,
  useSketchStorageMethods,
} from '@/app/v3/providers/dataStorageProvider';
import { actionAddEmptySketchAndSelect, actionSelectSketch } from '@/app/v3/data/utils/actions';
import { Simulator } from '@/app/v3/modules/simulator';
import { cleanupAllSketches } from '@/app/v3/data/helpers';

function Header() {
  const data = useSketchStorageData();
  const { $setSketchData } = useSketchStorageMethods();
  // TODO: OPT: memo options
  const options = data.sketches.map((s) => {
    return { value: s.meta.uuid, label: s.meta.name };
  });
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
          value={data.selectedSketchUuid}
          onChange={(e) => {
            const value = e.target.value;
            const newData = actionSelectSketch(value, data);
            const cleanData = cleanupAllSketches(newData);
            $setSketchData(cleanData);
          }}
        >
          {data.selectedSketchUuid
            ? options.map((option) => {
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

            $setSketchData(actionAddEmptySketchAndSelect(name, data));
          }}
        >
          New empty sketch
        </button>
      </div>
    </div>
  );
}

function V3Inner() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <div className="flex flex-grow border border-amber-500">
        <Simulator />
      </div>
    </div>
  );
}

export default function V3() {
  return (
    <DataStorageProvider>
      <V3Inner />
    </DataStorageProvider>
  );
}
