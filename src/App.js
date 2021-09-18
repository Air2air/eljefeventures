// import React from "react";
// import { Switch, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Home from "./pages/Home";
// import RankPage from "./pages/RankPage";
// import RankPageDetail from "./pages/RankPage/detail";
// import PortfolioPage from "./pages/PortfolioPage";
// import PortfolioPageDetail from "./pages/PortfolioPage/detail";

// import React from "react";
// import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import { Header } from "./components/Header";
// import { Item } from "./components/Item";
// import { List } from "./components/List";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import Home from "./pages/Home";
// import RankPage from "./pages/RankPage";
// import RankPageDetail from "./pages/RankPage/detail";
// import PortfolioPage from "./pages/PortfolioPage";
// import PortfolioPageDetail from "./pages/PortfolioPage/detail";
// import { Item } from "./components/Item";
// import { List } from "./components/List";

// function Store({ match }) {
//   let { id } = match.params;
//   const imageHasLoaded = true;
//   return (
//     <>
//       <List selectedId={id} />
//       <AnimatePresence>
//         {id && imageHasLoaded && <Item id={id} key="item" />}
//       </AnimatePresence>
//     </>
//   );
// }

// const App = () => {

//   const location = useLocation();

//   return (
//     <>
//       <AnimatePresence exitBeforeEnter initial={true}>
//         <Switch location={location} key={location.pathname}>
//           <Route exact path={["/", "/home"]}>
//             <Home />
//           </Route>
//           <Router>
//             <Route path={["/:id", "/"]} component={Store} />
//           </Router>
//           <Route
//             path={"/rank"}
//             parentLink=""
//             parentName=""
//             pageName="My Ranking"
//           >
//             <RankPage />
//           </Route>
//           <Route
//             path={"/rank-detail"}
//             parentLink="/rank"
//             parentName="Rank Details"
//           >
//             <RankPageDetail />
//           </Route>
//           <Route
//             path={"/portfolio"}
//             parentLink=""
//             parentName=""
//             pageName="Detail"
//           >
//             <PortfolioPage />
//           </Route>
//           <Route
//             path={"/portfolio-detail"}
//             parentLink="/portfolio"
//             parentName="Portfolio Details"
//           >
//             <PortfolioPageDetail />
//           </Route>
//         </Switch>
//       </AnimatePresence>
//     </>
//   );
// };

// export default App;

import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Item from "./components/Card/CardOpen";
import CardList from "./components/Card/CardList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <CardList selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}
