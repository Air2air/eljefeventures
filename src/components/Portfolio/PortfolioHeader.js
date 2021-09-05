import React from "react";
import {
  Center,
  Collapse,
  Flex,
  Grid,
  Text,
  Stat,
  StatArrow,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NumberFormat from "react-number-format";

const PortfolioHeader = (props) => {
  const pctGain =
    ((props.portfolioTotalValue - props.portfolioTotalBasis) /
      props.portfolioTotalValue) *
    100;

  const { isOpen, onToggle } = useDisclosure();

  const labelColor = "gray.300";

  return (
    <>
      <Grid onClick={onToggle} templateColumns="repeat(4, 1fr)" mb={8} gap={6}>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0 }}
        >
          <Center w="100%" h={100} color="white" bg="gray.600">
            <Flex justify="center" align="center">
              <Stat>
                {props.portfolioTotalBasis > props.portfolioTotalValue ? (
                  <StatArrow type="decrease" />
                ) : (
                  <StatArrow type="increase" />
                )}
              </Stat>
              <Text fontSize="3xl">
                <NumberFormat
                  value={pctGain}
                  displayType={"text"}
                  decimalScale={2}
                  allowNegative={true}
                />
              </Text>
              <Text color={labelColor} px={1}>
                %
              </Text>
            </Flex>
          </Center>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <Center w="100%" h={100} color="white" bg="gray.600">
            <Flex justify="center" align="center">
              <Text fontSize="sm" mr={2} color={labelColor}>
                {props?.portfolioTotalBasis > props?.portfolioTotalValue
                  ? "LOSS:"
                  : "GAIN:"}
              </Text>
              <Text fontSize="xl">
                <NumberFormat
                  value={
                    props?.portfolioTotalValue - props?.portfolioTotalBasis
                  }
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Text>
            </Flex>
          </Center>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.2 }}
        >
          <Center w="100%" h={100} color="white" bg="gray.500">
            <Flex justify="center" align="center">
              <Text fontSize="sm" mr={2} color={labelColor}>
                VALUE:
              </Text>
              <Text fontSize="xl">
                <NumberFormat
                  value={props?.portfolioTotalValue}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Text>
            </Flex>
          </Center>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <Center w="100%" h={100} color="white" bg="gray.500">
            <Flex justify="center" align="center">
              <Text fontSize="sm" mr={2} color={labelColor}>
                BASIS:
              </Text>
              <Text fontSize="xl">
                <NumberFormat
                  value={props?.portfolioTotalBasis}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />{" "}
              </Text>
            </Flex>
          </Center>
        </motion.div>
      </Grid>

      <Collapse in={isOpen}>
        <Center h="200px" p={3} pt={0}>
          Stats about this portfolio
        </Center>
      </Collapse>
    </>
  );
};

export default PortfolioHeader;
