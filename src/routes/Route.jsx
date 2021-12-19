import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RUTA } from "./rutasApp";
import HomePage from "../pages/Home.page";

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={RUTA.HOME} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
