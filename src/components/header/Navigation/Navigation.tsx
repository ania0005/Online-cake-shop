// Navigation.tsx

import React, { useState } from 'react';
import styles from './Navigation.module.css';
import NavItem from '../NavItem/NavItem';
import { navItemsL, navItemsR } from '../../../utils/constants';

interface NavProps {
  onPageChange: (newPage: string) => void;
}

const Navigation: React.FC<NavProps> = ({ onPageChange }) => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handlePageChange = (newPage: string) => {
    setSelectedItem(newPage);
    onPageChange(newPage);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navItemsLeft}>
        {navItemsL.map((e, index) => (
          <NavItem
            key={index}
            item={e.item}
            path={e.path}
            onClick={() => handlePageChange(e.path)}
            isSelected={selectedItem === e.path}
          />
        ))}
      </ul>
      <ul className={styles.navItemsRight}>
        {navItemsR.map((e, index) => (
          <NavItem
            key={index}
            item={e.item}
            path={e.path}
            onClick={() => handlePageChange(e.path)}
            isSelected={selectedItem === e.path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;













