import React from "react";
import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";
// import BubbleChart from "../../components/Chart/Box";
// import DotList from "../../components/Chart/DotList";

const Report = () => {
  return (
    <>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          {/* <BubbleChart title="Allocations" />
          <DotList title="My Report" /> */}
        </motion.div>
      </Container>
    </>
  );
};

export default Report;
