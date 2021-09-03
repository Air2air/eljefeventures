import React, { useState } from "react";
import EditFund from "./EditFund";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Flex,
  Spacer,
  Stat,
  StatArrow,
  Text,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

const FundRow = (props) => {
 const handleToggle = () => setShow(!show);
  const [show, setShow] = useState(false);

  const pctGain = (props.fundValue / props.fundBasis) * 10;

  return (
    <>
      <Accordion
        allowToggle
        mb={2}
        bg="gray.300"
        _hover={{ bg: "gray.350" }}
        isOpen={!show}
      >
        <AccordionItem>
          <AccordionButton
            align="center"
            px={7}
            height="60px"
            _expanded={{ opacity: 0.3 }}
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
                <Text color="gray.500" px={1}>
                  {" "}
                  %
                </Text>
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
              <Text fontSize="md">{props.fundName}</Text>
            </Flex>
            <Spacer />
            <AccordionIcon fontSize="2em" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Button>
            <EditFund
              id={props?.id}
              fundName={props?.fundName}
              fundValue={props?.fundValue}
              fundBasis={props?.fundBasis}
              fundStart={props?.fundStart}
              fundEnd={props?.fundEnd}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FundRow;
