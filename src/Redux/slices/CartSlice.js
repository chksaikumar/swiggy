import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.items.length) {
        state.items.splice(index, 1);
      }

      //   state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },

    incrementQuentity: (state, action) => {
      const item = state.items[action.payload];

      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart, incrementQuentity } =
  cartSlice.actions;
