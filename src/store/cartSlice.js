// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   totalCount: 0,
//   cartItems: []
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.totalCount += 1;
//     },
//     decrement: (state) => {
//       state.totalCount -= 1;
//     },
//     addToCart: (state, action) => {
//       const found = state.cartItems.find((x) => x.id === action.payload.id);
      
//       if (found) {
//         state.cartItems = state.cartItems.map((x) =>
//           x.id === action.payload.id ? { ...x, count: x.count + 1 } : x
//         );
//       } else {
//         state.cartItems.push({ ...action.payload, count: 1 });
//       }
//       state.totalCount += 1; 
//     }
//   }
// });

// export const cartReducer= cartSlice.reducer;
// export const {incremenet, decremenet}=cartSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity < item.stock) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      }
    }
  }
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
