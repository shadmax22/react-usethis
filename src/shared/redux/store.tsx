import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const _MAINSTORE = configureStore(
  {
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Disables serializability check
      }),
  }
  // applyMiddleware(functionMiddleware)
);
export type StoreState = ReturnType<typeof _MAINSTORE.getState>;

export default _MAINSTORE;
