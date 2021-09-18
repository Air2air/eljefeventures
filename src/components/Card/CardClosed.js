import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.scss";

function Card({ id, title, category, theme }) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <div className="title-container">
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export default Card;
