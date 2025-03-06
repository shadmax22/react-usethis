import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./units/App.jsx";
import CoreView from "./units/instance/effect/effect.view.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App children={<CoreView />}></App>
  </React.StrictMode>
);
