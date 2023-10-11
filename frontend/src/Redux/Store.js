import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/Auth/authSlice";
import BlogSlice from "./Features/BlogSlice";
import MarketSlice from "./Features/MarketSlice";
export const Store = configureStore({
  reducer: {
    auth: authReducer,
    blog: BlogSlice,
    market: MarketSlice,
  },
});
