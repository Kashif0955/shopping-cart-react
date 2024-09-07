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
    <header className={`flex justify-between items-center p-2.5 px-5 ${theme === "light" ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-100"}`}>
      <div className="logo">
        <h1 className={`text-2xl font-bold m-0 ${theme === "light" ? "text-white" : "text-gray-100"}`}>MKStore</h1>
      </div>
      <nav className="nav">
        <ul className={`flex space-x-4 list-none p-0 m-0 ${theme === "light" ? "text-gray-200" : "text-gray-300"}`}>
          <li>
            <Link 
              to="/" 
              className={`no-underline ${theme === 'light' ? 'text-gray-200 hover:text-gray-400' : 'text-gray-300 hover:text-gray-400'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/product" 
              className={`no-underline ${theme === 'light' ? 'text-gray-200 hover:text-gray-400' : 'text-gray-300 hover:text-gray-400'}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`no-underline ${theme === 'light' ? 'text-gray-200 hover:text-gray-400' : 'text-gray-300 hover:text-gray-400'}`}
            >
              About
            </Link>
          </li>
          <li className="flex items-center">
            <button 
              onClick={toggleTheme}
              className={`py-2 px-4 rounded-md focus:outline-none transition-colors duration-300 ${
                theme === "light"
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-300 text-black hover:bg-gray-200"
              }`}
            >
              {theme === "light" ? "Dark" : "Light"} Theme
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
