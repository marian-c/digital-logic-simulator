import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019a9b06-98a3-74de-b01d-c3c54a113684',
  meta: {
    name: 'SR Latch 1',
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
        kind: 'not',
        p: 0,
      },
      {
        id: 4,
        kind: 'custom',
        p: {
          uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
        },
      },
      {
        id: 5,
        kind: 'and',
        p: 0,
      },
      {
        id: 6,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
    ],
    connectors: [
      {
        id: 7,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 4,
        toPortId: 2,
      },
      {
        id: 8,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 3,
        toPortId: 0,
      },
      {
        id: 9,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 1,
        toBoxId: 5,
        toPortId: 1,
      },
      {
        id: 10,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 4,
        toBoxId: 5,
        toPortId: 0,
      },
      {
        id: 11,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 2,
        toBoxId: 4,
        toPortId: 1,
      },
      {
        id: 12,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 2,
        toBoxId: 6,
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
          x: 430,
          y: 220,
        },
        label: 'SET',
      },
      {
        boxId: 2,
        pos: {
          x: 430,
          y: 310,
        },
        hideLabel: false,
        label: 'RESET',
      },
      {
        boxId: 3,
        pos: {
          x: 620,
          y: 300,
        },
        label: 'NOT',
      },
      {
        boxId: 4,
        pos: {
          x: 740,
          y: 190,
        },
        label: 'OR',
      },
      {
        boxId: 5,
        pos: {
          x: 940,
          y: 250,
        },
        label: 'AND',
      },
      {
        boxId: 6,
        pos: {
          x: 1140,
          y: 270,
        },
        label: 'Out',
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
        label: 'Set->Or',
      },
      {
        connectorId: 8,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
        label: 'Reset->Not',
      },
      {
        connectorId: 9,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
        label: 'Not->and',
      },
      {
        connectorId: 10,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
        label: 'Or->And',
      },
      {
        connectorId: 11,
        bias: {
          mid: 87,
          start: 0,
          end: 0,
        },
        label: 'And->Or',
      },
      {
        connectorId: 12,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
        label: 'And->Out',
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
    zoomFactor: 1.2,
    panX: 100,
    panY: 100,
  },
};
