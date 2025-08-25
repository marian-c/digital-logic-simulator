export type Page = { hasIndex: boolean; children: Array<Page>; id: string; label: string };

export function generatePagesTree(pages: string[]): Page {
  const result: Page = { hasIndex: false, children: [], id: '', label: '' };
  pages.forEach((page) => {
    const segments = page.substring(2).split('/');
    segments.pop();
    let node = result;
    let id = '';
    segments.forEach((segment) => {
      id += `${id ? '/' : ''}${segment}`;
      let tentativeNode = node.children.find((child) => {
        return child.id === id;
      });

      if (!tentativeNode) {
        const newNode: Page = { hasIndex: false, children: [], id, label: segment };
        node.children.push(newNode);
        tentativeNode = newNode;
      }
      node = tentativeNode;
    });
    node.hasIndex = true;
  });
  return result;
}
