import React, { useState } from "react";
import { motion } from "framer-motion";
import { transitionDuration } from "../../animations/animations";
import { Button } from "react-bootstrap";
import { allocations1, allocations2 } from "../../data/allocations";
import NumberFormat from "react-number-format";
import "./index.scss";

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

  function yieldPercent(yieldAmt: number, invested: number) {
    let yield_percent = yieldAmt / invested;
    return yield_percent;
  }

  /*----- Operations -----*/

  const total = data.reduce((a, v) => (a = a + v.invested), 0);
  console.log(total);

  const textButton1 = "Last 12 months";
  const textButton2 = "Current quarter";

  return (
    <>
      <div className="bubble-chart-wrapper mb-5">
        <div className="bubble-header d-flex align-items-center justify-content-between">
          <h4>
            Title -
            <NumberFormat
              value={total}
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
          <div className="centerline" />
          {data.map(
            (
              item,
              i // width based on value's % of total
            ) => (
              <>
                <div key={item.id} className="bubble-column">
                  <motion.div
                    initial={{ translateY: 0 }}
                    // animate={{ translateY: -item.count * 6 }}
                    exit={{ translateY: 0 }}
                    transition={{
                      ease: "easeInOut",
                      duration: transitionDuration * 5,
                    }}
                    className="bubble"
                  >
                    {item.id} {item.invested} {yieldPercent(item.invested,item.yieldAmt)}
                  </motion.div>
                </div>
              </>
            )
          )}
          ;
          <div className="bubble-wrapper-gradient">
            <div className="upper" />
            <div className="middle" />
            <div className="lower" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BubbleChart;
