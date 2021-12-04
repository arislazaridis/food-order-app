import logo from "./logo.svg";
import "./App.css";
import React, { Fragment, useState, useReducer } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
// import CartProvider from "./store/CartProvider";
import { CartContext } from "./store/CartContext";

function App() {
  const [cartItemsAmount, setCartItemsAmount] = useState();

  return (
    <CartContext.Provider value={{ cartItemsAmount, setCartItemsAmount }}>
      <Header />
      <main>
        <Meals />
      </main>
    </CartContext.Provider>
  );
}

export default App;
