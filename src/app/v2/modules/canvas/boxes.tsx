import type { FunctionComponent } from '@/types/r-ui';
import { useSketchPositions, useSketchStructure } from '@/app/v2/modules/useSketchData';
import type { BoxElement, NonCustomBoxElement } from '@/app/v2/types/innerSketchStructure';
import type { SketchPosition } from '@/app/v2/types/innerSketchPositions';
import { assertNever } from '@/helpers/basics';
import React from 'react';
import { notGateColor, notGateHeight, notGateWidth, connectorCircleRadius } from '@/app/v2/config';

const NotNonCustomBox: FunctionComponent<{
  boxElement: NonCustomBoxElement;
  boxPosition: SketchPosition;
}> = ({ boxElement, boxPosition }) => {
  return (
    <g
      onClick={() => {
        // TODO: opt: callback
        // focus element
      }}
      transform={`translate(${boxPosition.pos.x}, ${boxPosition.pos.y})`}
    >
      <g
        onMouseDown={() => {
          // TODO: opt: callback
          // onElementMouseDown (for dragging)
        }}
      >
        <rect fill={notGateColor} width={notGateWidth} height={notGateHeight} />
        <text x="14" y="15" fill="white" fontWeight="bold" fontSize={14}>
          NOT
        </text>
      </g>
      <circle cx="0" cy={notGateHeight / 2} r={connectorCircleRadius} fill="red" />
      <circle cx={notGateWidth} cy={notGateHeight / 2} r={connectorCircleRadius} fill={'red'} />
    </g>
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
      throw new Error('Not implemented yet');
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
