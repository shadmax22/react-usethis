import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { App } from "../../App.jsx";
import CoreBody from "./static.view.tsx";

describe("App", () => {
  it("useThis-Instance Default-Value", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );
    expect(screen.getByTestId("output").innerHTML).toBe("John");

    fireEvent.click(screen.getByTestId("upserter"));

    expect(screen.getByTestId("output").innerHTML).toBe("Max");
  });
});
