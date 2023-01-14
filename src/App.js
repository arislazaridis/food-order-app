import "./App.css";
import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import { PAGES } from "./config/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { goToPage } from "./models/Shopping/shopping-actions";

function App() {
  const page = useSelector((state) => state.shop.page);
  const dispatch = useDispatch();

  let component;
  switch (page) {
    case PAGES.HomePage:
      component = <Meals />;
      break;
    case PAGES.CartPage:
      component = <Cart />;
      break;
    default:
      component = null;
  }

  const handleGoToPage = (page) => {
    // navigate to the specified page
    // update the value of page in the Redux store
    dispatch(goToPage(page));
  };

  return (
    <>
      <Header />
      {component}
    </>
  );
}

export default App;
