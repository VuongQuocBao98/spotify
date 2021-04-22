import HomePage from "../pages/HomePage";

import Breakcum from "./Breakcum";

import Title from "./Title";
import routers from "../router";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  function showRoute(routers) {
    let show = null;
    if (routers.length > 0) {
      show = routers.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.main}
          />
        );
      });
    }

    return show;
  }
  return (
    <Router>
      <div className="container">
        <Title />

        <Breakcum />
        <Switch>{showRoute(routers)}</Switch>
      </div>
    </Router>
  );
}

export default App;
