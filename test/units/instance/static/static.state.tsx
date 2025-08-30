import { useThis } from "../../../../src/core/useThis/UseThis_temp";

export const MAIN_STATE = new useThis()
  .default({
    name: "John",
    age: 20,
  })
  .create();
