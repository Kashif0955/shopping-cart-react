import React from "react";
import NavCartDetails from "./NavCartDetails";
import { useSelector, useDispatch } from "react-redux";

const NavCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <NavCartDetails
            key={item.id} // Ensure this is unique for each item
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
        <h2>Cart is empty</h2>
      )}
    </>
  );
};

export default NavCart;
