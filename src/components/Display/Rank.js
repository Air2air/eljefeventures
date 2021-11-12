
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { DisplayButton } from "./Button";

const RankStat = ({ currVal, prevVal, places }) => (
  <Flex justify="center" align="center" fontSize="4em">
    <Flex justify="center" align="center">
      {currVal > prevVal ? (
        <>
          <GoTriangleDown style={{ color: "red", fontSize: ".5em" }} />
          <Text color="red" fontSize={[".7em", ".8em", ".9em"]}>
            {currVal - prevVal}{" "}
          </Text>
        </>
      ) : (
        <>
          <GoTriangleUp style={{ color: "green", fontSize: ".5em" }} />
          <Text color="green" fontSize={[".7em", ".8em", ".9em"]}>
            {currVal - prevVal}{" "}
          </Text>
        </>
      )}
    </Flex>

    <Text
      px={["2", "2", "4"]}
      fontSize={[".5em", ".6em", ".7em"]}
      color="gray.500"
    >
      to
    </Text>
    <Text px={1} color="gray.500" fontSize=".6em">
      #
    </Text>
    <Text fontSize={[".7em", ".8em", ".9em"]}>{currVal} </Text>
    <Text color="gray.500" fontSize={["20px", ".7em", ".7em"]}>
      /
    </Text>
    <Text color="gray.500" fontSize={[".7em", ".8em", ".9em"]}>
      {places}
    </Text>
  </Flex>
);

export const DisplayRankSmall = (props) => {
  return (
    <>
      <RankStat
        currVal={props.currVal}
        prevVal={props.prevVal}
        places={props.places}
      />
    </>
  );
};

export const DisplayRankLarge = (props) => {
  return (
    <>
      <RankStat
        currVal={props.currVal}
        prevVal={props.prevVal}
        places={props.places}
      />
      <DisplayButton count={0} influence="me" />
      <DisplayButton count={2} influence="others" />
      <DisplayButton count={4} influence="external" />
    </>
  );
};
