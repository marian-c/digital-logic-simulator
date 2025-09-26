import {
  useSketchDataMethods,
  useSketchMeta,
  useSketchState,
} from '@/app/v2/modules/useSketchData';

function ZoomControls() {
  const sketchState = useSketchState();
  const { $setSketchState } = useSketchDataMethods();
  return (
    <div>
      Zoom factor: {sketchState.zoomFactor} <br />
      pan x: {sketchState.panX} <br />
      pan y: {sketchState.panY}
      <br />
      <button
        className="border border-red-500 p-3"
        onClick={() => {
          $setSketchState({ ...sketchState, zoomFactor: sketchState.zoomFactor - 0.2 });
        }}
      >
        -
      </button>
      <button
        className="border border-red-500 p-3"
        onClick={() => {
          $setSketchState({ ...sketchState, zoomFactor: sketchState.zoomFactor + 0.2 });
        }}
      >
        +
      </button>
    </div>
  );
}

export function Sidebar() {
  const sketchMeta = useSketchMeta();
  const { $setSketchMeta } = useSketchDataMethods();
  const sketchState = useSketchState();
  return (
    <div className="flex flex-col w-80 overflow-auto border border-green-500 bg-gray-200">
      <div className="overflow-auto flex-grow h-0">
        Sketch name: <br />
        <input
          disabled={sketchMeta.isExample}
          value={sketchMeta.name}
          onChange={(e) => {
            $setSketchMeta({ ...sketchMeta, name: e.target.value });
          }}
        />
        <br></br>
        sketch description:
        <br />
        <input
          disabled={sketchMeta.isExample}
          value={sketchMeta.description}
          onChange={(e) => {
            $setSketchMeta({ ...sketchMeta, description: e.target.value });
          }}
        />
        <br></br>
        <ZoomControls />
        Focused: {sketchState.focusedElementId}
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
        Sidebar
        <br></br>
      </div>
    </div>
  );
}
