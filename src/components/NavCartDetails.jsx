// import React from 'react';
// import { AiFillDelete } from 'react-icons/ai';

// const NavCartDetails = ({ id, thumbnail, category, title, price, qty, increment, decrement, deleteHandler }) => {
//   return (
//     <div className="bg-gray-200 w-full rounded-lg my-8 p-4 grid grid-cols-[1fr_3fr_1fr_1fr] items-center">
//       <img
//         src={thumbnail}
//         alt="Item"
//         className="w-full h-[200px] object-contain"
//       />
//       <article>
//         <h3 className="font-bold text-lg">{title}</h3>
//         <p className="text-gray-800">${price}</p>
//         <p className="text-gray-800">{category}</p>
//       </article>
//       <div className="flex items-center">
//         <button
//           onClick={() => decrement(id)} // Ensure 'id' is passed
//           className="w-8 h-8 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           -
//         </button>
//         <p className="w-8 h-8 grid place-items-center text-black">{qty}</p>
//         <button
//           onClick={() => increment(id)} // Ensure 'id' is passed
//           className="w-8 h-8 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           +
//         </button>
//       </div>
//       <AiFillDelete
//         onClick={() => deleteHandler(id)} // Ensure 'id' is passed
//         className="cursor-pointer text-xl m-auto hover:text-red-500"
//       />
//     </div>
//   );
// };

// export default NavCartDetails;


import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const NavCartDetails = ({ id, thumbnail, category, title, price, qty, increment, decrement, deleteHandler }) => {
  return (
    <div className="bg-gray-200 w-full rounded-lg my-8 p-4 grid grid-cols-[1fr_3fr_1fr_1fr] items-center">
      <img
        src={thumbnail}
        alt="Item"
        className="w-full h-[200px] object-contain"
      />
      <article>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-800">${price}</p>
        <p className="text-gray-800">{category}</p>
      </article>
      <div className="flex items-center">
        <button
          onClick={() => decrement(id)} // Ensure 'id' is passed
          className="w-8 h-8 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          -
        </button>
        <p className="w-8 h-8 grid place-items-center text-black">{qty}</p>
        <button
          onClick={() => increment(id)} // Ensure 'id' is passed
          className="w-8 h-8 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +
        </button>
      </div>
      <AiFillDelete
        onClick={() => deleteHandler(id)} // Ensure 'id' is passed
        className="cursor-pointer text-xl m-auto hover:text-red-500"
      />
    </div>
  );
};

export default NavCartDetails;
