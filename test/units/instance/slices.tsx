import { useThis } from "../../../exports";

export const MainState = new useThis()
  .default({ route: "home" })
  .stateName("main_state")
  .create();
