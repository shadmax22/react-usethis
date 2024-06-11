import { describe, expect } from "vitest";
import { useThis } from "../src/useThis/useThis";
describe("useThis", () => {
  // const U = () => {
  //   const TestComponent = () => {
  //     const result = useThis("green", {});
  //     return <div>{result}</div>;
  //   };
  // };
  expect(useThis("green", {})).toEqual("g");
});
