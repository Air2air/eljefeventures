import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./../../images/jalapeno.svg";
import "./logged-in.scss";
import "./logged-out.scss";

const HeaderLoggedIn = () => {
  return (
    <Navbar
      expand="md"
      className="navbar navbar-expand-lg mb-3 navbar-dark logged-in"
    >
      <Container fluid className="d-flex justify-content-center">
        <Nav.Link href="mailto:contact@eljefeventures.com?subject=Inquiry for El Jefe">
          <img src={logo} className="header-logo" alt="El Jefe" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

const HeaderLoggedOut = () => {
  return (
    <Navbar
      expand="md"
      className="navbar navbar-expand-lg mb-3 navbar-dark logged-out"
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
  );
};

export { HeaderLoggedIn, HeaderLoggedOut };
