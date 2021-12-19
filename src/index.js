import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteApp from "./routes/Route";
import ProductProvider from "./context/ProductContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <RouteApp>
        <App />
      </RouteApp>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
