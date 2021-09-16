import React, { useState, useEffect } from "react";
import ElJefeAPI from "../../../api/elJefeApi";
import PortfolioHeader from "./PortfolioHeader";

const PortfolioSimple = () => {
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

  const pctGain = sumBasis / sumValue / 100;

  return (
    <>
      <PortfolioHeader
        portfolioTotalValue={sumValue}
        portfolioTotalBasis={sumBasis}
        pctGain={pctGain}
      />
    </>
  );
};

export default PortfolioSimple;
