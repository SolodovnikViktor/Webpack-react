import React from 'react';
import styles from './searchBlock.css';
import { UserBlock } from './UserBlock/UserBlock';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {
  const [data] = useUserData();
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} userName={data.name} />
    </div>
  );
}
