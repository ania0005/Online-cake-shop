import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  torte: string;
  title: string;
  description: string;
  productPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ torte, title, description, productPrice }) => {
  return (
    <div className={`col ${styles.cardContainer}`}>
      <div className="card h-100">
        <img src={torte} className={`card-img-top ${styles.cardImage}`} alt={title} />
        <div className="card-body">
          <h5 className={`card-title ${styles.cardTitle}`}>{title}</h5>
          <p className={`card-text ${styles.cardText}`}>Composition: {description}</p>
          <p className={`card-text ${styles.cardText}`}>Price: ab {productPrice} €</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
