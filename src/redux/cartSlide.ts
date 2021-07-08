import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Cart, CartState } from "./models";

const initstate = {
  list: [],
} as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState: initstate,
  reducers: {
    add: (state: CartState, action: PayloadAction<Cart>) => {
      action.payload.unit = 1;
      state.list.push(action.payload);
    },
    update: (state: CartState, action: PayloadAction<Cart>) => {
      const index = state.list.findIndex(
        (cartItem) => cartItem.food._id == action.payload.food._id
      );
      if (index != null) {
        state.list[index].unit += 1;
      }
    },
    reduce: (state: CartState, action: PayloadAction<Cart>) => {
      const index = state.list.findIndex(
        (cartItem) => cartItem.food._id == action.payload.food._id
      );
      if (index != null) {
        if (state.list[index].unit > 0) state.list[index].unit -= 1;
        else return;
      }
    },
    deleteItem: (state: CartState, action: PayloadAction<Cart>) => {
      state.list = state.list.filter(
        (item) => item.food._id !== action.payload.food._id
      );
    },
  },
});

export const { add, update, reduce, deleteItem } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cartReducer;
export default cartSlice.reducer;
