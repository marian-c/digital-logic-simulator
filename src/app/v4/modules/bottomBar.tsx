import { useInteractionsData } from '@/app/v4/providers/interactionsProvider';
import { useSketchStoragePanAndZoom } from '@/app/v4/providers/dataStorageProvider';

export function BottomBar() {
  const { size } = useInteractionsData();
  const zoomAndPan = useSketchStoragePanAndZoom();
  return (
    <div>
      left: <code>{size.left}</code> top: <code>{size.top}</code> width: <code>{size.width}</code>{' '}
      height: <code>{size.height}</code> | panX: <code>{zoomAndPan.panX.toFixed(2)}</code> panY:{' '}
      <code>{zoomAndPan.panY.toFixed(2)}</code> zoom:{' '}
      <code>{zoomAndPan.zoomFactor.toFixed(2)}</code>
    </div>
  );
}
