import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock/SortBlock';

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
