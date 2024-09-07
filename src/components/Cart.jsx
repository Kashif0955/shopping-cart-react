import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Cart = ({ item }) => {
  const { theme } = useContext(ThemeContext);
  const { id, thumbnail, category, title, price } = item;

  return (
    <Link
      to={`/products/${id}`}
      className={`lg:w-1/4 md:w-1/2 w-full p-4 transform transition-transform duration-300 hover:scale-105`}
    >
      <div
        className={`bg-${theme === 'light' ? 'white text-black' : 'zinc-700 text-white'} shadow-lg rounded-lg overflow-hidden`}
      >
        <div className="relative h-48">
          <img
            alt={title}
            className="object-cover object-center w-full h-full"
            src={thumbnail}
          />
        </div>
        <div className="p-4">
          <h3 className={`text-xs tracking-widest ${theme === 'light' ? 'text-black-500' : 'text-gray-400'}`}>
            {category}
          </h3>
          <h2 className={`text-lg font-semibold mt-1 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
            {title}
          </h2>
          <p className={`mt-1 text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
