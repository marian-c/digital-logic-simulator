import { singuratate } from '@/data/books/samples/samples';
import { Reader } from '@/components/_organisms/Reader';

export default function PagePgOrganismReaderFullHeight() {
  return <Reader contents={singuratate} fullViewport={true} />;
}
