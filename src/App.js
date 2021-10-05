import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { CardOpen } from "./components/Card/Card";
// import CardList from "./components/Card/CardList";
import RankPage from "./pages/RankPage";
import PortfolioPage from "./pages/PortfolioPage";
import SectionsPage from "./pages/SectionsPage";
import HomePage from "./pages/HomePage";


export default function App() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">

        <Router>
          <Route exact path={"/"} component={HomePage} />
          {/* <Route path={["sections/:id", "/sections"]} component={SectionsPage} /> */}
          <Route path={"/sections"} component={SectionsPage} />
          {/* <Route
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
          /> */}
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}
