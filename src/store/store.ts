import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
