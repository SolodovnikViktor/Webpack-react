import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './shared/header.less';

function AppComponent() {
  return (
    <header>
      <h1>content</h1>
      <h1 className={styles.example}>Reddit for our own</h1>
    </header>
  );
}

export const App = hot(AppComponent);
