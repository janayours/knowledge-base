import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import KBHome from "./KBHome";

const App = () => (
  <div>
    <Header></Header>
    <KBHome></KBHome>
   
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
