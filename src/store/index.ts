import { configureStore } from "@reduxjs/toolkit";
import todosApi from "./todoApi";


const store = configureStore({
    reducer: {
        ['todosApi']: todosApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});

export default store
export type RootState = ReturnType<typeof store.getState>