import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import MealItem from "./../Meals/MealItem";
import Payment from "../Layout/Payment";

function Cart(props) {
  const cart = useSelector((state) => state.shop.cart);

  const cartPrices = cart.map((el) => el.price * el.qty);

  const productPrices = cartPrices.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <>
      <div>
        <div>
          {cart.map((meal) => (
            <div>
              <MealItem
                key={meal._id}
                id={meal._id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
                image={meal.image}
                qty={meal.qty}
              />
            </div>
          ))}
        </div>
      </div>
      <Payment productPrice={Math.round(productPrices)} />
    </>
  );
}

export default Cart;
