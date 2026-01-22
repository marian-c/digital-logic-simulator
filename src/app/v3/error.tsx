'use client';

import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-[800px] mt-2 m-auto p-10 bg-amber-200">
      <h2>Something went wrong!</h2>
      <p>
        This simulator is very much a work in progress, it is slow and buggy. Under the hood, saves
        a bunch of data into localStorage, and it can happen that it gets corrupted. Use the button
        bellow to nuke everything saved and start from scratch.
      </p>
      <button
        className="border border-red-500 mt-2 mb-2 pl-2 pr-2"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            localStorage.clear();
            window.location.reload();
          }
        }
      >
        Delete saved data and reload
      </button>
      <p>
        You could also{' '}
        <a className="underline" href="http://github.com/marian-c/digital-logic-simulator/issues/">
          submit a bug on github
        </a>
      </p>
    </div>
  );
}
