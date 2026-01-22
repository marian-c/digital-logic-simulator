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
import { splitGateColors } from '@/app/v4/config/colors';
import { getBoxSimStateByBoxId } from '@/app/v4/data/getters/sim-state';
import React from 'react';
import type { SplitBoxElement } from '@/app/v4/types/innerSketchStructure';
import { coordsSplit, type NumsNumWiresHack } from '@/app/v4/config/sizes';
import { ConnectorPoint } from '@/app/v4/modules/canvas/boxes/connector-point';

export const BoxSplit: FunctionComponent<{ box: SplitBoxElement }> = ({ box }) => {
  const { id: boxId } = box;
  const { fromNumWires } = box.p;
  const size1 = coordsSplit;
  const size2 = coordsSplit[fromNumWires];
  const { $onBoxWrapperMouseDown, $onBoxWrapperMouseDownActivateOnly } = useInteractionsMethods();
  const { activeInfo } = useInteractionsData();
  const data = useSketchStorageFocusData();
  const isReadOnly = useSketchStorageIsReadOnly();
  const { isReadOnlyRef } = useSketchStorageMethods();

  const { pos, colors, colorizeConnectors, label } = getBoxInfoByBoxId(boxId, data);
  const state = getBoxSimStateByBoxId(boxId, data);

  const boxColors = colors || splitGateColors;
  const pointColors = colorizeConnectors ? boxColors : { on: 'crimson', off: 'dimgray' };

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
          width={size1.width}
          height={size2.height}
          fill={boxColors.main}
          strokeWidth={2}
          stroke={splitGateColors.main}
        />
        <text x="7" y="20" fill="white" fontWeight="bold" fontSize={14}>
          SPLIT {fromNumWires}
        </text>
        <text
          x={size1.width / 2}
          y={size2.height - 5}
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
            x={size1.width / 2}
            y={size2.height + 2}
            width={size1.width}
            fontSize={12}
            fill="black"
          >
            {label}
          </text>
        )}
      </g>
      <ConnectorPoint
        portKind="inputPort"
        cx={size2.ports[0].x}
        cy={size2.ports[0].y}
        portId={0}
        boxId={boxId}
        boxPos={pos}
        colors={pointColors} // TODO: should be the colors of the connector
        state={state.simStatesInputs[0]!.state}
      />
      {Array.from({ length: fromNumWires }).map((_, i) => {
        const portId = (i + 1) as NumsNumWiresHack;
        return (
          <ConnectorPoint
            key={i}
            portKind="outputPort"
            cx={size2.ports[portId].x}
            cy={size2.ports[portId].y}
            portId={portId}
            boxId={boxId}
            boxPos={pos}
            colors={pointColors}
            state={state.simStatesOutputs[portId - 1]!.state}
          />
        );
      })}
    </g>
  );
};
