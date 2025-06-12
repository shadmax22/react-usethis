import { useThis } from "react-usethis";
import { main_state } from "./main_state";

export const my_state = new useThis({ data: "green" })
  .onEffect(
    ({ state, resolver }) =>
      state[main_state.this].route == "home2" && resolver(),
    [main_state]
  )
  .stateName("Hello")
  .create();
