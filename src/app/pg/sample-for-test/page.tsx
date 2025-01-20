import Link from 'next/link';

export default function SampleForTestPage() {
  return (
    <div>
      <span>this is just a sample page, use by a simple jest test</span>
      <Link href="/"> HOME </Link>
    </div>
  );
}
