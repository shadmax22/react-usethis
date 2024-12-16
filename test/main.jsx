import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./units/App.jsx";
import { InstanceView } from "./units/instance/instance.view.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App children={<InstanceView />}></App>
  </React.StrictMode>
);
