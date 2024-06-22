import React from "react";
import ReactDOM from "react-dom/client";
import { ThisProvider } from "../src/thisProvider";
import App from "./App";
import DeepUpdaterTest from "./DeepUpdaterTest";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThisProvider>
      <DeepUpdaterTest />
    </ThisProvider>
  </React.StrictMode>
);
