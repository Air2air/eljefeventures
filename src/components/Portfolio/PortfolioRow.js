import React from "react";
import PortfolioDataService from "./../../api/apiService";
import EditPortfolio from "./EditPortfolio";
import {
  Button,
  ButtonGroup,
  Flex,
  Stat,
  StatArrow,
  Text,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

const PortfolioRow = (props) => {
  // const refreshList = () => {
  //   retrievePortfolios();
  //   setCurrentPortfolio(null);
  //   setCurrentIndex(-1);
  // };

  const deletePortfolio = () => {
    PortfolioDataService.remove(props.id)
      .then((response) => {
        console.log(response.data);
        //refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const pctGain = (props.portValue / props.portBasis) * 10;

  return (
    <>
      <Flex
        align="center"
        mb={2}
        px={7}
        height="60px"
        bg="gray.300"
        _hover={{ bg: "gray.200" }}
        _focus={{ bg: "gray.400" }}
      >
        <Flex w={120} mr={10} justify="start">
          <Stat w="20px">
            {props.portBasis > props.portValue ? (
              <StatArrow type="decrease" />
            ) : (
              <StatArrow type="increase" />
            )}
          </Stat>
          <Text fontSize="xl">
            <NumberFormat
              value={pctGain}
              displayType={"text"}
              decimalScale={3}
              suffix={"%"}
              allowNegative={true}
              prefix={props.portBasis > props.portValue ? "- " : "+ "}
            />
          </Text>
        </Flex>
        <Flex w={160} mr={5}>
          <Text fontSize="md" mr={2} color="gray.500">
            {props.portBasis > props.portValue ? "Loss:" : "Gain:"}
          </Text>
          <NumberFormat
            value={props?.portValue - props?.portBasis}
            displayType={"text"}
            thousandSeparator={true}
            prefix={props.portBasis > props.portValue ? "$" : "+$"}
          />
        </Flex>
        <Flex w={160} mr={5}>
          <Text fontSize="md" mr={2} color="gray.500">
            Value:
          </Text>
          <NumberFormat
            value={props?.portValue}
            displayType={"text"}
            thousandSeparator={true}
            prefix="$"
          />
        </Flex>
        <Flex w={160} mr={5}>
          <Text fontSize="lg">{props.portName}</Text>
        </Flex>
        <Flex w={180} mr={5}>
          <ButtonGroup spacing="6">
            <Button colorScheme="red" onClick={deletePortfolio}>
              Delete
            </Button>
            <EditPortfolio
              id={props?.id}
              portName={props?.portName}
              portValue={props?.portValue}
              portBasis={props?.portBasis}
              startDate={props?.startDate}
              endDate={props?.endDate}
            />
          </ButtonGroup>
        </Flex>
      </Flex>
    </>
  );
};

export default PortfolioRow;
