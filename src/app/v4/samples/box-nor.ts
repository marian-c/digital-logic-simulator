import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019a166a-bbde-72ea-b1ac-91289b0dfb63',
  meta: {
    name: 'NOR',
    description: '',
    isExample: true,
    isChip: true,
  },
  structure: {
    extra: { nextId: 100 },
    boxes: [
      {
        id: 14,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 15,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 16,
        kind: 'custom',
        p: {
          uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
        },
      },
      {
        id: 17,
        kind: 'not',
        p: 0,
      },
      {
        id: 18,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
    ],
    connectors: [
      {
        id: 19,
        p: {
          numWires: 1,
        },
        fromBoxId: 14,
        fromPortId: 0,
        toBoxId: 16,
        toPortId: 1,
      },
      {
        id: 20,
        p: {
          numWires: 1,
        },
        fromBoxId: 15,
        fromPortId: 0,
        toBoxId: 16,
        toPortId: 2,
      },
      {
        id: 21,
        p: {
          numWires: 1,
        },
        fromBoxId: 16,
        fromPortId: 4,
        toBoxId: 17,
        toPortId: 0,
      },
      {
        id: 22,
        p: {
          numWires: 1,
        },
        fromBoxId: 17,
        fromPortId: 1,
        toBoxId: 18,
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
        boxId: 14,
        pos: {
          x: 310,
          y: 100,
        },
      },
      {
        boxId: 15,
        pos: {
          x: 310,
          y: 170,
        },
      },
      {
        boxId: 16,
        pos: {
          x: 490,
          y: 120,
        },
      },
      {
        boxId: 17,
        pos: {
          x: 630,
          y: 130,
        },
      },
      {
        boxId: 18,
        pos: {
          x: 840,
          y: 140,
        },
      },
    ],
    connectors: [
      {
        connectorId: 19,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 20,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 21,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 22,
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
      boxId: 14,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 15,
      state: { kind: 1, value: [false] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: 0,
    panY: 0,
  },
};
