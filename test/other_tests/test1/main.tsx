import React, { useEffect } from "react";
import { useVFormState, VFormStateInit } from "./state";
import { set } from "../../../src/setters/set";

export default function Test() {
  const M = VFormStateInit();

  return (
    <>
      <Component2></Component2>
    </>
  );
}

function Component2() {
  useEffect(() => {
    const g = useVFormState().upsert({
      showing_fields: {
        optional: set((pv) => ["g"]),
      },
    });

    console.log(g);
  }, []);

  return <></>;
}
