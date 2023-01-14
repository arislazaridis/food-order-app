import React, { useState, useContext } from "react";
import classes from "./../Meals/MealsItem.module.css";
import { useSelector } from "react-redux";
import MealItem from "./../Meals/MealItem";
import { WifiLock } from "@mui/icons-material";

function Cart(props) {
  const cart = useSelector((state) => state.shop.cart);
  // const cartCount = useContext(CartContext);

  const cartList = cart.map((meal) => (
    <MealItem
      key={meal._id}
      id={meal._id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  const cartPrices = cart.map((el) => el.price * el.qty);

  const productPrices = cartPrices.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <div>
      <div>
        {cart.map((meal) => (
          <div style={{ display: "flex" }}>
            <MealItem
              key={meal._id}
              id={meal._id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              image={meal.image}
            />
            {/* <h1>Quantity : {meal.qty}</h1>
            <h1>Total Price : {meal.qty * meal.price}</h1> */}
          </div>
          // <div style={{ display: "flex" }}>
          //   <li>
          //     <div>
          //       <h3>{meal.name}</h3>
          //       <div>Meal Price: {meal.price}</div>
          //       <div>Quantity: {meal.qty}</div>
          //       <div>Total Price: {meal.qty * meal.price}</div>
          //     </div>
          //   </li>
          // </div>
        ))}
      </div>
      {/* <div>Total Pay Price : {productPrices}</div> */}
    </div>
  );
}

export default Cart;
