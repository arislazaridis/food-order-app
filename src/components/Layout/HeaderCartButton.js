import React, { useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { PAGES } from "./../../config/config";

import { useDispatch } from "react-redux";
import {
  goToPage,
  totalCartCount,
} from "../../models/Shopping/shopping-actions";

function HeaderCartButton(props) {
  const { totalAmount } = props;

  const dispatch = useDispatch();

  const [displayCart, setDisplayCart] = useState(false);

  const handleSubmit = () => {
    if (totalAmount > 0) {
      handleGoToPage(PAGES.CartPage);
      setDisplayCart(true);
    }
  };

  const handleGoToPage = (page) => {
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
