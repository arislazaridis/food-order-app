import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";

function AvailableMeals() {
  const products = useSelector((state) => state.shop.products);
  const mealsList = products.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.img}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}

export default AvailableMeals;
