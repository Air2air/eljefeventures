import React from "react";
import { Container } from "@chakra-ui/react";
import Portfolio from "../../components/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Portfolio />
      </Container>
    </>
  );
};

export default PortfolioPage;
