import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Service from "./pages/Service";

const App = () => {

  const isLoggedIn = true;
  return (
    <Router>
      <Header isLoggedin={isLoggedIn} />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route path={"/service"} component={Service} />
      </Switch>
    </Router>
  );
};

export default App;
