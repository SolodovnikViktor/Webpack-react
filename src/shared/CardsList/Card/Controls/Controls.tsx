import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter/KarmaCounter';
import { CommentButton } from './CommentButton/CommentButton';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentButton />
    </div>
  );
}
