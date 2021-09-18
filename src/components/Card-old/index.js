import { Center, Flex, Text, Stat, StatArrow } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { motion } from "framer-motion";
import "./styles.scss";

export const CardYield = (props) => {
  /*
label
val
prevval
delay
*/

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.1, delay: props.delay }}
      >
        <Center w="100%" h={100} color="white" bg="gray.400">
          <Flex justify="center" align="center">
            <Stat>
              {props.val > props.prevVal ? (
                <StatArrow type="decrease" />
              ) : (
                <StatArrow type="increase" />
              )}
            </Stat>
            <Text fontSize="3xl">
              <NumberFormat
                value={props.val}
                displayType={"text"}
                decimalScale={2}
                allowNegative={true}
              />
            </Text>
            <Text color={props.labelColor} px={1}>
              %
            </Text>
          </Flex>
        </Center>
      </motion.div>
    </>
  );
};

export const CardRank = (props) => {
  /*
label
rank
places
delay
*/

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.1, delay: props.delay }}
      >
        <Center w="100%" h={100} color="white" bg="gray.600">
          <Text fontSize="2xl" mr={1} color="gray.300">
            #
          </Text>
          <Text fontSize="3xl" color="white">
            {props.rank}
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="semibold"
            color={props.labelColor}
            mx={1}
          >
            /
          </Text>
          <Text fontSize="3xl" color="gray.300">
            {props.places}
          </Text>
        </Center>
      </motion.div>
    </>
  );
};

export const CardChange = (props) => {
  /*
label
value
delay
*/

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.1, delay: props.delay }}
      >
        <Center w="100%" h={100} color="white" bg="gray.600">
          <Flex px={3} mr={5} align="center">
            <Text fontSize="sm" mr={2} color={props.labelColor}>
              {props.label}
            </Text>
            <Text fontSize="3xl" color="white">
              {props.value}
            </Text>
          </Flex>
        </Center>
      </motion.div>
    </>
  );
};

export const CardStat = (props) => {
  /*
label
value
delay
*/
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.1, delay: props.delay }}
      >
        <Center w="100%" h={100} color="white" bg="gray.500">
          <Flex align="center">
            <Text fontSize="sm" mr={2} color={props.labelColor}>
              {props.label}
            </Text>
            <NumberFormat
              value={props?.value}
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
