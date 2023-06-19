import React from 'react';
import styles from './userBlock.css';
import { Break } from '../../../Break/Break';
import { EColors, Text } from '../../../Text/Text';
import { AnonIcon } from '../../../Icons';

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
}

export function UserBlock({ avatarSrc, userName }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=1R1PL6ynfjWyGwjI4yxsqA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <AnonIcon />
        )}
      </div>
      <div className={styles.userName}>
        <Break size={12} />
        <Text size={20} color={EColors.black}>
          {userName}
        </Text>
      </div>
    </a>
  );
}
