import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Создание корня приложения
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Получение корневого элемента с идентификатором "root"
);
// Рендер приложения с использованием BrowserRouter для маршрутизации
root.render(
  <BrowserRouter>
    <App />  {/* Рендер компонента приложения */}
  </BrowserRouter>
);

// Отчеты о веб-виталии: функция, 
//которая позволяет измерять и отслеживать производительность приложения
reportWebVitals();
