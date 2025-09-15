import type { FunctionComponentWithChildren } from '@/types/r-ui';
import React from 'react';

type Ctx = {
  svgRef: (el: SVGSVGElement) => void;
};

const InteractionsContext = React.createContext<Ctx>(null as any);

export const InteractionsProvider: FunctionComponentWithChildren = ({ children }) => {
  const svgRef = React.useCallback((el: SVGSVGElement) => {
    // attach zoom handler, would eventually need panning coordinates, which would be good to be refs
    // since we only need it in callbacks - no use rendering this context when that changes
    console.log('VVV', el);
  }, []);
  const contextVal = React.useMemo(() => {
    return { svgRef };
  }, []);

  return <InteractionsContext value={contextVal}>{children}</InteractionsContext>;
};

export const useInteractions = () => {
  return React.useContext(InteractionsContext);
};
