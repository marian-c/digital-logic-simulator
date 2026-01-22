import type { SketchSimulation } from '@/app/v4/types/innerSketchSimulation';
import type { BoxInfo, ConnectorInfo, ElementsInfo } from '@/app/v4/types/innerSketchElementsInfo';
import type { SketchInputs } from '@/app/v4/types/innerSketchInputs';
import type {
  BoxElement,
  ConnectorElement,
  SketchStructure,
} from '@/app/v4/types/innerSketchStructure';

export type SketchMeta = {
  isExample?: true;
  shouldSaveSimulation?: boolean; // for non-example sketches
  isChip?: boolean;
  name: string;
  description: string;
  indexInList?: number;
};

export type SketchWithSimulation = {
  uuid: string;
  structure: SketchStructure;
  inputs: SketchInputs;
  meta: SketchMeta;
  elementsInfo: ElementsInfo;
  simulation: SketchSimulation;
};

export type SketchForStorage = Omit<SketchWithSimulation, 'simulation'> & {
  simulation?: SketchSimulation;
};

export type SketchForStorageWithPanAndZoom = SketchForStorage & { panAndZoom: PanAndZoomInfo };

export type PanAndZoomInfo = {
  zoomFactor: number;
  panX: number;
  panY: number;
};
export type PanAndZoomTree = {
  data: PanAndZoomInfo;
  [boxId: number]: PanAndZoomTree;
};

export type PanAndZoomEntry = {
  sketchUUID: string;
  tree: PanAndZoomTree;
};

export type ConnectorData = {
  connector: ConnectorElement;
  fromBox: BoxElement;
  toBox: BoxElement;
  fromBoxInfo: BoxInfo;
  toBoxInfo: BoxInfo;
  connectorInfo: ConnectorInfo;
};
