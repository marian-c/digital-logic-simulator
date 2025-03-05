import type { FunctionComponent } from '@/types/r-ui';
import { ReaderAbandoned } from '../../_organisms/ReaderAbandoned';
import { singuratate } from '@/data/samples/samples';

/**
 * This will handle the reader initialization
 * - fetch the data
 * - manage localstorage access
 *    - only fetch on mount and
 * - show loading screen
 * - show the actual reader
 */
export const Eminescu: FunctionComponent = () => {
  return <ReaderAbandoned contents={singuratate} shouldUseFullHeight />;
};
