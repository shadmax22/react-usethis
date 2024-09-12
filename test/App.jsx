import { useEffect } from "react";
import { useThis } from "../index";
import { set } from "../index";

export default function App() {
  let state = useThis("test_state", { name: "John" });

  return (
    <>
      <h1>Test Cases</h1>
      <div className="test-cases">
        <h1>Default Value</h1>
        {/* <button
          data-testid={"default-value-replace"}
          onClick={() => {
            state.upsert({
              name: set("Max"),
            });
          }}
        >
          CLICK ME
        </button> */}
        <h2 data-testid={"default-value"}>{state?.get()?.name}</h2>
        <h2 data-testid={"default-value-replace-check"}>
          <SecondComponent></SecondComponent>
        </h2>
      </div>
    </>
  );
}

function SecondComponent() {
  let state = useThis("test_state", { name: "Doe" });

  return <>{state?.get()?.name}</>;
}
