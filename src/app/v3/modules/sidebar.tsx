import { getActiveBox, getActiveConnector, getActiveSketch } from '@/app/v3/data/utils/selectors';
import {
  useSketchStorageData,
  useSketchStorageMethods,
} from '@/app/v3/providers/dataStorageProvider';
import {
  actionSetActiveBoxLabel,
  actionSetActiveBoxLabelVisibility,
  actionSetActiveConnectorLabel,
  actionSetActiveConnectorLabelVisibility,
  actionSetActiveSketchDescription,
  actionSetActiveSketchName,
  actionSetActiveSketchZoom,
} from '@/app/v3/data/utils/actions';
import { useInteractionsData, useInteractionsMethods } from '@/app/v3/providers/interactions';
import { useEffect, useRef } from 'react';

export function Exports() {
  const data = useSketchStorageData();
  const activeSketch = getActiveSketch(data);

  return (
    <div>
      <textarea value={JSON.stringify(activeSketch, null, 2)} readOnly />
      <button
        onClick={() => {
          console.log('fullData', JSON.parse(JSON.stringify(data, null, 2)));
        }}
      >
        LOG
      </button>
    </div>
  );
}

export function Rotate() {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const avgRef = useRef<HTMLDivElement>(null);
  const stopRef = useRef(false);
  useEffect(() => {
    stopRef.current = false;
    const stats = Array.from({ length: 60 }).map(() => {
      const stat = document.createElement('div');
      stat.className = 'w-[1px] h-[10px] bg-blue-500 block float-left';
      statsRef.current?.appendChild(stat);
      return stat;
    });

    let deg = 0;
    let prevFrameTime = 0;
    const deltas120: number[] = Array.from({ length: 20 });
    function fnFrame(time: number) {
      const diff = time - prevFrameTime;
      const stat = stats[deg % 60]!;
      deltas120[deg % deltas120.length] = diff;
      const avg = deltas120.reduce((a, b) => (a ?? 0) + (b ?? 0), 0) / deltas120.length;
      (avgRef.current || ({} as any)).innerText = `AVG: ${Math.floor(1000 / avg)} FPS`;
      stat.remove();
      stat.style.height = `${diff * 3}px`;
      statsRef.current?.appendChild(stat);
      prevFrameTime = time;
      if (stopRef.current) {
        return;
      }
      if (ref.current) {
        ref.current.style.transform = `rotate(${deg}deg)`;
        deg += 1;
        if (deg === 360) {
          deg = 0;
        }
      }
      requestAnimationFrame(fnFrame);
    }
    requestAnimationFrame(fnFrame);
    return () => {
      stopRef.current = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          stats.forEach((stat) => {
            stat.remove();
          });
        });
      });
    };
  }, []);
  return (
    <div
      onClick={() => {
        stopRef.current = true;
      }}
    >
      <div className="w-[120px] h-20 bg-amber-200 overflow-hidden" ref={statsRef}></div>
      <div className="inline-block" ref={ref}>
        Rotate this as well
      </div>
      <div ref={avgRef}>AVG</div>
    </div>
  );
}

function ActiveBoxControls() {
  const { $setSketchData, sketchDataRef } = useSketchStorageMethods();
  const { activeBoxId } = useInteractionsData();
  const { activeBoxIdRef } = useInteractionsMethods();
  const box = getActiveBox(activeBoxId, sketchDataRef.current);
  return (
    <div>
      Active box id: {activeBoxId}
      <br />
      Label:{' '}
      <input
        value={box.label || ''}
        onChange={(e) => {
          const newValue = e.target.value;
          // TODO: validate (size?)
          $setSketchData(
            actionSetActiveBoxLabel(activeBoxIdRef.current, newValue, sketchDataRef.current),
          );
        }}
      />
      <br />
      Show Label:
      <input
        type="checkbox"
        checked={!box.hideLabel}
        onChange={(e) => {
          $setSketchData(
            actionSetActiveBoxLabelVisibility(
              activeBoxIdRef.current,
              e.target.checked,
              sketchDataRef.current,
            ),
          );
        }}
      />
    </div>
  );
}

function ActiveConnectorControls() {
  const { $setSketchData, sketchDataRef } = useSketchStorageMethods();
  const { activeConnectorId } = useInteractionsData();
  const { activeConnectorIdRef } = useInteractionsMethods();
  const connector = getActiveConnector(activeConnectorId, sketchDataRef.current);
  return (
    <div>
      Active connector id: {activeConnectorId}
      <br />
      Label:{' '}
      <input
        value={connector.label || ''}
        onChange={(e) => {
          const newValue = e.target.value;
          // TODO: validate (size?)
          $setSketchData(
            actionSetActiveConnectorLabel(
              activeConnectorIdRef.current,
              newValue,
              sketchDataRef.current,
            ),
          );
        }}
      />
      <br />
      Show Label:
      <input
        type="checkbox"
        checked={!connector.hideLabel}
        onChange={(e) => {
          $setSketchData(
            actionSetActiveConnectorLabelVisibility(
              activeConnectorIdRef.current,
              e.target.checked,
              sketchDataRef.current,
            ),
          );
        }}
      />
    </div>
  );
}
function ActiveControls() {
  const { activeBoxId, activeConnectorId } = useInteractionsData();

  if (activeBoxId) {
    return <ActiveBoxControls />;
  }
  if (activeConnectorId) {
    return <ActiveConnectorControls />;
  }

  return <div>No active box or connector</div>;
}
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
        <button onClick={() => {}}>Simulate</button>
        <br />
        <button onClick={() => {}}>Clear & Simulate</button>
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
        <ActiveControls />
        <br />
        <span className="rotate">ROTATE</span>
        <br />
        <Rotate />
        <br />
        <Exports />
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
