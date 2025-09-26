// TODO: if a box is dragged, we don't need to render all the other boxes

import type { FunctionComponent } from '@/types/r-ui';
import { useSketchPositions, useSketchStructure } from '@/app/v2/modules/useSketchData';
import type {
  BoxElement,
  NotBoxElement,
  InputBoxElement,
  OutputBoxElement,
  AndBoxElement,
} from '@/app/v2/types/innerSketchStructure';
import type { SketchPosition } from '@/app/v2/types/innerSketchPositions';
import { assertNever } from '@/helpers/basics';
import React from 'react';
import {
  notGateColor,
  notGateHeight,
  notGateWidth,
  connectorCircleRadius,
  inputMainCircleRadius,
  inputCircleToCircleDist,
  outputCircleToCircleDist,
  outputMainCircleRadius,
  andGateColor,
  andGateWidth,
  andGateHeight,
} from '@/app/v2/config';
import { useInteractions } from '@/app/v2/modules/interactions/provider';

const GenericBox: FunctionComponent<{
  innerChildren?: React.ReactNode;
  overChildren?: React.ReactNode;
  pos: { x: number; y: number };
  boxId: number;
}> = ({ innerChildren, overChildren, pos, boxId }) => {
  const { $onBoxWrapperClick, $onBoxWrapperMouseDown } = useInteractions();
  return (
    <g
      onClick={(e) => {
        // TODO: opt: useCallback
        $onBoxWrapperClick(boxId, e);
      }}
      transform={`translate(${pos.x}, ${pos.y})`}
    >
      <g
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

const InputBox: FunctionComponent<{
  boxElement: InputBoxElement;
  boxPosition: SketchPosition;
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
            width={inputCircleToCircleDist}
            height={6}
            x={0}
            y={-3}
          />
          <circle
            cursor={'pointer'}
            onClick={() => {
              console.log('TODO: implement setting the input state');
            }}
            fill={Math.random() > 0.5 ? 'crimson' : 'dimgray'}
            stroke="black"
            r={inputMainCircleRadius}
          />
        </>
      }
      overChildren={
        <>
          <circle
            onMouseDown={(_mouseEvent) => {
              console.log('TODO: start dragging connector');
            }}
            onMouseOver={(_e) => {
              console.log('TODO: maybe, onReceivingPointMouseOver');
            }}
            onMouseOut={() => {
              console.log('TODO: maybe, on receiving point mouse out');
            }}
            fill={Math.random() > 0.5 ? 'crimson' : 'dimgray'}
            r={6}
            cx={inputCircleToCircleDist}
          />
        </>
      }
    />
  );
};

const OutputBox: FunctionComponent<{
  boxElement: OutputBoxElement;
  boxPosition: SketchPosition;
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
          <circle
            fill={Math.random() > 0.5 ? 'crimson' : 'dimgray'}
            stroke="black"
            r={outputMainCircleRadius}
            cx={outputCircleToCircleDist}
          />
        </>
      }
      overChildren={
        <>
          <circle
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

const AndBox: FunctionComponent<{
  boxElement: AndBoxElement;
  boxPosition: SketchPosition;
}> = ({ boxElement, boxPosition }) => {
  return (
    <GenericBox
      boxId={boxElement.id}
      pos={boxPosition.pos}
      innerChildren={
        <>
          <rect fill={andGateColor} width={andGateWidth} height={andGateHeight} />
          <text x="14" y="25" fill="white" fontWeight="bold" fontSize={14}>
            AND
          </text>
        </>
      }
      overChildren={
        <>
          <circle cx="0" cy={andGateHeight / 4} r={connectorCircleRadius} fill="red" />
          <circle cx="0" cy={(3 * andGateHeight) / 4} r={connectorCircleRadius} fill="red" />
          <circle
            cx={notGateWidth}
            cy={andGateHeight / 2}
            r={connectorCircleRadius}
            fill={'blue'}
          />
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
    case 'input':
      return <InputBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    case 'output':
      return <OutputBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    case 'and':
      return <AndBox boxElement={boxElement} boxPosition={boxPosition} />;
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
