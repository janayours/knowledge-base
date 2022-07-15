import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import KBHome from "./KBHome";

const App = () => (
  <div>
    <header className="bg-purple-900 text-white p-3 font-mono text-3xl">
      Knowledge Base
    </header>
    <KBHome></KBHome>
    <footer className="bg-purple-900 text-white p-2 font-mono ">
      Copyrights @ HGS Digital
    </footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
