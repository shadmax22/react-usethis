import { useEffect } from "react";
import { useThis } from "../../src/core/useThis/UseThis";

const mainstate = new useThis({
  data: {
    key1: {
      key_1: "green",
    },
  },
})
  .stateName("g")
  .create();

export function UpsertV2() {
  const ms = mainstate();

  const g = ms.get();

  useEffect(() => {
    ms.upsert((pv) => {
      pv.data = { key1: { key_1: "2" } };
    });
  }, []);

  return (
    <>
      <h1>Green</h1>
    </>
  );
}
