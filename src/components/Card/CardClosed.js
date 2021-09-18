import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DisplayChange,
  DisplayList,
  DisplayRank,
  DisplayStat,
  DisplayYield,
} from "./../Display";
import "./styles.scss";

const CardClosed = ({ id, title, category, theme }) => {

  const displayType = (category) => {
    if (category === "Portfolio") {
      return <DisplayChange />
    }
    else if (category === "Ranking") {
      return <DisplayRank />
    }
    else if (category === "Activity" || category === "Updates" || category === "Log" || category === "Trends" || category === "Funds") {
      return <DisplayList />
    }
    else {
      return <DisplayList />
    }

  };

  return (
    <li className="card" key={id}>
      <div className="card-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <div className="title-container">
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </div>
          {displayType({category})}
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
};

export default CardClosed;
