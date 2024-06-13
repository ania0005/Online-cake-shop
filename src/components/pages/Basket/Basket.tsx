import React from "react";
import styles from "./Basket.module.css";

// Интерфейс пропсов компонента "Basket"
interface Props {
  selectedProducts: { title: string; quantity: number }[]; // Список выбранных продуктов в корзине
  removeFromCart: (index: number) => void; // Функция для удаления продукта из корзины
  productsPrice?: Map<string, number>; // Обозначаем, что productsPrice может быть неопределенным
}

// Компонент "Basket", отображающий содержимое корзины покупок
const Basket: React.FC<Props> = ({
  selectedProducts, // Принимаем список выбранных продуктов в корзине
  removeFromCart, // Принимаем функцию для удаления продукта из корзины
  productsPrice, // Принимаем объект цен на продукты (может быть неопределенным)
}) => {
  // Функция для вычисления общей стоимости продуктов в корзине
  const calculateTotalPrice = () => {
    let totalPrice = 0; // Инициализация общей стоимости

    // Проверяем, определен ли объект цен на продукты
    if (productsPrice) {
      // Если определен, проходимся по каждому выбранному продукту в корзине
      selectedProducts.forEach((product) => {
        const price = productsPrice.get(product.title); // Получаем цену продукта из объекта цен
        if (price !== undefined) {
          // Если цена определена, добавляем к общей стоимости цену продукта, умноженную на его количество
          totalPrice += price * product.quantity;
        }
      });
    }
    return totalPrice; // Возвращаем общую стоимость продуктов в корзине
  };

  return (
    <div className={styles.container}>
      <h1 className={`display-5 text-center ${styles.header}`}>Your Basket</h1>
      {selectedProducts.length === 0 ? (
        <p className={styles.emptyMessage}>Your basket is empty.</p>
      ) : (
        <div>
          {selectedProducts.map((product, index) => (
            <div key={index} className={`${styles.row} row mb-3`}>
              <div className={styles.col}>{product.title}</div>
              <div className={styles.col}>{product.quantity}</div>
              <div className={styles.col}>
                Price:{" "}
                {productsPrice
                  ? (productsPrice.get(product.title) ?? 0) * product.quantity
                  : "N/A"}
              </div>
              <div className={styles.col}>
                <button
                  className={`btn btn-danger ${styles.button}`}
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className={styles.totalPrice}>
            Total Price: {calculateTotalPrice()}
          </div>
          <button className={`btn btn-primary ${styles.button}`}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Basket;

