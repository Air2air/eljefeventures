import React from "react";
import { ResponsivePie } from "@nivo/pie";

export const PieChart = ({ ...props }) => (
  <>
    <div className="styles.card">
      <div className={`styles.card-header`}>{props.title}</div>
      <div className={`styles.card-body`}>
        <ResponsivePie
          data={props.data}
          margin={{ top: 20, right: 2, bottom: 20, left: 20 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "blues" }}
          borderWidth={0}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={{ from: "color", modifiers: [["darker", 1]] }}
          arcLinkLabelsDiagonalLength={12}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color", modifiers: [["darker", 1]] }}
          arcLabelsSkipAngle={10}
          radialLabelsSkipAngle={0}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          slicesLabelsSkipAngle={0}
          slicesLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          sliceLabel={(d) => <tspan>{d.id}</tspan>}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          sortByValue={true}
          defs={[
            {
              id: "dots",
              type: "linearGradient",
              colors: [
                { offset: 0, color: "inherit", opacity: 0.1 },
                { offset: 100, color: "inherit", opacity: 0.1 },
              ],
            },
          ]}
        />
      </div>
      <div className="styles.card-footer p-4 d-flex justify-content-end">
        <div className="legend align-items-center">
          <span>Updated </span>
          <b>{props.updatedTime}</b> mins ago
        </div>
      </div>
    </div>
  </>
);
