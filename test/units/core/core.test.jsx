import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { App } from "../App.jsx";
import CoreBody from "./core.tsx";

describe("App", () => {
  it("useThis Default-Value", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );

    // fireEvent.click(screen.getByTestId("clicker"));

    // expect(App.innerHTML).toBe("yellow");
    expect(screen.getByTestId("default-value").innerHTML).toBe("John");
    expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
      "John"
    );

    fireEvent.click(screen.getByTestId("default-value-replacer"));

    expect(screen.getByTestId("default-value").innerHTML).toBe("Max");
    expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
      "Max"
    );
  });

  it("useThis Upsert", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );
    fireEvent.click(screen.getByTestId("function-setter"));
    fireEvent.click(screen.getByTestId("function-runner"));
    expect(screen.getByTestId("default-value").innerHTML).toBe("Denver");
    expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
      "Denver"
    );
  });
  it("useThis Upsert Nested object", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );
    fireEvent.click(screen.getByTestId("upsert-nested_object"));

    expect(screen.getByTestId("upsert-nested_object-output").innerHTML).toBe(
      "JOHN123"
    );
  });

  it("useThis Update", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );
    fireEvent.click(screen.getByTestId("updater"));
    expect(screen.getByTestId("default-value").innerHTML).toBe("Hopper");
    expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
      "Hopper"
    );
    fireEvent.click(screen.getByTestId("updater-with-pv-value"));
    expect(screen.getByTestId("default-value").innerHTML).toBe("HopperHopper");
    expect(screen.getByTestId("default-value-replace-check").innerHTML).toBe(
      "HopperHopper"
    );
  });
  it("useThis Append", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );
    fireEvent.click(screen.getByTestId("appender"));
    expect(screen.getByTestId("default-value").innerHTML).toBe("HopperHopper");
    expect(screen.getByTestId("append-test").innerHTML).toBe("BOB");
    fireEvent.click(screen.getByTestId("appender-with-pvvalue"));
    expect(screen.getByTestId("default-value").innerHTML).toBe("HopperHopper");
    expect(screen.getByTestId("append-test").innerHTML).toBe("BOBBOB");
  });
  it("useThis useEffect-diff", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );

    expect(screen.getByTestId("total-rendered").innerHTML).toBe("1");
  });
  it("useThis UTWP Upsert", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );

    fireEvent.click(screen.getByTestId("upserter-utwp-value"));
    expect(screen.getByTestId("utwp-value").innerHTML).toBe("John");

    fireEvent.click(screen.getByTestId("upserter-utwp-value-fun"));
    fireEvent.click(screen.getByTestId("upserter-utwp-value-fun-verify"));
    expect(screen.getByTestId("utwp-value").innerHTML).toBe("Johnx");
  });
  it("useThis upsert at", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );

    fireEvent.click(screen.getByTestId("upsert-at"));
    expect(screen.getByTestId("upsertat-value").innerHTML).toBe("Doe");
  });
  it("useThis upsert atFun", () => {
    render(
      <App>
        <CoreBody></CoreBody>
      </App>
    );

    fireEvent.click(screen.getByTestId("upsert-atFun-setter"));
    fireEvent.click(screen.getByTestId("upsert-atFun-runner"));
    expect(screen.getByTestId("upsertat-value").innerHTML).toBe("Doe2");
  });
});
