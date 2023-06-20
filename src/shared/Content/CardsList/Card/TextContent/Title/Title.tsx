import React, { useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../../Post';

export function Title() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <h2 className={styles.title}>
      <a
        href="#post-url"
        className={styles.postLink}
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        Следует отметить, что новая модель организационной деятельности Следует
        отметить, что новая модель организационной деятельности
      </a>
      {isModalOpened && <Post />}
    </h2>
  );
}
