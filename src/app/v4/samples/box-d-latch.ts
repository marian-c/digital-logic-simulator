import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019aa855-8e49-71e9-8849-0a546951199e',
  meta: {
    name: 'D Latch',
    description: '',
    isExample: true,
    isChip: true,
  },
  structure: {
    extra: { nextId: 100 },
    boxes: [
      {
        id: 1,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 2,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 3,
        kind: 'and',
        p: 0,
      },
      {
        id: 4,
        kind: 'and',
        p: 0,
      },
      {
        id: 5,
        kind: 'custom',
        p: {
          uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
        },
      },
      {
        id: 6,
        kind: 'custom',
        p: {
          uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
        },
      },
      {
        id: 11,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 15,
        kind: 'not',
        p: 0,
      },
    ],
    connectors: [
      {
        id: 7,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 18,
        toBoxId: 6,
        toPortId: 14,
      },
      {
        id: 8,
        p: {
          numWires: 1,
        },
        fromBoxId: 6,
        fromPortId: 18,
        toBoxId: 5,
        toPortId: 15,
      },
      {
        id: 9,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 2,
        toBoxId: 5,
        toPortId: 14,
      },
      {
        id: 10,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 2,
        toBoxId: 6,
        toPortId: 15,
      },
      {
        id: 12,
        p: {
          numWires: 1,
        },
        fromBoxId: 6,
        fromPortId: 18,
        toBoxId: 11,
        toPortId: 0,
      },
      {
        id: 13,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 3,
        toPortId: 0,
      },
      {
        id: 14,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 3,
        toPortId: 1,
      },
      {
        id: 16,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 15,
        toPortId: 0,
      },
      {
        id: 17,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 4,
        toPortId: 0,
      },
      {
        id: 18,
        p: {
          numWires: 1,
        },
        fromBoxId: 15,
        fromPortId: 1,
        toBoxId: 4,
        toPortId: 1,
      },
    ],
  },
  elementsInfo: {
    boxes: [
      {
        boxId: 0,
        pos: {
          x: 0,
          y: 0,
        },
      },
      {
        boxId: 1,
        pos: {
          x: 440,
          y: 200,
        },
        label: 'DATA',
      },
      {
        boxId: 2,
        pos: {
          x: 440,
          y: 330,
        },
        label: 'STORE',
      },
      {
        boxId: 3,
        pos: {
          x: 680,
          y: 160,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 680,
          y: 340,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 870,
          y: 180,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 970,
          y: 340,
        },
      },
      {
        boxId: 11,
        pos: {
          x: 1290,
          y: 250,
        },
      },
      {
        boxId: 15,
        pos: {
          x: 560,
          y: 390,
        },
      },
    ],
    connectors: [
      {
        connectorId: 7,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 8,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 9,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 10,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 12,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 13,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 14,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 16,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 17,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 18,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
    ],
  },
  inputs: [
    {
      boxId: 1,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 2,
      state: { kind: 1, value: [false] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: 0,
    panY: 0,
  },
};
