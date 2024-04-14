import React from "react";


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
    <div style={{ width: "60%", margin: "0 auto" }}>
      {" "}
      {/* Див с стилями ширины и отступа */}
      <h1 className="display-5 text-center header1">Your Basket</h1>{" "}
      {/* Заголовок корзины */}
      {selectedProducts.length === 0 ? ( // Проверяем, пуста ли корзина
        <p>Your basket is empty.</p> // Если пуста, отображаем сообщение
      ) : (
        // Иначе отображаем содержимое корзины
        <div>
          {selectedProducts.map(
            (
              product,
              index // Проходимся по каждому продукту в корзине
            ) => (
              <div key={index} className="row mb-3">
                {" "}
                {/* Див с классом строки и отступом */}
                <div className="col">{product.title}</div>{" "}
                {/* Отображаем название продукта */}
                <div className="col">{product.quantity}</div>{" "}
                {/* Отображаем количество продукта */}
                <div className="col">
                  Price:{" "}
                  {productsPrice // Отображаем цену продукта (или "N/A", если цена не определена)
                    ? (productsPrice.get(product.title) ?? 0) * product.quantity
                    : "N/A"}
                </div>
                <div className="col">
                  {/* Кнопка для удаления продукта из корзины */}
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          )}
          <div>Total Price: {calculateTotalPrice()}</div>{" "}
          {/* Отображаем общую стоимость продуктов в корзине */}
          <button className="btn btn-primary">Checkout</button>{" "}
          {/* Кнопка оформления заказа */}
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Basket;
