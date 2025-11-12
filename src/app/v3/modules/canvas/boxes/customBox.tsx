import type { FunctionComponent } from '@/types/r-ui';
import type { CustomBoxElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import React from 'react';
import { GenericBox } from '@/app/v3/modules/canvas/boxes/genericBox';
import { customGateColor } from '@/app/v3/config';
import { ConnectorPoint } from '@/app/v3/modules/canvas/boxes/connectorPoint';
import type { BoxSimulationState } from '@/app/v3/types/innerSketchSimulation';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';

export const CustomBox: FunctionComponent<{
  boxElement: CustomBoxElement;
  boxPosition: SketchBoxPosition;
  boxSim: BoxSimulationState;
}> = ({ boxElement, boxPosition, boxSim }) => {
  const data = useSketchStorageData();

  const referencedSketch = data.sketches.find((s) => s.meta.uuid === boxElement.params.uuid)!;
  const displayName = referencedSketch.meta.name;
  const width = displayName.length * 15;
  // TODO: [y pos] get the inputs and outputs in order of y pos
  const inputs = referencedSketch.structure.main.boxElements.filter((b) => b.kind === 'input');
  const outputs = referencedSketch.structure.main.boxElements.filter((b) => b.kind === 'output');
  const height = Math.max(inputs.length, outputs.length, 1) * 20;
  const stepInputs = (height - 20) / (inputs.length - 1);
  const stepOutputs = (height - 20) / (outputs.length - 1);
  return (
    <GenericBox
      boxId={boxElement.id}
      pos={boxPosition.pos}
      innerChildren={
        <>
          <rect fill={customGateColor} width={width} height={height} />
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            fontWeight="bold"
            fontSize={14}
            x={width / 2}
            y={height / 2}
            fill="white"
          >
            {referencedSketch.meta.name}
          </text>
        </>
      }
      overChildren={
        <>
          {inputs.map((input, idx) => {
            let cy = height / 2;
            if (inputs.length > 1) {
              cy = 10 + stepInputs * idx;
            }
            return (
              <ConnectorPoint
                key={input.id}
                portKind="inputPort"
                cx={0}
                cy={cy}
                portId={input.id}
                boxElement={boxElement}
                state={boxSim.simStatesInputs.find((ssi) => ssi.portId === input.id)!.state}
              />
            );
          })}

          {outputs.map((output, idx) => {
            let cy = height / 2;
            if (outputs.length > 1) {
              cy = 10 + stepOutputs * idx;
            }
            return (
              <ConnectorPoint
                key={output.id}
                portKind="outputPort"
                cx={width}
                cy={cy}
                portId={output.id}
                boxElement={boxElement}
                state={boxSim.simStatesOutputs.find((ssi) => ssi.portId === output.id)!.state}
              />
            );
          })}
        </>
      }
    />
  );
};
