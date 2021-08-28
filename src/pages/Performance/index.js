import React from "react";
import { motion } from "framer-motion";
import { pageTransitionDuration } from "./../../animations/animations";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChartLine from "../../components/Chart/Line";
import ArrowChart from "../../components/Chart/Arrow";

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
          <ArrowChart title="My Ranking" />
          <ChartLine title="Performance" portfolio="performance" />
        </motion.div>
      </Container>
      <Footer />
    </>
  );
};

export default Performance;
