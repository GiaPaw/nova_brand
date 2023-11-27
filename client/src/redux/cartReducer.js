import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    },
    initializeCart: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Export actions from the cart slice
export const { addToCart, removeItem, resetCart, initializeCart  } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
