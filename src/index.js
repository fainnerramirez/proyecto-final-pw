import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteApp from "./routes/Route";

ReactDOM.render(
  <React.StrictMode>
    <RouteApp>
      <App />
    </RouteApp>
  </React.StrictMode>,
  document.getElementById("root")
);
