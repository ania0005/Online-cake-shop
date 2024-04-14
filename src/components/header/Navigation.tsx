import React from "react";
import NavItem from "./NavItem";
import { navItemsR } from "../../utils/constants";
import { navItemsL } from "../../utils/constants";

interface NavProps {
  onPageChange: (newPage: string) => void;// Определение интерфейса для пропсов компонента Navigation
}
// Компонент Navigation с принятием пропсов onPageChange и отображением элементов навигации
const Navigation: React.FC<NavProps> = ({ onPageChange }) => {
  return (
    <nav>
      <ul className='buttonsRight-class'>
     {/* Этот блок кода отображает элементы навигации из массива navItemsL  */}
        {navItemsL.map((e, index) => (
          // Для каждого элемента массива navItemsL создается компонент NavItem, в который передаются 
          //значения item и path. При клике на элемент навигации вызывается функция onPageChange с передачей пути страницы (e.path).
          <NavItem
            key={index}  // Уникальный ключ для оптимизации работы React
            item={e.item}
            path={e.path}  
            onClick={() => onPageChange(e.path)}// При клике на элемент навигации вызывается 
          />                                    //функция onPageChange с передачей пути страницы
        ))}
      </ul>
       {/* Отображение левой части элементов навигации */}
      <ul className='buttonsLeft-class'>
      <li className='nav-item'>
      <div className="phone-wrapper">
            +4915111019999
          </div>
        {navItemsR.map((e, index) => (
          <NavItem
            key={index}
            item={e.item}
            path={e.path}  
            onClick={() => onPageChange(e.path)}
          />
        ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;