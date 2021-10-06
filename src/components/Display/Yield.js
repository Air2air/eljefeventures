import { Flex, Text } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { DisplayButton } from "./Button";

const YieldStat = ({ currVal, prevVal }) => (
  <Flex justify="center" align="center" fontSize="4em">
    {currVal > prevVal ? (
      <>
        <GoTriangleDown style={{ color: "red", fontSize: ".5em" }} />
        <Text color="green">
          <NumberFormat
            value={currVal}
            displayType={"text"}
            decimalScale={2}
            allowNegative={true}
          />
        </Text>
      </>
    ) : (
      <>
        <GoTriangleUp style={{ color: "green", fontSize: ".5em" }} />
        <Text color="green">
          <NumberFormat
            value={currVal}
            displayType={"text"}
            decimalScale={2}
            allowNegative={true}
          />
        </Text>
      </>
    )}

    <Text fontSize="4xl" color="gray.500" px={1}>
      %
    </Text>
  </Flex>
);

export const DisplayYieldSmall = (props) => {
  // currVal, prevVal
  return (
    <>
      <YieldStat currVal={props.currVal} prevVal={props.prevVal} />
    </>
  );
};

export const DisplayYieldLarge = (props) => {
  // currVal, prevVal
  return (
    <>
      <YieldStat currVal={props.currVal} prevVal={props.prevVal} />
      <DisplayButton count={6} influence="me" />
      <DisplayButton count={4} influence="external" />
    </>
  );
};
