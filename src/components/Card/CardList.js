
import React from "react";
import { dashboard } from "../../data/dashboard";
import { CardClosed } from "./Card";
import "./styles.scss";

const CardList = ({ selectedId }) => {
  return (
    <ul className="card-list">
      <>
        {dashboard.map((card) => (
          <CardClosed
            key={card.id}
            {...card}
            isSelected={card.id === selectedId}
          />
        ))}
      </>
    </ul>
  );
};

export default CardList;
