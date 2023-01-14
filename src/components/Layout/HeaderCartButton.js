import React, { useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";
import { PAGES } from "./../../config/config";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { goToPage } from "../../models/Shopping/shopping-actions";
import Meals from "../Meals/Meals";

function HeaderCartButton(props) {
  const page = useSelector((state) => state.shop.page);
  const dispatch = useDispatch();

  const [displayCart, setDisplayCart] = useState(false);

  const handleSubmit = () => {
    handleGoToPage(PAGES.CartPage);
    setDisplayCart(true);
  };

  const handleGoToPage = (page) => {
    // navigate to the specified page
    // update the value of page in the Redux store
    dispatch(goToPage(page));
  };

  return (
    <div>
      <button className={classes.button} onClick={handleSubmit}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{props.totalAmount}</span>
      </button>
    </div>
  );
}

export default HeaderCartButton;
