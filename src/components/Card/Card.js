import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DisplayActivitySmall,
  DisplayActivityLarge,
} from "../Display/Activity";
import { DisplayYieldSmall, DisplayYieldLarge } from "../Display/Yield";
import { DisplayRankSmall, DisplayRankLarge } from "../Display/Rank";
import { DisplayLeadersSmall, DisplayLeadersLarge } from "../Display/Leaders";
import "./styles.scss";
import { dashboard } from "../../data/dashboard";

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

export const CardClosed = (props) => {
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
          <div className="display-container">
            {props.category === "activity" && (
              <DisplayActivitySmall slice={3} id={props.id} />
            )}
            {props.category === "rank" && (
              <DisplayRankSmall currVal={9} prevVal={7} places={35} />
            )}
            {props.category === "portfolio" && (
              <DisplayYieldSmall currVal={2.353} prevVal={4.662} />
            )}
            {props.category === "leaders" && <DisplayLeadersSmall />}
          </div>
        </motion.div>
      </div>
      <Link to={props.id} className={`card-open-link`} />
    </li>
  );
};

export const CardOpen = ({ id }) => {
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
          <div className="display-container">
            {items.category === "activity" && (
              <DisplayActivityLarge slice={8} id={items.id} />
            )}
            {items.category === "rank" && (
              <DisplayRankLarge currVal={9} prevVal={7} places={35} />
            )}
            {items.category === "portfolio" && (
              <DisplayYieldLarge currVal={2.353} prevVal={4.662} />
            )}
            {items.category === "leaders" && <DisplayLeadersLarge />}
          </div>
        </motion.div>
      </div>
    </>
  );
};
