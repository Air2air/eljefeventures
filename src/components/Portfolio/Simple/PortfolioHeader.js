import React, {useState} from "react";
import { motion } from "framer-motion";
import NumberFormat from "react-number-format";

const PortfolioHeader = (props) => {
  const pctGain =
    ((props.portfolioTotalValue - props.portfolioTotalBasis) /
      props.portfolioTotalValue) *
    100;

  const { isOpen, onToggle } = useState();

  const labelColor = "gray.300";

  return (
    <>
      <div className="grid"  onClick={onToggle} templateColumns="repeat(4, 1fr)" mb={8} gap={6}>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0 }}
        >
          <div w="100%" h={100} color="white" bg="gray.600">
            <div className="flex"  justify="center" align="center">
              <div>
                {props.portfolioTotalBasis > props.portfolioTotalValue ? (
                  <divArrow type="decrease" />
                ) : (
                  <divArrow type="increase" />
                )}
              </div>
              <div fontSize="3xl">
                <NumberFormat
                  value={pctGain}
                  displayType={"text"}
                  decimalScale={2}
                  allowNegative={true}
                />
              </div>
              <div color={labelColor} px={1}>
                %
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <div w="100%" h={100} color="white" bg="gray.600">
            <div className="flex"  justify="center" align="center">
              <div fontSize="sm" mr={2} color={labelColor}>
                {props?.portfolioTotalBasis > props?.portfolioTotalValue
                  ? "LOSS:"
                  : "GAIN:"}
              </div>
              <div fontSize="xl">
                <NumberFormat
                  value={
                    props?.portfolioTotalValue - props?.portfolioTotalBasis
                  }
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
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
            <div className="flex"  justify="center" align="center">
              <div fontSize="sm" mr={2} color={labelColor}>
                VALUE:
              </div>
              <div fontSize="xl">
                <NumberFormat
                  value={props?.portfolioTotalValue}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <div w="100%" h={100} color="white" bg="gray.500">
            <div className="flex"  justify="center" align="center">
              <div fontSize="sm" mr={2} color={labelColor}>
                BASIS:
              </div>
              <div fontSize="xl">
                <NumberFormat
                  value={props?.portfolioTotalBasis}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />{" "}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div in={isOpen}>
        <div h="200px" p={3} pt={0}>
          Stats about this portfolio
        </div>
      </div>
    </>
  );
};

export default PortfolioHeader;
