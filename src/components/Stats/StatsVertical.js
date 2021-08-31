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

const StatsVertical = (props) => {

  const pctGain = props.portBasis / props.portValue;

  return (
    <StatGroup>
      <Stat>
        <StatLabel>{props?.portName}</StatLabel>
        <StatNumber>
          <NumberFormat
            value={props?.portValue}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </StatNumber>
        <StatHelpText>
          {pctGain > 0 ? (
            <StatArrow type="increase" />
          ) : (
            <StatArrow type="decrease" />
          )}
          <NumberFormat
            value={pctGain}
            displayType={"text"}
            thousandSeparator={true}
            suffix={"%"}
          />
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
};

export default StatsVertical;
