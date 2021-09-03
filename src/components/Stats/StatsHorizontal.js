import React from "react";
import ElJefeAPI from "../../api/elJefeApi";
import EditFund from "../Portfolio/FundEdit";
import {
  Button,
  ButtonGroup,
  Flex,
  Stat,
  StatArrow,
  Text,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

const StatsHorizontal = (props) => {
  // const refreshList = () => {
  //   retrievePortfolios();
  //   setCurrentPortfolio(null);
  //   setCurrentIndex(-1);
  // };

  const deletePortfolio = () => {
    ElJefeAPI.remove(props.id)
      .then((response) => {
        console.log(response.data);
        //refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const pctGain = props.fundBasis / props.fundValue;

  return (
    <>
      <Flex w={120} mr={10} justify="start">
        <Stat w="20px">
          {props.fundBasis > props.fundValue ? (
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
            prefix={props.fundBasis > props.fundValue ? "- " : "+ "}
          />
        </Text>
      </Flex>
      <Flex w={160} mr={5}>
        <Text fontSize="md" mr={2} color="gray.500">
          {props.fundBasis > props.fundValue ? "Loss:" : "Gain:"}
        </Text>
        <NumberFormat
          value={props?.fundValue - props?.fundBasis}
          displayType={"text"}
          thousandSeparator={true}
          prefix={props.fundBasis > props.fundValue ? "$" : "+$"}
        />
      </Flex>
      <Flex w={160} mr={5}>
        <Text fontSize="lg">{props.fundName}</Text>
      </Flex>
      <Flex w={180} mr={5}>
        <ButtonGroup spacing="6">
          <Button colorScheme="red" onClick={deletePortfolio}>
            Delete
          </Button>
          <EditFund
            id={props?.id}
            fundName={props?.fundName}
            fundValue={props?.fundValue}
            fundBasis={props?.fundBasis}
            fundStart={props?.fundStart}
            fundEnd={props?.fundEnd}
          />
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default StatsHorizontal;
