import { Reader } from '@/components/_organisms/Reader';
import { singuratate } from '@/components/_organisms/Reader/samples';

export default function PagePgOrganismReaderInline() {
  return <Reader contents={singuratate} wrapperClassName="h-[300px]" />;
}
