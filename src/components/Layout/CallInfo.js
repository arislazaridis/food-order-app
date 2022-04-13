import React from "react";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import "./CallInfo.css";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function CallInfo() {
  const dropdownLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  return (
    <div className="dropdown">
      <Button className="dropbtn">
        <AddIcCallIcon />
      </Button>
      <div className="dropdown-content">
        <a href="#" style={dropdownLinkStyle}>
          <CallIcon />
          210-2911951
        </a>
        <a href="#" style={dropdownLinkStyle}>
          <EmailIcon />
          arislazaridis@yahoo.com
        </a>
        <a href="#" style={dropdownLinkStyle}>
          <LocationOnIcon />
          ΙΕΡΑ ΟΔΟΣ 313
        </a>
      </div>
    </div>
  );
}

export default CallInfo;
