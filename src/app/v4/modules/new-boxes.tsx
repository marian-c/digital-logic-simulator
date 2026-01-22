import {
  andGateColors,
  customGateColors,
  inputGateColors,
  joinGateColors,
  notGateColors,
  outputGateColors,
  splitGateColors,
} from '@/app/v4/config/colors';
import { useInteractionsMethods } from '@/app/v4/providers/interactionsProvider';
import { useSketchStorageMethods } from '@/app/v4/providers/dataStorageProvider';
import { getUsableCustomBoxes } from '@/app/v4/data/getters/box';
import { sectionHeadingCN } from '@/classnames';
import React from 'react';

const newBoxCN = 'w-fit px-2 py-1 mb-1 text-black font-bold cursor-grab';

export function NewBoxes() {
  const { $onNewBoxMouseDown } = useInteractionsMethods();
  const { otherSketchesRef, selectedSketchRef } = useSketchStorageMethods();

  // TODO: use memo
  const otherCustomStuff = getUsableCustomBoxes(
    selectedSketchRef.current.uuid,
    otherSketchesRef.current,
  );

  const refCallback: React.RefCallback<HTMLDivElement> = React.useCallback<
    React.RefCallback<HTMLDivElement>
  >((el) => {
    const onWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };
    if (el) {
      el.addEventListener('wheel', onWheel, { passive: false });
    }
    return () => {
      el?.removeEventListener('wheel', onWheel);
    };
  }, []);

  const extraBoxes = otherCustomStuff.map((box) => {
    return (
      <div
        key={box.uuid}
        className={newBoxCN}
        // TODO: a custom chip can have a user selected custom color
        style={{ backgroundColor: `${customGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['custom', { uuid: box.uuid }], e.button);
        }}
      >
        {box.meta.name}
      </div>
    );
  });

  return (
    <div
      className="absolute top-2 left-2 bottom-2 w-[130px] z-20 select-none overflow-y-auto overflow-x-hidden border bg-amber-50 bg-opacity-75 p-2"
      ref={refCallback}
    >
      <div className={sectionHeadingCN}>Add new:</div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${inputGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['input', { numWires: 1 }], e.button);
        }}
      >
        Input 1
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${inputGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['input', { numWires: 4 }], e.button);
        }}
      >
        Input 4
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${inputGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['input', { numWires: 8 }], e.button);
        }}
      >
        Input 8
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${outputGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['output', { numWires: 1 }], e.button);
        }}
      >
        Output 1
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${outputGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['output', { numWires: 4 }], e.button);
        }}
      >
        Output 4
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${outputGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['output', { numWires: 8 }], e.button);
        }}
      >
        Output 8
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${andGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['and', 0], e.button);
        }}
      >
        AND
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${notGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['not', 0], e.button);
        }}
      >
        NOT
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${joinGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['join', { toNumWires: 4 }], e.button);
        }}
      >
        JOIN 4
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${joinGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['join', { toNumWires: 8 }], e.button);
        }}
      >
        JOIN 8
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${splitGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['split', { fromNumWires: 4 }], e.button);
        }}
      >
        SPLIT 4
      </div>
      <div
        className={newBoxCN}
        style={{ backgroundColor: `${splitGateColors.main}70` }}
        onMouseDown={(e) => {
          $onNewBoxMouseDown(['split', { fromNumWires: 8 }], e.button);
        }}
      >
        SPLIT 8
      </div>
      {extraBoxes}
    </div>
  );
}
