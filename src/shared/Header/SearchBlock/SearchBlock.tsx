import React, { useContext } from 'react';
import styles from './searchBlock.css';
import { UserBlock } from './UserBlock/UserBlock';
import { userContext } from '../../context/userContext';

export function SearchBlock() {
  const { iconImg, name } = useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} userName={name} />
    </div>
  );
}
