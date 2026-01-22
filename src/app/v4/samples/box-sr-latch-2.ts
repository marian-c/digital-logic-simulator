import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019a9d1a-233a-707e-866d-8a3e8d37ed93',
  meta: {
    name: 'SR Latch 2',
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
        kind: 'custom',
        p: {
          uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
        },
      },
      {
        id: 4,
        kind: 'custom',
        p: {
          uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
        },
      },
      {
        id: 9,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
    ],
    connectors: [
      {
        id: 5,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 18,
        toBoxId: 4,
        toPortId: 14,
      },
      {
        id: 6,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 18,
        toBoxId: 3,
        toPortId: 15,
      },
      {
        id: 7,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 3,
        toPortId: 14,
      },
      {
        id: 8,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 4,
        toPortId: 15,
      },
      {
        id: 10,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 18,
        toBoxId: 9,
        toPortId: 0,
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
          x: 450,
          y: 280,
        },
        label: 'SET',
      },
      {
        boxId: 2,
        pos: {
          x: 450,
          y: 400,
        },
        label: 'RESET',
      },
      {
        boxId: 3,
        pos: {
          x: 770,
          y: 230,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 860,
          y: 400,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 1170,
          y: 360,
        },
      },
    ],
    connectors: [
      {
        connectorId: 5,
        bias: {
          mid: 8,
          start: -15,
          end: 0,
        },
      },
      {
        connectorId: 6,
        bias: {
          mid: 6,
          start: 23,
          end: -8,
        },
      },
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
        connectorId: 10,
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
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 2,
      state: { kind: 1, value: [false] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: -25,
    panY: 111,
  },
};
