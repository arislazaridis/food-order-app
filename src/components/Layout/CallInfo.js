import React from "react";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import "./CallInfo.css";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

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
        <a href="tel:+12102911951" style={dropdownLinkStyle}>
          <CallIcon />
          210-2911951
        </a>
        <a href="mailto:arislazaridis@yahoo.com" style={dropdownLinkStyle}>
          <EmailIcon />
          arislazaridis@yahoo.com
        </a>
        <span style={dropdownLinkStyle}>
          <LocationOnIcon />
          ΙΕΡΑ ΟΔΟΣ 313
        </span>
        <div className="work-hours">
          <p>Ώρες Εξυπηρέρησης</p>
          <div className="watchIcon">
            <WatchLaterIcon />
            <p>12:00 - 00:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallInfo;
