import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Service from "./pages/Service";
import Symbols from "./pages/Symbols";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route path={"/service"} component={Service} />
        <Route path={"/symbols"} component={Symbols} />
      </Switch>
    </Router>
  );
};

export default App;
