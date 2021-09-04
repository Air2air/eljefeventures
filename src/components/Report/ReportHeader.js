import React from "react";
import {
  Center,
  Collapse,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { FaChevronDown } from "react-icons/fa";

const ReportHeader = (props) => {
  const pctGain =
    ((props.portfolioTotalValue - props.portfolioTotalBasis) /
      props.portfolioTotalValue) *
    100;

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex onClick={onToggle} direction="column">
        <Flex h="80px" mb={3} px={5} align="center" _hover={{ bg: "gray.200" }}>
          
          <Flex w={130} mr={10} align="center" justify="start">
            <Text fontSize="3xl">
              #{props.currentRank}/{props.totalPlaces}
            </Text>
          </Flex>

          <Flex w={170} px={3} mr={5} align="center">
            <Text fontSize="sm" mr={2} color="gray.500">
              CHANGE:
            </Text>
            <Text fontSize="3xl">
            {props.previousRank - props.currentRank}
            </Text>
          </Flex>

          <Flex w={170} px={3} mr={5} align="center">
            <Text fontSize="sm" mr={2} color="gray.500">
              VALUE:
            </Text>
            <NumberFormat
              value={props?.portfolioTotalValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </Flex>

          <Flex px={3} align="center">
            <Text fontSize="sm" mr={2} color="gray.500">
              BASIS:
            </Text>
            <NumberFormat
              value={props?.portfolioTotalBasis}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </Flex>

          <Spacer />
          <FaChevronDown />

        </Flex>

        <Collapse in={isOpen}>
          <Center h="200px" p={3} pt={0}>
            Stats about my ranking
          </Center>
        </Collapse>
      </Flex>
    </>
  );
};

export default ReportHeader;
