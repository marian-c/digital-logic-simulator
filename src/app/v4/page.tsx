'use client';

import {
  DataStorageProvider,
  useSketchStorageData,
  useSketchStorageMethods,
} from '@/app/v4/providers/dataStorageProvider';
import React from 'react';
import { config } from '@/config';
import { Simulator } from '@/app/v4/modules/simulator';
import { assertIsDefined, isBrowser } from '@/helpers/basics';
import { buttonCN, selectCN, textLinkCN } from '@/classnames';
import { Breadcrumbs } from '@/app/v4/modules/breadcrumbs';

function Header() {
  const selectedSketch = useSketchStorageData();
  const { otherSketchesRef, $setSelectedSketchUUID, $addSketch, selectedSketchRef, $deleteSketch } =
    useSketchStorageMethods();

  const options = React.useMemo(() => {
    process.env.NEXT_PUBLIC_LOGS_DEBUG && console.group('Derive options for dropdown');
    const list = [...otherSketchesRef.current];
    assertIsDefined(selectedSketch.meta.indexInList);
    list.splice(selectedSketch.meta.indexInList, 0, selectedSketch);

    console.log(list);
    process.env.NEXT_PUBLIC_LOGS_DEBUG && console.groupEnd();
    return list.map((i) => {
      return { value: i.uuid, label: `${i.meta.name}${i.meta.isExample ? '*' : ''}` };
    });
  }, [otherSketchesRef, selectedSketch]);

  let backButton: React.ReactElement | null = null;
  if (isBrowser && window.history.state?.__APP_V4_PREV_SKETCH) {
    backButton = (
      <>
        <button
          className={buttonCN}
          onClick={() => {
            $setSelectedSketchUUID(window.history.state.__APP_V4_PREV_SKETCH?.uuid);
          }}
        >
          Back to {window.history.state.__APP_V4_PREV_SKETCH.name}
        </button>{' '}
      </>
    );
  }

  return (
    <div className="flex justify-between p-2 bg-gray-200">
      <div>
        <h1 className="inline font-bold">Digital logic simulator</h1> (
        <a className={textLinkCN} href={config.sourceCodeUrl}>
          source on Github
        </a>
        ) ::{' '}
        <h2 data-testid="selected-sketch-title" className="inline">
          {selectedSketch.meta.name}
          {selectedSketch.meta.isExample && ' [ex]'}
        </h2>
      </div>
      <div className="text-right">
        {backButton}
        <select
          data-testid="sketch-select"
          className={`${selectCN} mr-2 w-40`}
          style={{ lineHeight: '10px' }}
          value={selectedSketch.uuid}
          onChange={(e) => {
            const value = e.target.value;
            $setSelectedSketchUUID(value);
          }}
        >
          {selectedSketch.uuid
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
          data-testid="trigger-add-new-sketch"
          title="Add new sketch"
          className={`${buttonCN} mr-2 text-green-600`}
          onClick={() => {
            const name = window.prompt('Provide a unique name for this sketch');
            // TODO: restrict name length
            if (!name) {
              return;
            }

            $addSketch(name);
          }}
        >
          <span style={{ fontSize: '14px', lineHeight: '10px' }}>+</span>
        </button>
        <button
          disabled={selectedSketch.meta.isExample}
          title={
            selectedSketch.meta.isExample ? 'Cannot delete example sketches' : 'Delete this sketch'
          }
          className={buttonCN}
          onClick={() => {
            const response = window.confirm(`Are you sure you want to delete this sketch? 
${selectedSketchRef.current.meta.name}`);

            if (response === false) {
              return;
            }
            $deleteSketch(selectedSketchRef.current.uuid);
          }}
        >
          <span style={{ fontSize: '12px' }}>❌</span> this
        </button>
      </div>
    </div>
  );
}

function V4Inner() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Breadcrumbs />
      <div className="flex flex-grow">
        <Simulator />
      </div>
    </div>
  );
}

export default function V4() {
  return (
    <DataStorageProvider>
      <V4Inner />
    </DataStorageProvider>
  );
}
