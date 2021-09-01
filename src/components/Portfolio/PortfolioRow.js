import React from "react";
import PortfolioDataService from "../../api/elJefeApi";
import EditPortfolio from "./EditPortfolio";
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
            <Flex w={160} mr={5}>
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
                <EditPortfolio
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

export default PortfolioRow;
