import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from './reducer';

// Load cart items from localStorage or use an empty array
const preloadedState = {
    cart: {
        cartItems: JSON.parse(localStorage.getItem("cart")) || [],
    },
};

// Create the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState,
});

// Update localStorage whenever the state changes
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart.cartItems));
});

export default store;
