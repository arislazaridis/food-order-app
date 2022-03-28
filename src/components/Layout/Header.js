import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import { useSelector } from "react-redux";

function Header() {
  const amountItems = useSelector((state) => state.shop.cart.qty);

  const totalAmount = useSelector((state) => state.shop.cart.qty);

  console.log(totalAmount);

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton totalAmount={totalAmount} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header;
