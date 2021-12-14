import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { loginUser } from "../Api/Login";
import UserType from "../Models/User";

export interface LoginState {
  token: string;
  user: UserType | {};
  status: "idle" | "loading" | "failed";
}

const initialState: LoginState = {
  token: "",
  user: {},
  status: "idle",
};

export const loginAsync = createAsyncThunk(
  "login/loginUser",
  async ({ username, password }: { username: string; password: string }) => {
    const response = await loginUser(username, password);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setReduxToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.token = action.payload.token;
        state.user = action.payload.user;
      });
  },
});

export const { setReduxToken } = loginSlice.actions;

export const selectToken = (state: RootState) => state.login.token;
export const selectUser = (state: RootState) => state.login.user;

export default loginSlice.reducer;
