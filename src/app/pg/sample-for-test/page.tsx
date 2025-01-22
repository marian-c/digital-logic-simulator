import Link from 'next/link';
import { sampleLog } from './included';

export default function SampleForTestPage() {
  sampleLog();
  return (
    <div>
      <span>this is just a sample page, use by a simple jest test</span>
      <Link href="/"> HOME </Link>
    </div>
  );
}
