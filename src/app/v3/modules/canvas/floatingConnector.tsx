import type { FunctionComponent } from '@/types/r-ui';
import { assertNever } from '@/helpers/basics';
import roundPathCorners from '@/helpers/rounding';
import { plainConnectorExtensionMin } from '@/app/v3/config';
import React from 'react';
import { type FloatingConnector } from '@/app/v3/providers/interactions';

export const FloatingConnectorC: FunctionComponent<{ floatingConnector: FloatingConnector }> = ({
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
      className="pointer-events-none"
      fill="none"
      stroke={floatingConnector.destinationBox ? 'green' : 'blue'}
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
