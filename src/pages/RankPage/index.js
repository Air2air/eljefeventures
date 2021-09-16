import React from "react";
import { Container } from "@chakra-ui/react";
import Breadcrumb from "../../components/Breadcrumb";
import RankSimple from "../../components/Rank/Simple";

const RankPage = () => {
  
  const parentLink = "/rank";
  const parentName = "";
  const pageName = "My Ranking";

  return (
    <>
      <Container maxW="container.lg">
        <Breadcrumb
          parentLink={parentLink}
          parentName={parentName}
          activeName={pageName}
        />
        <RankSimple />
      </Container>
    </>
  );
};

export default RankPage;
