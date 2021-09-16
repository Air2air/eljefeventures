import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import RankPage from "./pages/RankPage";
import RankPageDetail from "./pages/RankPage/detail";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioPageDetail from "./pages/PortfolioPage/detail";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.pathname}>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route
            path={"/rank"}
            parentLink=""
            parentName=""
            pageName="My Ranking"
          >
            <RankPage />
          </Route>
          <Route
            path={"/rank-detail"}
            parentLink="/rank"
            parentName="Rank Details"
          >
            <RankPageDetail />
          </Route>
          <Route
            path={"/portfolio"}
            parentLink=""
            parentName=""
            pageName="Detail"
          >
            <PortfolioPage />
          </Route>
          <Route
            path={"/portfolio-detail"}
            parentLink="/portfolio"
            parentName="Portfolio Details"
          >
            <PortfolioPageDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
