import { useThis } from "react-usethis";

export const MAIN_STATE = new useThis()
  .default({
    name: "John",
    age: 20,
  })
  .create();
