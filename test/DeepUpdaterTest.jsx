import { useEffect } from "react";
import { getThis, useThis } from "../index";
import { set } from "../index";

export default function DeepUpdaterTest() {
  let { This, update, upsert, get } = useThis("MY_STATE", ["g", "gr"]);

  useEffect(() => {
    // console.log(This);
    // debugger;
    // console.log(upsert(set({ gR: "g" }, "g.gr")));

    console.log(get());
  }, [get()]);

  return (
    <>
      <button
        onClick={() => {
          upsert(set("grr", [3]));
          console.log(get());
        }}
      >
        GREEN
      </button>
    </>
  );
}
