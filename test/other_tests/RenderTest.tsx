import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateHandler } from "../../src/redux/slices/StateReducer";
import { useThis } from "../../src/useThis/useThis";

function App() {
  let g = useThis("main", { data: true }).effect(({ state, resolver }) => {
    if (state.data === false) {
      resolver();
    }
  }, []);

  console.log("App Rendered", g);

  return (
    <>
      <button onClick={() => g.upsert.at("data", false)}>Remove State</button>

      <Component></Component>
      <Component3></Component3>
    </>
  );
}

function Component() {
  console.log("C1 Rendered");

  let g = useSelector((t: any) => t?.This.gr) ?? {};

  let dis = useDispatch();

  const incr = () =>
    dis(
      StateHandler.update({ data: { data: (g.data ?? 0) + 1 }, state: "gr" })
    );
  return (
    <>
      <button onClick={incr}>Click Me {g.data}</button>

      <Component2></Component2>
    </>
  );
}
function Component2() {
  console.log("C2 Rendered");
  return <></>;
}
function Component3() {
  console.log("C3 Rendered");
  return <></>;
}
export default App;
