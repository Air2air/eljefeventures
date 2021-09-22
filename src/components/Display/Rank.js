import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { DisplayButton } from "./Button";
import { activity } from "../../data/activity";

const RankStat = ({ currVal, prevVal, places }) => (
  <Flex justify="center" align="center" fontSize="4.5em">
    <Flex justify="center" align="center">
      {currVal > prevVal ? (
        <>
          <GoTriangleDown style={{ color: "red", fontSize: ".5em" }} />
          <Text color="red">{currVal - prevVal} </Text>
        </>
      ) : (
        <>
          <GoTriangleUp style={{ color: "green", fontSize: ".5em" }} />
          <Text color="green">{currVal - prevVal} </Text>
        </>
      )}
    </Flex>

    <Text px={3} fontSize=".6em" color="gray.500">
      to
    </Text>
    <Text fontSize=".6em">#</Text>
    <Text>{currVal} </Text>
    <Text color="gray.500">/</Text>
    <Text color="gray.500">{places}</Text>
  </Flex>
);

export const DisplayRankSmall = (props) => {
  return (
    <>
      <Flex flexDirection="column" h="100%" justifyContent="space-between">
        <RankStat
          currVal={props.currVal}
          prevVal={props.prevVal}
          places={props.places}
        />
      </Flex>
    </>
  );
};

export const DisplayRankLarge = (props) => {
  return (
    <>
      <Flex flexDirection="column" h="100%" justifyContent="space-around">
        <RankStat
          currVal={props.currVal}
          prevVal={props.prevVal}
          places={props.places}
        />
        <DisplayButton count={0} influence="me" />
        <DisplayButton count={2} influence="others" />
        <DisplayButton count={4} influence="external" />
      </Flex>
    </>
  );
};
