export const booksIndex = {
  eminescu: {},
};

export type BooksIdentifier = keyof typeof booksIndex;

export function getBooksIdentifier(v: BooksIdentifier): BooksIdentifier {
  return v;
}
