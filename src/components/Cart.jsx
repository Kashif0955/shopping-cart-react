import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import '../styles/cart.css'

const Cart = ({ productid, title, price, category, thumbnail, handler }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={`/products/${productid}`}
      className={`lg:w-1/4 md:w-1/2 sm:w-1/3 w-full p-4 transform transition-transform duration-300 hover:scale-105`}
    >
      <div
        className={`bg-${theme === "light" ? "white text-black" : "zinc-800 text-white"} shadow-lg rounded-lg overflow-hidden`}
      >
        <div className="relative h-48">
          <img
            alt={title}
            className="object-cover w-full h-full"
            src={thumbnail}
          />
        </div>
        <div className="p-4">
          <h3
            className={`text-xs tracking-widest ${theme === "light" ? "text-black" : "text-white"}`}
          >
            {category}
          </h3>
          <h2
            className={`text-lg font-semibold mt-1 ${theme === "light" ? "text-gray-900" : "text-white"}`}
          >
            {title}
          </h2>
          <p
            className={`mt-1 text-xl font-semibold ${theme === "light" ? "text-gray-900" : "text-white"}`}
          >
            ${price}
          </p>
          <button
            className={`flex ml-auto text-white border-0 py-2 px-6 focus:outline-none ${
              theme === "light"
                ? "bg-indigo-500 hover:bg-indigo-600"
                : "bg-indigo-700 hover:bg-indigo-800"
            } rounded`}
            onClick={() =>
              handler({
                title,
                price,
                category,
                thumbnail,
                productid,
                quantity: 1,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Cart;


