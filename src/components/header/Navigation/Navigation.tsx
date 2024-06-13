// Navigation.tsx

import React from 'react';
import styles from './Navigation.module.css';
import NavItem from '../NavItem/NavItem';
import { navItemsL, navItemsR } from '../../../utils/constants';

interface NavProps {
  onPageChange: (newPage: string) => void;
}

const Navigation: React.FC<NavProps> = ({ onPageChange }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navItemsLeft}>
        {navItemsL.map((e, index) => (
          <NavItem
            key={index}
            item={e.item}
            path={e.path}
            onClick={() => onPageChange(e.path)}
          />
        ))}
      </ul>
      <ul className={styles.navItemsRight}>
        <li className={styles.nav_item}>
          <div className={styles.phone_wrapper}>4915111019999</div>
        </li>
        {navItemsR.map((e, index) => (
          <NavItem
            key={index}
            item={e.item}
            path={e.path}
            onClick={() => onPageChange(e.path)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;












