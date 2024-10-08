// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { useMemo } from "react";
import accessTokenReducer from "./slices/accessTokenSlice";

let store;

const makeStore = () =>
  configureStore({
    reducer: {
      accessToken: accessTokenReducer,
    },
  });

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore();

  if (preloadedState && _store) {
    _store = makeStore({
      ..._store.getState(),
      ...preloadedState,
    });
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
