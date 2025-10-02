import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import {
  useSketchStorageData,
  useSketchStorageMethods,
} from '@/app/v3/providers/dataStorageProvider';
import {
  actionSetActiveSketchDescription,
  actionSetActiveSketchName,
  actionSetActiveSketchZoom,
} from '@/app/v3/data/utils/actions';
import { useInteractionsData } from '@/app/v3/providers/interactions';

function ZoomControls() {
  const { state } = getActiveSketch(useSketchStorageData());
  const { $setSketchData, sketchDataRef } = useSketchStorageMethods();

  return (
    <div>
      Zoom factor: {state.zoomFactor} <br />
      pan x: {state.panX} <br />
      pan y: {state.panY}
      <br />
      <button
        className="border border-red-500 p-3"
        onClick={() => {
          $setSketchData(
            actionSetActiveSketchZoom(
              getActiveSketch(sketchDataRef.current).state.zoomFactor - 0.2,
              sketchDataRef.current,
            ),
          );
        }}
      >
        -
      </button>
      <button
        className="border border-red-500 p-3"
        onClick={() => {
          $setSketchData(
            actionSetActiveSketchZoom(
              getActiveSketch(sketchDataRef.current).state.zoomFactor + 0.2,
              sketchDataRef.current,
            ),
          );
        }}
      >
        +
      </button>
    </div>
  );
}

export function Sidebar() {
  const data = useSketchStorageData();
  const { meta } = getActiveSketch(data);
  const { $setSketchData } = useSketchStorageMethods();
  const { activeBoxId } = useInteractionsData();
  return (
    <div className="flex flex-col w-80 overflow-auto border border-green-500 bg-gray-200">
      <div className="overflow-auto flex-grow h-0">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          localstorage.clear()
        </button>
        <br />
        Sketch name: <br />
        <input
          disabled={meta.isExample}
          value={meta.name}
          onChange={(e) => {
            $setSketchData(actionSetActiveSketchName(e.target.value, data));
          }}
        />
        <br />
        sketch description:
        <br />
        <input
          disabled={meta.isExample}
          value={meta.description}
          onChange={(e) => {
            $setSketchData(actionSetActiveSketchDescription(e.target.value, data));
          }}
        />
        <br />
        <ZoomControls />
        <br />
        Focused: {activeBoxId}
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
        Sidebar
        <br />
      </div>
    </div>
  );
}
