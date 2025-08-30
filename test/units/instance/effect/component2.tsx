import React from "react";
import { Component2 } from "./effect.slice";
import { App3 } from "./component3";

export function App2() {
  let state = Component2();
  let route = state.get()?.route;

  return (
    <>
      <p>This is Component2</p>

      <button
        data-testid="change_route"
        onClick={() => state.upsert.at("route", "comp3")}
      >
        Open Route 2
      </button>

      {route == "comp3" && <App3></App3>}
    </>
  );
}
