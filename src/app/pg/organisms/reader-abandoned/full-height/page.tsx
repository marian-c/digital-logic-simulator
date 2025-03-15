import { ReaderAbandoned } from '../../../../../components/_organisms/ReaderAbandoned';
import { singuratate } from '@/data/books/samples/samples';

export default function PagePgOrganismReaderFullHeight() {
  return <ReaderAbandoned contents={singuratate} shouldUseFullHeight={true} />;
}
