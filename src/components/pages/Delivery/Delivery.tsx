import React from 'react';
import styles from './Delivery.module.css';

const Delivery: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Delivery and payment:</h2>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Delivery terms:</h4>
        <p className={styles.sectionContent}></p>
      </div>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Types of delivery:</h4>
        <p className={styles.sectionContent}></p>
      </div>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Payment:</h4>
        <p className={styles.sectionContent}></p>
      </div>
    </div>
  );
};

export default Delivery;
