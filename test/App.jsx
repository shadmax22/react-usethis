import { useEffect } from "react";
import { useThis } from "../index";
import { set } from "../index";

export default function App() {
  let NewState = useThis("HelloWorld");

  let { This } = NewState;

  let Unkown1 = "key1";
  let Unkown2 = "key2";
  let Unkown3 = 0;
  let Unkown4 = 1;

  let newUnknown = "from";

  let Unkown5 = {
    [newUnknown]: 56,
  };

  return (
    <>
      <h2>HEEHE</h2>
    </>
  );
}
