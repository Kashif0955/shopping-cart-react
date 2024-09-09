import React from "react";

const CategotryChip = ({ category, isChosen, onClick }) => {
  const { name } = category;

  return (
    <div
      onClick={onClick}
      className={`${
        isChosen
          ? "bg-purple-600 text-white border-purple-600"
          : "bg-gray-100 text-gray-800 border-gray-300"
      } p-3 cursor-pointer hover:bg-purple-200 border rounded-full transition duration-300 ease-in-out transform hover:scale-105`}
    >
      <h1 className="text-sm font-semibold">{name}</h1>
    </div>
  );
};

export default CategotryChip;

