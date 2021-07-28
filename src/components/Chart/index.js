import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ChartBar from "./../ChartBar";
import ChartLine from "./../ChartLine";
import ChartPie from "./../ChartPie";
import { bardata1, bardata2 } from "../../data/bardata.js";
import { linedata1, linedata2 } from "../../data/linedata.js";
import "./styles.scss";

const Chart = (props) => {
  const [active, setActive] = useState(0);

  let dataSource1 = [];
  let dataSource2 = [];

  if (props.chartType === "bar" || props.chartType === "pie") {
    dataSource1 = bardata1;
    dataSource2 = bardata2;
  } else {
    dataSource1 = linedata1;
    dataSource2 = linedata2;
  }

  return (
    <>
      <div className="chart-component-wrapper px-4 mb-4">
        <div className="chart-header d-flex align-items-center justify-content-between">
          <h4>{props.title}</h4>
          <div>
            <Button
              className={active ? "btn mr-2 active" : "btn mr-2"}
              onClick={() => setActive(1)}
            >
              previous period
            </Button>
            <Button
              className={active ? "btn " : "btn active"}
              onClick={() => setActive(0)}
            >
              Current period
            </Button>
          </div>
        </div>
        {props.chartType === "bar" && (
          <ChartBar dataSource={active === 1 ? dataSource1 : dataSource2} />
        )}
        {props.chartType === "pie" && (
          <ChartPie dataSource={active === 1 ? dataSource1 : dataSource2} />
        )}
        {props.chartType === "line" && (
          <ChartLine dataSource={active === 1 ? dataSource1 : dataSource2} />
        )}
      </div>
    </>
  );
};

export default Chart;