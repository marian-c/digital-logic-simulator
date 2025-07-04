import { getAuthors } from '@/data/books';
import Link from 'next/link';

export default async function PageRead() {
  const authors = getAuthors();
  return (
    <div>
      Available to read
      <ul>
        {authors.map((author) => {
          return (
            <li key={author}>
              <Link href={`/read/${author}`}>{author}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
