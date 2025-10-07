import type { FunctionComponent } from '@/types/r-ui';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { getActiveConnectorData, getActiveSketch, getPoint } from '@/app/v3/data/utils/selectors';
import React from 'react';
import type { BoxElement, ConnectorElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import { plainConnectorExtensionMin } from '@/app/v3/config';
import roundPathCorners from '@/helpers/rounding';
import { type FloatingConnector, useInteractionsData } from '@/app/v3/providers/interactions';
import { assertNever } from '@/helpers/basics';

export const Connector: FunctionComponent<{
  connectorElement: ConnectorElement;
  fromBox: BoxElement;
  fromBoxPosition: SketchBoxPosition;
  toBox: BoxElement;
  toBoxPosition: SketchBoxPosition;
}> = ({ connectorElement, fromBox, fromBoxPosition, toBox, toBoxPosition }) => {
  const start = getPoint(fromBox, fromBoxPosition, connectorElement.fromPortId);
  const end = getPoint(toBox, toBoxPosition, connectorElement.toPortId);
  // TODO: when it's focused, render twice, the second one acts as a shadow (the focus effect)
  return (
    <path
      data-desc={`connector-id-${connectorElement.id}`}
      fill="none"
      stroke={Math.random() > 0.5 ? 'crimson' : 'dimgray'}
      strokeWidth={3}
      shapeRendering="geometricPrecision"
      onClick={() => {
        // TODO: focus element
      }}
      d={roundPathCorners(
        `M${start.x} ${start.y} ` +
          `L${start.x + plainConnectorExtensionMin} ${start.y} ` +
          `L${end.x - plainConnectorExtensionMin} ${end.y} ` +
          `L${end.x} ${end.y} `,
        plainConnectorExtensionMin / 3,
        false,
        false,
      )}
    />
  );
};

const FloatingConnector: FunctionComponent<{ floatingConnector: FloatingConnector }> = ({
  floatingConnector,
}) => {
  let { from, to } = floatingConnector;
  switch (floatingConnector.draggingFromPortKind) {
    case 'inputPort':
      from = floatingConnector.to;
      to = floatingConnector.from;
      break;
    case 'outputPort':
      break;
    default:
      assertNever(floatingConnector.draggingFromPortKind);
  }
  return (
    <path
      fill="none"
      stroke={Math.random() > 0.5 ? 'green' : 'blue'}
      strokeWidth={3}
      shapeRendering="geometricPrecision"
      d={roundPathCorners(
        `M${from.x} ${from.y} ` +
          `L${from.x + plainConnectorExtensionMin} ${from.y} ` +
          `L${to.x - plainConnectorExtensionMin} ${to.y} ` +
          `L${to.x} ${to.y} `,
        plainConnectorExtensionMin / 3,
        false,
        false,
      )}
    />
  );
};

export const Connectors: FunctionComponent = () => {
  const data = useSketchStorageData();
  const { floatingConnector } = useInteractionsData();
  const activeSketch = getActiveSketch(data);

  return (
    <>
      {floatingConnector && <FloatingConnector floatingConnector={floatingConnector} />}
      {activeSketch.structure.main.connectorElements.map((connectorElement) => {
        const { fromBox, fromBoxPosition, toBox, toBoxPosition } = getActiveConnectorData(
          connectorElement,
          data,
        );

        return (
          <Connector
            key={connectorElement.id}
            connectorElement={connectorElement}
            fromBox={fromBox}
            fromBoxPosition={fromBoxPosition}
            toBox={toBox}
            toBoxPosition={toBoxPosition}
          />
        );
      })}
    </>
  );
};
