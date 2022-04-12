import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css";

function Login() {
  return (
    <div className="loginIcon">
      <LoginIcon style={{ color: "white" }} />
      <p className="loginTxt">Login</p>
    </div>
  );
}

export default Login;
