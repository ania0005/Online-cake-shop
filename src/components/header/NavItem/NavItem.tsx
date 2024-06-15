// NavItem.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.css';

interface NavItemProps {
  item: string;
  path: string;
  onClick: () => void;
  isSelected: boolean; // Новый пропс
}

const NavItem: React.FC<NavItemProps> = ({ item, path, onClick, isSelected }) => {
  return (
    <Link
      to={`/${item}`}
      className={`${styles.button} ${isSelected ? styles.selected : ''}`} // Условное добавление класса
      onClick={onClick}
    >
      {item}
    </Link>
  );
};

export default NavItem;



