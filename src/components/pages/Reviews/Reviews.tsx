import React from 'react';
import styles from './Reviews.module.css';

const Reviews: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Reviews about us:</h2>
      <div className={styles.review}>
        <h4 className={styles.reviewTitle}>1:</h4>
        <p className={styles.reviewText}>/* Review content here */</p>
      </div>
      <div className={styles.review}>
        <h4 className={styles.reviewTitle}>2:</h4>
        <p className={styles.reviewText}>/* Review content here */</p>
      </div>
      <div className={styles.review}>
        <h4 className={styles.reviewTitle}>3:</h4>
        <p className={styles.reviewText}>/* Review content here */</p>
      </div>
    </div>
  );
};

export default Reviews;
