import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ReportPage from "./pages/ReportPage";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.pathname}>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path={"/report"} component={ReportPage} />
          <Route path={"/portfolio"} component={PortfolioPage} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
