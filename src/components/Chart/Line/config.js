import text from "./../../../styles/text.scss";
import colors from "./../../../styles/variables.scss";




export const axisBottom = {
  orient: "bottom",
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legendOffset: 36,
  legendPosition: "middle",
};

export const theme = {
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

export const legends = [
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
