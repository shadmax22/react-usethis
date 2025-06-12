import { useState } from "react";
import { MainState } from "../slices";
import { Component2 } from "./effect.slice";
import { App2 } from "./component2";

export default function MainBody() {
  const [state, setState] = useState<any>(MainState.use.get());

  const { get: getState } = MainState();

  return (
    <>
      <div className="test-actions">
        <h1>useThis Effect Testing</h1>

        <App2></App2>
      </div>

      <div className="result">
        <h2>Output</h2>

        <div>
          Component2 Route
          <div data-testid="output">{Component2.use.get()?.route ?? "NA"}</div>
        </div>
      </div>
    </>
  );
}
