import type { FunctionComponentWithChildren } from '@/r-ui/types';
import Layout_toc from '@/app/pg/layout_toc';

type Props = {
  params: Promise<Record<string, string>>;
};

export default (async function test({ children }) {
  return (
    <div>
      <div>
        Left
        <Layout_toc />
      </div>
      {children}
    </div>
  );
} satisfies FunctionComponentWithChildren<Props> as FunctionComponentWithChildren<Props>);
