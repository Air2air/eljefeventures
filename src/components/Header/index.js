import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import { motion } from "framer-motion";
// import logo from "./../../images/jalapeno.svg";
// import logoBlack from "./../../images/jalapeno-black.svg";
import "./styles.scss";

const Header = () => {
  // const pepperMotion = {
  //   rest: { opacity: 1, scale: 1 },
  //   hover: {
  //     scale: 1.2,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  // const shadowMotion = {
  //   rest: { scale: 1 },
  //   hover: {
  //     scale: 0.6,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };
  // const pepperHeader = {
  //   return (
  //     <Navbar
  //       expand="md"
  //       className="navbar navbar-expand-lg mb-5 navbar-dark navbar-fixed"
  //       fixed="top"
  //     >
  //       <Container fluid className="d-flex justify-content-center">
  //         <Nav.Link
  //           href="mailto:contact@eljefeventures.com?subject=Inquiry for El Jefe"
  //           role="button"
  //         >
  //           <motion.div
  //             className="blur-box"
  //             initial="rest"
  //             whileHover="hover"
  //             animate="rest"
  //           >
  //             <motion.div variants={shadowMotion} className="header-logo-blur">
  //               <img src={logoBlack} alt="El Jefe" />
  //             </motion.div>
  //             <motion.div variants={pepperMotion} className="header-logo">
  //               <img src={logo} alt="El Jefe" />
  //             </motion.div>
  //           </motion.div>
  //         </Nav.Link>
  //       </Container>
  //     </Navbar>
  //   );
  // };

  return (
    <Navbar
      expand="md"
      className="navbar navbar-expand-lg mb-5 navbar-dark navbar-fixed"
      fixed="top"
    >
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
