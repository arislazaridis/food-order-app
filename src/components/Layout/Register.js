import React from "react";
import axios from "axios";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./Register.css";
import Button from "@mui/material/Button";
import { Grid, Paper, Avatar, Typography, TextField } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { connect } from "react-redux";
import { API_URL, PAGES } from "./../../config/config";
import { goToPage } from "../../models/routing/actions";
import Popup from "./Popup";
import { useState } from "react";
import { setSignUpData } from "../../models/sign-forms/actions";
import { setUsersData } from "../../models/sign-forms/actions";
import { useDispatch } from "react-redux";

//Initial State
const initialErrorStatus = {
  short: "",
  mismatch: "",
  existUser: "",
  notNum: "",
  somethingWentWrong: "",
};

const reg = /[a-zA-Z]/;

const paperStyle = {
  padding: 20,
  height: "55vh",
  width: 300,
  margin: "0 auto",
};
const headerStyle = { margin: 0 };
const avatarStyle = { backgroundColor: "#1bbd7e" };
const marginTop = { marginTop: 24 };

const Register = (props) => {
  const {
    username,
    password,
    confirmPassword,
    setSignUpData,
    goToPage,
    setUsersData,
  } = props;

  const dispatch = useDispatch();

  const [errors, setErrors] = useState(initialErrorStatus);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleOnChange = (key, value) => {
    dispatch(setSignUpData({ key, value }));
  };

  const validateFields = async () => {
    setErrors(initialErrorStatus);

    if (!reg.test(username)) {
      setErrors((state) => ({
        ...state,
        notNum: "Password must contain at least 1 letter",
      }));
      return false;
    }

    if (password && password.length < 5) {
      setErrors((state) => ({
        ...state,
        short: "Password must contain at least 6 characters",
      }));
      return false;
    }

    if (confirmPassword && confirmPassword !== password) {
      setErrors((state) => ({ ...state, mismatch: "Passwords don't match" }));
      return false;
    }

    const user = await getData(username);

    if (user.length !== 0) {
      setErrors((state) => ({
        ...state,
        existUser: "Username already exists",
      }));

      return false;
    }

    return true;
  };

  const getData = async (username) => {
    try {
      const response = await axios.get(API_URL, {
        params: { username: username },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const postData = (username, password) => {
    let data = {
      username: username,
      password: password,
      fullName: "",
      age: 0,
      isAdmin: false,
    };

    const headers = { "Content-Type": "application/json" };

    axios
      .post(API_URL, data, { headers })
      .then((res) => {
        localStorage.setItem(
          `login_user`,
          JSON.stringify({
            username: res.data.username,
            password: res.data.password,
          })
        );

        setUsersData({
          id: res.data.id,
          username: res.data.username,
          password: res.data.password,
          confirmPassword: res.data.confirmPassword,
          fullName: res.data.fullName,
          age: res.data.age,
          isAdmin: res.data.isAdmin,
        });

        goToPage(PAGES.UserDataPage);
      })
      .catch((err) =>
        setErrors((state) => ({
          ...state,
          somethingWentWrong: "Something Went Wrong. Try again.",
        }))
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateFields();

    if (isValid) {
      postData(username, password);
    }
  };

  return (
    <div className="registerIcon">
      <HowToRegIcon />
      <Button
        onClick={() => setButtonPopup(true)}
        className="registerTxt"
        variant="contained"
      >
        Register
      </Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Grid>
          <Paper style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlinedIcon />
              </Avatar>
              <h2 style={headerStyle}>Sign Up</h2>
              <Typography style={marginTop} variant="caption" gutterBottom>
                Please fill this form to create an account !
              </Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                placeholder="Enter your name"
                style={marginTop}
                value={username}
                required
                onChange={(e) => handleOnChange("username", e.target.value)}
              />
              {errors.notNum ? (
                <div className="form-error">{`${errors.notNum}`}</div>
              ) : null}
              <TextField
                fullWidth
                label="Password"
                placeholder="Enter your password"
                style={marginTop}
                value={password}
                required
                onChange={(e) => handleOnChange("password", e.target.value)}
                type="password"
              />
              {errors.short ? (
                <div className="form-error">{`${errors.short}`}</div>
              ) : null}
              <TextField
                fullWidth
                label="Confirm Password"
                placeholder="Confirm your password"
                onChange={(e) =>
                  handleOnChange("confirmPassword", e.target.value)
                }
                value={confirmPassword}
                required
                style={marginTop}
              />
              {errors.mismatch ? (
                <div className="form-error">{`${errors.mismatch}`}</div>
              ) : null}
              {errors.existUser ? (
                <div className="form-error">{`${errors.existUser}`}</div>
              ) : null}
              <Button
                style={marginTop}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign up
              </Button>
            </form>
          </Paper>
        </Grid>
      </Popup>
    </div>
  );
};

export default Register;
