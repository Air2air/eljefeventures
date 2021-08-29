import React from "react";
import { motion } from "framer-motion";
import { pageTransitionDuration } from "./../../animations/animations";
import { Container } from "@chakra-ui/react";
import Header from "./../../components/Header";
import BubbleChart from "../../components/Chart/Box";
import DotList from "../../components/Chart/DotList";

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
          <BubbleChart title="Allocations" />
          <DotList title="My Report" />
        </motion.div>
      </Container>
    </>
  );
};

export default Report;
