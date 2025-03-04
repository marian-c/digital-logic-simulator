import type { FunctionComponent } from '@/types/r-ui';
import { Reader } from '../../_organisms/ReaderAbandoned';
import { singuratate } from '@/components/_organisms/ReaderAbandoned/samples';

/**
 * This will handle the reader initialization
 * - fetch the data
 * - show loading screen
 * - show the actual reader
 */
export const Eminescu: FunctionComponent = () => {
  return <Reader contents={singuratate} shouldUseFullHeight />;
};
