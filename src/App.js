import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import {CardOpen} from "./components/Card/Card";
import CardList from "./components/Card/CardList";
import RankPage from "./pages/RankPage";
import PortfolioPage from "./pages/PortfolioPage";

function Sections({ match }) {
  let { id } = match.params;
  return (
    <>
      <CardList selectedId={id} />
      <AnimatePresence>{id && <CardOpen id={id} key="item" />}</AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/:id", "/"]} component={Sections} />
          <Route
            path={"/rank"}
            parentLink="/rank"
            parentName="Rank Details"
            pageName="Rank"
            component={RankPage}
          />
          <Route
            path={"/portfolio"}
            parentLink=""
            parentName=""
            pageName="Portfolio"
            component={PortfolioPage}
          />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}