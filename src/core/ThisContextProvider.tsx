import ThisContext from "./thisContext/context";

export default function ThisContextProvider(props: any) {
  return <ThisContext.Provider {...props} value={{}}></ThisContext.Provider>;
}
