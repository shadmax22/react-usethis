import { useEffect } from "react";
import { getThis, useThis } from "../index";
import { set } from "../index";

export default function DeepUpdaterTest() {
  let { This, update, upsert, get } = useThis("MY_STATE", {
    k1: {
      k2: {
        k3: "hello",
      },
    },
  });

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
          upsert(set("It works", ["k1", "k2", "k3"]));
          console.log(get());
        }}
      >
        GREEN{get().k1.k2.k3}
      </button>
    </>
  );
}
