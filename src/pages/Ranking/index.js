import React from "react";
import { motion } from "framer-motion";
import { pageTransitionDuration } from "./../../animations/animations";
import { Container } from "react-bootstrap";
import Header from "./../../components/Header";
import DotChart from "./../../components/DotChart";

const Ranking = () => {
  return (
    <>
      <Header authState="LoggedIn" />
      <Container>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: pageTransitionDuration }}
        >
          <DotChart title="My Ranking" />
        </motion.div>
      </Container>
    </>
  );
};

export default Ranking;
