import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .5 }}
      >
        <Container>
          <h1>Mission stuff here.</h1>
          <p>
            <Button href="#portfolio"> See Portfolio</Button>
          </p>
        </Container>
      </motion.div>
    </>
  );
};

export default Mission;
