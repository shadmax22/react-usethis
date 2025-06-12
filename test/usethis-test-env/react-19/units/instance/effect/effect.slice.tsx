import { useThis } from "react-usethis";

export const MainState = new useThis()
  .default({ route: "home" })
  .stateName("main_state")
  .create();
export const Component2 = new useThis()
  .default({ route: "home" })
  .stateName("component_2")
  .onEffect(
    ({ resolver, state }) => {
      if (state(MainState).route == "default") {
        resolver();
      }
    },
    [MainState]
  )
  .create();
