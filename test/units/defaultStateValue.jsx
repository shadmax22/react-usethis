import { useThis } from "../../src/useThis/useThis";
import { res } from "../utils/res";

export function DefaultStateValue() {
  let state = useThis("my_state", {
    id: "hello_world",
  });

  return res(state?.This?.id);
}
