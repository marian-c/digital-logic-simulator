import debounce from 'lodash/debounce';
import type { SketchForStorage, SketchWithSimulation } from '@/app/v4/types/data';
import { add, get, getDb, put } from '@/app/v4/providers/persist/db';

export async function deleteSketch(uuid: string) {
  const db = await getDb();
  const sketchesObjectStore = db.transaction(['sketches'], 'readwrite').objectStore('sketches');
  const op = sketchesObjectStore.delete(uuid);
  op.onsuccess = () => {
    console.log('Sketch deleted');
  };
  op.onerror = () => {
    console.error('Error deleting sketch');
  };
}

export const persistSketch = debounce(async (sketch: SketchWithSimulation) => {
  process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' && console.group('persistSketch');
  const toPersist: SketchForStorage = { ...sketch };
  if (!toPersist.meta.shouldSaveSimulation) {
    delete toPersist.simulation;
  }

  const db = await getDb();
  const sketchesObjectStore = db.transaction(['sketches'], 'readwrite').objectStore('sketches');

  const exists = await get(sketchesObjectStore, toPersist.uuid);

  if (!exists) {
    await add(sketchesObjectStore, toPersist);
  } else {
    await put(sketchesObjectStore, toPersist);
  }

  process.env.NEXT_PUBLIC_LOGS_DEBUG === '1' && console.groupEnd();
}, 1000);
