import { ThisProvider } from "../src/thisProvider";
import App from "./App.jsx";

export function MainContainer() {
  return (
    <ThisProvider>
      <App></App>
    </ThisProvider>
  );
}
