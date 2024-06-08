import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUES = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: INITIAL_VALUES,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
    },
    logout(state, action) {
      state.isAuthenticated = false;
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
