import React from "react";
import { Fade } from "@chakra-ui/react";
import RankHeader from "./RankHeader";

const RankSimple = () => {

  return (
    <>
      <Fade in offsetY="-100px" delay={0.05}>
        <RankHeader
          currentRank={5}
          previousRank={4}
          totalPlaces={21}
          portfolioTotalValue={12345667}
          portfolioTotalBasis={12365656}
          pctGain={0.02}
        />
      </Fade>
 
    </>
  );
};

export default RankSimple;
