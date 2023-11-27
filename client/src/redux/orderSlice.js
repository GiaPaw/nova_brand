

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      // Thêm thông tin đơn hàng vào store
      state.push(action.payload);
    },
    clearOrder: (state) => {
      // Xóa thông tin đơn hàng sau khi hoàn thành đơn hàng
      return [];
    },
  },
});

export const { addOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
