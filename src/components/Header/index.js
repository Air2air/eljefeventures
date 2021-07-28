import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import { proxy, subscribeKey } from "valtio/utils";
// import logo from "./../../images/jalapeno.svg";
import "./logged-in.scss";
import "./logged-out.scss";

const Header = (props) => {
return (
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
    </Navbar>)
 
};

export default Header;
