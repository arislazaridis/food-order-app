import React, { useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { connect } from "react-redux";
import { fetchProducts } from "../../models/Shopping/shopping-actions";

function AvailableMeals({ productsData, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const mealsList = productsData.products.map((meal) => (
    <MealItem
      key={meal._id}
      id={meal._id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
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
    productsData: state.shop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvailableMeals);
