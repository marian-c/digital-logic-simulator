import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { PgLayoutToc } from '@/app/pg/layout_toc';

const ctxPages = require.context('.', true, /page\.tsx$/).keys();

type Props = {
  params: Promise<Record<string, string>>;
};

export default (async function test({ children }) {
  return (
    <div className="flex">
      <div className="border-r-2 border-gray-200">
        Left
        <PgLayoutToc pages={ctxPages} />
      </div>
      <div className="pl-2">{children}</div>
    </div>
  );
} satisfies FunctionComponentWithChildren<Props> as FunctionComponentWithChildren<Props>);
