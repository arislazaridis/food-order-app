// const SET_SIGNUP_DATA = "SIGN_UP//SET_SIGNUP_DATA";
// const SET_SIGNIN_DATA = "SIGN_IN//SET_SIGNIN_DATA";
// const SET_USERS_DATA = "USERS_DATA//SET_USERS_DATA";

// export const setSignUpData = (payload) => {
//   return {
//     type: SET_SIGNUP_DATA,
//     payload,
//   };
// };

// setSignUpData.type = SET_SIGNUP_DATA;

// export const setSignInData = (payload) => {
//   return {
//     type: SET_SIGNIN_DATA,
//     payload,
//   };
// };

// setSignInData.type = SET_SIGNIN_DATA;

// export const setUsersData = (payload) => {
//   return {
//     type: SET_USERS_DATA,
//     payload,
//   };
// };

// setUsersData.type = SET_USERS_DATA;

import { setSignUpData } from "./actions";
import { setSignInData } from "./actions";
import { setUsersData } from "./actions";

const initialState = {
  signUpData: { username: "", password: "", confirmPassword: "" },
  signInData: { username: "", password: "" },
  usersData: {
    id: "",
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    age: 0,
    isAdmin: false,
  },
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case setSignUpData.type:
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          [action.payload.key]: action.payload.value,
        },
      };
    case setSignInData.type:
      return {
        ...state,
        signInData: {
          ...state.signInData,
          [action.payload.key]: action.payload.value,
        },
      };

    case setUsersData.type:
      return {
        ...state,
        usersData: {
          ...state.usersData,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
