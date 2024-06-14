import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { navItemsL, navItemsR } from './utils/constants';
import Header from './components/header/Header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  const [page, setPage] = useState<string>(navItemsL[0].item || navItemsR[0].item);
  
  const handlePageChange = (newPage: string) => {
    setPage(newPage);
  };

  return (
    <div className='container1'>
      <Router>
        <Header onPageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<Navigate to={`/${page}`} />} />
          {navItemsL.concat(navItemsR).map((navItem) => (
            <Route
              key={navItem.item}
              path={`/${navItem.item}`}
              element={<Main page={navItem.item} />}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


