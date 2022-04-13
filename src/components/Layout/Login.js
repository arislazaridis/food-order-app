import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css";
import Button from "@mui/material/Button";
import Popup from "./Popup";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

function Login() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
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
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography>
              {" "}
              Do you have an account ?
              <Link href="#">
                {/* onClick={() => handleChange("event", 1)} */}
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Popup>
    </div>
  );
}

export default Login;
