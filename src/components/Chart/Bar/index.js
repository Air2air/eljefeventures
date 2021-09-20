import { ResponsiveBar } from "@nivo/bar";
import text from "./../../../styles/text.scss";
import colors from "./../../../styles/variables.scss";
// import { bardata1 } from "./../../../data/bardata.js";

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

const ChartBar = () => (
  <div className="chart-wrapper">
    <ResponsiveBar
      margin={{ top: 10, right: 30, bottom: 80, left: 30 }}
      data={bardata1}
      keys={["me", "benchmark"]}
      indexBy="map"
      axisLeft={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      enableGridX={false}
      padding={0.3}
      colors={{ scheme: "paired" }}
      theme={theme}
      legends={legends}
      animate={true}
      groupMode="grouped"
    />
  </div>
);

const bardata1 = [
  {
    map: "Stocks",
    me: 5,
    benchmark: 10,
  },
  {
    map: "Bonds",
    me: 8,
    benchmark: 6,
  },
  {
    map: "Mutuals",
    me: 9,
    benchmark: 2,
  },
  {
    map: "ETF",
    me: 3,
    benchmark: 4,
  },
  {
    map: "Options",
    me: 8,
    benchmark: 7,
  },
  {
    map: "Annuities",
    me: 2,
    benchmark: 6,
  },
  {
    map: "Cash",
    me: 4,
    benchmark: 3,
  },
  {
    map: "Real Estate",
    me: 7,
    benchmark: 1,
  },
];



export default ChartBar;
