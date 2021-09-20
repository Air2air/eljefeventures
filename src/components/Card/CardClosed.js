import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DisplayActivity,
  DisplayChange,
  DisplayList,
  DisplayRank,
  DisplayStat,
  DisplayYield,
} from "./../Display";
import "./styles.scss";

const CardClosed = (props) => {
  return (
    <li className="card" key={props.id}>
      <div className="card-container">
        <motion.div
          className="card-content"
          layoutId={`card-container-${props.id}`}
        >
          <div className="title-container">
            <span className="caption">{props.category}</span>
            <h2>{props.title}</h2>
          </div>
          {props.category === "activity" && <DisplayActivity id={props.id} />}
          {props.category === "ranking" && (
            <DisplayRank currVal={9} prevVal={7} places={35} />
          )}
          {props.category === "portfolio" && (
            <DisplayYield currVal={2.353} prevVal={4.662} />
          )}
        </motion.div>
      </div>
      <Link to={props.id} className={`card-open-link`} />
    </li>
  );
};

export default CardClosed;
