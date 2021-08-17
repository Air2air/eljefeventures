import React from "react";
import { motion } from "framer-motion";
import { pageTransitionDuration } from "./../../animations/animations";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";

const Performance = () => {
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
        <Chart chartType="line" title="Performance" study="yield" />
        <Chart chartType="bar" title="Allocations" study="yield" />
        </motion.div>
      </Container>
      <Footer />
    </>
  );
};

export default Performance;
