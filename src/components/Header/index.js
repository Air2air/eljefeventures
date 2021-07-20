import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./styles.scss";

const Header = () => {
  return (
    <Navbar expand="md" className="navbar navbar-expand-lg mb-5 navbar-dark navbar-fixed" fixed>
      <Container fluid className="d-flex justify-content-center">
        <Nav.Link
          href="mailto:contact@eljefeventures.com?subject=Inquiry for El Jefe"
          role="button"
        >
          <span class="navbar-toggler-icon"></span>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
