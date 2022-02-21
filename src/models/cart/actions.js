const SET_CART_DATA = "CART_DATA//SET_CART_DATA";

export const setCartData = (payload) => {
  return {
    type: SET_CART_DATA,
    payload,
  };
};

setCartData.type = SET_CART_DATA;
