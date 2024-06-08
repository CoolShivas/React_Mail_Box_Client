import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUES = {
  isAuthenticated: false,
  token: "",
  userId: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: INITIAL_VALUES,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      console.log(state.userId, state.token);
    },
    logout(state, action) {
      state.isAuthenticated = false;
      state.token = "";
      state.userId = null;
    },
  },
});

const authConfigStore = configureStore({
  reducer: {
    authen: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;

export default authConfigStore;
