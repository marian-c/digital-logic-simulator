import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { PgLayoutToc } from '@/app/pg/layout_toc';

const ctxPages = require.context('.', true, /page\.tsx$/).keys();

type Props = {
  params: Promise<Record<string, string>>;
};

export default (async function test({ children }) {
  return (
    <div>
      <div>
        Left
        <PgLayoutToc pages={ctxPages} />
      </div>
      {children}
    </div>
  );
} satisfies FunctionComponentWithChildren<Props> as FunctionComponentWithChildren<Props>);
