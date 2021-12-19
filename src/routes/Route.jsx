import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RUTA } from "./rutasApp";
import HomePage from "../pages/Home.page";
import MisComprasPage from "../pages/MisCompras.page";

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={RUTA.HOME} component={HomePage} />
        <Route exact path={RUTA.MIS_COMPRAS} component={MisComprasPage} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
