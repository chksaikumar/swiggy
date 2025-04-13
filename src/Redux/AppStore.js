import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
const appstore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appstore;
