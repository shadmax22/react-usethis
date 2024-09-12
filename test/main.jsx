import React from "react";
import ReactDOM from "react-dom/client";
import { ThisProvider } from "../src/thisProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThisProvider>
      <App></App>
    </ThisProvider>
  </React.StrictMode>
);
