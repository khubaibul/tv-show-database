import { configureStore } from "@reduxjs/toolkit";
import { showsApi } from "../features/shows/showsSlice";

export const store = configureStore({
  reducer: {
    [showsApi.reducerPath]: showsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(showsApi.middleware),
});
