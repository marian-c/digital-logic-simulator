import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
  meta: {
    name: 'NAND',
    description: '',
    isExample: true,
    isChip: true,
  },
  structure: {
    extra: { nextId: 100 },
    boxes: [
      {
        id: 4,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 6,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 7,
        kind: 'and',
        p: 0,
      },
      {
        id: 8,
        kind: 'not',
        p: 0,
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
        id: 10,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 0,
        toBoxId: 7,
        toPortId: 0,
      },
      {
        id: 11,
        p: {
          numWires: 1,
        },
        fromBoxId: 6,
        fromPortId: 0,
        toBoxId: 7,
        toPortId: 1,
      },
      {
        id: 12,
        p: {
          numWires: 1,
        },
        fromBoxId: 7,
        fromPortId: 2,
        toBoxId: 8,
        toPortId: 0,
      },
      {
        id: 13,
        p: {
          numWires: 1,
        },
        fromBoxId: 8,
        fromPortId: 1,
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
        boxId: 4,
        pos: {
          x: 280,
          y: 80,
        },
        label: 'InputA',
      },
      {
        boxId: 6,
        pos: {
          x: 280,
          y: 160,
        },
        label: 'InputB',
      },
      {
        boxId: 7,
        pos: {
          x: 440,
          y: 100,
        },
        label: 'AND',
      },
      {
        boxId: 8,
        pos: {
          x: 600,
          y: 110,
        },
        label: 'NOT',
      },
      {
        boxId: 9,
        pos: {
          x: 760,
          y: 120,
        },
        label: 'Output',
      },
    ],
    connectors: [
      {
        connectorId: 10,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
        label: 'InputA->And',
      },
      {
        connectorId: 11,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
        label: 'InputB->And',
      },
      {
        connectorId: 12,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
        label: 'And->Not',
      },
      {
        connectorId: 13,
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
      boxId: 4,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 6,
      state: { kind: 1, value: [false] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: -128,
    panY: -74,
  },
};
