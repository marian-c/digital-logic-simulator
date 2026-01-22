import {
  useSketchStorageFocusData,
  useSketchStorageMethods,
} from '@/app/v4/providers/dataStorageProvider';
import type { FunctionComponent } from '@/types/r-ui';
import { getConnectorData } from '@/app/v4/data/getters/aggregate';
import {
  computeConnectorPath,
  computeConnectorPathFloating,
} from '@/app/v4/data/compute/compute-connector-path';
import { connectorWireWidthMap } from '@/app/v4/config/sizes';
import { getConnectorSimStateByConnectorId } from '@/app/v4/data/getters/sim-state';
import {
  useInteractionsData,
  useInteractionsMethods,
} from '@/app/v4/providers/interactionsProvider';

const Connector: FunctionComponent<{ connectorId: number }> = ({ connectorId }) => {
  const data = useSketchStorageFocusData();
  const { activeInfo } = useInteractionsData();
  const { $onConnectorMouseDownActivateOnly } = useInteractionsMethods();

  const connectorData = getConnectorData(connectorId, data);
  const state = getConnectorSimStateByConnectorId(connectorId, data);

  const strokeWidth = connectorWireWidthMap[connectorData.connector.p.numWires];
  const { otherSketchesRef, selectedSketchRef } = useSketchStorageMethods();
  const pathData = computeConnectorPath(
    connectorData,
    selectedSketchRef.current.uuid,
    otherSketchesRef.current,
  );
  // TODO: use the shadow path instead of the filter for active state

  return (
    <g
      filter={activeInfo.active?.id === connectorId ? 'url(#f1)' : 'none'}
      onMouseDown={(mouseEvent) => {
        $onConnectorMouseDownActivateOnly(connectorId, mouseEvent.button);
      }}
    >
      <path
        shapeRendering="geometricPrecision"
        fill="none"
        stroke="pink"
        strokeWidth={pathData.connectorWidth}
        d={
          computeConnectorPathFloating(
            pathData.startX,
            pathData.startY,
            pathData.endX,
            pathData.endY,
          ).d
        }
      />
      {pathData.paths.map((path, i) => {
        const color = state.state.value[i] ? 'crimson' : 'dimgray';
        return (
          <path
            key={i}
            shapeRendering="geometricPrecision"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            d={path}
          />
        );
      })}
    </g>
  );
};

export function Connectors() {
  const data = useSketchStorageFocusData();

  return (
    <>
      {data.structure.connectors.map((connector) => (
        <Connector key={connector.id} connectorId={connector.id} />
      ))}
    </>
  );
}
