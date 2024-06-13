import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>About Us:</h2>
      <br />
      <h4 className={styles.sectionTitle}>Our history:</h4>
      <p className={styles.paragraph}>
        
      </p>
      <br />
      <h4 className={styles.sectionTitle}>Our team:</h4>
      <p className={styles.paragraph}>
       
      </p>
      <br />
    </div>
  );
};

export default About;
