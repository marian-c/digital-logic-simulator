import { sketch as boxNand } from '@/app/v4/samples/box-nand';
import { sketch as boxOr } from '@/app/v4/samples/box-or';
import { sketch as boxXor } from '@/app/v4/samples/box-xor';
import { sketch as boxAdder } from '@/app/v4/samples/box-adder';
import { sketch as box4Adder } from '@/app/v4/samples/box-4bit-adder';
import { sketch as boxAlu } from '@/app/v4/samples/box-alu';
import { sketch as boxNor } from '@/app/v4/samples/box-nor';
import { sketch as boxSRLatch1 } from '@/app/v4/samples/box-SR-LATCH-1';
import { sketch as boxSRLatch2 } from '@/app/v4/samples/box-sr-latch-2';
import { sketch as boxDLatch } from '@/app/v4/samples/box-d-latch';
import { sketch as boxDLatchNand } from '@/app/v4/samples/box-d-latch-nand';
import { sketch as box4BitRegister } from '@/app/v4/samples/box-4-bit-register';
import { sketch as boxDFlipFlop } from '@/app/v4/samples/box-d-flip-flop';
import { sketch as box1BitRegisterClock } from '@/app/v4/samples/box-1-bit-register-clock';
import { sketch as playground } from '@/app/v4/samples/playground';

export const examplesV4 = [
  playground,
  boxNand,
  boxOr,
  boxXor,
  boxAdder,
  box4Adder,
  boxAlu,
  boxNor,
  boxSRLatch1,
  boxSRLatch2,
  boxDLatch,
  boxDLatchNand,
  box4BitRegister,
  boxDFlipFlop,
  box1BitRegisterClock,
];

export const defaultExampleUUID = playground.uuid;
