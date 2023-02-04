import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import MealItem from "./../Meals/MealItem";
import Button from "@mui/material/Button";
import Payment from "../Layout/Payment";
import { goToPage } from "../../models/Shopping/shopping-actions";
import { PAGES } from "./../../config/config";
import { useDispatch } from "react-redux";

function Cart(props) {
  const cart = useSelector((state) => state.shop.cart);
  // const cartCount = useContext(CartContext);

  const dispatch = useDispatch();

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

  const onClickPayment = () => {
    dispatch(goToPage(PAGES.PaymentPage));
  };

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
              />
              {/* <h1 style={{ border: "1px" }}>
              Total Price : {meal.qty * meal.price}
            </h1> */}
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
      </div>
      {/* <Button
        variant="contained"
        onClick={onClickPayment}
        style={{
          // margin: "auto",
          // border: "3px solid green",
          // padding: "10px",
          // justifyContent: "center",
          border: "3px solid green",
          margin: "auto",
          width: "500px",
          padding: "10px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Αποστολη Παραγγελας : {productPrices}
      </Button> */}
      <Payment productPrice={productPrices} />
    </>
  );
}

export default Cart;
