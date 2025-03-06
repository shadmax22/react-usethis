import { useThis } from "../../../src/useThis/useThis";

export const MainState = new useThis()
  .default({ route: "home" })
  .stateName("main_state")
  .create();
