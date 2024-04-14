import React, { useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/Footer';
import { navItemsL } from './utils/constants';
import { navItemsR } from './utils/constants';
// Компонент приложения
function App() {
  // Состояние для текущей страницы
  const [page, setPage] = useState<string>(navItemsL[0].item || navItemsR[0].item );

  // Функция для изменения текущей страницы
  const handlePageChange = (newPage: string) => {
    setPage(newPage);
  };

  return (
    // Обертка приложения
    <div className='container-fluid'>     
      {/* Верхняя часть: шапка */}
      <Header onPageChange={handlePageChange} />
      {/* Основная часть: контент */}
      <Main page={page} />
      {/* Нижняя часть: подвал */}
      <Footer />
    </div>
  );
}


export default App;
