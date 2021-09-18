import { Center, Flex, Text, Stat, StatArrow } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { motion } from "framer-motion";
// import "./styles.scss";

export const DisplayChange = (label, val, prevVal) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.1, delay: 0.2 }}
      >
        <Center w="100%" h={100} color="white" bg="gray.600">
          <Flex px={3} mr={5} align="center">
            <Text fontSize="sm" mr={2} >
              {label}
            </Text>
            <Text fontSize="3xl" color="white">
              {val}
            </Text>
          </Flex>
        </Center>
      </motion.div>
    </>
  );
};

export const DisplayList = (label, val, prevVal) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.1, delay: 0.2 }}
      >
        <Center w="100%" h={100} color="white" bg="gray.600">
          <Flex px={3} mr={5} align="center">
List Stuff
          </Flex>
        </Center>
      </motion.div>
    </>
  );
};

export const DisplayRank = (rankVal, prevVal, places) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.1, delay: 0.2 }}
      >
        <Center w="100%" h={100} color="white" bg="gray.600">
          <Text fontSize="2xl" mr={1} color="gray.300">
            #
          </Text>
          <Text fontSize="3xl" color="white">
            {rankVal}
          </Text>
          <Text fontSize="2xl" fontWeight="semibold"  mx={1}>
            /
          </Text>
          <Text fontSize="3xl" color="gray.300">
            {places}
          </Text>
        </Center>
      </motion.div>
    </>
  );
};

export const DisplayStat = (label, val) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.1, delay: 0.2 }}
      >
        <Center w="100%" h={100} color="white" bg="gray.500">
          <Flex align="center">
            <Text fontSize="sm" mr={2} >
              {label}
            </Text>
            <NumberFormat
              value={val}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </Flex>
        </Center>
      </motion.div>
    </>
  );
};

export const DisplayYield = (val, prevVal) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.1, delay: 0.2 }}
      >
        <Center w="100%" h={100} color="white" bg="gray.400">
          <Flex justify="center" align="center">
            <Stat>
              {val > prevVal ? (
                <StatArrow type="decrease" />
              ) : (
                <StatArrow type="increase" />
              )}
            </Stat>
            <Text fontSize="3xl">
              <NumberFormat
                value={val}
                displayType={"text"}
                decimalScale={2}
                allowNegative={true}
              />
            </Text>
            <Text  px={1}>
              %
            </Text>
          </Flex>
        </Center>
      </motion.div>
    </>
  );
};
