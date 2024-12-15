import React from "react";
import ReactDOM from "react-dom/client";
import { ThisProvider } from "../src/thisProvider";
import {App} from "./units/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <App body={<h1>G</h1>}></App>
  </React.StrictMode>
);
