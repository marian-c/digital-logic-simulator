import type { FunctionComponent } from '@/types/r-ui';
import React from 'react';
import { useInteractionsData, useInteractionsMethods } from '@/app/v3/providers/interactions';

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
      {overChildren}
    </g>
  );
};
