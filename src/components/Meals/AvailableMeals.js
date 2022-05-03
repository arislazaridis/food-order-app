import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";
// import axios from "axios";
import { connect } from "react-redux";
import { fetchProducts } from "../../models/Shopping/shopping-actions";

function AvailableMeals({ productsData, fetchProducts }) {
  // const [dbProducts, setDbProducts] = useState([]);

  // const fetchProducts = async () => {
  //   const response = await axios.get("http://localhost:3001/productslist");
  //   setDbProducts(response.data);

  //   return response.data;
  // };
  useEffect(() => {
    // const fetchdata = fetchProducts();
    fetchProducts();
  }, []);

  // const products = useSelector((state) => state.shop.products);
  const mealsList = productsData.products.map((meal) => (
    <MealItem
      key={meal._id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  // products.map((meal) => (

  //   <MealItem
  //     key={meal.id}
  //     id={meal.id}
  //     name={meal.name}
  //     description={meal.description}
  //     price={meal.price}
  //     image={meal.img}
  //   />
  // ));

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
