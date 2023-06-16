import React from 'react';
import styles from './userLink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
    <img src="" alt="avatar" className={styles.avatar} />
    <a href="#user-url" className={styles.username}>
      Дмитрий Гришин
    </a>
  </div>
  );
}
