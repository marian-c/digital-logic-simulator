import React from 'react';
import Link from 'next/link';
import { generatePagesTree, type Page } from '@/helpers/generatePagesTree';
import type { FunctionComponent } from '@/types/r-ui';

const Items: FunctionComponent<{ pages: Page[]; rootPathname: string }> = ({
  pages,
  rootPathname,
}) => {
  return (
    <ul className="pl-2">
      {pages.map((page) => (
        <li key={page.id}>
          {page.hasIndex ? (
            <Link href={`${rootPathname}${page.id}`}> {page.label || 'root'}</Link>
          ) : (
            page.label || 'root'
          )}
          {page.children.length > 0 && <Items pages={page.children} rootPathname={rootPathname} />}
        </li>
      ))}
    </ul>
  );
};

export const PgToc: FunctionComponent<{ pages: string[]; rootPathname: string }> = ({
  pages,
  rootPathname,
}) => {
  const pagesTree = React.useMemo(() => {
    return generatePagesTree(pages);
  }, [pages]);
  return (
    <div>
      <Link href={rootPathname}>Playground</Link>
      <Items pages={pagesTree.children} rootPathname={rootPathname} />
    </div>
  );
};
