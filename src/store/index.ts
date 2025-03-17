import { configureStore } from "@reduxjs/toolkit";
import todosApi from "./todoApi";
import filterSlice from "./filterSlice";
import paginationSlice from "./paginationSlice";
import  staticSlice from "./staticSlice";


const store = configureStore({
    reducer: {
        ['todosApi']: todosApi.reducer,
        filter: filterSlice,
        pagination: paginationSlice,
        static: staticSlice



    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});

export default store
export type RootState = ReturnType<typeof store.getState>