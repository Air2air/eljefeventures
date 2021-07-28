import React from "react";
import { ResponsiveLine } from '@nivo/line'
import text from "./../../styles/text.scss";
import colors from "./../../styles/variables.scss";

// const theme = {
//   background: "none",
//   axis: {
//     tickColor: colors.gray,
//     ticks: {
//       line: {
//         stroke: colors.gray,
//       },
//       text: {
//         fontSize: text.fontSize,
//         fill: "#ffffff",
//       },
//     },
//     legend: {
//       text: {
//         fontSize: text.fontSize,
//         fill: colors.muted,
//       },
//     },
//   },
//   labels: {
//     text: {
//       fontSize: text.fontSize,
//       fill: colors.textColor
//     },
//   },
//   grid: {
//     line: {
//       stroke: colors.muted,
//     },
//   },
// };


const legends = [
  {
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: 'circle',
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
      effects: [
          {
              on: 'hover',
              style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
              }
          }
      ]
  }
];

const ChartLine = (props) => (
  <div className="chart-wrapper">
    <ResponsiveLine
      data={props.dataSource}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 9,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={legends}
    />
  </div>
);

export default ChartLine;
