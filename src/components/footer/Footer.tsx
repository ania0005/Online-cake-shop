import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          Send me an
          <span> email</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
