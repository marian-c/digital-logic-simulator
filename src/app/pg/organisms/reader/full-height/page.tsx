import { Reader } from '@/components/_organisms/Reader';
import { singuratate } from '@/components/_organisms/Reader/samples';

export default function PagePgOrganismReaderFullHeight() {
  return <Reader contents={singuratate} shouldUseFullHeight={true} />;
}
