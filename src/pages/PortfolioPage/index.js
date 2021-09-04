import React from "react";
import { Heading, Container } from "@chakra-ui/react";
import Portfolio from "../../components/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Heading my={4} size="md">
          My Portfolio
        </Heading>
        <Portfolio />
      </Container>
    </>
  );
};

export default PortfolioPage;
