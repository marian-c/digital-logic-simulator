import type { FunctionComponent } from '@/types/r-ui';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import {
  getActiveConnectorData,
  getActiveSketch,
  getBias,
  getConnectorSimById,
  getPoint,
} from '@/app/v3/data/utils/selectors';
import React from 'react';
import type { BoxElement, ConnectorElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import { plainConnectorExtensionMin } from '@/app/v3/config';
import roundPathCorners from '@/helpers/rounding';
import { useInteractionsData, useInteractionsMethods } from '@/app/v3/providers/interactions';
import type { ConnectorSimState } from '@/app/v3/types/innerSketchSimulation';

export const Connector: FunctionComponent<{
  connectorElement: ConnectorElement;
  fromBox: BoxElement;
  fromBoxPosition: SketchBoxPosition;
  toBox: BoxElement;
  toBoxPosition: SketchBoxPosition;
  sim: ConnectorSimState;
}> = ({ connectorElement, fromBox, fromBoxPosition, toBox, toBoxPosition, sim }) => {
  const data = useSketchStorageData();
  const start = getPoint(fromBox, fromBoxPosition, connectorElement.fromPortId, data);
  const end = getPoint(toBox, toBoxPosition, connectorElement.toPortId, data);
  const bias = getBias(connectorElement.id, data);
  const { $onConnectorMouseDown } = useInteractionsMethods();
  const { activeConnectorId } = useInteractionsData();
  return (
    <>
      {activeConnectorId === connectorElement.id ? (
        <path
          data-desc={`connector-id-${connectorElement.id}`}
          fill="none"
          stroke="#969696a3"
          strokeWidth={7}
          shapeRendering="geometricPrecision"
          d={roundPathCorners(
            `M${start.x} ${start.y} ` +
              `L${start.x + (end.x - start.x) / 2 - bias} ${start.y} ` +
              `L${end.x - (end.x - start.x) / 2 - bias} ${end.y} ` +
              `L${end.x} ${end.y} `,
            plainConnectorExtensionMin / 2,
            false,
            false,
          )}
        />
      ) : null}
      <path
        data-desc={`connector-id-${connectorElement.id}`}
        fill="none"
        stroke={start.x > end.x ? 'red' : sim.state ? 'crimson' : 'dimgray'}
        strokeWidth={3}
        shapeRendering="geometricPrecision"
        onMouseDown={(mouseEvent) => {
          $onConnectorMouseDown(connectorElement.id, mouseEvent);
        }}
        d={roundPathCorners(
          start.x > end.x
            ? `M${start.x} ${start.y} ` +
                `L${start.x + 30} ${start.y} ` +
                `L${start.x + 30} ${start.y + (end.y - start.y) / 2 - bias} `
            : `M${start.x} ${start.y} ` +
                `L${start.x + (end.x - start.x) / 2 - bias} ${start.y} ` +
                `L${end.x - (end.x - start.x) / 2 - bias} ${end.y} ` +
                `L${end.x} ${end.y} `,
          plainConnectorExtensionMin / 2,
          false,
          false,
        )}
      />
    </>
  );
};

export const Connectors: FunctionComponent = () => {
  const data = useSketchStorageData();
  const activeSketch = getActiveSketch(data);

  return (
    <>
      {activeSketch.structure.main.connectorElements.map((connectorElement) => {
        const { fromBox, fromBoxPosition, toBox, toBoxPosition } = getActiveConnectorData(
          connectorElement,
          data,
        );
        const sim = getConnectorSimById(connectorElement.id, activeSketch);

        return (
          <Connector
            key={connectorElement.id}
            connectorElement={connectorElement}
            fromBox={fromBox}
            fromBoxPosition={fromBoxPosition}
            toBox={toBox}
            toBoxPosition={toBoxPosition}
            sim={sim}
          />
        );
      })}
    </>
  );
};
