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

/*

Rquery 

$("."g .gr).css("bg",)

<Rquery>

<div className="g">

    <div class="gr"></div>


</div>

1. children

2. children2

<div className="g">

    <div class="gr" style="background...."></div>


</div>
</Rquery>


*/
