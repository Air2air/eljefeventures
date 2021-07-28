import React from "react";
import logo from "./../../images/jalapeno.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer mt-5 d-flex align-items-center justify-content-center">
      <img src={logo} className="footer-logo" alt="El Jefe" />
    </div>
  );
};

export default Footer;
