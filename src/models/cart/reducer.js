import { setCartData } from "./actions";

const initialState = {
  cartData: {
    itemId: "",
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemAmount: 0,
  },
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCartData.type:
      console.log(state.cartData);
      return {
        ...state,
        cartData: {
          ...state.cartData,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
