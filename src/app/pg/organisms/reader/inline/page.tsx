import { singuratate } from '@/data/books/samples/samples';
import { Reader } from '@/components/_organisms/Reader';

export default function PagePgOrganismReaderInline() {
  return <Reader contents={singuratate} wrapperClassName="h-[300px]" />;
}
