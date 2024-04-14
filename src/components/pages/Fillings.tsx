import React from "react";
import {fillingDescriptions, fillings, toppings } from "../../utils/constants";

const Fillings: React.FC = () => {
  return (
    <div>
      {/* Заголовок для блока начинок */}
      <h2 className="header1 text-center">Cake fillings</h2>
      <div className="container">
        <div className="row justify-content-center">
          {/* Используем метод map для создания карточек для каждой начинки */}
          {fillings.map((filling, index) => (
            <div key={index} className="col-md-4 mb-3">
              {/* Карточка для начинки */}
              <div className="card">
                {/* Изображение начинки */}
                <img src={toppings[index]} className="card-img-top" alt="..." />
                <div className="card-body">
                  {/* Заголовок карточки с именем начинки */}
                  <h5 className="card-title">{filling}</h5>
                  {/* Описание начинки */}
                  <p className="card-text">
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