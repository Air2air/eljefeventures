import React from "react";
import { Grid } from "@chakra-ui/react";
import { CardRank, CardChange, CardStat,CardYield } from "./../../Card";

const RankHeader = (props) => {
  const labelColor = "gray.300";

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" mb={8} gap={6}>
        <CardRank labelColor={labelColor} rank={1} places={21} delay={0} />
        <CardChange labelColor={labelColor} label="portfolio" value={1.2} delay={0.1} />
        <CardStat labelColor={labelColor} label="basis" value={1.2} delay={0.2} />
        <CardYield labelColor={labelColor} label="basis" val={20} prevVal={22} delay={0.3} />
      </Grid>
    </>
  );
};

export default RankHeader;
