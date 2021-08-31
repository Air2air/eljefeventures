import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

const PortfolioStat = (props) => {
  return (
    <StatGroup>
      <Stat>
        <StatLabel>{props?.title}</StatLabel>
        <StatNumber>
          <NumberFormat
            value={props?.portValue}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </StatNumber>
        <StatHelpText>
          {props?.pctGain > 0 ? (
            <StatArrow type="increase" />
          ) : (
            <StatArrow type="decrease" />
          )}
          <NumberFormat
            value={props?.pctGain}
            displayType={"text"}
            thousandSeparator={true}
            suffix={"%"}
          />
          {props.symbol?.toUpperCase()}
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
};

export default PortfolioStat;
