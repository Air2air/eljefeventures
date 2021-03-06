import React, { useState, useEffect } from "react";
import ElJefeAPI from "../../../api/elJefeApi";
import { div } from "@emotion/react";
import { motion } from "framer-motion";
import PortfolioRow from "./PortfolioHeader";
import FundRow from "../Edit/FundRow";
import AddFund from "../Edit/FundAdd";

const PortfolioList = () => {
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

  const sumBasis = funds
    .map((fund) => Number.parseInt(fund.fundBasis))
    .reduce((acc, curr) => acc + curr, 0);

  const sumValue = funds
    .map((fund) => Number.parseInt(fund.fundValue))
    .reduce((acc, curr) => acc + curr, 0);

  const pctGain = (sumBasis / sumValue) / 100;

  return (
    <>
      <div in offsetY="-100px" delay={0.05}>
        <PortfolioRow
          portfolioTotalValue={sumValue}
          portfolioTotalBasis={sumBasis}
          pctGain={pctGain}
        />
        </div>
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
      {/* </div> */}
    </>
  );
};

export default PortfolioList;
