import { Fragment, useState, useEffect } from "react";
import mealsImage from "../../assets/meals5.gif";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Login from "./Login";
import Register from "./Register";

import { useSelector } from "react-redux";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector((state) => state.shop.cart);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <div style={{ display: "flex", gap: "16px" }}>
          <Login />
          <Register />
          <HeaderCartButton totalAmount={cartCount} />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header;
