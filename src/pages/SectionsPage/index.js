import Header from "./../../components/Header";
import { AnimatePresence } from "framer-motion";
import { CardOpen } from "./../../components/Card/Card";
import CardList from "./../../components/Card/CardList";
import "./styles.scss";

function SectionsPage({ match }) {
  let { id } = match.params;
  return (
    <>
      <Header />
      <CardList selectedId={id} />
      <AnimatePresence>{id && <CardOpen id={id} key="item" />}</AnimatePresence>
    </>
  );
}

export default SectionsPage;
