// src/slices/accessTokenSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccessTokenState {
  token: string | null;
}

const initialState: AccessTokenState = {
  token: null,
};

const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearAccessToken: (state) => {
      state.token = null;
    },
  },
});

export const { setAccessToken, clearAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
