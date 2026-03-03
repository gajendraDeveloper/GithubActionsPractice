import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0, // total quantity
  total: 0,  // total price
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price, quantity, ...rest } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // remove old values
        state.amount -= existingItem.quantity;
        state.total -= existingItem.price * existingItem.quantity;

        // update quantity
        existingItem.quantity = quantity;
      } else {
        state.cartItems.push({
          id,
          price: Number(price), // ✅ safety
          quantity,
          ...rest,
        });
      }

      // add new values
      state.amount += quantity;
      state.total += Number(price) * quantity;
    },

    increase: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (!item) return;

      item.quantity += 1;
      state.amount += 1;
      state.total += item.price;
    },

    decrease: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (!item || item.quantity === 1) return;

      item.quantity -= 1;
      state.amount -= 1;
      state.total -= item.price;
    },

    removeFromCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (!item) return;

      state.amount -= item.quantity;
      state.total -= item.price * item.quantity;
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  increase,
  decrease,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
