import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css";
import Button from "@mui/material/Button";
import Popup from "./Popup";
import { Grid, Paper, Avatar, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  goToPage,
  totalCartCount,
  clearCart,
} from "../../models/Shopping/shopping-actions";

import { PAGES } from "./../../config/config";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

function Payment(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const dispatch = useDispatch();

  const avatarStyle = { backgroundColor: "#1bbd7e", margin: "14px" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#1bbd7e" };

  const thankYouContainer = {
    margin: "0 auto",
    maxWidth: "500px",
    padding: "0 4em",
  };
  const thankYouBox = {
    background: "#B6FFCD",
    color: "#000",
    padding: "1em 0.5em",
    borderRadius: "5px",
    textAlign: "center",
  };
  const particlesJs = {
    position: "absolute",
    height: "100vh",
    zIndex: "-1",
    width: "100%",
  };

  const onClickReturn = () => {
    dispatch(totalCartCount(0));
    dispatch(clearCart());
    dispatch(goToPage(PAGES.HomePage));
  };

  const handlePaymentButtonClick = () => {
    const login_user = localStorage.getItem("login_user");

    if (!login_user) {
      alert("Please log in before placing a food order.");
    } else {
      setButtonPopup(true);
    }
  };

  return (
    <div className="loginIcon">
      <LoginIcon style={{ color: "white" }} />
      <Button
        onClick={handlePaymentButtonClick}
        className="registerTxt"
        variant="contained"
      >
        <div>
          <div>Αποστολη Παραγγελιας</div>
          <div> ποσο : {props.productPrice}</div>
        </div>
      </Button>
      <form>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <Grid>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <DeliveryDiningIcon fontSize="large" />
              </Avatar>
            </Grid>
            <div style={thankYouContainer}>
              <div style={thankYouBox}>
                <p class="lead">Η παραγγελία σου καταχωρήθηκε επιτυχώς</p>
                <p>
                  Θα παραλάβεις την παραγγελία σου εντός ολίγων λεπτών . Μπορείς
                  να παρακολουθείς την εξελιξη της στο email που δήλωσες κατα
                  την εγγραφή σου.
                </p>
                <p class="signature">♥️ React Meals</p>
                <p>Aris Lazaridis Web Design and Development</p>
              </div>
            </div>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              onClick={onClickReturn}
            >
              Return to home page
            </Button>
          </Grid>
        </Popup>
      </form>
    </div>
  );
}

export default Payment;
