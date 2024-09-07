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
    <header className={`flex justify-between items-center p-4 border-b ${theme === "light" ? "bg-white text-black border-gray-200" : "bg-gray-800 text-white border-gray-700"}`}>
      <div className="logo">
        <h1 className="text-3xl font-extrabold">MyStore</h1>
      </div>
      <nav className="nav">
        <ul className="flex space-x-6 items-center">
          <li>
            <Link 
              to="/" 
              className={`transition-colors duration-300 ${theme === 'light' ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/product" 
              className={`transition-colors duration-300 ${theme === 'light' ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`transition-colors duration-300 ${theme === 'light' ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}
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
