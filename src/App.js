import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Report from "./pages/Report";
import Performance from "./pages/Performance";
import AddStudy from "./pages/AddStudy";
import Study from "./pages/Study";
import StudiesList from "./pages/StudiesList";

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
          <Route path={"/studies"} component={StudiesList} />
          <Route path="/add" component={AddStudy} />
          <Route path="/studies/:id" component={Study} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
