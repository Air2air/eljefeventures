import React from "react";
import PortfolioDataService from "../../api/elJefeApi";
import EditFund from "./EditFund";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Stat,
  StatArrow,
  Text,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

const FundRow = (props) => {
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

  const pctGain = (props.fundValue / props.fundBasis) * 10;

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton
            align="center"
            mb={2}
            px={7}
            height="60px"
            bg="gray.300"
            _hover={{ bg: "gray.400" }}
          >
            <Flex w={180} mr={10} justify="start">
              <Flex w="30px" align="center">
                <Stat>
                  {props.fundBasis > props.fundValue ? (
                    <StatArrow type="decrease" />
                  ) : (
                    <StatArrow type="increase" />
                  )}
                </Stat>
              </Flex>
              <Flex w={180} mr={10} align="center" justify="center">
                <Text fontSize="xl">
                  <NumberFormat
                    value={pctGain}
                    displayType={"text"}
                    decimalScale={3}
                    allowNegative={true}
                    prefix={props.fundBasis > props.fundValue ? "- " : "+ "}
                  />
                </Text>
                <Text color="gray.500" px={1}> %</Text>
              </Flex>
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
              <Text fontSize="md" mr={2} color="gray.500">
                Value:
              </Text>
              <NumberFormat
                value={props?.fundValue}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
            </Flex>
            <Flex mr={5}>
              <Text fontSize="lg">{props.fundName}</Text>
            </Flex>
            <Spacer />
            <AccordionIcon fontSize="2em" />
          </AccordionButton>
          <AccordionPanel pb={4}>
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FundRow;
