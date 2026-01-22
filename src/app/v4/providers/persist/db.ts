import { examplesV4 } from '@/app/v4/samples/_';
import type { PanAndZoomEntry, SketchForStorage } from '@/app/v4/types/data';

let _db: Promise<IDBDatabase>;
export function getDb(bypassCache?: boolean): Promise<IDBDatabase> {
  if (!_db || bypassCache) {
    _db = new Promise((resolve, reject) => {
      const request = indexedDB.open('DataV4', 1);
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        console.error('Error opening database');
        reject(request.error);
      };
      request.onupgradeneeded = () => {
        const db = request.result;
        db.onerror = () => {
          console.error('Error creating database');
          reject(new Error('Error creating database'));
        };

        const panAndZoomObjectStore = db.createObjectStore('panAndZoom', { keyPath: 'sketchUUID' });
        const sketchesObjectStore = db.createObjectStore('sketches', { keyPath: 'uuid' });

        examplesV4.forEach((s) => {
          const { panAndZoom, ...rest } = s;
          const sketch: SketchForStorage = rest;
          sketchesObjectStore.add(sketch);

          const paz: PanAndZoomEntry = { sketchUUID: s.uuid, tree: { data: panAndZoom } };
          panAndZoomObjectStore.add(paz);
        });
      };
    });
  }

  return _db;
}

export function get(store: IDBObjectStore, id: string) {
  return new Promise((y, n) => {
    const r = store.get(id);
    r.onsuccess = () => {
      y(r.result);
    };
    r.onerror = () => {
      console.error('Error getting store');
      n('error getting from store');
    };
  });
}

export function add(store: IDBObjectStore, obj: any) {
  return new Promise((y, n) => {
    const r = store.add(obj);
    r.onsuccess = () => {
      y(r.result);
    };
    r.onerror = () => {
      console.error('Error adding to store');
      n('error adding to store');
    };
  });
}

export function put(store: IDBObjectStore, obj: any) {
  return new Promise((y, n) => {
    const r = store.put(obj);
    r.onsuccess = () => {
      y(r.result);
    };
    r.onerror = () => {
      console.error('Error putting to store');
      n('error putting to store');
    };
  });
}
