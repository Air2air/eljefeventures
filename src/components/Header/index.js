import React from "react";
import { Nav, Navbar, Container, NavbarBrand } from "react-bootstrap";
import logo from "./../../images/jalapeno.svg";
import "./logged-in.scss";
import "./logged-out.scss";

const Header = (props) => {
  const HeaderLoggedIn = () => (
    <Navbar
      expand="md"
      className="navbar navbar-expand-lg mb-5 navbar-dark navbar-fixed logged-in"
      fixed="top"
    >
      <Container fluid className="d-flex justify-content-between">

        <NavbarBrand>
          <img src={logo} className="header-logo" alt="El Jefe" />
        </NavbarBrand>

        <Nav.Link
          href="mailto:contact@eljefeventures.com?subject=Inquiry for El Jefe"
          role="button"
        >
          button
        </Nav.Link>

        <Nav.Link
          href="mailto:contact@eljefeventures.com?subject=Inquiry for El Jefe"
          role="button"
        >
          Log out
        </Nav.Link>
      </Container>
    </Navbar>
  );

  const HeaderLoggedOut = () => (
    <Navbar
      expand="md"
      className="navbar navbar-expand-lg mb-5 navbar-dark navbar-fixed logged-out"
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
  );

  return (
    <div>{props.isLoggedin ? <HeaderLoggedIn /> : <HeaderLoggedOut />}</div>
  );
};

export default Header;
