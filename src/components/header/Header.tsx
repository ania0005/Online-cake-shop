import React from "react";
import Navigation from "./Navigation";

interface HeaderProps {                      
    onPageChange: (newPage: string) => void; 
}

const Header: React.FC<HeaderProps> = ({ onPageChange }) => {  
   return (                                                   
    <header> 
      <Navigation onPageChange={onPageChange} />
      <h1 className='text-center header' >British Bakery</h1>
    </header>
  );
};

export default Header;
