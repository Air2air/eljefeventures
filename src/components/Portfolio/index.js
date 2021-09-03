import React, { useState, useEffect } from "react";
import ElJefeAPI from "../../api/elJefeApi";
import { Heading, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PortfolioRow from "./PortfolioRow";
import FundRow from "./FundRow";
import AddFund from "./FundAdd";
// import Stats from "./Stats";

const FundsList = () => {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    retrieveFunds();
  }, []);

  const retrieveFunds = () => {
    ElJefeAPI.getAll()
      .then((response) => {
        setFunds(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveFunds();
  };

  const portfolioTotalValue = funds.reduce(
    (total, currentValue) => (total = total + currentValue.fundValue),
    0
  );

  const portfolioTotalBasis = funds.reduce(
    (total, currentValue) => (total = total + currentValue.fundBasis),
    0
  );

  const pctGain = (portfolioTotalValue / portfolioTotalBasis) * 10;

  return (
    <>
      <Heading my={4} size="md">
        My Portfolio
      </Heading>
      <Box bg="gray.100" p={3}>
        <PortfolioRow
          portfolioTotalValue={portfolioTotalValue}
          portfolioTotalBasis={portfolioTotalBasis}
          pctGain={pctGain}
        />

        {funds &&
          funds.map((fund, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.1, delay: i * 0.1 }}
            >
              <FundRow
                i={i}
                id={fund.id}
                fundName={fund.fundName}
                fundValue={fund.fundValue}
                fundBasis={fund.fundBasis}
                fundStart={fund.fundStart}
                fundEnd={fund.fundEnd}
              />
            </motion.div>
          ))}

        <AddFund />
      </Box>
    </>
  );
};

export default FundsList;
