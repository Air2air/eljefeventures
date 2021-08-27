import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { theme, axisBottom, legends } from "./config.js";

const ChartLine = (props) => {
  let [items, setItems] = useState([]);



  return (
    <>
      {items.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}

      <div className="chart-component-wrapper px-0 mb-3">
        <div className="chart-header d-flex align-items-center justify-content-between">
          <h4>{props.title}</h4>
          <div></div>
        </div>
        <div className="chart-wrapper">
          <ResponsiveLine
            data={props.dataSource}
            margin={{ top: 10, right: 30, bottom: 80, left: 30 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisLeft={null}
            axisBottom={axisBottom}
            pointSize={5}
            pointBorderWidth={2}
            pointLabelYOffset={-12}
            useMesh={true}
            colors={{ scheme: "paired" }}
            theme={theme}
            legends={legends}
            animate={true}
            curve="natural"
            enableArea={true}
            motionConfig="gentle"
          />
        </div>
      </div>
    </>
  );
};

export default ChartLine;
