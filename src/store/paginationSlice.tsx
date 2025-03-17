import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 4,
  },
  reducers: {
    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { updatePage } = paginationSlice.actions;

export const selectPagination = (state: RootState) => state.pagination;

export default paginationSlice.reducer;
