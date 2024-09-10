// import { createReducer } from "@reduxjs/toolkit";

// export const cartReducer = createReducer({
//     cartItems : []
// },{
//     addToCart: (state, action) => {
//         const item = action.payload;
//         const isItemExist = state.cartItems.find((i) => i.id === item.id);
  
//         if (isItemExist) {
//           state.cartItems.forEach((i) => {
//             if (i.id === item.id) i.quantity += 1;
//           });
//         } else {
//           state.cartItems.push(item);
//         }
//       },
  
//       decrement: (state, action) => {
//         const item = state.cartItems.find((i) => i.id === action.payload);
//         if (item.quantity > 1) {
//           state.cartItems.forEach((i) => {
//             if (i.id === item.id) i.quantity -= 1;
//           });
//         }
//       },
  
//       deleteFromCart: (state, action) => {
//         state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
//       },
    
// })

import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  { cartItems: [] },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log('addToCart action payload:', item);
      
      const isItemExist = state.cartItems.find((i) => i.id === item.id);
      
      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.qty += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },

    decrement: (state, action) => {
      const id = action.payload;
      console.log('decrement action payload:', id);
      
      const item = state.cartItems.find((i) => i.id === id);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },

    deleteFromCart: (state, action) => {
      const id = action.payload;
      console.log('deleteFromCart action payload:', id);
      
      state.cartItems = state.cartItems.filter((i) => i.id !== id);
    },
  }
);
