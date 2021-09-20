import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  DisplayActivity,
  DisplayChange,
  DisplayList,
  DisplayRank,
  DisplayStat,
  DisplayYield,
} from "./../Display";
import { dashboard } from "../../data/dashboard";
import "./styles.scss";

const Overlay = (id) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.15 } }}
    transition={{ duration: 0.2, delay: 0.15 }}
    style={{ pointerEvents: "auto" }}
    className="overlay"
    key={id}
  >
    <Link to="/" />
  </motion.div>
);

const CardOpen = ({ id }) => {
  const items = dashboard.find((item) => item.id === id);

  return (
    <>
      <Overlay id={id} />
      <div className="card-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <div className="title-container">
            <span className="caption">{items.category}</span>
            <h2>{items.title}</h2>
          </div>

          {items.category === "activity" && (
            <DisplayActivity slice={8} id={items.id} />
          )}
          {items.category === "ranking" && (
            <DisplayRank currVal={9} prevVal={7} places={35} />
          )}
          {items.category === "portfolio" && (
            <DisplayYield currVal={2.353} prevVal={4.662} />
          )}
        </motion.div>
      </div>
    </>
  );
};

export default CardOpen;
