import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

interface HeaderProps {
  onPageChange: (newPage: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onPageChange }) => {
  return (
    <header>
      <Navigation onPageChange={onPageChange} />
      <h1 className={styles.header}>British Bakery</h1>
    </header>
  );
};

export default Header;


