import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./../../images/jalapeno.svg";

import "./logged-in.scss";
import "./logged-out.scss";

const Header = (props) => {
  return props.authState === "isLoggedOut" ? (
    <Navbar
      expand="md"
      className="navbar navbar-expand-lg mb-3 navbar-dark logged-out"
      fixed="top"
    >
      <Container fluid className="d-flex justify-content-center">
        <Nav.Link
          href="mailto:contact@eljefeventures.com?subject=Inquiry for El Jefe"
          role="button"
        >
          <span className="navbar-toggler-icon"></span>
        </Nav.Link>
      </Container>
    </Navbar>
  ) : (
    <Navbar
      expand="md"
      className="navbar navbar-expand-lg mb-5 navbar-dark logged-in"
    >
      <Container fluid className="d-flex justify-content-center">
        <Nav.Link href="mailto:contact@eljefeventures.com?subject=Inquiry for El Jefe">
          <img src={logo} className="header-logo" alt="El Jefe" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
