import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.css';

interface NavItemProps {
  item: string;
  path: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, path, onClick }) => {
  return (
    <Link to={`/${item}`} className={styles.button} onClick={onClick}>
      {item}
    </Link>
  );
};

export default NavItem;


