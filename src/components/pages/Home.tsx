import React from "react";
import { tortes, titles, descriptions, productsPrice } from "../../utils/constants";
import Basket from "./Basket";
import ProductCard from "../main/ProductCard";

// Интерфейс пропсов компонента "Home"
interface HomeProps {
  productsInCart: { title: string; quantity: number }[]; // Список выбранных продуктов в корзине
  removeFromCart: (index: number) => void; // Функция для удаления продукта из корзины
}

// Компонент "Home" представляет собой главную страницу приложения
const Home: React.FC<HomeProps> = ({ productsInCart, removeFromCart }) => {
  // Функция добавления продукта в корзину
  const addToCart = (title: string, quantity: number) => {
    // Поиск существующего продукта в корзине
    const existingProduct = productsInCart.find((product) => product.title === title);
  
    if (existingProduct) {
      // Если товар уже есть в корзине, обновляем его количество
      const updatedProducts = productsInCart.map((product) =>
        product.title === title ? { ...product, quantity: product.quantity + quantity } : product
      );
      setSelectedProducts(updatedProducts);
    } else {
      // Если товара нет в корзине, добавляем его
      setSelectedProducts([...productsInCart, { title, quantity }]);
    }
  };

  // Состояние для списка выбранных продуктов
  const [selectedProducts, setSelectedProducts] = React.useState(productsInCart);

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <div>
        {/* Заголовок страницы */}
        <h1 className="display-5 text-center header1">Our Products: Decorate your holiday with sweet happiness!</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {/* Отображение карточек продуктов */}
        {tortes.map((torte, index) => (
          <ProductCard
            key={index}
            torte={tortes[index]}
            title={titles[index]}
            description={descriptions[index]}
            productPrice={productsPrice.get(titles[index]) || 0}
            addToCart={addToCart}
          />
        ))}
      </div>
      {/* Компонент корзины с передачей выбранных продуктов */}
      <Basket selectedProducts={selectedProducts} removeFromCart={removeFromCart} />
    </div>
  );
};
export default Home;