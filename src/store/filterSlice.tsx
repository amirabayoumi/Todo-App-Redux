import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    statusFilter: "all",
    categoryFilter: "all",
  },
  reducers: {
    updateFilter: (state, action) => {
      if (action.payload.statusFilter) {
        state.statusFilter = action.payload.statusFilter;
      }
      if (action.payload.categoryFilter) {
        state.categoryFilter = action.payload.categoryFilter;
      }
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter;
export const selectStatusFilter = (state: RootState) =>
  state.filter.statusFilter;
export const selectCategoryFilter = (state: RootState) =>
  state.filter.categoryFilter;

export default filterSlice.reducer;
