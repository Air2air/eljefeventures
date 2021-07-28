import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import "./styles.scss";
import text from "./../../styles/text.scss";
import colors from "./../../styles/variables.scss";


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
    tickColor: colors.gray,
    ticks: {
      line: {
        stroke: colors.gray,
      },
      text: {
        fontSize: text.fontSize,
        fill: "#ffffff",
      },
    },
    legend: {
      text: {
        fontSize: text.fontSize,
        fill: colors.muted
      },
    },
  },
  grid: {
    line: {
      stroke: colors.muted,
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
    fontSize: text.fontSize,
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

  <div className="chart-wrapper">
    <ResponsiveBar
      margin={{ top: 0, right: 0, bottom: 30, left: 0 }}
      data={props.dataSource}
      keys={["me", "benchmark"]}
      indexBy="map"
      labelTextColor="inherit:darker(2.4)"
      labelSkipWidth={12}
      labelSkipHeight={12}
      enableGridX={false}
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
