import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import { DisplayButton } from "./Button";
import { activity } from "../../data/activity";

const LeadersStatSmall = (props) => (
  <Flex
    justify="start"
    align="center"
    h="20px"
    fontSize="1em"
    style={{ borderRadius: 8 }}
  >
    <Text>{props.currPlace}</Text>
    <Flex justify="center" align="center" mx={4}>
      {props.currPlace > props.prevPlace ? (
        <>
          <GoTriangleDown style={{ color: "red", fontSize: ".7em" }} />
          <Text color="red" px={1}>
            {props.prevPlace}
          </Text>
        </>
      ) : (
        <>
          <GoTriangleUp style={{ color: "green", fontSize: ".7em" }} />
          <Text color="green" px={1}>
            {props.prevPlace}
          </Text>
        </>
      )}
    </Flex>
    <Text color="gray.500" w="25%">
      {props.userName}
    </Text>
    <Text color="gray.500" mx={4} isTruncated maxWidth="50%">
      {props.description}
    </Text>
  </Flex>
);

const LeadersStatLarge = (props) => (
  <Flex
    justify="space-between"
    align="center"
    h="80px"
    bg="white"
    px={6}
    fontSize="1.2em"
    style={{ borderRadius: 8 }}
  >
    <Text w="24px">{props.currPlace}</Text>
    <Flex justify="center" align="center" mx={2} w="30px">
      {props.currPlace > props.prevPlace ? (
        <>
          <GoTriangleDown style={{ color: "red", fontSize: ".7em" }} />
          <Text color="red" px={1}>
            {props.prevPlace}
          </Text>
        </>
      ) : (
        <>
          <GoTriangleUp style={{ color: "green", fontSize: ".7em" }} />
          <Text color="green" px={1}>
            {props.prevPlace}
          </Text>
        </>
      )}
    </Flex>
    <Text color="gray.500" w="160px" maxWidth="160px" isTruncated>
      {props.userName}
    </Text>
    <Text color="gray.500" maxWidth="200px"isTruncated >
      {props.description}
    </Text>
    <FaChevronRight />
  </Flex>
);

export const DisplayLeadersSmall = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        h="60%"
        mt={5}
        justifyContent="space-between"
        isTruncated
      >
        <LeadersStatSmall
          currPlace={1}
          prevPlace={4}
          userName="Soldotna"
          description="Reduced Tech to 10%.  Added positions in commodities"
        />
        <LeadersStatSmall
          currPlace={2}
          prevPlace={1}
          userName="Air2air"
          description="Added 12% UBS to portfolio from Vanguard. "
        />
        <LeadersStatSmall
          currPlace={3}
          prevPlace={1}
          userName="Chataqua7"
          description="Added rare earth minerals to portfolio, reducing exposure to Chinese inflation"
        />
        <LeadersStatSmall
          currPlace={4}
          prevPlace={7}
          userName="DefinanceBlock"
          description="Exited positions in homebuilders and mortgage"
        />
      </Flex>
    </>
  );
};

export const DisplayLeadersLarge = () => {
  return (
    <>
      <Flex flexDirection="column" h="85%" justifyContent="space-between">
        <LeadersStatLarge
          currPlace={1}
          prevPlace={4}
          userName="Soldotna"
          description="Reduced Tech to 10%.  Added positions in commodities"
        />
        <LeadersStatLarge
          currPlace={2}
          prevPlace={1}
          userName="Air2air"
          description="Added 12% UBS to portfolio from Vanguard. "
        />
        <LeadersStatLarge
          currPlace={3}
          prevPlace={1}
          userName="Chataqua7"
          description="Added rare earth minerals to portfolio, reducing exposure to Chinese inflation"
        />
        <LeadersStatLarge
          currPlace={4}
          prevPlace={7}
          userName="DefinanceBlock"
          description="Exited positions in homebuilders and mortgage"
        />
        <LeadersStatLarge
          currPlace={5}
          prevPlace={4}
          userName="ArmchairGeneral"
          description="Reduced exposure within the insurance sector"
        />
        <LeadersStatLarge
          currPlace={6}
          prevPlace={13}
          userName="LaterAlligator"
          description="What this guy did recently"
        />
      </Flex>
    </>
  );
};
