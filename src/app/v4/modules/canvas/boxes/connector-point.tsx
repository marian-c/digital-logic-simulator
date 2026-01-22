import type { FunctionComponent } from '@/types/r-ui';
import type { Position } from '@/app/v4/types/innerSketchElementsInfo';
import type { PortKind, State } from '@/app/v4/types/other';
import {
  useSketchStorageFocusData,
  useSketchStorageIsReadOnly,
} from '@/app/v4/providers/dataStorageProvider';
import { useInteractionsMethods } from '@/app/v4/providers/interactionsProvider';
import { getDecideActiveIsPortDraggable } from '@/app/v4/data/deciders/decide';
import React from 'react';
import { assertNever } from '@/helpers/basics';

export const ConnectorPoint: FunctionComponent<{
  boxId: number;
  boxPos: Position;
  cx?: number;
  cy?: number;
  portId: number;
  portKind: PortKind;
  state: State;
  colors: { on: string; off: string };
}> = ({ cx, cy, state, colors, boxId, boxPos, portId, portKind }) => {
  const focusData = useSketchStorageFocusData();
  const { $onConnectorPointMouseDown, $onConnectorPointMouseEnter, $onConnectorPointMouseLeave } =
    useInteractionsMethods();
  const _isPortDraggable = getDecideActiveIsPortDraggable(portId, portKind, boxId, focusData);
  const isReadOnly = useSketchStorageIsReadOnly();
  const isPortDraggable = _isPortDraggable && !isReadOnly;

  const cursor = isPortDraggable ? 'copy' : undefined;

  const h = 2 + state.kind * 2;
  const x = (cx ?? 0) - 3;
  const y = (cy ?? 0) - h / 2;
  const w = 6;

  const bits: React.ReactElement[] = [
    <rect key="main-bg" fill="black" x={x} y={y} width={w} height={h} />,
  ];
  switch (state.kind) {
    case 1:
      // we handle this as a circle
      break;
    case 4:
      bits.push(
        ...[0, 1, 2, 3].map((i) => {
          return (
            <rect
              key={i}
              width={4}
              height={2}
              x={x + 1}
              y={y + 1 + i * 2}
              fill={state.value[i] ? colors.on : colors.off}
            />
          );
        }),
      );
      break;
    case 8:
      bits.push(
        ...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          return (
            <rect
              key={i}
              width={4}
              height={2}
              x={x + 1}
              y={y + 1 + i * 2}
              fill={state.value[i] ? colors.on : colors.off}
            />
          );
        }),
      );
      break;
    default:
      assertNever(state);
  }

  return (
    <g
      cursor={cursor}
      onMouseDown={
        !isPortDraggable
          ? undefined
          : (mouseEvent) => {
              $onConnectorPointMouseDown(
                boxId,
                portId,
                portKind,
                state.kind,
                boxPos.x + (cx || 0),
                boxPos.y + (cy || 0),
                mouseEvent.button,
              );
            }
      }
      onMouseEnter={
        !isPortDraggable
          ? undefined
          : () => {
              $onConnectorPointMouseEnter(
                boxId,
                portId,
                portKind,
                state.kind,
                boxPos.x + (cx || 0),
                boxPos.y + (cy || 0),
              );
            }
      }
      onMouseLeave={() => {
        $onConnectorPointMouseLeave();
      }}
    >
      {state.kind == 1 ? (
        <circle fill={state.value[0] ? colors.on : colors.off} r={6} cx={cx} cy={cy} />
      ) : (
        bits
      )}
    </g>
  );
};
