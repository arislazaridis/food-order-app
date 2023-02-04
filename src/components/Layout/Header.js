import {
  Fragment,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import mealsImage from "../../assets/meals5.gif";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Login from "./Login";
import Register from "./Register";

import { useSelector } from "react-redux";
import CallInfo from "./CallInfo";
import Cart from "./../Cart/Cart";

function Header() {
  const CartContext = createContext();
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector((state) => state.shop.cart);

  useEffect(() => {
    let count = 0;

    cart.forEach((item) => {
      count += item.qty;
      setCartCount(count);
    });
  }, [cart, cartCount, setCartCount]);

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
