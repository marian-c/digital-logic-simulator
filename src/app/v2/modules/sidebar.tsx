import { useSketchMeta } from '@/app/v2/modules/useSketchData';

export function Sidebar() {
  const { sketchMeta, setSketchMeta } = useSketchMeta();
  return (
    <div className="flex flex-col w-80 overflow-auto border border-green-500 bg-yellow-800">
      <div className="overflow-auto flex-grow h-0">
        Sketch name: <br />
        <input
          disabled={sketchMeta.isExample}
          value={sketchMeta.name}
          onChange={(e) => {
            setSketchMeta({ ...sketchMeta, name: e.target.value });
          }}
        />
        <br></br>
        sketch description:
        <br />
        <input
          disabled={sketchMeta.isExample}
          value={sketchMeta.description}
          onChange={(e) => {
            setSketchMeta({ ...sketchMeta, description: e.target.value });
          }}
        />
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
        Sidebar
        <br></br>
      </div>
    </div>
  );
}
