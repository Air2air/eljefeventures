import React from "react";
import { Center, Flex, Grid, Text } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const RankHeader = (props) => {
  const pctGain =
    ((props.portfolioTotalValue - props.portfolioTotalBasis) /
      props.portfolioTotalValue) *
    100;

  const labelColor = "gray.300";

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" mb={8} gap={6}>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0 }}
        >
          <Center w="100%" h={100} color="white" bg="gray.600">
            <Text fontSize="2xl" mr={1} color="gray.300">
              #
            </Text>
            <Text fontSize="3xl" color="white">
              {props.currentRank}
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              color={labelColor}
              mx={1}
            >
              /
            </Text>
            <Text fontSize="3xl" color="gray.300">
              {props.totalPlaces}
            </Text>
          </Center>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <Center w="100%" h={100} color="white" bg="gray.600">
            <Flex px={3} mr={5} align="center">
              <Text fontSize="sm" mr={2} color={labelColor}>
                CHANGE:
              </Text>
              <Text fontSize="3xl" color="white">
                {props.previousRank - props.currentRank}
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
            <Flex align="center">
              <Text fontSize="sm" mr={2} color={labelColor}>
                VALUE:
              </Text>
              <NumberFormat
                value={props?.portfolioTotalValue}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
            </Flex>
          </Center>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <Center w="100%" h={100} color="white" bg="gray.500">
            <Flex align="center">
              <Text fontSize="sm" mr={2} color={labelColor}>
                BASIS:
              </Text>
              <NumberFormat
                value={props?.portfolioTotalBasis}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
            </Flex>
          </Center>
        </motion.div>
      </Grid>
    </>
  );
};

export default RankHeader;
