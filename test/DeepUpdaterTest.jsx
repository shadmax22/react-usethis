import { useEffect } from "react";
import { getThis, useThis } from "../index";
import { set } from "../index";

export default function DeepUpdaterTest() {
  let { This, update, upsert } = useThis("MY_STATE", { g: {} });

  useEffect(() => {
    // console.log(This);
    // debugger;
    console.log(upsert(set({ gR: "g" }, "g.gr")));
  }, []);

  console.log(This);

  return <></>;
}
