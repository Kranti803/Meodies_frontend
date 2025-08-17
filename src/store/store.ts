import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../services/myApi";
import authReducer from "../features/auth/authSlice";
import songReducer from "../features/songs/songSlice";

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    auth: authReducer,
    song: songReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
