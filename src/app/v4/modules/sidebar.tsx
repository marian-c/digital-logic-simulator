import React, { type ChangeEvent, useEffect, useRef } from 'react';
import {
  useSketchStorageData,
  useSketchStorageFocusData,
  useSketchStorageIsReadOnly,
  useSketchStorageMethods,
} from '@/app/v4/providers/dataStorageProvider';
import { buttonCN, sectionHeadingCN, sidebarSectionCN } from '@/classnames';
import { Nuke } from '@/app/v4/modules/nuke';
import {
  useInteractionsData,
  useInteractionsMethods,
} from '@/app/v4/providers/interactionsProvider';
import { assertNever } from '@/helpers/basics';
import { colorToColors } from '@/helpers/colors';
import {
  andGateColors,
  customGateColors,
  inputGateColors,
  joinGateColors,
  notGateColors,
  outputGateColors,
  splitGateColors,
} from '@/app/v4/config/colors';
import {
  actionChangeDescription,
  actionChangeIsChip,
  actionChangeName,
  actionChangeShouldSaveSimulation,
} from '@/app/v4/data/action/action-change-meta';
import {
  actionDeleteColorByBoxId,
  actionMoveByBoxIdDelta,
  actionSetBoxColorByBoxId,
  actionSetBoxLabelByBoxId,
  actionSetColorizeConnectorsByBoxId,
} from '@/app/v4/data/action/action-change-box';
import { getBoxInfoByBoxId } from '@/app/v4/data/getters/info';
import { getBoxByBoxId } from '@/app/v4/data/getters/box';
import type { SketchForStorage } from '@/app/v4/types/data';
import { getSketchFromCustomBox } from '@/app/v4/data/getters/sketch';

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

function SimulationDetails() {
  return null;
  // TODO: implement me
  return (
    <div>
      <h4>Simulation details</h4>
    </div>
  );
}

function SelectionBoxDetails() {
  // region: hooks
  const { activeInfo } = useInteractionsData();
  const { sizeRef } = useInteractionsMethods();
  const fSketch = useSketchStorageFocusData();
  const isReadOnly = useSketchStorageIsReadOnly();
  const {
    $updateSelectedSketch,
    otherSketchesRef,
    $setSelectedSketchUUID,
    panAndZoomRef,
    $updatePanAndZoom,
  } = useSketchStorageMethods();
  // endregion: hooks

  if (activeInfo.active?.kind !== 'boxes') {
    return null;
  }
  const boxInfo = getBoxInfoByBoxId(activeInfo.active.id, fSketch);
  const box = getBoxByBoxId(activeInfo.active.id, fSketch);

  let defaultColors: { on: string; off: string; main: string };
  let referecencedSketch: SketchForStorage | null = null;
  switch (box.kind) {
    case 'and':
      defaultColors = andGateColors;
      break;
    case 'not':
      defaultColors = notGateColors;
      break;
    case 'input':
      defaultColors = inputGateColors;
      break;
    case 'output':
      defaultColors = outputGateColors;
      break;
    case 'join':
      defaultColors = joinGateColors;
      break;
    case 'split':
      defaultColors = splitGateColors;
      break;
    case 'custom':
      // TODO: get the custom color from the sketch, if it's set
      defaultColors = customGateColors;
      referecencedSketch = getSketchFromCustomBox(box, otherSketchesRef.current);
      break;
    default:
      assertNever(box);
  }

  const colors = boxInfo.colors || defaultColors;
  // TODO: add option to pass through colors for join and split

  const extraEl = (
    <>
      {' '}
      TODO:
      <br />
      <button className={buttonCN}>Focus in (c)</button>
      <br />
      select custom color
      <input
        readOnly={isReadOnly}
        type="color"
        value={colors.main}
        onInput={
          isReadOnly
            ? undefined
            : (e: ChangeEvent<HTMLInputElement>) => {
                const color = e.target.value;
                const { main, on, off } = colorToColors(color);
                $updateSelectedSketch(actionSetBoxColorByBoxId(box.id, main, on, off, fSketch));
              }
        }
      />
      <button
        className={buttonCN}
        disabled={isReadOnly}
        onClick={
          isReadOnly
            ? undefined
            : () => {
                $updateSelectedSketch(actionDeleteColorByBoxId(box.id, fSketch));
              }
        }
      >
        Reset color
      </button>
      <br />
      <div style={{ backgroundColor: colors.on }} className={`inline-block w-3 h-3`}></div>
      <div style={{ backgroundColor: colors.main }} className={`inline-block w-3 h-3`}></div>
      <div style={{ backgroundColor: colors.off }} className={`inline-block w-3 h-3`}></div>
      <br />
      <input
        type="checkbox"
        disabled={isReadOnly}
        checked={!!boxInfo.colorizeConnectors}
        onChange={
          isReadOnly
            ? undefined
            : (e) => {
                const newVal = e.target.checked;
                $updateSelectedSketch(actionSetColorizeConnectorsByBoxId(box.id, newVal, fSketch));
              }
        }
      />{' '}
      colorize connectors
    </>
  );

  return (
    <div>
      <div>
        <span>Box label: </span>
        <input
          placeholder="label"
          value={boxInfo.label || ''}
          disabled={isReadOnly}
          onChange={
            isReadOnly
              ? undefined
              : (e) => {
                  $updateSelectedSketch(actionSetBoxLabelByBoxId(box.id, e.target.value, fSketch));
                }
          }
        />
      </div>

      <div>
        <span>ID: {box.id};</span>
        <span> Kind: {box.kind} </span>
        {referecencedSketch && (
          <button
            className={buttonCN}
            onClick={() => {
              $setSelectedSketchUUID(referecencedSketch?.uuid);
            }}
          >
            Open sketch
          </button>
        )}
      </div>

      {referecencedSketch && <div>Custom sketch: {referecencedSketch.meta.name}</div>}

      <div>
        Position x: {boxInfo.pos.x} y: {boxInfo.pos.y}{' '}
        <button
          className={buttonCN}
          onClick={() => {
            $updatePanAndZoom(
              boxInfo.pos.x - sizeRef.current.width / 2 / panAndZoomRef.current.zoomFactor,
              boxInfo.pos.y - sizeRef.current.height / 2 / panAndZoomRef.current.zoomFactor,
              panAndZoomRef.current.zoomFactor,
            );
          }}
        >
          Center
        </button>
      </div>

      {process.env.NODE_ENV === 'development' && extraEl}
    </div>
  );
}
function SelectionConnectorDetails() {
  const { activeInfo } = useInteractionsData();
  const extraEl = <div>TODO: how maany bits, value in binary and dec</div>;
  return (
    <div>
      <div>Connector id: {activeInfo.active?.id}</div>
      {process.env.NODE_ENV === 'development' && extraEl}
    </div>
  );
}

function SelectionDetails() {
  const { activeInfo } = useInteractionsData();
  let el: React.ReactNode;
  const kind = activeInfo.active?.kind;
  switch (kind) {
    case 'boxes':
      el = <SelectionBoxDetails />;
      break;
    case 'connectors':
      el = <SelectionConnectorDetails />;
      break;
    case undefined:
      el = 'Nothing active';
      break;
    default:
      assertNever(kind);
  }
  return (
    <>
      <div className={sidebarSectionCN}>
        <h4 className={sectionHeadingCN}>Active element</h4>
        {el}
      </div>
      <hr className="border border-gray-300" />
    </>
  );
}

// TODO: have a version for the focus data
function SketchDetails() {
  const data = useSketchStorageData();
  const isReadOnly = useSketchStorageIsReadOnly();
  const { $updateSelectedSketch, $updatePanAndZoom, panAndZoomRef } = useSketchStorageMethods();

  const extraEl = (
    <div>
      {' '}
      TODO: Should persist simulation{' '}
      <input
        type="checkbox"
        checked={data.meta.shouldSaveSimulation || false}
        disabled={isReadOnly}
        onChange={
          isReadOnly
            ? undefined
            : (e) => {
                const newValue = e.target.checked;
                $updateSelectedSketch(actionChangeShouldSaveSimulation(newValue, data));
              }
        }
      />
      <br />
      Mark as reusable chip{' '}
      <input
        type="checkbox"
        disabled={isReadOnly}
        checked={data.meta.isChip || false}
        onChange={
          isReadOnly
            ? undefined
            : (e) => {
                const newValue = e.target.checked;
                $updateSelectedSketch(actionChangeIsChip(newValue, data));
              }
        }
      />
    </div>
  );

  return (
    <>
      <div className={sidebarSectionCN}>
        <h4 className={sectionHeadingCN}>Sketch</h4>

        <div>
          Name:{' '}
          <input
            disabled={isReadOnly}
            value={data.meta.name}
            onChange={
              isReadOnly
                ? undefined
                : (e) => {
                    const newName = e.target.value;
                    $updateSelectedSketch(actionChangeName(newName, data));
                  }
            }
          />
        </div>
        <div>
          Description:
          <br />
          <textarea
            className="w-full h-[75px]"
            value={data.meta.description}
            disabled={isReadOnly}
            onChange={
              isReadOnly
                ? undefined
                : (e) => {
                    const newDescription = e.target.value;
                    $updateSelectedSketch(actionChangeDescription(newDescription, data));
                  }
            }
          />
        </div>
        <div>
          <button
            className={buttonCN}
            onClick={() => {
              $updatePanAndZoom(panAndZoomRef.current.panX, panAndZoomRef.current.panY, 1);
            }}
          >
            reset zoom
          </button>
          <button
            className={buttonCN}
            onClick={() => {
              $updatePanAndZoom(0, 0, panAndZoomRef.current.zoomFactor);
            }}
          >
            reset pan
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && extraEl}
      </div>
      <hr className="border border-gray-300" />
    </>
  );
}

function Tips() {
  return (
    <>
      <div className={sidebarSectionCN}>
        <h4 className={sectionHeadingCN}>Tips</h4>
        <ul>
          <li>Pan sketch:</li>
          <ul className="list-disc list-inside">
            <li>Mouse wheel</li>
            <li>Two finger drag on touchpad</li>
            {/* TODO: <li>MOD + click & drag on BG (TODO)</li>*/}
            {/* TODO: <li>Arrow keys (TODO)</li>*/}
          </ul>
          <li>Zoom sketch:</li>
          <ul className="list-disc list-inside">
            <li>Ctrl + Mouse wheel</li>
            <li>Pinch in/out on touchpad</li>
            {/* TODO: <li>MOD + click & drag on BG (TODO)</li>*/}
            {/* TODO: <li>Plus and minus keys (TODO)</li>*/}
            {/* TODO: <li>Double click on the background (TODO)</li>*/}
          </ul>
        </ul>
      </div>
      <hr className="border border-gray-300" />
    </>
  );
}

function DangerZone() {
  return (
    <>
      <div className={sidebarSectionCN}>
        <h4 className={`${sectionHeadingCN} text-red-800`}>Danger zone</h4>
        <Nuke />
      </div>
      <hr className="border border-gray-300" />
    </>
  );
}

function Debug() {
  const { $updateSelectedSketch, selectedSketchRef } = useSketchStorageMethods();

  React.useEffect(() => {
    (window as any).debug_move_box = (boxId: number) => {
      $updateSelectedSketch(actionMoveByBoxIdDelta(boxId, 10, 10, selectedSketchRef.current));
    };
    (window as any).debug_sketch_ref = selectedSketchRef;
  }, [$updateSelectedSketch, selectedSketchRef]);
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  return (
    <div>
      <h4>Debug</h4>
      <Rotate />
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="flex flex-col w-80 overflow-auto bg-gray-200 border border-l-gray-300">
      <div className="overflow-auto flex-grow h-0">
        <SketchDetails />
        <SelectionDetails />
        <SimulationDetails />
        <Tips />
        <DangerZone />
        <Debug />
      </div>
    </div>
  );
}
