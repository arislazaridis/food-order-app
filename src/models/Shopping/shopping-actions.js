import * as actionTypes from "./shopping-types";
import axios from "axios";

export const fetchProductsRequest = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_REQUEST,
    payload: products,
  };
};
export const addToCart = (itemID, value) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const totalCartCount = (cartCount) => {
  return {
    type: actionTypes.TOTAL_CART_COUNT,
    payload: {
      cartCount: cartCount,
    },
  };
};

export const goToPage = (payload) => {
  return {
    type: actionTypes.GO_TO_PAGE,
    payload,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/productslist")
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductsRequest(products));
      })
      .catch((err) => {
        const errorMsg = err.message;
        console.log(errorMsg);
      });
  };
};
