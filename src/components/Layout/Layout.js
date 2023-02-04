import { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { goToPage } from "../../models/routing/actions";
import { PAGES } from "../../config/config";
import Header from "./Header";
import Meals from "../Meals/Meals";
import Cart from "../Cart/Cart";
import Payment from "./Payment";

function Layout(props) {
  const { page, goToPage, setUsersData } = props;

  return (
    <>
      {page === PAGES.HomePage ? (
        <>
          <Header />
          <Meals />
        </>
      ) : page === PAGES.CartPage ? (
        <>
          <Header />
          <Cart />
        </>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    page: state.shop.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    goToPage: (payload) => dispatch(goToPage(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
