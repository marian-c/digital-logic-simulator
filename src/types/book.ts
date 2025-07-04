type ItemSeparator = {
  kind: 'separator';
};
type ItemTitle = {
  kind: 'title';
  data: string;
};

type ItemLine = {
  kind: 'line';
  data: string;
};
type ItemParagraph = {
  kind: 'paragraph';
  data: string;
};

export type Item = ItemLine | ItemParagraph | ItemTitle | ItemSeparator;

export type BookContents = { items: Item[] };
