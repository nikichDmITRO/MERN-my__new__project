import { createSlice } from "@reduxjs/toolkit";

const initiolState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

export const authSlise = createSlise({
  name: "auth",
  initiolState,
  reducers: {},
});

export default authSlise.reducer
