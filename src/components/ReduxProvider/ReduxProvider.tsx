"use client";

import { useStore } from "@/src/state/store";
import { Provider } from "react-redux";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  initialState?: any;
}

const ReduxProvider = ({ children, initialState }: Props) => {
  const store = useStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
