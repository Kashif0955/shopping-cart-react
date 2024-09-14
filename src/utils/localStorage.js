// Get cart items from localStorage
export const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  // Save cart items to localStorage
  export const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };
  
  // Add an item to the cart in localStorage
  export const addItemToLocalStorage = (newItem) => {
    const currentCart = getCartFromLocalStorage();
    const existingItemIndex = currentCart.findIndex(item => item.id === newItem.id);
    
    if (existingItemIndex > -1) {
      // Item exists, update quantity
      currentCart[existingItemIndex].qty += newItem.qty;
    } else {
      // Item does not exist, add new item
      currentCart.push(newItem);
    }
    saveCartToLocalStorage(currentCart);
  };
  
  // Optional: Remove an item from localStorage
  export const removeItemFromLocalStorage = (itemId) => {
    const currentCart = getCartFromLocalStorage();
    const updatedCart = currentCart.filter(item => item.id !== itemId);
    saveCartToLocalStorage(updatedCart);
  };
  