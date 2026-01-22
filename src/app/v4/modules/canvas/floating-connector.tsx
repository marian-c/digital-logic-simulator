import { useInteractionsFloatingConnectorAction } from '@/app/v4/providers/interactionsProvider';
import { computeConnectorPathFloating } from '@/app/v4/data/compute/compute-connector-path';
import { connectorWidthMap } from '@/app/v4/config/sizes';

export function FloatingConnector() {
  const floatingConnectorAction = useInteractionsFloatingConnectorAction();
  if (!floatingConnectorAction) return null;

  const { fromX, fromY, toX, toY, numWires, toBox } = floatingConnectorAction;
  return (
    <path
      className="pointer-events-none text-gree"
      fill="none"
      stroke={toBox ? `rgb(21, 128, 61)` : `rgb(3, 105, 161)`}
      strokeWidth={connectorWidthMap[numWires]}
      shapeRendering="geometricPrecision"
      d={computeConnectorPathFloating(fromX, fromY, toX, toY).d}
    />
  );
}
