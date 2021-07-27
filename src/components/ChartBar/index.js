import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import "./styles.scss";
import text from "./../../styles/text.scss";
import colors from "./../../styles/variables.scss";

const axisBottom = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: "Map",
  legendPosition: "middle",
  legendOffset: 32,
};

const axisLeft = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: "Wins / Loss",
  legendPosition: "middle",
  legendOffset: -40,
};

const theme = {
  background: "none",
  axis: {
    fontSize: text.fontSize,
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555",
      },
      text: {
        fill: "#ffffff",
      },
    },
    legend: {
      text: {
        fill: "#aaaaaa",
      },
    },
  },
  grid: {
    line: {
      stroke: "#555555",
    },
  },
};

const colorBy = ({ id }) => (id === "me" ? colors.blue : colors.gold);

const legends = [
  {
    dataFrom: "keys",
    anchor: "bottom-right",
    direction: "column",
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    itemTextColor: "#ffffff",
    symbolSize: 20,
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1,
        },
      },
    ],
  },
];

const ChartBar = (props) => (
  <div className="chart-bar-wrapper">
    <ResponsiveBar
      margin={{ top: 60, right: 120, bottom: 60, left: 80 }}
      data={props.dataSource}
      keys={["me", "benchmark"]}
      indexBy="map"
      labelTextColor="inherit:darker(2.4)"
      labelSkipWidth={12}
      labelSkipHeight={12}
      enableGridX={false}
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      colors={colorBy}
      theme={theme}
      legends={legends}
      animate={true}
      groupMode="grouped"
    />
  </div>
);

export default ChartBar;
