import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Button } from "@chakra-ui/react";
import { allocations1, allocations2 } from "../../../data/allocations";
import NumberFormat from "react-number-format";
import Truncate from "react-truncate";
import "./index.scss";
import "./box.scss";

interface BoxInterface {
  id: string;
  invested: number;
  yieldAmt: number;
}

interface BoxProps {
  boxes: BoxInterface[];
}

const BoxChart: React.FC<BoxProps> = ({ boxes }: BoxProps) => {
  /*----- DATA ------*/

  let data;

  /*----- STATE ------*/

  const [dataSource, setDataSource] = useState(0);
  const [isVisible, setIsVisible] = useState(1);

  if (dataSource === 0) {
    data = allocations1;
  } else {
    data = allocations2;
  }

  const dataButtonClick = (sourceData: number, isVisible: number) => {
    setDataSource(sourceData);
    // setIsVisible = (isVisible) => {
    //   isVisible: !isVisible;
    // };
  };

  useEffect(() => console.log("UseEffect says:", isVisible));

  /*----- Operations -----*/

  // Portfolio total Ex: 6,500,000
  const totalPortfolioValue = data.reduce((a, v) => (a = a + v.invested), 0);

  // Yield % of THIS investment ex: 2.4%
  const investmentYieldPercent = (yieldAmt: number, invested: number) => {
    return (invested / yieldAmt) * 100;
  };

  //Min Yield amt found across all investments
  const minYieldAcrossPortfolio = data.reduce(
    (acc, data) => (acc = acc < data.yieldAmt ? acc : data.yieldAmt),
    0
  );

  // Max Yield amt found across all investments
  const maxYieldAcrossPortfolio = data.reduce(
    (acc, data) => (acc = acc > data.yieldAmt ? acc : data.yieldAmt),
    0
  );

  // Normalize values from the min/max
  // Calculates the normalization

  function normalizedPosition(val: number) {
    return (
      ((val - minYieldAcrossPortfolio) /
        (maxYieldAcrossPortfolio - minYieldAcrossPortfolio)) *
      10
    );
  }

  // Calculate box width based on this portfolio vs. all portfolios
  const calculateWidth = (invested: number) => {
    let columnWidth = (invested / totalPortfolioValue) * 100 + "%";
    return columnWidth;
  };

  // Animation

  const parent = {
    visible: {
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    hidden: {
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
  };

  const child = {
    visible: { scaleY: 1 },
    hidden: { scaleY: 0 },
  };

  const textButton1 = "Last 12 months";
  const textButton2 = "Current quarter";

  return (
    <>
      <div className="box-chart-wrapper mb-5">
        <div className="box-header d-flex align-items-center justify-content-between">
          <h4>
            <NumberFormat
              value={totalPortfolioValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </h4>
          State:{isVisible ? " visible" : " hidden"}
          <div>
            <Button
              className={dataSource ? "btn mr-2 active" : "btn mr-2"}
              onClick={() => dataButtonClick(0, 1)}
            >
              {textButton1}
            </Button>
            <Button
              className={dataSource ? "btn mr-2" : "btn mr-2 active"}
              value={0}
              onClick={() => dataButtonClick(1, 2)}
            >
              {textButton2}
            </Button>
          </div>
        </div>

        <motion.div
          initial="visible"
          animate={isVisible ? "visible" : "hidden"}
          exit="hidden"
          variants={parent}
          className="box-wrapper"
        >
          <div className="box-grid-wrapper">
            <div className="box-grid-line" />
            <div className="box-grid-line" />
            <div className="box-grid-line" />
            <div className="box-grid-line center" />
            <div className="box-grid-line" />
            <div className="box-grid-line" />
            <div className="box-grid-line" />
          </div>
          {data.map((item) => (
            <motion.div
              key={item.id}
              variants={child}
              className="box-column"
              style={{ width: calculateWidth(item.invested) }}
            >
              <div
                className={item.yieldAmt >= 0 ? "box good" : "box bad"}
                style={{ bottom: normalizedPosition(item.yieldAmt) + "%" }}
              >
                <div className="invested">
                  <NumberFormat
                    value={item.invested}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>

                <Truncate lines={3} ellipsis={"..."} className="title">
                  {item.id}
                </Truncate>

                <div>
                  <NumberFormat
                    value={item.yieldAmt}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </div>
                <div className="value">
                  <NumberFormat
                    value={investmentYieldPercent(item.invested, item.yieldAmt)}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                  />
                  <span className="percent">%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default BoxChart;
