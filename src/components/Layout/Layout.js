import { connect } from "react-redux";
import { goToPage } from "../../models/routing/actions";
import { PAGES } from "../../config/config";
import Header from "./Header";
import Meals from "../Meals/Meals";
import Cart from "../Cart/Cart";

function Layout(props) {
  const { page } = props;

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
