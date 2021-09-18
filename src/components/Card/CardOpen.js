import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { dashboard } from "../../data/dashboard";
import "./styles.scss";

const CardOpen = ({ id }) => {
  const { category, title, description, buttonText, link } = dashboard.find(
    (item) => item.id === id
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <div className="title-container">
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </div>

          <motion.div className="content-container" animate>
            {buttonText ? (
              <>
                <div className="text">{description}</div>
                <Button colorScheme="blue" href={link}>
                  {buttonText}
                </Button>
                <Link to={link}>{buttonText}</Link>
              </>
            ) : (
              { description }
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default CardOpen;
