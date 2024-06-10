import { configureStore, createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "emails",
  initialState: { mails: [], receiversId: null },
  reducers: {
    sendMails: (state, action) => {
      state.mails = [...state.mails, action.payload];
      state.receiversId = action.payload.receiversId;
    },
    settingMails: (state, action) => {
      state.mails = action.payload;
    },
  },
});

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
    mailing: mailSlice.reducer,
  },
});

export const authActions = authSlice.actions;

export const mailActions = mailSlice.actions;

export default authConfigStore;
