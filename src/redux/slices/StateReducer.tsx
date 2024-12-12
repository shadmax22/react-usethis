import { createSlice } from "@reduxjs/toolkit";
export const StateReducer = createSlice({
  name: "StateReducer",
  initialState: {},
  reducers: {
    append: (state: any, action) => {
      if (Array.isArray(action.payload.data)) {
        state[action.payload.state] = [
          ...(state[action.payload.state] ?? []),
          ...action.payload.data,
        ];
      } else {
        state[action.payload.state] = {
          ...(state[action.payload.state] ?? {}),
          ...action.payload.data,
        };
      }
    },
    update: (state: any, action) => {
      if (Array.isArray(action.payload.data)) {
        state[action.payload.state] = [...action.payload.data];
      } else {
        state[action.payload.state] = {
          ...action.payload.data,
        };
      }
    },
    upsert: (state: any, action) => {
      // index = greeen.k.someValue.value
      let { data, active_state } = action.payload;

      if ((state[active_state] ?? null) === null) state[active_state] = {};

      state[active_state] = data;
      return state;
    },
    removeState: (state: any, action) => {
      let { active_state } = action.payload;

      if ((state[active_state] ?? null) === null) state[active_state] = {};

      delete state[active_state];

      return state;
    },

    set: (state: any, action) => {
      if (Array.isArray(action.payload.data)) {
        state[action.payload.state] = [
          ...state[action.payload.state],
          ...action.payload.data,
        ];
      } else {
        state[action.payload.state] = {
          ...state[action.payload.state],
          ...action.payload.data,
        };
      }
    },
  },
});

export const { ...StateHandler } = StateReducer.actions;
export default StateReducer.reducer;
