export const booksIndex = {
  eminescu: {
    poezii: {},
  },
  else: {
    eee: {},
  },
};

type BooksIndex = typeof booksIndex;

type Author = keyof BooksIndex;

type BookOfAuthor<T extends Author, U = keyof BooksIndex[T]> = U extends string ? U : never;

export function getBookIdentifier<T extends Author, U extends BookOfAuthor<T>>(author: T, book: U) {
  return `${author}-${book}` as `${T}-${U}`;
}

export function getAuthors(): Author[] {
  return Object.keys(booksIndex) as Author[];
}

export function getBooksOfAuthor<T extends Author>(author: T): BookOfAuthor<T>[] {
  return Object.keys(booksIndex[author]) as BookOfAuthor<T>[];
}

export function getAllBooks() {
  return Object.keys(booksIndex)
    .map((author) => Object.keys(booksIndex[author as keyof BooksIndex]))
    .flat();
}
