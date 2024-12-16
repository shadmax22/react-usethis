import React from "react";
import { my_state } from "./state";
import { main_state } from "./main_state";

export function InstanceView() {
  const m = main_state();

  return (
    <>
      <button onClick={() => m.upsert.at("route", "component")}>
        CLICK {m.get()?.route ?? ""}
      </button>
      <button onClick={() => m.upsert.at("route", "home")}>UnMount</button>
      <button onClick={() => m.upsert.at("route", "home2")}>Resolve</button>

      {m.get().route === "component" && <Comp2></Comp2>}
    </>
  );
}

function Comp2() {
  const g = my_state();

  return (
    <>
      <button onClick={() => g.upsert.at("data", "1")}>
        CLICK me {g.get()?.data ?? ""}
      </button>
    </>
  );
}
