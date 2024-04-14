import React from 'react';

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
    <div className="col"> {/*контейнер Bootstrap для создания колонок в ряду. 
                        Он указывает на то, что каждая карточка продукта будет размещена в отдельной колонке.*/}
      
      <div className="card h-100"> {/*элемент Bootstrap, который создает карточку. h-100 класс применяется для того, 
      чтобы карточка занимала всю доступную высоту своего родительского контейнера. */}
        
        <img src={torte} className="card-img-top" alt="..." />
        <div className="card-body"> {/*создает контейнер для содержимого карточки. */}         
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Composition: {description}</p>
          <p className="card-text">Price: {productPrice}</p>
          <div className="d-flex align-items-center"> {/* контейнер создает горизонтальный блок элементов и выравнивает их по центру. */}
            <button className="btn btn-light me-2" onClick={handleDecrement}>-</button>
            <span>{selectedQuantity} PC.</span>{/* количество выбранного продукта */}
            <button className="btn btn-light ms-2" onClick={handleIncrement}>+</button>
            
            <button className="btn btn-info ms-2" onClick={handleAddToCart}>Add to Basket</button>{/*кнопка для добавления продукта в корзину, 
            при клике на нее вызывается функция handleAddToCart, которая добавляет продукт в корзину. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;