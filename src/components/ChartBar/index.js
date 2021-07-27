import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import styles from "./styles.scss";
import colors from "./../../styles/colors.scss";


const data = [
  {
    map: "RoL",
    wins: 120,
    loss: 193
  },
  {
    map: "DS",
    wins: 35,
    loss: 160
  },
  {
    map: "TA",
    wins: 33,
    loss: 120
  },
  {
    map: "TTP",
    wins: 27,
    loss: 3
  },
  {
    map: "BRH",
    wins: 199,
    loss: 19
  },
  {
    map: "NA",
    wins: 117,
    loss: 107
  },
  {
    map: "AF",
    wins: 195,
    loss: 156
  },
  {
    map: "BEA",
    wins: 195,
    loss: 156
  },
  {
    map: "HP",
    wins: 195,
    loss: 156
  },
  {
    map: "M",
    wins: 195,
    loss: 156
  }
];

const axisBottom = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: "Map",
  legendPosition: "middle",
  legendOffset: 32
};

const axisLeft = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: "Wins / Loss",
  legendPosition: "middle",
  legendOffset: -40
};

const theme = {
  background: "none",
  axis: {
    fontSize: "14px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555"
      },
      text: {
        fill: "#ffffff"
      }
    },
    legend: {
      text: {
        fill: "#aaaaaa"
      }
    }
  },
  grid: {
    line: {
      stroke: "#555555"
    }
  }
};

const colorBy = ({ id }) => (id === "loss" ? colors.red : colors.green);

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
          itemOpacity: 1
        }
      }
    ]
  }
];

const ChartBar = () => (
  <div className="chart-bar-wrapper">
    <ResponsiveBar
      // width={600}
      // height={400}
      margin={{ top: 60, right: 120, bottom: 60, left: 80 }}
      data={data}
      keys={["wins", "loss"]}
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

export default ChartBar
