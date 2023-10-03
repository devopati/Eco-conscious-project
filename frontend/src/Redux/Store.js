import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/Auth/authSlice";
import BlogSlice from "./Features/BlogSlice";
export const Store = configureStore({
  reducer: {
    auth: authReducer,
    blog: BlogSlice,
  },
});
