import React from "react";
import { Container } from "@chakra-ui/react";
import Breadcrumb from "../../components/Breadcrumb";
import Portfolio from "../../components/Portfolio";

const PortfolioPage = () => {
  const parentLink = "/portfolio";
  const parentName = "";
  const pageName = "My Portfolio";
  return (
    <>
      <Container maxW="container.lg">
        <Breadcrumb
          parentLink={parentLink}
          parentName={parentName}
          activeName={pageName}
        />
        <Portfolio />
      </Container>
    </>
  );
};

export default PortfolioPage;
