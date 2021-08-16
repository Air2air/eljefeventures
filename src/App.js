import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Report from "./pages/Report";
import Performance from "./pages/Performance";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.pathname}>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path={"/report"} component={Report} />
          <Route path={"/ranking"} component={Ranking} />
          <Route path={"/performance"} component={Performance} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
