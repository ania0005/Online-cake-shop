import React from "react";
import { Link } from "react-router-dom";

// Интерфейс для пропсов компонента элемента навигации
interface NavItemProps {
  item: string;
  path: string;
  onClick: () => void;
}
// Компонент элемента навигации с принятием пропсов item, path и onClick
const NavItem: React.FC<NavItemProps> = ({ item, path, onClick }) => {
  return (
    // Отображение элемента навигации в виде ссылки с заданным путем и обработчиком клика
    <Link to={path} className="btn button" onClick={onClick} >
      {item}
    </Link>
  );
};

export default NavItem;
