import { useThis } from "../../../../src/core/useThis/UseThis";

export const MAIN_STATE = new useThis()
  .default({
    name: "John",
    age: 20,
  })
  .create();
