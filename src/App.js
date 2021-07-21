import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";



const App = () => {
 
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path={"/portfolio"} component={Portfolio} />
          <Route path={"/service"} component={Service} />
        </Switch>
    </Router>

  );
};

export default App;
