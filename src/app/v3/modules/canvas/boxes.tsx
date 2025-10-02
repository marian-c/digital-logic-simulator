// TODO: if a box is dragged, we don't need to render all the other boxes

import type { FunctionComponent } from '@/types/r-ui';
import { assertNever } from '@/helpers/basics';
import React from 'react';
import {
  notGateColor,
  notGateHeight,
  notGateWidth,
  connectorCircleRadius,
  inputCircleToCircleDist,
  outputCircleToCircleDist,
  andGateColor,
  andGateWidth,
  andGateHeight,
} from '@/app/v3/config';
import { useInteractionsData, useInteractionsMethods } from '@/app/v3/providers/interactions';
import type {
  AndBoxElement,
  BoxElement,
  InputBoxElement,
  NotBoxElement,
  OutputBoxElement,
} from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { getActiveSketch, getBoxPositionFromSketch } from '@/app/v3/data/utils/selectors';

const GenericBox: FunctionComponent<{
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

const InputBox: FunctionComponent<{
  boxElement: InputBoxElement;
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
            width={inputCircleToCircleDist}
            height={6}
            x={0}
            y={-3}
          />
          <rect
            cursor={'pointer'}
            fill="gray"
            stroke="#E8AA2DFF"
            strokeWidth={1}
            width={30}
            height={20}
            x={-15}
            y={-10}
            onClick={() => {
              console.log('TODO: implement setting the input state');
            }}
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
            cursor="pointer"
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

const NotBox: FunctionComponent<{
  boxElement: NotBoxElement;
  boxPosition: SketchBoxPosition;
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
  boxPosition: SketchBoxPosition;
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

const Box: FunctionComponent<{ boxElement: BoxElement; boxPosition: SketchBoxPosition }> = ({
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
  const data = useSketchStorageData();
  const activeSketch = getActiveSketch(data);

  return (
    <>
      {activeSketch.structure.main.boxElements.map((boxElement) => {
        // XXX: assumes valid sketch
        const boxPosition = getBoxPositionFromSketch(boxElement.id, activeSketch);
        return <Box boxElement={boxElement} boxPosition={boxPosition} key={boxElement.id} />;
      })}
    </>
  );
};
