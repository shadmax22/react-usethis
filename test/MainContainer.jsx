import { ThisProvider } from "../src/thisProvider";
import App from "./App.tsx";

export function MainContainer() {
  return (
    <ThisProvider>
      <App></App>
    </ThisProvider>
  );
}
