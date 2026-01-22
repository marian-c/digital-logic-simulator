import { readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function listFiles(dir: string) {
  const entries = readdirSync(dir, { withFileTypes: true });

  return entries.filter((e) => e.isFile()).map((e) => path.join(dir, e.name));
}

const files = listFiles(path.join(__dirname, '..'));

files.forEach(async (f) => {
  const parts = f.split('/');
  const file = parts[parts.length - 1];
  const temp = file!.split('.');
  temp.pop();
  const p = path.join('..', temp.join('.'));
  if (!p.endsWith('_') && p.startsWith('../box-')) {
    const mod = await import(p);
    mod.sketch.elementsMeta = { boxes: [], connectors: [] };
    mod.sketch.elementsInfo.connectors.forEach((connector: any) => {
      const { mid, start, end } = connector;
      connector.bias = {
        mid,
        start,
        end,
      };
      delete connector.mid;
      delete connector.start;
      delete connector.end;
    });
    mod.sketch.structure.boxes.forEach((box: any) => {
      const info = mod.sketch.elementsInfo.boxes.find((b: any) => b.boxId === box.id);
      if (box.hideLabel !== undefined) {
        info.hideLabel = box.hideLabel;
        delete box.hideLabel;
      }
      if (box.label !== undefined) {
        console.log('box.label', box.label);
        info.label = box.label;
        delete box.label;
      }
    });
    mod.sketch.structure.connectors.forEach((connector: any) => {
      const info = mod.sketch.elementsInfo.connectors.find(
        (c: any) => c.connectorId === connector.id,
      );
      if (connector.hideLabel !== undefined) {
        info.hideLabel = connector.hideLabel;
        delete connector.hideLabel;
      }
      if (connector.label !== undefined) {
        info.label = connector.label;
        delete connector.label;
      }
    });
    fs.writeFileSync(
      f,
      `import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = ` + JSON.stringify(mod.sketch, null, 2),
    );
  }
});
