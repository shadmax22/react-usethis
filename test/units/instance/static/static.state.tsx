import { useThis } from "../../../../src/core/useThis/useThis";

export const MAIN_STATE = new useThis()
  .default({
    name: "John",
    age: 20,
  })
  .create();
