import type { FunctionComponent } from '@/types/r-ui';
import { useSketchPositions, useSketchStructure } from '@/app/v2/modules/useSketchData';
import type { BoxElement, NotBoxElement } from '@/app/v2/types/innerSketchStructure';
import type { SketchPosition } from '@/app/v2/types/innerSketchPositions';
import { assertNever } from '@/helpers/basics';
import React from 'react';
import { notGateColor, notGateHeight, notGateWidth, connectorCircleRadius } from '@/app/v2/config';
import { useInteractions } from '@/app/v2/modules/interactions/provider';

const GenericBox: FunctionComponent<{
  innerChildren?: React.ReactNode;
  overChildren?: React.ReactNode;
  pos: { x: number; y: number };
  boxId: number;
}> = ({ innerChildren, overChildren, pos, boxId }) => {
  const { onBoxWrapperClick } = useInteractions();
  return (
    <g
      onClick={(e) => {
        onBoxWrapperClick(boxId, e);
      }}
      transform={`translate(${pos.x}, ${pos.y})`}
    >
      <g
        onMouseDown={() => {
          // TODO: opt: callback
          // onElementMouseDown (for dragging)
        }}
      >
        {innerChildren}
      </g>
      {overChildren}
    </g>
  );
};

const NotBox: FunctionComponent<{
  boxElement: NotBoxElement;
  boxPosition: SketchPosition;
}> = ({ boxElement, boxPosition }) => {
  return (
    <GenericBox
      boxId={boxElement.id}
      pos={boxPosition.pos}
      innerChildren={
        <>
          <rect fill={notGateColor} width={notGateWidth} height={notGateHeight} />
          <text x="14" y="15" fill="white" fontWeight="bold" fontSize={14}>
            NOT
          </text>
        </>
      }
      overChildren={
        <>
          <circle cx="0" cy={notGateHeight / 2} r={connectorCircleRadius} fill="red" />
          <circle cx={notGateWidth} cy={notGateHeight / 2} r={connectorCircleRadius} fill={'red'} />
        </>
      }
    />
  );
};

const Box: FunctionComponent<{ boxElement: BoxElement; boxPosition: SketchPosition }> = ({
  boxElement,
  boxPosition,
}) => {
  const { boxElementKind } = boxElement;
  switch (boxElementKind) {
    case 'not':
      return <NotBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    case 'output':
    case 'and':
    case 'input':
      throw new Error('Not implemented yet');
      break;
    default:
      assertNever(boxElementKind);
      break;
  }
};

export const Boxes: FunctionComponent = () => {
  const sketchStructure = useSketchStructure();
  const sketchPositions = useSketchPositions();
  return (
    <>
      {sketchStructure.main.boxElements.map((boxElement) => {
        // XXX: assumes valid sketch
        const boxPosition = sketchPositions.positions.find((sp) => sp.boxId === boxElement.id)!;
        return <Box boxElement={boxElement} boxPosition={boxPosition} key={boxElement.id} />;
      })}
    </>
  );
};
