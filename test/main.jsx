import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./units/App.jsx";
import CoreView from "./units/instance/static/static.view.tsx";
import { UpsertV2 } from "./misc/upsertv2.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App children={<UpsertV2 />}></App>
  </React.StrictMode>
);
