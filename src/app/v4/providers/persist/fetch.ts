import type { PanAndZoomEntry, PanAndZoomTree, SketchForStorage } from '@/app/v4/types/data';
import { getDb } from '@/app/v4/providers/persist/db';

export function fetchSketches(): Promise<SketchForStorage[]> {
  return new Promise(async (y, n) => {
    const db = await getDb();
    const sketchesObjectStore = db.transaction(['sketches'], 'readonly').objectStore('sketches');
    const request = sketchesObjectStore.getAll();
    request.onsuccess = () => {
      y(request.result);
    };
    request.onerror = () => {
      console.error('Error fetching sketches from database');
      n(request.error);
    };
  });
}

export function fetchPanAndZoom(): Promise<Record<string, PanAndZoomTree>> {
  return new Promise(async (y, n) => {
    const db = await getDb();
    const panAndZoomObjectStore = db
      .transaction(['panAndZoom'], 'readonly')
      .objectStore('panAndZoom');
    const request = panAndZoomObjectStore.getAll();
    request.onsuccess = () => {
      const trees: PanAndZoomEntry[] = request.result;
      const col: Record<string, PanAndZoomTree> = {};
      for (const tree of trees) {
        col[tree.sketchUUID] = tree.tree;
      }
      y(col);
    };
    request.onerror = () => {
      console.error('Error fetching panAndZoom from database');
      n(request.error);
    };
  });
}
