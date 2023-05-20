import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css";
import Button from "@mui/material/Button";
import Popup from "./Popup";
import { Grid, Paper, Avatar, TextField, Dialog } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { connect } from "react-redux";
import { setSignInData } from "./../../models/sign-forms/actions";
import axios from "axios";
import { API_URL, PAGES } from "./../../config/config";
import { goToPage } from "./../../models/routing/actions";
import { setUsersData } from "./../../models/sign-forms/actions";

const initialErrorStatus = {
  noUser: "",
};

const initialSuccessStatus = {
  user: "",
};

const Login = (props) => {
  const { username, password, setSignInData, goToPage, setUsersData } = props;

  const [errors, setErrors] = useState(initialErrorStatus);
  const [success, setSuccess] = useState(initialSuccessStatus);
  const [openDialog, setOpenDialog] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleOnChange = (key, value) => {
    setSignInData({ key, value });
  };

  const getData = async (username, password) => {
    try {
      const response = await axios.get(API_URL, {
        params: { username: username, password: password },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors(initialErrorStatus);

    const userResponse = await getData(username, password);

    if (userResponse.length === 0) {
      setErrors((state) => ({
        ...state,
        noUser: "Wrong username/password",
      }));
      goToPage(PAGES.LogInSignUpPage);
    } else {
      localStorage.setItem(
        `login_user`,
        JSON.stringify({
          username: userResponse[0].username,
          password: userResponse[0].password,
        })
      );
      setUsersData({
        username: username,
        password: password,
        fullName: userResponse[0].fullName,
        age: userResponse[0].age,
        isAdmin: userResponse[0].isAdmin,
        id: userResponse[0].id,
      });

      // Open the success dialog
      setOpenDialog(true);
    }
  };

  const paperStyle = {
    padding: 20,
    height: "55vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const marginTop = { marginTop: 24 };

  return (
    <div className="loginIcon">
      <LoginIcon style={{ color: "white" }} />
      <Button
        onClick={() => setButtonPopup(true)}
        className="registerTxt"
        variant="contained"
      >
        Login
      </Button>
      <form onSubmit={handleSubmit}>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <Grid>
            <Paper style={paperStyle}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Sign In</h2>
              </Grid>
              <TextField
                label="Username"
                placeholder="Enter username"
                style={marginTop}
                fullWidth
                required
                value={username}
                onChange={(e) => handleOnChange("username", e.target.value)}
              />
              <TextField
                label="Password"
                placeholder="Enter password"
                style={marginTop}
                type="password"
                value={password}
                onChange={(e) => handleOnChange("password", e.target.value)}
                fullWidth
                required
              />
              {errors.noUser ? (
                <div style={{ color: "red" }}>{`${errors.noUser}`}</div>
              ) : null}
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={marginTop}
                fullWidth
              >
                Sign in
              </Button>
            </Paper>
          </Grid>
        </Popup>
      </form>

      {/* Success Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <div style={{ padding: 20 }}>
          <h2>Success</h2>
          <p>{`Login successful, welcome ${username}!`}</p>
        </div>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.signForms.signInData.username,
    password: state.signForms.signInData.password,
    fullName: state.signForms.usersData.fullName,
    isAdmin: state.signForms.usersData.isAdmin,
    age: state.signForms.usersData.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    setSignInData: (payload) => dispatch(setSignInData(payload)),
    setUsersData: (payload) => dispatch(setUsersData(payload)),
    goToPage: (payload) => dispatch(goToPage(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
