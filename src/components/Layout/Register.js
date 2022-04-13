import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./Register.css";
import Button from "@mui/material/Button";

function Register() {
  return (
    <div className="registerIcon">
      <HowToRegIcon />
      <Button className="registerTxt" variant="contained">
        Register
      </Button>
    </div>
  );
}

export default Register;
