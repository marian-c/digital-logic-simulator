import React from 'react';
import { buttonCN } from '@/classnames';

export function Nuke() {
  return (
    <button
      data-testid="nuke"
      className={buttonCN}
      onClick={() => {
        const confirmation = window.confirm('Are you sure you want to reset everything?');
        if (!confirmation) {
          return;
        }

        delete (window.history.state || {}).__APP_V4_PREV_SKETCH;
        window.history.replaceState(window.history.state, '');

        localStorage.clear();
        const req = indexedDB.deleteDatabase('DataV4');
        console.log('delete');
        req.onsuccess = () => {
          window.location.reload();
        };
        req.onerror = () => {
          console.error('error nuking');
        };
        console.log('done');
        window.location.reload();
      }}
    >
      NUKE
    </button>
  );
}
