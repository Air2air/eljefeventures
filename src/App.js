import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderLoggedIn, HeaderLoggedOut } from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";

const App = () => {
  const isLoggedIn = false;

  return (
    <Router>
      {isLoggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route path={"/service"} component={Service} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
