import React from "react";
import useScreenType from "react-screentype-hook";
import StackGrid from "react-stack-grid";
import "./styles.scss";
import investmentsJson from "./../../data/data.json";

const Tile = () => {
  const screenType = useScreenType();

  let colWidthPercent = 25;

  if (screenType.isMobile) {
    colWidthPercent = 50;
  } else {
    colWidthPercent = 33.333;
  }

  const listItems = investmentsJson.map((item) => (
    <div key={item.id}>
      <div className="tile" style={{ backgroundColor: item.color }}></div>
      <div className="content">
        <h2>{item.category}</h2>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <div className="person">{item.person}</div>
      </div>
    </div>
  ));
  return (
      <StackGrid columnWidth={`${colWidthPercent}%`}>{listItems} </StackGrid>

  );
};

export default Tile;
