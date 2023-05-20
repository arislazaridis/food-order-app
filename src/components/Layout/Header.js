import { Fragment, useState, useEffect } from "react";
import mealsImage from "../../assets/meals5.gif";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Login from "./Login";
import Register from "./Register";
import { useDispatch } from "react-redux";
import { totalCartCount } from "../../models/Shopping/shopping-actions";

import { useSelector } from "react-redux";
import CallInfo from "./CallInfo";

function Header(props) {
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector((state) => state.shop.cart);
  const cartCountStore = useSelector((state) => state.shop.cartCount);

  const dispatch = useDispatch();

  useEffect(() => {
    let count = 0;

    cart.forEach((item) => {
      count += item.qty;
      dispatch(totalCartCount(count));
      setCartCount(count);
    });
  }, [cart, cartCount, setCartCount, dispatch]);

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <div
          className={classes.infoHeader}
          style={{ display: "flex", gap: "24px" }}
        >
          <CallInfo />
          <Login />
          <Register />
          <HeaderCartButton
            totalAmount={
              cartCountStore?.cartCount ? cartCountStore?.cartCount : 0
            }
          />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header;
