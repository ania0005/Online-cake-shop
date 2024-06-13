import React from "react";
import { fillingDescriptions, fillings, toppings } from "../../../utils/constants";
import styles from './Fillings.module.css';

const Fillings: React.FC = () => {
  return (
    <div>
      {/* Заголовок для блока начинок */}
      <h2 className={`${styles.header} text-center`}>Cake fillings</h2>
      <div className={styles.container}>
        <div className="row justify-content-center">
          {/* Используем метод map для создания карточек для каждой начинки */}
          {fillings.map((filling, index) => (
            <div key={index} className="col-md-4 mb-3">
              {/* Карточка для начинки */}
              <div className={`card ${styles.card}`}>
                {/* Изображение начинки */}
                <img src={toppings[index]} className={`card-img-top ${styles['card-img-top']}`} alt="..." />
                <div className="card-body">
                  {/* Заголовок карточки с именем начинки */}
                  <h5 className={`card-title ${styles['card-title']}`}>{filling}</h5>
                  {/* Описание начинки */}
                  <p className={`card-text ${styles['card-text']}`}>
                    {fillingDescriptions[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fillings;
