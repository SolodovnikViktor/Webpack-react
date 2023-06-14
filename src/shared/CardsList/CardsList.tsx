import React from 'react';
import styles from './cardsList.css';
import { Card } from './Card/Card';

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}
