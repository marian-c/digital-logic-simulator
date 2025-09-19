import type { FunctionComponent } from '@/types/r-ui';
import { useSketchPositions, useSketchStructure } from '@/app/v2/modules/useSketchData';
import type {
  BoxElement,
  CustomBoxElementFull,
  NonCustomBoxElement,
} from '@/app/v2/types/innerSketchStructure';
import type { SketchPosition } from '@/app/v2/types/innerSketchPositions';
import { assertNever } from '@/helpers/basics';
import React from 'react';
import {
  notGateColor,
  notGateHeight,
  notGateWidth,
  connectorCircleRadius,
  customBoxColor,
} from '@/app/v2/config';
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

const NotNonCustomBox: FunctionComponent<{
  boxElement: NonCustomBoxElement;
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

const CustomBox: FunctionComponent<{
  boxElement: CustomBoxElementFull;
  boxPosition: SketchPosition;
}> = ({ boxPosition, boxElement }) => {
  const width = 80;
  const height = 60;
  return (
    <GenericBox
      pos={boxPosition.pos}
      boxId={boxElement.id}
      innerChildren={
        <>
          <rect fill={customBoxColor} width={width} height={height} />
          <text x="14" y="15" fill="white" fontWeight="bold" fontSize={14}>
            CUSTOM
          </text>
        </>
      }
      overChildren={
        <>
          <circle cx="0" cy={20} r={connectorCircleRadius} fill="red" />
          <circle cx="0" cy={40} r={connectorCircleRadius} fill="red" />
          <circle cx={width} cy={height / 2} r={connectorCircleRadius} fill={'red'} />
        </>
      }
    />
  );
};

const NonCustomBox: FunctionComponent<{
  boxElement: NonCustomBoxElement;
  boxPosition: SketchPosition;
}> = ({ boxElement, boxPosition }) => {
  const { nonCustomElementKind } = boxElement;
  switch (nonCustomElementKind) {
    case 'not':
      return <NotNonCustomBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    case 'output':
    case 'and':
    case 'input':
      throw new Error('Not implemented yet');
      break;
    default:
      assertNever(nonCustomElementKind);
      break;
  }
};
const Box: FunctionComponent<{ boxElement: BoxElement; boxPosition: SketchPosition }> = ({
  boxElement,
  boxPosition,
}) => {
  switch (boxElement.boxElementKind) {
    case 'custom':
      return <CustomBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    case 'nonCustom':
      return <NonCustomBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    default:
      assertNever(boxElement);
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
