import React, { useState } from "react";
import { motion } from "framer-motion";
import { transitionDuration } from "../../animations/animations";
import { Button } from "react-bootstrap";
import { allocations1, allocations2 } from "../../data/allocations";
import NumberFormat from "react-number-format";
import "./index.scss";
import "./bubble.scss";

interface BubbleInterface {
  id: string;
  invested: number;
  yieldAmt: number;
}

interface BubbleProps {
  bubbles: BubbleInterface[];
}

const BubbleChart: React.FC<BubbleProps> = ({ bubbles }: BubbleProps) => {
  /*----- DATA ------*/

  let data;

  /*----- STATE ------*/

  const [active, setActive] = useState(0);

  if (active === 0) {
    data = allocations1;
  } else {
    data = allocations2;
  }

  /*----- Operations -----*/

  // Portfolio total Ex: 6,500,000
  const totalPortfolioValue = data.reduce((a, v) => (a = a + v.invested), 0);

  //Max Yield amt found across all investments - not a percentage
  const maxYieldAcrossPortfolio = data.reduce(
    (acc, data) => (acc = acc > data.yieldAmt ? acc : data.yieldAmt),
    0
  );

  // Yield percentage of this investment ex: 2.4%
  const investmentYieldPercent = (yieldAmt: number, invested: number) => {
    return (invested / yieldAmt) * 100;
  };

  // Position of this investment vs the max
  const positionInPortfolio = (yieldAmt: number) => {
    return maxYieldAcrossPortfolio/ yieldAmt  * 10;
  };

  // Calculate bubble width based on this portfolio vs. all portfolios
  const calculateWidth = (invested: number) => {
    let columnWidth = (invested / totalPortfolioValue) * 100 + "%";
    return columnWidth;
  };

  /*------ State --------*/

  const textButton1 = "Last 12 months";
  const textButton2 = "Current quarter";

  return (
    <>
      <div className="bubble-chart-wrapper mb-5">
        <div className="bubble-header d-flex align-items-center justify-content-between">
          <h4>
            Title -
            <NumberFormat
              value={totalPortfolioValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </h4>
          <div>
            <Button
              className={active ? "btn mr-2 active" : "btn mr-2"}
              onClick={() => setActive(1)}
            >
              {textButton1}
            </Button>
            <Button
              className={active ? "btn mr-2 " : "btn mr-2 active"}
              onClick={() => setActive(0)}
            >
              {textButton2}
            </Button>
          </div>
        </div>
        <div className="bubble-wrapper">
          {/* <div className="centerline" /> */}
          {data.map((item) => (
            <div
              key={item.id}
              className="bubble-column"
              style={{ width: calculateWidth(item.invested) }}
            >
              <motion.div
                initial={{ translateY: -50 }}
                animate={{ translateY: 0 }}
                exit={{ translateY: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: transitionDuration,
                }}
                className="bubble"
                style={{bottom: positionInPortfolio(item.yieldAmt)}} 
              >
                <p>ID: {item.id}</p>
                <p>
                  Amt:
                  <NumberFormat
                    value={item.invested}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </p>
                <p>
                  Yield Amt:
                  <NumberFormat
                    value={item.yieldAmt}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
                <p>
                  Yield:
                  <NumberFormat
                    value={investmentYieldPercent(item.invested, item.yieldAmt)}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={3}
                    suffix={"%"}
                  />
                </p>

                <p>
                  Position:
                  <NumberFormat
                    value={positionInPortfolio(item.yieldAmt)}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    suffix={"%"}
                  />
                </p>

                <p>
                  Width:
                  <NumberFormat
                    value={calculateWidth(item.invested)}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    suffix={"%"}
                  />
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BubbleChart;
