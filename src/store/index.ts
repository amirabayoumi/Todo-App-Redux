import { configureStore } from "@reduxjs/toolkit";
import todosApi from "./todoApi";
import filterSlice from "./filterSlice";
import paginationSlice from "./paginationSlice";


const store = configureStore({
    reducer: {
        ['todosApi']: todosApi.reducer,
        filter: filterSlice,
        pagination: paginationSlice



    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});

export default store
export type RootState = ReturnType<typeof store.getState>