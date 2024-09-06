import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext'; // Ensure the path is correct

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className={`flex justify-between items-center p-4 ${theme === "light" ? "bg-amber-50 text-black" : "bg-zinc-700 text-white"}`}>
      <div className="logo">
        <h1 className="text-2xl font-bold">MyStore</h1>
      </div>
      <nav className="nav">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-gray-400">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <button 
              onClick={() => {
                if (theme === "light") {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
              }}
              className={`${
                theme == "light"
                  ? "bg-slate-700 text-white"
                  : "bg-white text-black"
              }`}
              // className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Theme
            </button>
          </li>
        </ul>
      </nav>
      {/* <div className="cart">
        <a href="#cart">
          <img
            src="https://image.shutterstock.com/image-vector/shopping-cart-icon-260nw-1043647820.jpg"
            alt="Cart"
            className="w-8 h-8"
          />
        </a>
      </div> */}
    </header>
  );
};

export default Header;
