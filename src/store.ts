import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from "./slices/accessTokenSlice";

const store = configureStore({
  reducer: {
    accessToken: accessTokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
