import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Delivery from "../pages/Delivery";
import Contacts from "../pages/Contacts";
import Basket from "../pages/Basket";
import LogIn from "../pages/LogIn";
import Fillings from "../pages/Fillings";
import Reviews from "../pages/Reviews";

// Определение пропсов для компонента Main
interface MyProps {
  page: string;  // Строка, представляющая текущую страницу
}
// Компонент Main, отвечающий за отображение содержимого различных страниц приложения
const Main: React.FC<MyProps> = ({ page }) => {

  // Инициализация начального списка выбранных продуктов
  const initialSelectedProducts = [{ title: "Dummy Product", quantity: 1 }]; 
   // Функция для удаления продукта из корзины
  const removeFromCart = (index: number) => {
    console.log("Remove from cart", index);
  };

  return (
    <Routes>  {/* Объявление маршрутов приложения */}
      <Route
        path="/"  // Маршрут для главной страницы
        element={<Home productsInCart={initialSelectedProducts} removeFromCart={removeFromCart} />} // Заменил selectedProducts на productsInCart
      />
      <Route path="/about" element={<About />} />  {/* Маршрут для страницы "About" */}
      <Route path="/delivery" element={<Delivery />} />  {/* Маршрут для страницы "Delivery" */}
      <Route path="/contacts" element={<Contacts />} />  {/* Маршрут для страницы "Contacts" */}
      <Route
        path="/basket"    // Отображение компонента Basket с передачей пропсов
        element={<Basket selectedProducts={initialSelectedProducts} removeFromCart={removeFromCart} />}
      />  
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/fillings" element={<Fillings />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
};

export default Main;