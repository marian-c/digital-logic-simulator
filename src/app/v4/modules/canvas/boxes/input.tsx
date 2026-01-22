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
import { inputGateColors } from '@/app/v4/config/colors';
import React from 'react';
import type { InputBoxElement } from '@/app/v4/types/innerSketchStructure';
import { coordsInput } from '@/app/v4/config/sizes';
import { getBoxSimStateByBoxId } from '@/app/v4/data/getters/sim-state';
import { ConnectorPoint } from '@/app/v4/modules/canvas/boxes/connector-point';

const inputClickableWidth = 40;
const inputClickableHeight = 30;

export const BoxInput: FunctionComponent<{ box: InputBoxElement }> = ({ box }) => {
  const { $onBoxWrapperMouseDown, $onBoxWrapperMouseDownActivateOnly, $onInputPointMouseUp } =
    useInteractionsMethods();
  const { activeInfo } = useInteractionsData();
  const data = useSketchStorageFocusData();
  const isReadOnly = useSketchStorageIsReadOnly();
  const { isReadOnlyRef } = useSketchStorageMethods();

  const { id: boxId } = box;
  const { pos, colors, colorizeConnectors, label } = getBoxInfoByBoxId(boxId, data);

  const boxColors = colors || inputGateColors;
  const pointColors = colorizeConnectors ? boxColors : { on: 'crimson', off: 'dimgray' };
  const isActive = activeInfo.active?.id === boxId;

  const cursor = isReadOnly ? 'default' : 'grab';
  const clickableCursor = isReadOnly ? 'default' : 'pointer';
  const state = getBoxSimStateByBoxId(boxId, data);

  const clickablePoints: React.ReactElement[] = [];
  const numWires = box.p.numWires;
  switch (numWires) {
    case 1:
      clickablePoints.push(
        <rect
          key={0}
          cursor={clickableCursor}
          fill={state.simStatesOutputs[0]!.state.value[0] ? pointColors.on : pointColors.off}
          stroke="white"
          strokeWidth={1}
          width={inputClickableWidth - 2}
          height={inputClickableHeight - 2}
          x={-inputClickableWidth / 2 + 1}
          y={-inputClickableHeight / 2 + 1}
          onMouseUp={
            isReadOnlyRef.current
              ? undefined
              : (mouseEvent) => {
                  $onInputPointMouseUp(boxId, 0, mouseEvent.button);
                }
          }
        />,
      );
      break;
    case 4:
      clickablePoints.push(
        ...[0, 1, 2, 3].map((i) => {
          return (
            <rect
              key={i}
              cursor={clickableCursor}
              fill={state.simStatesOutputs[0]!.state.value[i] ? pointColors.on : pointColors.off}
              stroke="white"
              strokeWidth={1}
              width={(inputClickableWidth - 2) / 2}
              height={(inputClickableHeight - 2) / 2}
              x={-inputClickableWidth / 2 + 1 + ((inputClickableWidth - 2) / 2) * (i % 2)}
              y={
                -inputClickableHeight / 2 + 1 + ((inputClickableHeight - 2) / 2) * Math.floor(i / 2)
              }
              onMouseUp={
                isReadOnlyRef.current
                  ? undefined
                  : (mouseEvent) => {
                      $onInputPointMouseUp(boxId, i, mouseEvent.button);
                    }
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
              cursor={clickableCursor}
              fill={state.simStatesOutputs[0]!.state.value[i] ? pointColors.on : pointColors.off}
              stroke="white"
              strokeWidth={1}
              width={(inputClickableWidth - 2) / 4}
              height={(inputClickableHeight - 2) / 2}
              x={-inputClickableWidth / 2 + 1 + ((inputClickableWidth - 2) / 4) * (i % 4)}
              y={
                -inputClickableHeight / 2 + 1 + ((inputClickableHeight - 2) / 2) * Math.floor(i / 4)
              }
              onMouseUp={
                isReadOnlyRef.current
                  ? undefined
                  : (mouseEvent) => {
                      $onInputPointMouseUp(boxId, i, mouseEvent.button);
                    }
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
          width={coordsInput.circleToCircleDist}
          height={6}
          x={0}
          y={-3}
        />
        <rect
          cursor={cursor}
          fill="black"
          stroke={inputGateColors.main}
          strokeWidth={1}
          width={inputClickableWidth}
          height={inputClickableHeight}
          x={-inputClickableWidth / 2}
          y={-inputClickableHeight / 2}
        />
        {clickablePoints}

        <text
          x={coordsInput.circleToCircleDist / 2 + 4}
          y={6}
          textAnchor="start"
          dominantBaseline="hanging"
          fill="black"
          fontSize={11}
        >
          ({boxId})
        </text>

        {label?.length && (
          <text
            style={{ whiteSpace: 'break-spaces' }}
            textAnchor="end"
            dominantBaseline="middle"
            x={-(inputClickableWidth / 2) - 3}
            y={0}
            fontSize={12}
            fill="black"
          >
            {label}
          </text>
        )}
      </g>
      <ConnectorPoint
        portKind="outputPort"
        cy={coordsInput.ports[0].y}
        cx={coordsInput.ports[0].x}
        boxId={boxId}
        boxPos={pos}
        portId={0}
        state={state.simStatesOutputs[0]!.state}
        colors={pointColors}
      />
    </g>
  );
};
