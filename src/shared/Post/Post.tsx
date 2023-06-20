import React from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';

export function Post() {
  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <h2>
        Далеко-далеко за словесными горами в стране гласных и согласных живут.
      </h2>

      <div className={styles.content}>
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут
          рыбные тексты. Подзаголовок, на берегу?
        </p>
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут
          рыбные тексты. Подзаголовок, на берегу?
        </p>
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут
          рыбные тексты. Подзаголовок, на берегу?
        </p>
      </div>
    </div>,
    node
  );
}
