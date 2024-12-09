import { ThisProvider } from "../src/thisProvider/index.ts";
import AppBody from "./AppBody.tsx";

export function App() {
  return (
    <ThisProvider>
      <AppBody></AppBody>
    </ThisProvider>
  );
}
