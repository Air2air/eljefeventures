import React from "react";

import { ResponsiveLine } from "@nivo/line";
import text from "./../../styles/text.scss";
import colors from "./../../styles/variables.scss";

const axisBottom = {
  orient: "bottom",
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legendOffset: 36,
  legendPosition: "middle",
};

const theme = {
  background: "none",
  axis: {
    tickColor: colors.gray,
    tickPadding: 20,
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
        fill: colors.muted,
      },
    },
  },
  labels: {
    text: {
      fontSize: text.fontSize,
      fill: colors.textColor,
    },
  },
  grid: {
    line: {
      stroke: colors.muted,
    },
  },
};

const legends = [
  {
    dataFrom: "keys",
    anchor: "bottom",
    direction: "row",
    justify: false,
    translateX: 0,
    translateY: 56,
    itemsSpacing: 2,
    itemWidth: 120,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    itemTextColor: "#ffffff",
    fontSize: text.fontSize,
    symbolSize: 18,
    symbolShape: "circle",
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

const ChartLine = (props) => {
  return (
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
  );
};

export default ChartLine;
