import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";
export const staticSlice = createSlice({
  name: "static",
  initialState: {
    totalTodos: 0,
    activeTodos: 0,
    completedTodos: 0,
  },
  reducers: {
    updateStatic: (state, action) => {
      state.totalTodos = action.payload.totalTodos;
      state.activeTodos = action.payload.activeTodos;
      state.completedTodos = action.payload.completedTodos;
    },
  },
});

export const { updateStatic } = staticSlice.actions;

export const selectStatic = (state: RootState) => state.static;

export default staticSlice.reducer;
