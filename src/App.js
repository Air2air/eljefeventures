import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";

const App = () => {


  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={"/service"} component={Service} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
