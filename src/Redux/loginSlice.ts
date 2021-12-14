import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";

export interface LoginState {
  token: string;
  status: "idle" | "loading" | "failed";
}

const initialState: LoginState = {
  token: "",
  status: "idle",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setReduxToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setReduxToken } = loginSlice.actions;

export const selectToken = (state: RootState) => state.login.token;

export default loginSlice.reducer;
