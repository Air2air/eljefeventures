
import React from "react";
import LogoImage from "./../../images/jalapeno.svg";
import currentDate from "./../../utilities/date";
import "./styles.scss";

const Header = () => (
  <div height="90px" position="relative" justifyContent="space-between">
    <div>
      <span className="date">{currentDate()}</span>
      <h1>Today</h1>
    </div>
    <div className="logo">
      <img src={LogoImage} alt="El Jefe" style={{ width: 30 }} />
    </div>
  </div>
);

export default Header;
