import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Coupon, CouponState } from "./models";

const initstate = {
  list: [
    {
      id: "0x00001",
      name: "Đại tiệc",
      value: 0.5,
      description:
        "Giảm giá 50% các đơn hàng từ ngày 29/06 đến 01/07, đối với đơn hàng tối thiểu 100k",
      condition: 100000,
    },
  ],
} as CouponState;

const couponSlice = createSlice({
  name: "coupon",
  initialState: initstate,
  reducers: {
    update: (state: CouponState, action: PayloadAction<Coupon>) => {},
  },
});

export const { update } = couponSlice.actions;
export const selectCoupon = (state: RootState) => state.couponReducer;
export default couponSlice.reducer;
