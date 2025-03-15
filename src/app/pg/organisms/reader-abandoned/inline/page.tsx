import { ReaderAbandoned } from '../../../../../components/_organisms/ReaderAbandoned';
import { singuratate } from '@/data/books/samples/samples';

export default function PagePgOrganismReaderInline() {
  return <ReaderAbandoned contents={singuratate} wrapperClassName="h-[300px]" />;
}
