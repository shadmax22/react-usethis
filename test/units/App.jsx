import { ThisProvider } from "../../src/thisProvider/index.ts";

export function App({children}) {
  return (
    <ThisProvider  >
      {children}
    </ThisProvider>
  );
}
