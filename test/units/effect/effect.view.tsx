import React from "react";
import { useThis } from "../../../src/useThis/useThis";

export default function EffectView() {
  let my_global_state = useThis("main_state", { route: "main" });

  return (
    <>
      <button onClick={() => my_global_state.upsert.at("route", "component1")}>
        Open Component 2
      </button>
      <Component1></Component1>
      <Component2></Component2>
    </>
  );
}

function Component1() {
  let my_state = useThis("my_state", { data: true }).effect(
    ({ state, resolver }: any) => {
      if (state.main_state.clicked > 1) {
        resolver();
      }
    },
    ["main_state"]
  );
  return <></>;
}
function Component2() {
  let my_state = useThis("my_state", { data: true }).effect(
    ({ state, resolver }: any) => {
      console.log("g");
      if (state.main_state.clicked > 1) {
        resolver();
      }
    },
    ["main_state"]
  );
  return <></>;
}
