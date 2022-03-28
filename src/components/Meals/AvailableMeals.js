import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { connect } from "react-redux";

function AvailableMeals(props) {
  const { products } = props;
  console.log(products);
  const mealsList = products.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapDispatchToProps, mapStateToProps)(AvailableMeals);
