import React from 'react';
import styles from './Reviews.module.css';
import img from '../../../images/01.png';

const Reviews: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Reviews about us:</h2>
      <img src={img} alt="..." />
    </div>
  );
};

export default Reviews;

