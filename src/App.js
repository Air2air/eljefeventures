import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Report from "./pages/Report";
import Performance from "./pages/Performance";
import AddTutorial from "./pages/AddTutorial";
import Tutorial from "./pages/Tutorial";
import TutorialsList from "./pages/TutorialsList";

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
          <Route path={"/tutorials"} component={TutorialsList} />
          <Route path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
