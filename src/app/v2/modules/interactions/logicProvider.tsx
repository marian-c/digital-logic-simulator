import React from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { useSketchDataMethods } from '@/app/v2/modules/useSketchData';
import type { SketchState } from '@/app/v2/types/data';

type Logic = {
  /**
   * @deprecated
   */
  focusElement: (elementId: number) => void;
};

const LogicContext = React.createContext<Logic>(null as any);

export const LogicProvider: FunctionComponentWithChildren = ({ children }) => {
  const { $setSketchState } = useSketchDataMethods();
  const contextVal = React.useMemo(() => {
    return {
      /**
       * @deprecated
       */
      focusElement(elementId: number) {
        $setSketchState((oldMeta) => {
          return {
            ...oldMeta,
            focusedElementId: elementId,
          } satisfies SketchState;
        });
      },
    };
  }, [$setSketchState]);
  return <LogicContext value={contextVal}>{children}</LogicContext>;
};

export function useLogic() {
  return React.useContext(LogicContext);
}
