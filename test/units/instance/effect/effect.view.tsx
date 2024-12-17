import React from "react";
import { useThis } from "../../../../src/useThis/useThis";
import _MAINSTORE from "../../../../src/redux/store";

const MainState = new useThis().default({ route: "home" }).create();
const Component2 = new useThis()
  .default({ route: "home" })
  .onEffect(
    ({ resolver, state }) => {
      if (state[MainState.this].route == "home") {
        resolver();
      }
    },
    [MainState]
  )
  .create();

export default function App() {
  let state = MainState();
  let { route } = state.get();
  return (
    <>
      <p>
        Basic Garbage collection test, Current Route is <b>{route}</b>.
      </p>

      <button onClick={() => state.upsert.at("route", "comp2")}>
        Open Route 2
      </button>

      <h3>Here Component will be rendered</h3>

      {route == "comp2" && <App2></App2>}

      <b>
        Resolve Status:-{" "}
        <span>
          {_MAINSTORE.getState().This?.[Component2.this] ? "AVLB" : "NA"}
        </span>
      </b>
    </>
  );
}
export function App2() {
  let state = Component2();
  let { route } = state.get();
  return (
    <>
      <p>This is Component2</p>

      <button onClick={() => state.upsert.at("route", "comp3")}>
        Open Route 3
      </button>

      <h3>Here Component3 will be rendered</h3>

      {route == "comp3" && <App3></App3>}

      <b>
        Resolve Status:-{" "}
        <span>
          {_MAINSTORE.getState().This?.[Component2.this] ? "AVLB" : "NA"}
        </span>
      </b>

      <h3>Here Component2 ends</h3>
    </>
  );
}
export function App3() {
  return (
    <>
      <h3>Here Component will be rendered</h3>
      <p>This is Component2</p>

      <button onClick={() => MainState().upsert.at("route", "home")}>
        Go Home
      </button>

      <h3>Here Component ends</h3>
    </>
  );
}
