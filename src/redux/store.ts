import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shoppingSlice";
import cartReducer from "./cartSlide";
import couponReducer from "./couponSlide";

const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    couponReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
