import React from "react";
import { motion } from "framer-motion";
import { pageTransitionDuration } from "./../../animations/animations";
import { Container } from "react-bootstrap";
import Header from "./../../components/Header";
import Dots from "./../../components/Dot";

const Report = () => {
  return (
    <>
      <Header authState="LoggedIn" />
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: pageTransitionDuration }}
        >
          <Dots title="My Report" />
        </motion.div>
      </Container>
    </>
  );
};

export default Report;
