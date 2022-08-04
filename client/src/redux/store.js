import { configureStore } from "@reduxjs/toolkit";
import authSlise from "./features/auth/authSlise";

export const store = configureStore({
  reducer: {
    auth:authSlise
  },
});
