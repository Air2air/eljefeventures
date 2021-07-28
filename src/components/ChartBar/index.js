import React, { useState } from "react";
import ChartBar from "./chart";
import { bardata1, bardata2 } from "./../../data/bardata.js";
import "./styles.scss";

const ChartBarComponent = (props) => {
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <div className="chart-component-wrapper">
        <div className="chart-header d-flex align-items-center justify-content-between">
          <h2>{props.title}</h2>
          <div>
            <button onClick={() => setToggle(1)}>Toggle State</button>
            <button onClick={() => setToggle(0)}>Toggle State</button>
          </div>
        </div>
        <ChartBar dataSource={toggle === 1 ? bardata1 : bardata2} />
      </div>
    </>
  );
};

export default ChartBarComponent;
