import type { FunctionComponent } from '@/types/r-ui';
import React from 'react';
import { useInteractionsData, useInteractionsMethods } from '@/app/v3/providers/interactions';
import { useSketchStorageMethods } from '@/app/v3/providers/dataStorageProvider';
import { getActiveBox } from '@/app/v3/data/utils/selectors';
import { assertNever } from '@/helpers/basics';

export const GenericBox: FunctionComponent<{
  innerChildren?: React.ReactNode;
  overChildren?: React.ReactNode;
  pos: { x: number; y: number };
  boxId: number;
}> = ({ innerChildren, overChildren, pos, boxId }) => {
  const { $onBoxWrapperClick, $onBoxWrapperMouseDown } = useInteractionsMethods();
  // TODO: PERF: when size changes or any other interactions data with activeBoxId unchanged, this
  //   component should not re-render
  const { activeBoxId } = useInteractionsData();
  const { sketchDataRef } = useSketchStorageMethods();
  const box = getActiveBox(boxId, sketchDataRef.current);
  let labelElement: React.ReactNode = null;
  switch (box.kind) {
    case 'and':
    case 'custom':
    case 'not':
      labelElement = !box.hideLabel && (
        <text x="0" y="-5" fill="black" fontSize={13} fontWeight="bold">
          {box.label} ({box.id})
        </text>
      );
      break;
    case 'input':
    case 'output':
      break;
    default:
      assertNever(box);
  }
  return (
    <g
      onClick={(e) => {
        // TODO: opt: useCallback
        $onBoxWrapperClick(boxId, e);
      }}
      transform={`translate(${pos.x}, ${pos.y})`}
      filter={activeBoxId === boxId ? 'url(#f1)' : 'none'}
    >
      <g
        cursor="grab"
        onMouseDown={(e) => {
          // TODO: opt: useCallback
          $onBoxWrapperMouseDown(boxId, e);
        }}
      >
        {innerChildren}
      </g>
      {labelElement}
      {overChildren}
    </g>
  );
};
