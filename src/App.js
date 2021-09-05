import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import RankPage from "./pages/RankPage";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.pathname}>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path={"/rank"} component={RankPage} />
          <Route path={"/portfolio"} component={PortfolioPage} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
