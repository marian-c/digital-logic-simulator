import type { FunctionComponent } from '@/types/r-ui';
import {
  useInteractionsData,
  useInteractionsMethods,
} from '@/app/v4/providers/interactionsProvider';
import {
  useSketchStorageFocusData,
  useSketchStorageIsReadOnly,
  useSketchStorageMethods,
} from '@/app/v4/providers/dataStorageProvider';
import { getBoxInfoByBoxId } from '@/app/v4/data/getters/info';
import { assertNever } from '@/helpers/basics';
import { outputGateColors } from '@/app/v4/config/colors';
import React from 'react';
import type { OutputBoxElement } from '@/app/v4/types/innerSketchStructure';
import { coordsOutput } from '@/app/v4/config/sizes';
import { getBoxSimStateByBoxId } from '@/app/v4/data/getters/sim-state';
import { ConnectorPoint } from '@/app/v4/modules/canvas/boxes/connector-point';

const outputClickableWidth = 40;
const outputClickableHeight = 30;

export const BoxOutput: FunctionComponent<{ box: OutputBoxElement }> = ({ box }) => {
  const { $onBoxWrapperMouseDown, $onBoxWrapperMouseDownActivateOnly } = useInteractionsMethods();
  const { activeInfo } = useInteractionsData();
  const data = useSketchStorageFocusData();
  const isReadOnly = useSketchStorageIsReadOnly();
  const { isReadOnlyRef } = useSketchStorageMethods();

  const { id: boxId } = box;
  const { pos, colors, colorizeConnectors, label } = getBoxInfoByBoxId(boxId, data);

  const boxColors = colors || outputGateColors;
  const pointColors = colorizeConnectors ? boxColors : { on: 'crimson', off: 'dimgray' };
  const isActive = activeInfo.active?.id === boxId;

  const cursor = isReadOnly ? 'default' : 'grab';
  const state = getBoxSimStateByBoxId(boxId, data);

  const clickablePoints: React.ReactElement[] = [];
  const numWires = box.p.numWires;
  switch (numWires) {
    case 1:
      clickablePoints.push(
        <rect
          key={0}
          fill={state.simStatesInputs[0]!.state.value[0] ? pointColors.on : pointColors.off}
          stroke="white"
          strokeWidth={1}
          width={outputClickableWidth - 2}
          height={outputClickableHeight - 2}
          x={outputClickableWidth / 2 + 1}
          y={-outputClickableHeight / 2 + 1}
        />,
      );
      break;
    case 4:
      clickablePoints.push(
        ...[0, 1, 2, 3].map((i) => {
          return (
            <rect
              key={i}
              fill={state.simStatesInputs[0]!.state.value[i] ? pointColors.on : pointColors.off}
              stroke="white"
              strokeWidth={1}
              width={(outputClickableWidth - 2) / 2}
              height={(outputClickableHeight - 2) / 2}
              x={outputClickableWidth / 2 + 1 + ((outputClickableWidth - 2) / 2) * (i % 2)}
              y={
                -outputClickableHeight / 2 +
                1 +
                ((outputClickableHeight - 2) / 2) * Math.floor(i / 2)
              }
            />
          );
        }),
      );
      break;
    case 8:
      clickablePoints.push(
        ...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          return (
            <rect
              key={i}
              fill={state.simStatesInputs[0]!.state.value[i] ? pointColors.on : pointColors.off}
              stroke="white"
              strokeWidth={1}
              width={(outputClickableWidth - 2) / 4}
              height={(outputClickableHeight - 2) / 2}
              x={outputClickableWidth / 2 + 1 + ((outputClickableWidth - 2) / 4) * (i % 4)}
              y={
                -outputClickableHeight / 2 +
                1 +
                ((outputClickableHeight - 2) / 2) * Math.floor(i / 4)
              }
            />
          );
        }),
      );
      break;
    default:
      assertNever(numWires);
  }

  return (
    <g transform={`translate(${pos.x}, ${pos.y})`} filter={isActive ? 'url(#f1)' : 'none'}>
      <g
        cursor={cursor}
        onMouseDown={(mouseEvent) => {
          // TODO: opt: useCallback
          return isReadOnlyRef.current
            ? $onBoxWrapperMouseDownActivateOnly(boxId, mouseEvent.button)
            : $onBoxWrapperMouseDown(boxId, mouseEvent.button);
        }}
      >
        <rect
          fill="black"
          stroke="black"
          width={coordsOutput.circleToCircleDist}
          height={6}
          x={0}
          y={-3}
        />
        <rect
          cursor={cursor}
          fill="black"
          stroke={outputGateColors.main}
          strokeWidth={1}
          width={outputClickableWidth}
          height={outputClickableHeight}
          x={coordsOutput.circleToCircleDist - outputClickableWidth / 2}
          y={-outputClickableHeight / 2}
        />
        {clickablePoints}

        <text
          x={coordsOutput.circleToCircleDist / 2}
          y={8}
          textAnchor="end"
          dominantBaseline="hanging"
          fill="black"
          fontSize={11}
        >
          ({boxId})
        </text>

        {label?.length && (
          <text
            style={{ whiteSpace: 'break-spaces' }}
            textAnchor="start"
            dominantBaseline="middle"
            x={outputClickableWidth + outputClickableWidth / 2 + 3}
            y={0}
            fontSize={12}
            fill="black"
          >
            {label}
          </text>
        )}
      </g>
      <ConnectorPoint
        portKind="inputPort"
        cy={coordsOutput.ports[0].y}
        cx={coordsOutput.ports[0].x}
        boxId={boxId}
        boxPos={pos}
        portId={0}
        state={state.simStatesInputs[0]!.state}
        colors={pointColors}
      />
    </g>
  );
};
