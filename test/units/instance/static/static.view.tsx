import React, { useState } from "react";
import { set } from "../../../../src/core/set/Set";
import { MAIN_STATE } from "./static.state";

export default function MainBody() {
  const [state, setState] = useState<any>(MAIN_STATE.use.get());

  return (
    <>
      <div className="test-actions">
        <h1>useThis use Testing</h1>

        <button
          data-testid={"upserter"}
          onClick={() => {
            MAIN_STATE.use.upsert((pv) => (pv.name = "Max"));

            setState(MAIN_STATE.use.get());
          }}
        >
          UPSERT VALUE
        </button>
        <button
          data-testid={"upserter-2"}
          onClick={() => {
            MAIN_STATE.use.upsert((p) => (p.name = p.name));

            setState(MAIN_STATE.use.get());
          }}
        >
          UPSERT VALUE
        </button>
      </div>

      <div className="result">
        <h2>Output</h2>
        <div data-testid="output">{state?.name ?? "NA"}</div>
      </div>
    </>
  );
}
