import React from "react";
import {
  Heading,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Report from "../../components/Report";

const ReportPage = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Heading my={4} size="md">
          My Ranking
        </Heading>
        <Report />
      </Container>
    </>
  );
};

export default ReportPage;
