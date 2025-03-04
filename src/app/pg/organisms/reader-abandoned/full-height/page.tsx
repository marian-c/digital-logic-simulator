import { Reader } from '../../../../../components/_organisms/ReaderAbandoned';
import { singuratate } from '@/components/_organisms/ReaderAbandoned/samples';

export default function PagePgOrganismReaderFullHeight() {
  return <Reader contents={singuratate} shouldUseFullHeight={true} />;
}
