import type { FunctionComponent } from '@/types/r-ui';
import type { OutputBoxElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import { GenericBox } from '@/app/v3/modules/canvas/boxes/genericBox';
import { outputCircleToCircleDist } from '@/app/v3/config';
import React from 'react';

export const OutputBox: FunctionComponent<{
  boxElement: OutputBoxElement;
  boxPosition: SketchBoxPosition;
}> = ({ boxElement, boxPosition }) => {
  return (
    <GenericBox
      boxId={boxElement.id}
      pos={boxPosition.pos}
      innerChildren={
        <>
          <rect
            fill="black"
            stroke="black"
            width={outputCircleToCircleDist}
            height={6}
            x={0}
            y={-3}
          />

          <rect
            fill="gray"
            stroke="#E8AA2DFF"
            width={30}
            height={20}
            x={outputCircleToCircleDist - 15}
            y={-10}
          />
        </>
      }
      overChildren={
        <>
          <circle
            data-desc="output/input-connector"
            cursor="copy"
            onMouseDown={(_mouseEvent) => {
              console.log('TODO: MAYBE start dragging connector');
            }}
            onMouseOver={(_e) => {
              console.log('TODO: onReceivingPointMouseOver');
            }}
            onMouseOut={() => {
              console.log('TODO: on receiving point mouse out');
            }}
            fill={Math.random() > 0.5 ? 'crimson' : 'dimgray'}
            r={6}
          />
        </>
      }
    />
  );
};
