import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { App } from "../../App.jsx";
import CoreBody from "./effect.view.tsx";

describe("App", () => {
  it("useThis-Instance Create effect", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );

    fireEvent.click(screen.getByTestId("change_route"));
    fireEvent.click(screen.getByTestId("execute_effects"));

    expect(screen.getByTestId("output").innerHTML).toBe("NA");
    // expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
    //   "John"
    // );

    // fireEvent.click(screen.getByTestId("default-value-replacer"));

    // expect(screen.getByTestId("default-value").innerHTML).toBe("Max");
    // expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
    //   "Max"
    // );
  });
});
