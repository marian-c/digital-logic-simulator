import Link from 'next/link';
import { sampleLog } from './included';
import React from 'react';

export default function SampleForTestPage() {
  sampleLog('root');

  return (
    <div>
      <span>this is just a sample page, use by a simple jest test</span>
      <Link href="/"> HOME </Link>
    </div>
  );
}
