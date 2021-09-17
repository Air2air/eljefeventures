import { items } from "../../data/data";
import Card from "../Card";
import "./styles.scss"

const CardList = ({ selectedId }) => {
  return (
    <ul className="card-list">
      {items.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}

export default CardList;