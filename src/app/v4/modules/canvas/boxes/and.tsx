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
import { andGateColors } from '@/app/v4/config/colors';
import React from 'react';
import type { AndBoxElement } from '@/app/v4/types/innerSketchStructure';
import { getBoxSimStateByBoxId } from '@/app/v4/data/getters/sim-state';
import { coordsAnd } from '@/app/v4/config/sizes';

import { ConnectorPoint } from '@/app/v4/modules/canvas/boxes/connector-point';

export const BoxAnd: FunctionComponent<{ box: AndBoxElement }> = ({ box }) => {
  const { id: boxId } = box;
  const { $onBoxWrapperMouseDown, $onBoxWrapperMouseDownActivateOnly } = useInteractionsMethods();
  const { activeInfo } = useInteractionsData();
  const data = useSketchStorageFocusData();
  const isReadOnly = useSketchStorageIsReadOnly();
  const { isReadOnlyRef } = useSketchStorageMethods();

  const { pos, colors, colorizeConnectors, label } = getBoxInfoByBoxId(boxId, data);
  const boxColors = colors || andGateColors;
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
          width={coordsAnd.width}
          height={coordsAnd.height}
          fill={boxColors.main}
          strokeWidth={2}
          stroke={andGateColors.main}
        />
        <text x="14" y="20" fill="white" fontWeight="bold" fontSize={14}>
          AND
        </text>
        <text
          x={coordsAnd.width / 2}
          y={coordsAnd.height - 5}
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
            x={coordsAnd.width / 2}
            y={coordsAnd.height + 2}
            width={coordsAnd.width}
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
        cx={coordsAnd.ports[0].x}
        cy={coordsAnd.ports[0].y}
      />
      <ConnectorPoint
        boxId={boxId}
        boxPos={pos}
        portId={1}
        portKind="inputPort"
        state={state.simStatesInputs[1]!.state}
        colors={pointColors}
        cx={coordsAnd.ports[1].x}
        cy={coordsAnd.ports[1].y}
      />

      <ConnectorPoint
        boxId={boxId}
        boxPos={pos}
        portId={2}
        portKind="outputPort"
        state={state.simStatesOutputs[0]!.state}
        colors={pointColors}
        cx={coordsAnd.ports[2].x}
        cy={coordsAnd.ports[2].y}
      />
    </g>
  );
};
