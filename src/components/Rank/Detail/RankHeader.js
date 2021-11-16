import React from "react";
import { div, Flex, Grid, Text } from "@emotion/react";
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
      <div className="grid"  templateColumns="repeat(4, 1fr)" mb={8} gap={6}>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0 }}
        >
          <div w="100%" h={100} color="white" bg="gray.600">
            <div fontSize="2xl" mr={1} color="gray.300">
              #
            </div>
            <div fontSize="3xl" color="white">
              {props.currentRank}
            </div>
            <div
              fontSize="2xl"
              fontWeight="semibold"
              color={labelColor}
              mx={1}
            >
              /
            </div>
            <div fontSize="3xl" color="gray.300">
              {props.totalPlaces}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <div w="100%" h={100} color="white" bg="gray.600">
            <div className="flex"  px={3} mr={5} align="center">
              <div fontSize="sm" mr={2} color={labelColor}>
                CHANGE:
              </div>
              <div fontSize="3xl" color="white">
                {props.previousRank - props.currentRank}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.2 }}
        >
          <div w="100%" h={100} color="white" bg="gray.500">
            <div className="flex"  align="center">
              <div fontSize="sm" mr={2} color={labelColor}>
                VALUE:
              </div>
              <NumberFormat
                value={props?.portfolioTotalValue}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <div w="100%" h={100} color="white" bg="gray.500">
            <div className="flex"  align="center">
              <div fontSize="sm" mr={2} color={labelColor}>
                BASIS:
              </div>
              <NumberFormat
                value={props?.portfolioTotalBasis}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default RankHeader;
