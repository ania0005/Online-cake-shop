import React from "react";
import { tortes, titles, descriptions, productsPrice } from "../../../utils/constants";
import Basket from "../Basket/Basket";
import ProductCard from "../../main/ProductCard/ProductCard";
import styles from "./Home.module.css";

interface HomeProps {
  productsInCart: { title: string; quantity: number }[];
  removeFromCart: (index: number) => void;
}

const Home: React.FC<HomeProps> = ({ productsInCart, removeFromCart }) => {
  const addToCart = (title: string, quantity: number) => {
    const existingProduct = productsInCart.find((product) => product.title === title);

    if (existingProduct) {
      const updatedProducts = productsInCart.map((product) =>
        product.title === title ? { ...product, quantity: product.quantity + quantity } : product
      );
      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([...productsInCart, { title, quantity }]);
    }
  };

  const [selectedProducts, setSelectedProducts] = React.useState(productsInCart);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={`display-5 text-center ${styles.header1}`}>
          Our Products: Decorate your holiday with sweet happiness!
        </h1>
      </div>
      <div className={`${styles.row} row-cols-1 row-cols-md-4 g-3`}>
        {tortes.map((torte, index) => (
          <div className={styles.col} key={index}>
            <ProductCard
              torte={tortes[index]}
              title={titles[index]}
              description={descriptions[index]}
              productPrice={productsPrice.get(titles[index]) || 0}
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
