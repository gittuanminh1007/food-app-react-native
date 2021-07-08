// import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { FoodAvailability } from "./models";
import { FoodModel } from "./models/FoodModel";
import { Categories } from "./models/CategoryModel";

const initstate: FoodAvailability = {
  foods: FoodModel,
  categories: Categories,
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initstate,
  reducers: {
    load: (state, action) => {},
  },
});

export const { load } = shopSlice.actions;
export const selectShop = (state: RootState) => state.shopReducer;
export default shopSlice.reducer;
