import { useSketchStorageFocusData } from '@/app/v4/providers/dataStorageProvider';
import { assertNever } from '@/helpers/basics';
import React from 'react';
import { BoxInput } from '@/app/v4/modules/canvas/boxes/input';
import { BoxOutput } from '@/app/v4/modules/canvas/boxes/output';
import { BoxSplit } from '@/app/v4/modules/canvas/boxes/split';
import { BoxJoin } from '@/app/v4/modules/canvas/boxes/join';
import { BoxAnd } from '@/app/v4/modules/canvas/boxes/and';
import { BoxNot } from '@/app/v4/modules/canvas/boxes/not';
import { BoxCustom } from '@/app/v4/modules/canvas/boxes/custom';

export function Boxes() {
  const data = useSketchStorageFocusData();

  return (
    <>
      {data.structure.boxes.map((box) => {
        switch (box.kind) {
          case 'input':
            return <BoxInput key={box.id} box={box} />;
          case 'output':
            return <BoxOutput key={box.id} box={box} />;
          case 'and':
            return <BoxAnd key={box.id} box={box} />;
          case 'not':
            return <BoxNot key={box.id} box={box} />;
          case 'split':
            return <BoxSplit key={box.id} box={box} />;
          case 'join':
            return <BoxJoin key={box.id} box={box} />;
          case 'custom':
            return <BoxCustom key={box.id} box={box} />;
          default:
            assertNever(box);
        }
      })}
    </>
  );
}
