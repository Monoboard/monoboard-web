import React from "react";
import ReactDOM from "react-dom";
import Routes from "./services/Routes";

const App = () => <h1>monoboard</h1>;

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
