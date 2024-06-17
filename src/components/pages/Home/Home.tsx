import React from "react";
import { tortes, titles, descriptions, productsPrice } from "../../../utils/constants";
import ProductCard from "../../main/ProductCard/ProductCard";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={`display-5 text-center ${styles.header1}`}>
          <p className={`${styles.header2}`}>Torte bestellen und geliefert bekommen</p>
          <p>Unsere Stärke sind Premium Torten mit kreativer Deko – in reiner Handarbeit.
            Wir versenden deine Torte taggenau innerhalb Deutschlands.
            Natürlich kannst Du die Torte auch selbst in unserem Tortenladen abholen.
            Wir freuen uns auf deinen Besuch!</p>
        </h1>
      </div>
      <div className={`${styles.row} row-cols-1 row-cols-md-4 g-3`}>
        {tortes.map((torte, index) => (
          <div className={styles.col} key={index}>
            <ProductCard
              torte={torte}
              title={titles[index]}
              description={descriptions[index]}
              productPrice={productsPrice.get(titles[index]) || 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;




