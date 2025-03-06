import React from "react";
import { MainState } from "../slices";

export function App3() {
  return (
    <>
      <button
        data-testid="execute_effects"
        onClick={() => MainState.use.upsert.at("route", "default")}
      >
        RESET MAIN STATE TO DEFAULT
      </button>
    </>
  );
}
