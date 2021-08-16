import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./../../images/jalapeno.svg";
import "./styles.scss";

const Header = (props) => {
  return props.authState === "LoggedIn" ? ( // Private for the prototypes
    <Navbar
      expand="md"
      className="navbar navbar-expand-lg mb-3 navbar-dark"
    >
      <Container
        fluid
        className="d-flex justify-content-around align-items-center"
      >
        <Nav.Link href="/">
          <img src={logo} className="header-logo" alt="El Jefe" />
        </Nav.Link>
        <Nav.Link href="/ranking" role="button">
          Ranking
        </Nav.Link>
        <Nav.Link href="/report" role="button">
          Report
        </Nav.Link>
        <Nav.Link href="/performance" role="button">
          Performance
        </Nav.Link>
      </Container>
    </Navbar>
  ) : (
    // Public for the Homepage
    <Navbar
      expand="md"
      className="navbar navbar-expand-lg mb-5"
      fixed="top"
    >
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        {/* <Nav.Link href="mailto:contact@eljefeventures.com?subject=Inquiry for El Jefe">
          <img src={logo} className="header-logo" alt="El Jefe" />
        </Nav.Link> */}
        <Nav.Link href="/">
          <img src={logo} className="header-logo" alt="El Jefe" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
