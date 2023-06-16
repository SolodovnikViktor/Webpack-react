import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        src="https://cdn.dribbble.com/userupload/7811860/file/original-85e3844d3b8f977868f2dbac52c1278b.jpg?compress=1&resize=800x600&vertical=center"
        alt=""
        className={styles.previewImg}
      />
    </div>
  );
}
