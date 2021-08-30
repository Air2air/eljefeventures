import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

const PortfolioStat = (props) => {
  return (
    <StatGroup>
      <Stat>
        <StatLabel>{props?.title}</StatLabel>
        <StatNumber>{props?.portValue}</StatNumber>
        <StatHelpText>
          {props?.pctGain > 0 ? (
            <StatArrow type="increase" />
          ) : (
            <StatArrow type="decrease" />
          )}
          {props?.pctGain} {props.symbol?.toUpperCase()}
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
};

export default PortfolioStat;
