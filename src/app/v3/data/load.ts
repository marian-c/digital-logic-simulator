import { sketch as sketch1 } from '@/app/v3/data/samples/x-1';
import { sketch as sketch2 } from '@/app/v3/data/samples/stress_100_close';
import { sketch as sketch3 } from '@/app/v3/data/samples/stress_500_close';
import { sketch as boxNand } from '@/app/v3/data/samples/box-nand';
import { sketch as boxOr } from '@/app/v3/data/samples/box-or';
import { sketch as boxXor } from '@/app/v3/data/samples/box-xor';
import { sketch as boxAdder } from '@/app/v3/data/samples/box-adder';
import { sketch as box4Adder } from '@/app/v3/data/samples/box-4bit-adder';
import { sketch as boxAlu } from '@/app/v3/data/samples/box-alu';
import { sketch as boxNor } from '@/app/v3/data/samples/box-nor';
import { sketch as boxSRLatch1 } from '@/app/v3/data/samples/box-SR-LATCH-1';
import { sketch as boxSRLatch2 } from '@/app/v3/data/samples/box-sr-latch-2';
import { sketch as pgTeo } from '@/app/v3/data/samples/playground-teo';
import { sketch as boxDLatch } from '@/app/v3/data/samples/box-d-latch';
import { sketch as boxDLatchNand } from '@/app/v3/data/samples/box-d-latch-nand';
import { sketch as box4BitRegister } from '@/app/v3/data/samples/box-4-bit-register';
import { sketch as boxDFlipFlop } from '@/app/v3/data/samples/box-d-flip-flop';
import { sketch as box1BitRegisterClock } from '@/app/v3/data/samples/box-1-bit-register-clock';

export const examplesV3 = [
  sketch1,
  sketch2,
  sketch3,
  boxNand,
  boxOr,
  boxXor,
  boxAdder,
  box4Adder,
  boxAlu,
  boxNor,
  boxSRLatch1,
  boxSRLatch2,
  pgTeo,
  boxDLatch,
  boxDLatchNand,
  box4BitRegister,
  boxDFlipFlop,
  box1BitRegisterClock,
];
