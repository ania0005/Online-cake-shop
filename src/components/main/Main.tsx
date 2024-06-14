import React from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Delivery from '../pages/Delivery/Delivery';
import Contacts from '../pages/Contacts/Contacts';
import Basket from '../pages/Basket/Basket';
import Fillings from '../pages/Fillings/Fillings';
import Reviews from '../pages/Reviews/Reviews';
import LogIn from '../pages/Login/LogIn';

interface MyProps {
  page: string;
}

const Main: React.FC<MyProps> = ({ page }) => {
  const initialSelectedProducts = [{ title: "Dummy Product", quantity: 1 }];

  const removeFromCart = (index: number) => {
    console.log("Remove from cart", index);
  };

  switch (page) {
    case 'Home':
      return <Home />;
    case 'About':
      return <About />;
    case 'Delivery':
      return <Delivery />;
    case 'Contacts':
      return <Contacts />;
    case 'Basket':
      return <Basket selectedProducts={initialSelectedProducts} removeFromCart={removeFromCart} />;
    case 'LogIn':
      return <LogIn />;
    case 'Fillings':
      return <Fillings />;
    case 'Reviews':
      return <Reviews />;
    default:
      return <Home />;
  }
};

export default Main;
