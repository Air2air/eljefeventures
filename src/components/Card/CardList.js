import { dashboard } from "../../data/dashboard";
import Card from "./CardClosed";
import "./styles.scss";

const CardList = ({ selectedId }) => {
  return (
    <ul className="card-list">
      <>
        {dashboard.map((card) => (
          <Card key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
      </>
    </ul>
  );
};

export default CardList;
