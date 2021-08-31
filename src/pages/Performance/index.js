import React from "react";
import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";
// import ChartLine from "../../components/Chart/Line";
// import ArrowChart from "../../components/Chart/Arrow";

const Performance = () => {
  return (
    <>

      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          {/* <ArrowChart title="My Ranking" />
          <ChartLine title="Performance" portfolio="performance" /> */}
        </motion.div>
      </Container>
    </>
  );
};

export default Performance;
