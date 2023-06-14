import React from 'react';
import styles from './textContent.css';
import { UserLink } from './UserLink/UserLink';
import { Title } from './Title/Title';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink />
        <span className={styles.createdAt}>4 часа назад</span>
      </div>
      <Title />
    </div>
  );
}
