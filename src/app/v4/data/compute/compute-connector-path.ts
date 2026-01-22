import type { ConnectorData, SketchForStorage } from '@/app/v4/types/data';
import { assertNever, assertTrue, error } from '@/helpers/basics';
import {
  connectorWidthMap,
  connectorWireWidthMap,
  coordsAnd,
  coordsInput,
  coordsJoin,
  coordsNot,
  coordsOutput,
  coordsSplit,
  getCustomCoords,
  type NumsNumWiresHack,
} from '@/app/v4/config/sizes';
import { getSketchFromCustomBox } from '@/app/v4/data/getters/sketch';

const ROUNDNESS = 10;

export function computeConnectorPath(
  { connector, fromBox, toBox, fromBoxInfo, toBoxInfo, connectorInfo }: ConnectorData,
  selectedSketchUuid: string,
  otherSketches: SketchForStorage[],
) {
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;

  switch (fromBox.kind) {
    case 'input':
      if (connector.fromPortId === 0) {
        startX = fromBoxInfo.pos.x + coordsInput.ports[0].x;
        startY = fromBoxInfo.pos.y + coordsInput.ports[0].y;
      } else {
        error('Inconsistency in connector data: fromPortId is not 0 for input box');
      }
      break;
    case 'output':
      error('output boxes can not be a connector source');
      break;
    case 'and':
      if (connector.fromPortId === 2) {
        startX = fromBoxInfo.pos.x + coordsAnd.ports[2].x;
        startY = fromBoxInfo.pos.y + coordsAnd.ports[2].y;
      } else {
        error('Inconsistency in connector data: fromPortId is not 2 for and box');
      }
      break;
    case 'not':
      if (connector.fromPortId === 1) {
        startX = fromBoxInfo.pos.x + coordsNot.ports[1].x;
        startY = fromBoxInfo.pos.y + coordsNot.ports[1].y;
      } else {
        error('Inconsistency in connector data: fromPortId is not 1 for not box');
      }
      break;
    case 'join':
      {
        const p = fromBox.p;
        const fromPortId = connector.fromPortId;
        switch (p.toNumWires) {
          case 4:
            if (fromPortId === 4) {
              startX =
                fromBoxInfo.pos.x +
                coordsJoin[p.toNumWires].ports[fromPortId as NumsNumWiresHack].x;
              startY =
                fromBoxInfo.pos.y +
                coordsJoin[p.toNumWires].ports[fromPortId as NumsNumWiresHack].y;
            } else {
              error('Inconsistency in connector data: fromPortId');
            }
            break;
          case 8:
            if (fromPortId === 8) {
              startX =
                fromBoxInfo.pos.x +
                coordsJoin[p.toNumWires].ports[fromPortId as NumsNumWiresHack].x;
              startY =
                fromBoxInfo.pos.y +
                coordsJoin[p.toNumWires].ports[fromPortId as NumsNumWiresHack].y;
            } else {
              error('Inconsistency in connector data: fromPortId');
            }
            break;
          default:
            assertNever(p.toNumWires);
        }
      }
      break;
    case 'split':
      {
        const p = fromBox.p;
        const fromPortId = connector.fromPortId;
        switch (p.fromNumWires) {
          case 4:
            if (fromPortId <= 4) {
              startX =
                fromBoxInfo.pos.x +
                coordsSplit[p.fromNumWires].ports[fromPortId as NumsNumWiresHack].x;
              startY =
                fromBoxInfo.pos.y +
                coordsSplit[p.fromNumWires].ports[fromPortId as NumsNumWiresHack].y;
            } else {
              error('Inconsistency in connector data: fromPortId');
            }
            break;
          case 8:
            if (fromPortId <= 8) {
              startX =
                fromBoxInfo.pos.x +
                coordsSplit[p.fromNumWires].ports[fromPortId as NumsNumWiresHack].x;
              startY =
                fromBoxInfo.pos.y +
                coordsSplit[p.fromNumWires].ports[fromPortId as NumsNumWiresHack].y;
            } else {
              error('Inconsistency in connector data: fromPortId');
            }
            break;
          default:
            assertNever(p.fromNumWires);
        }
      }
      break;
    case 'custom':
      {
        const referencedSketch = getSketchFromCustomBox(fromBox, otherSketches);
        const coords = getCustomCoords(selectedSketchUuid)(referencedSketch);
        startX = fromBoxInfo.pos.x + coords.ports[connector.fromPortId]!.x;
        startY = fromBoxInfo.pos.y + coords.ports[connector.fromPortId]!.y;
      }
      break;
    default:
      assertNever(fromBox);
  }

  switch (toBox.kind) {
    case 'input':
      error('input boxes can not be a connector destination');
      break;
    case 'output':
      {
        const toPortId = connector.toPortId;
        assertTrue(toPortId === 0);
        endX = toBoxInfo.pos.x + coordsOutput.ports[0].x;
        endY = toBoxInfo.pos.y + coordsOutput.ports[0].y;
      }
      break;
    case 'and':
      {
        const toPortId = connector.toPortId;
        assertTrue(toPortId === 0 || toPortId === 1);
        endX = toBoxInfo.pos.x + coordsAnd.ports[toPortId].x;
        endY = toBoxInfo.pos.y + coordsAnd.ports[toPortId].y;
      }
      break;
    case 'not':
      {
        const toPortId = connector.toPortId;
        assertTrue(toPortId === 0);
        endX = toBoxInfo.pos.x + coordsNot.ports[0].x;
        endY = toBoxInfo.pos.y + coordsNot.ports[0].y;
      }
      break;
    case 'join':
      endX =
        toBoxInfo.pos.x +
        coordsJoin[toBox.p.toNumWires].ports[connector.toPortId as NumsNumWiresHack].x;
      endY =
        toBoxInfo.pos.y +
        coordsJoin[toBox.p.toNumWires].ports[connector.toPortId as NumsNumWiresHack].y;
      break;
    case 'split':
      endX = toBoxInfo.pos.x + coordsSplit[toBox.p.fromNumWires].ports[0].x;
      endY = toBoxInfo.pos.y + coordsSplit[toBox.p.fromNumWires].ports[0].y;
      break;
    case 'custom':
      {
        const referencedSketch = getSketchFromCustomBox(toBox, otherSketches);
        const coords = getCustomCoords(selectedSketchUuid)(referencedSketch);
        endX = toBoxInfo.pos.x + coords.ports[connector.toPortId]!.x;
        endY = toBoxInfo.pos.y + coords.ports[connector.toPortId]!.y;
      }
      break;
    default:
      assertNever(toBox);
  }

  const numWires = connector.p.numWires;
  const wireWidth = connectorWireWidthMap[numWires];
  const connectorWidth = connectorWidthMap[numWires];

  const paths: string[] = [];
  let offset = 0;
  switch (numWires) {
    case 1:
      break;
    case 4:
      offset = -(1 + 2);
      break;
    case 8:
      offset = -(1 + 2 + 2 + 2);
      break;
    default:
      assertNever(numWires);
  }

  for (let i = 0; i < numWires; i++) {
    const biasStart = connectorInfo.bias.start || 0;
    const biasMid = connectorInfo.bias.mid || 0;
    const biasEnd = connectorInfo.bias.end || 0;
    let d = '';
    if (startX + 2 * ROUNDNESS > endX) {
      const dY = endY - startY;

      const back = dY < 0;
      const backFactor = back ? -1 : 1;

      const dYa = Math.abs(dY) / 2;

      const dY1 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS - dYa));
      const rY1 = ROUNDNESS - dY1;
      const rX1 = Math.sqrt(ROUNDNESS * ROUNDNESS - dY1 * dY1);

      const dY2 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS + ROUNDNESS - dYa));
      const rY2 = ROUNDNESS - dY2;
      const rX2 = ROUNDNESS - Math.sqrt(ROUNDNESS * ROUNDNESS - rY2 * rY2);

      const dY3 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS - dYa));
      const rY3 = ROUNDNESS - dY3;
      const rX3 = Math.sqrt(ROUNDNESS * ROUNDNESS - dY3 * dY3);

      const dY4 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS + ROUNDNESS - dYa));
      const rY4 = ROUNDNESS - dY4;
      const rX4 = ROUNDNESS - Math.sqrt(ROUNDNESS * ROUNDNESS - rY4 * rY4);

      d += `M${startX},${startY + offset} `;
      d += `h${ROUNDNESS + biasStart}`;
      // 1
      d += `a${ROUNDNESS - backFactor * offset},${ROUNDNESS - backFactor * offset} 0 0 ${1 - Number(back)} ${rX1 - backFactor * offset},${backFactor * rY1 - offset}`;

      d += `v${backFactor * Math.max(0, dYa - 2 * ROUNDNESS) - biasMid}  `;
      // 2
      d += `a${ROUNDNESS - backFactor * offset},${ROUNDNESS - backFactor * offset} 0 0 ${1 - Number(back)} ${-rX2 + backFactor * offset},${backFactor * rY2 - offset}`;

      d += `H${Math.min(endX - ROUNDNESS, startX + ROUNDNESS) - biasEnd}`;
      // 3
      d += `a${ROUNDNESS + backFactor * offset}, ${ROUNDNESS + backFactor * offset} 0 0 ${Number(back)} ${-rX3 - backFactor * offset},${backFactor * rY3 + offset}`;
      d += `v${backFactor * Math.max(0, dYa - 2 * ROUNDNESS) + biasMid}`;
      // 4
      d += `a${ROUNDNESS + backFactor * offset},${ROUNDNESS + backFactor * offset} 0 0 ${Number(back)} ${rX4 + backFactor * offset},${backFactor * rY4 + offset}`;

      d += `L${endX},${endY + offset} `;
    } else {
      d += `M${startX},${startY + offset} `;
      const dX = endX - startX;
      const dXh = dX / 2;

      const dY = endY - startY;
      const dY_abs = Math.abs(dY);

      const back = dY < 0;
      const backFactor = back ? -1 : 1;

      const rBig = ROUNDNESS - backFactor * offset;
      const rSmall = ROUNDNESS + backFactor * offset;

      const dYa = Math.min(rBig, Math.max(0, rBig - dY_abs));
      const rYa = rBig - dYa;
      const rXa = Math.sqrt(rBig * rBig - dYa * dYa);

      d += `h${dXh - ROUNDNESS + biasMid}`;

      d += `a${rBig},${rBig} 0 0 ${1 - Number(back)} ${rXa},${backFactor * rYa}`;
      d += `v${backFactor * Math.max(0, dY_abs - 2 * ROUNDNESS)}`;

      const dYb = Math.min(rSmall, Math.max(0, rBig + rSmall - dY_abs));

      const rYb = rSmall - dYb;
      const rXb = rSmall - Math.sqrt(rSmall * rSmall - rYb * rYb);
      d += `a${rSmall},${rSmall} 0 0 ${Number(back)} ${rXb},${backFactor * rYb}`;
      d += `L${endX},${endY + offset} `;
    }

    paths.push(d);
    offset += wireWidth;
  }

  return {
    wireWidth,
    connectorWidth,
    paths,
    startX,
    startY,
    endX,
    endY,
  };
}

export function computeConnectorPathFloating(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
) {
  let d = '';

  if (startX + 2 * ROUNDNESS > endX) {
    const dY = endY - startY;

    const back = dY < 0;
    const backFactor = back ? -1 : 1;

    const dYa = Math.abs(dY) / 2;

    const dY1 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS - dYa));
    const rY1 = ROUNDNESS - dY1;
    const rX1 = Math.sqrt(ROUNDNESS * ROUNDNESS - dY1 * dY1);

    const dY2 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS + ROUNDNESS - dYa));
    const rY2 = ROUNDNESS - dY2;
    const rX2 = ROUNDNESS - Math.sqrt(ROUNDNESS * ROUNDNESS - rY2 * rY2);

    const dY3 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS - dYa));
    const rY3 = ROUNDNESS - dY3;
    const rX3 = Math.sqrt(ROUNDNESS * ROUNDNESS - dY3 * dY3);

    const dY4 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS + ROUNDNESS - dYa));
    const rY4 = ROUNDNESS - dY4;
    const rX4 = ROUNDNESS - Math.sqrt(ROUNDNESS * ROUNDNESS - rY4 * rY4);

    d += `M${startX},${startY} `;
    d += `h${ROUNDNESS}`;
    // 1
    d += `a${ROUNDNESS},${ROUNDNESS} 0 0 ${1 - Number(back)} ${rX1},${backFactor * rY1}`;

    d += `v${backFactor * Math.max(0, dYa - 2 * ROUNDNESS)}`;
    // 2
    d += `a${ROUNDNESS},${ROUNDNESS} 0 0 ${1 - Number(back)} ${-rX2},${backFactor * rY2}`;

    d += `H${Math.min(endX - ROUNDNESS, startX + ROUNDNESS)}`;
    // 3
    d += `a${ROUNDNESS}, ${ROUNDNESS} 0 0 ${Number(back)} ${-rX3},${backFactor * rY3}`;
    d += `v${backFactor * Math.max(0, dYa - 2 * ROUNDNESS)}`;
    // 4
    d += `a${ROUNDNESS},${ROUNDNESS} 0 0 ${Number(back)} ${rX4},${backFactor * rY4}`;

    d += `L${endX},${endY} `;
  } else {
    d += `M${startX},${startY} `;
    const dX = endX - startX;
    const dXh = dX / 2;
    const dY = endY - startY;

    const back = dY < 0;
    const backFactor = back ? -1 : 1;

    const dYa = Math.abs(dY);

    const dY1 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS - dYa));
    const rY1 = ROUNDNESS - dY1;
    const rX1 = Math.sqrt(ROUNDNESS * ROUNDNESS - dY1 * dY1);

    const dY2 = Math.min(ROUNDNESS, Math.max(0, ROUNDNESS + ROUNDNESS - dYa));
    const rY2 = ROUNDNESS - dY2;
    const rX2 = ROUNDNESS - Math.sqrt(ROUNDNESS * ROUNDNESS - rY2 * rY2);

    d += `h${dXh - ROUNDNESS}`;
    d += `a${ROUNDNESS},${ROUNDNESS} 0 0 ${1 - Number(back)} ${rX1},${backFactor * rY1}`;
    d += `v${backFactor * Math.max(0, dYa - 2 * ROUNDNESS)}`;
    d += `a${ROUNDNESS},${ROUNDNESS} 0 0 ${Number(back)} ${rX2},${backFactor * rY2}`;
    d += `L${endX},${endY} `;
  }

  return {
    d,
  };
}
