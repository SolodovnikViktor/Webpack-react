import React, { useEffect, useRef } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { CommentForm } from './CommentForm';
interface IPost {
  onClose?: () => void;
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target))
        props.onClose?.();
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
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
      <CommentForm />
    </div>,
    node
  );
}
