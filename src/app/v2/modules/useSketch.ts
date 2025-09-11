import type { Sketch } from '@/app/v2/types/data';
import React from 'react';

export function useSketch(sketch: Sketch) {
  // TODO: save to localStorage on change, debounced
  const { structure, meta, inputs, positions, simulation, state } = sketch;
  const [sketchStructure, setSketchStructure] = React.useState(structure);
  const [sketchMeta, setSketchMeta] = React.useState(meta);
  const [sketchPositions, setSketchPositions] = React.useState(positions);
  const [sketchInputs, setSketchInputs] = React.useState(inputs);
  const [sketchSimulation, setSketchSimulation] = React.useState(simulation);
  const [sketchState, setSketchState] = React.useState(state);

  return {
    sketchStructure,
    setSketchStructure,
    sketchMeta,
    setSketchMeta,
    sketchPositions,
    setSketchPositions,
    sketchInputs,
    setSketchInputs,
    sketchSimulation,
    setSketchSimulation,
    sketchState,
    setSketchState,
  };
}
