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
import { customGateColors, notGateColors } from '@/app/v4/config/colors';
import React from 'react';
import type { CustomBoxElement } from '@/app/v4/types/innerSketchStructure';
import { getBoxSimStateByBoxId } from '@/app/v4/data/getters/sim-state';
import { getCustomCoords } from '@/app/v4/config/sizes';

import { ConnectorPoint } from '@/app/v4/modules/canvas/boxes/connector-point';
import { getSketchFromCustomBox } from '@/app/v4/data/getters/sketch';
import { getOrderedInputsAndOutputs } from '@/app/v4/data/getters/aggregate';

export const BoxCustom: FunctionComponent<{ box: CustomBoxElement }> = ({ box }) => {
  const { id: boxId } = box;
  const { $onBoxWrapperMouseDown, $onBoxWrapperMouseDownActivateOnly } = useInteractionsMethods();
  const { activeInfo } = useInteractionsData();
  const data = useSketchStorageFocusData();
  const isReadOnly = useSketchStorageIsReadOnly();
  const { isReadOnlyRef } = useSketchStorageMethods();
  const { otherSketchesRef, selectedSketchRef } = useSketchStorageMethods();
  const referencedSketch = getSketchFromCustomBox(box, otherSketchesRef.current);

  const { pos, colors, colorizeConnectors, label } = getBoxInfoByBoxId(boxId, data);
  const boxColors = colors || customGateColors;
  const pointColors = colorizeConnectors ? boxColors : { on: 'crimson', off: 'dimgray' };

  const state = getBoxSimStateByBoxId(boxId, data);

  const coords = getCustomCoords(selectedSketchRef.current.uuid)(referencedSketch);
  const { inputs, outputs } = getOrderedInputsAndOutputs(referencedSketch);

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
          width={coords.width}
          height={coords.height}
          fill={boxColors.main}
          strokeWidth={2}
          stroke={customGateColors.main}
        />
        <text
          x={coords.width / 2}
          y="10"
          fill="white"
          fontWeight="bold"
          fontSize={14}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {referencedSketch.meta.name}
        </text>
        <text
          x={coords.width / 2}
          y={coords.height - 1}
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
            x={coords.width / 2}
            y={coords.height + 2}
            width={coords.width}
            fontSize={12}
            fill="black"
          >
            {label}
          </text>
        )}
      </g>

      {inputs.map((input) => {
        return (
          <ConnectorPoint
            key={input.id}
            boxId={boxId}
            boxPos={pos}
            portId={input.id}
            portKind="inputPort"
            state={
              state.simStatesInputs.find((ssi) => {
                return ssi.portId === input.id;
              })!.state
            }
            colors={pointColors}
            cx={coords.ports[input.id]!.x}
            cy={coords.ports[input.id]!.y}
          />
        );
      })}
      {outputs.map((output) => {
        return (
          <ConnectorPoint
            key={output.id}
            boxId={boxId}
            boxPos={pos}
            portId={output.id}
            portKind="outputPort"
            state={
              state.simStatesOutputs.find((sso) => {
                return sso.portId === output.id;
              })!.state
            }
            colors={pointColors}
            cx={coords.ports[output.id]!.x}
            cy={coords.ports[output.id]!.y}
          />
        );
      })}
    </g>
  );
};
