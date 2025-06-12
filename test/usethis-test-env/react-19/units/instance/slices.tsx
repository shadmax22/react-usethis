import { useThis } from "react-usethis";

export const MainState = new useThis()
  .default({ route: "home" })
  .stateName("main_state")
  .create();
