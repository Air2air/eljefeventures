import React from "react";
import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";
// import DotChart from "../../components/Chart/Dot";

const Ranking = () => {
  return (
    <>
      <Container>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          {/* <DotChart fundName="My Ranking" /> */}
        </motion.div>
      </Container>
    </>
  );
};

export default Ranking;
