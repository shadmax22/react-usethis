import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { MainContainer } from "./MainContainer";

describe("App", () => {
  it("renders the App component", () => {
    render(<MainContainer />);

    // fireEvent.click(screen.getByTestId("clicker"));

    // expect(appBody.innerHTML).toBe("yellow");
    expect(screen.getByTestId("default-value").innerHTML).toBe("John");
    expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
      "John"
    );
  });
});
