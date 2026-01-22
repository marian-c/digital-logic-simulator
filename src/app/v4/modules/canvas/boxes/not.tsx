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
import { notGateColors } from '@/app/v4/config/colors';
import React from 'react';
import type { NotBoxElement } from '@/app/v4/types/innerSketchStructure';
import { getBoxSimStateByBoxId } from '@/app/v4/data/getters/sim-state';
import { coordsNot } from '@/app/v4/config/sizes';

import { ConnectorPoint } from '@/app/v4/modules/canvas/boxes/connector-point';

export const BoxNot: FunctionComponent<{ box: NotBoxElement }> = ({ box }) => {
  const { id: boxId } = box;
  const { $onBoxWrapperMouseDown, $onBoxWrapperMouseDownActivateOnly } = useInteractionsMethods();
  const { activeInfo } = useInteractionsData();
  const data = useSketchStorageFocusData();
  const isReadOnly = useSketchStorageIsReadOnly();
  const { isReadOnlyRef } = useSketchStorageMethods();

  const { pos, colors, colorizeConnectors, label } = getBoxInfoByBoxId(boxId, data);
  const boxColors = colors || notGateColors;
  const pointColors = colorizeConnectors ? boxColors : { on: 'crimson', off: 'dimgray' };

  const state = getBoxSimStateByBoxId(boxId, data);

  return (
    <g
      transform={`translate(${pos.x}, ${pos.y})`}
      filter={activeInfo.active?.id === boxId ? 'url(#f1)' : 'none'}
    >
      <g
        cursor={isReadOnly ? 'pointer' : 'grab'}
        onMouseDown={(mouseEvent) => {
          return isReadOnlyRef.current
            ? $onBoxWrapperMouseDownActivateOnly(boxId, mouseEvent.button)
            : $onBoxWrapperMouseDown(boxId, mouseEvent.button);
        }}
      >
        <rect
          width={coordsNot.width}
          height={coordsNot.height}
          fill={boxColors.main}
          strokeWidth={2}
          stroke={notGateColors.main}
        />
        <text x="14" y="10" fill="white" fontWeight="bold" fontSize={14}>
          NOT
        </text>
        <text
          x={coordsNot.width / 2}
          y={coordsNot.height - 1}
          textAnchor="middle"
          fill="white"
          fontSize={11}
        >
          ({boxId})
        </text>
        {label?.length && (
          <text
            style={{ whiteSpace: 'break-spaces' }}
            textAnchor="middle"
            dominantBaseline="hanging"
            x={coordsNot.width / 2}
            y={coordsNot.height + 2}
            width={coordsNot.width}
            fontSize={12}
            fill="black"
          >
            {label}
          </text>
        )}
      </g>

      <ConnectorPoint
        boxId={boxId}
        boxPos={pos}
        portId={0}
        portKind="inputPort"
        state={state.simStatesInputs[0]!.state}
        colors={pointColors}
        cx={coordsNot.ports[0].x}
        cy={coordsNot.ports[0].y}
      />

      <ConnectorPoint
        boxId={boxId}
        boxPos={pos}
        portId={1}
        portKind="outputPort"
        state={state.simStatesOutputs[0]!.state}
        colors={pointColors}
        cx={coordsNot.ports[1].x}
        cy={coordsNot.ports[1].y}
      />
    </g>
  );
};
