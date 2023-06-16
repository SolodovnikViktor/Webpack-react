import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter/KarmaCounter';
import { CommentButton } from './CommentButton/CommentButton';
import { ShareButton } from './ShareButton/ShareButton';
import { SaveButton } from './SaveButton/SaveButton';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
