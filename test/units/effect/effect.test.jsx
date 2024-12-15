import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { App } from "../App.jsx";
import EffectView from "./effect.view.tsx";

describe("App", () => {
  // it("useThis Default-Value", () => {
  //   render(<App><EffectView></EffectView></App>);
  //   // fireEvent.click(screen.getByTestId("clicker"));
  //   // expect(App.innerHTML).toBe("yellow");
  //   expect(screen.getByTestId("default-value").innerHTML).toBe("John");
  //   expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
  //     "John"
  //   );
  //   fireEvent.click(screen.getByTestId("default-value-replacer"));
  //   expect(screen.getByTestId("default-value").innerHTML).toBe("Max");
  //   expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
  //     "Max"
  //   );
  // });
});
