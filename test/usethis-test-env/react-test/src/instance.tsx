import { useThis } from "react-usethis";

export const MyState = new useThis({ data: "gree" })
  .stateName("jbc_state")
  .create();
