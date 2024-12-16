import { useThis } from "../../../src/useThis/useThis";
import { main_state } from "./main_state";

export const my_state = new useThis({ data: "green" });

my_state.on.effect(
  ({ state, resolver }) =>
    state[main_state.stateName].route == "home2" && resolver(),
  [main_state]
);
