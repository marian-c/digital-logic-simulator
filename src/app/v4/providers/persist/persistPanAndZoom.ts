import debounce from 'lodash/debounce';
import type { PanAndZoomEntry, PanAndZoomTree } from '@/app/v4/types/data';
import { add, get, getDb, put } from '@/app/v4/providers/persist/db';

export async function deletePanAndZoom(sketchUUID: string) {
  const db = await getDb();
  const persistPanAndZoomObjectStore = db
    .transaction(['panAndZoom'], 'readwrite')
    .objectStore('panAndZoom');
  const op = persistPanAndZoomObjectStore.delete(sketchUUID);
  op.onsuccess = () => {
    console.log('panAndZoom deleted');
  };
  op.onerror = () => {
    console.error('Error deleting panAndZoom');
  };
}

export const persistPanAndZoom = debounce(
  async (sketchUUID: string, panAndZoom: PanAndZoomTree) => {
    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' && console.group('persistPanAndZoom');
    const toPersist: PanAndZoomEntry = { sketchUUID: sketchUUID, tree: panAndZoom };

    const db = await getDb();
    const panAndZoomObjectStore = db
      .transaction(['panAndZoom'], 'readwrite')
      .objectStore('panAndZoom');

    const exists = await get(panAndZoomObjectStore, toPersist.sketchUUID);

    if (!exists) {
      await add(panAndZoomObjectStore, toPersist);
    } else {
      await put(panAndZoomObjectStore, toPersist);
    }

    process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' && console.groupEnd();
  },
  1000,
);
