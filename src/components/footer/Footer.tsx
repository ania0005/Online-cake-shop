import React from 'react';
import styles from './Footer.module.css';
import { cards } from '../../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <img key={index} src={card} alt={`Card ${index}`} className={styles.cardImage} />
        ))}
      </div>
      <p>
        © Copyright 2024 InterNestor GmbH. Alle Rechte vorbehalten.
        <span> email</span>
      </p>
    </footer>
  );
};

export default Footer;

