import { ThisProvider } from "../src/thisProvider";
import App from "./App";

export function MainContainer() {
  return (
    <ThisProvider>
      <App></App>
    </ThisProvider>
  );
}
