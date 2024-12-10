import React from "react";
import { useThis } from "../../src/useThis/useThis";

export default function App() {
  let my_global_state = useThis("main_state", { clicked: 0 });

  return (
    <>
      <button
        onClick={() => my_global_state.upsert.at("clicked", (t) => t + 1)}
      >
        Clicked {my_global_state.get().clicked}
      </button>
      <Component1></Component1>
    </>
  );
}

function Component1() {
  let my_state = useThis("my_state", { data: true }).effect(
    ({ state, resolver }: any) => {
      if (state.main_state.clicked === 5) {
        debugger;
        resolver();
      }
    },
    ["main_state"]
  );
  return <></>;
}
