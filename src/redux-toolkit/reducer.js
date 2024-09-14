// import { createReducer } from "@reduxjs/toolkit";

// export const cartReducer = createReducer(
//   { cartItems: [] },
//   {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       console.log('addToCart action payload:', item);
      
//       const isItemExist = state.cartItems.find((i) => i.id === item.id);
      
//       if (isItemExist) {
//         state.cartItems.forEach((i) => {
//           if (i.id === item.id) i.qty += 1;
//         });
//       } else {
//         state.cartItems.push(item);
//       }
//     },

//     decrement: (state, action) => {
//       const id = action.payload;
//       console.log('decrement action payload:', id);
      
//       const item = state.cartItems.find((i) => i.id === id);
//       if (item && item.qty > 1) {
//         item.qty -= 1;
//       }
//     },

//     deleteFromCart: (state, action) => {
//       const id = action.payload;
//       console.log('deleteFromCart action payload:', id);
      
//       state.cartItems = state.cartItems.filter((i) => i.id !== id);
//     },
//   }
// );


import { createReducer } from "@reduxjs/toolkit";

// Action creators (assumed to be defined elsewhere)
export const addToCart = (product) => ({
    type: 'addToCart',
    payload: product,
});

export const decrement = (id) => ({
    type: 'decrement',
    payload: id,
});

export const deleteFromCart = (id) => ({
    type: 'deleteFromCart',
    payload: id,
});

// Helper function to get cart items from localStorage
const getCartItemsFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
};

// Initial state
const initialState = {
    cartItems: getCartItemsFromLocalStorage(),
};

// Reducer definition
export const cartReducer = createReducer(initialState, {
    addToCart: (state, action) => {
        const item = action.payload;
        console.log('addToCart action payload:', item);

        const existingItem = state.cartItems.find((i) => i.id === item.id);

        if (existingItem) {
            existingItem.qty += 1;
        } else {
            state.cartItems.push({ ...item, qty: 1 });
        }

        // Update localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decrement: (state, action) => {
        const id = action.payload;
        console.log('decrement action payload:', id);

        const item = state.cartItems.find((i) => i.id === id);
        if (item && item.qty > 1) {
            item.qty -= 1;
        }

        // Update localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    deleteFromCart: (state, action) => {
        const id = action.payload;
        console.log('deleteFromCart action payload:', id);

        state.cartItems = state.cartItems.filter((i) => i.id !== id);

        // Update localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
});
