import React from 'react';
import styles from './menu.css';
import { MenuIcon } from '../../../../Icons/MenuIcon';
import { Dropdown } from '../../../../Dropdown/Dropdown';
import { EColors, Text } from '../../../../Text';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          MenuItems
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
