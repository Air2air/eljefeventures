import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import logo from "./../../images/jalapeno.svg";
import "./styles.scss";

const Header = (props) => {
  return props.authState === "LoggedIn" ? ( // Private for the prototypes
      <Container
        fluid
        className="d-flex justify-content-around align-items-center"
      >
        <Link as={Link} to="/">
          <img src={logo} className="header-logo" alt="El Jefe" />
        </Link>
        <Link as={Link} to="/ranking" role="button">
          Ranking
        </Link>
        <Link as={Link} to="/report" role="button">
          Report
        </Link>
        <Link as={Link} to="/performance" role="button">
          Performance
        </Link>
        <Link as={Link} to="/portfolios" role="button">
          Portfolios
        </Link>
      </Container>
  ) : (
    // Public for the Homepage
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        {/* <Link as={Link} to="mailto:contact@eljefeventures.com?subject=Inquiry for El Jefe">
          <img src={logo} className="header-logo" alt="El Jefe" />
        </Link> */}
      </Container>
  );
};

export default Header;
