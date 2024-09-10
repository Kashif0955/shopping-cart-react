import React, { useContext } from "react";
import NavCartDetails from "./NavCartDetails";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../context/ThemeContext"; // Adjust path as necessary

const NavCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext); // Access theme from context

  const increment = (id) => {
    if (id) {
      dispatch({
        type: "addToCart",
        payload: { id }
      });
    } else {
      console.error('Invalid id for increment:', id);
    }
  };

  const decrement = (id) => {
    if (id) {
      dispatch({
        type: "decrement",
        payload: id
      });
    } else {
      console.error('Invalid id for decrement:', id);
    }
  };

  const deleteHandler = (id) => {
    if (id) {
      dispatch({
        type: "deleteFromCart",
        payload: id
      });
    } else {
      console.error('Invalid id for delete:', id);
    }
  };

  const themeStyles = theme === 'dark'
    ? 'bg-gray-800 text-white'
    : 'bg-white text-gray-800';

  return (
    <div className={`p-4 ${themeStyles}`}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <NavCartDetails
            key={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            category={item.category}
            price={item.price}
            qty={item.qty}
            id={item.id}
            increment={increment}
            decrement={decrement}
            deleteHandler={deleteHandler}
          />
        ))
      ) : (
        <h2 className="text-center">Cart is empty</h2>
      )}
    </div>
  );
};

export default NavCart;
