import React from 'react';
import styles from './ProductCard.module.css';

// Интерфейс пропсов для компонента ProductCard
interface ProductCardProps {
  torte: string; // Изображение торта
  title: string; // Заголовок продукта
  description: string; // Описание продукта
  productPrice: number; // Цена продукта
  addToCart: (title: string, quantity: number) => void; // Функция для добавления продукта в корзину
}

// Компонент ProductCard для отображения карточки продукта
const ProductCard: React.FC<ProductCardProps> = ({ torte, title, description, productPrice, addToCart }) => {
  // Состояние для хранения выбранного количества продукта
  const [selectedQuantity, setSelectedQuantity] = React.useState(0);

  // Функция для увеличения количества продукта
  const handleIncrement = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  // Функция для уменьшения количества продукта
  const handleDecrement = () => {
    if (selectedQuantity > 0) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  // Функция для добавления продукта в корзину
  const handleAddToCart = () => {
    addToCart(title, selectedQuantity);
    setSelectedQuantity(0); // Сброс выбранного количества после добавления в корзину
  };

  return (
    <div className={`col ${styles.cardContainer}`}>
      <div className="card h-100">
        <img src={torte} className={`card-img-top ${styles.cardImage}`} alt="..." />
        <div className="card-body">
          <h5 className={`card-title ${styles.cardTitle}`}>{title}</h5>
          <p className={`card-text ${styles.cardText}`}>Composition: {description}</p>
          <p className={`card-text ${styles.cardText}`}>Price: {productPrice}</p>
          <div className={styles.quantityControls}>
            <button className={`btn ${styles.quantityButton}`} onClick={handleDecrement}>-</button>
            <span>{selectedQuantity} PC.</span>
            <button className={`btn ${styles.quantityButton}`} onClick={handleIncrement}>+</button>
            <button className={`btn ${styles.addToBasketButton}`} onClick={handleAddToCart}>Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
