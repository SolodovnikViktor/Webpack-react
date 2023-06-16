import React from 'react';
import styles from './menuItemsList.css';
import { BlockIcon, WarningIcon } from '../../../../../Icons';
import { EColors, Text } from '../../../../../Text';

export function MenuItemsList() {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <BlockIcon />
        <Text size={12} color={EColors.grey99}>
          Скрыть
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <WarningIcon />
        <Text size={12} color={EColors.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
