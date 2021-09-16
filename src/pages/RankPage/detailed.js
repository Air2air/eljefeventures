import React from "react";
import { Container } from "@chakra-ui/react";
import Breadcrumb from "../../components/Breadcrumb";
import RankDetailed from "../../components/Rank/Detailed";

const RankPageDetailed = () => {

  const parentLink = "/rank";
  const parentName = "My Ranking";
  const pageName = "Detailed";
  
  return (
    <>
      <Container maxW="container.lg">
        <Breadcrumb
          parentLink={parentLink}
          parentName={parentName}
          activeName={pageName}
        />
        <RankDetailed />
      </Container>
    </>
  );
};

export default RankPageDetailed;
