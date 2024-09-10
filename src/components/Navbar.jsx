import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path as necessary
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cartItems} = useSelector((state) => state.cart); 

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext); // Access theme and setTheme from context

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
    setOverlayVisible(!overlayVisible);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-500 ${overlayVisible ? 'opacity-100 z-50' : 'opacity-0 z-[-1]'}`}
      ></div>

      {/* Utility Nav */}
      <div className="hidden md:block bg-gray-200 py-2">
        <div className="container mx-5 my-1 flex justify-between items-center">
          <p className="text-sm">
            <i className="bx bx-envelope"></i> mk.store@gmail.com |{' '}
            <i className="bx bx-phone"></i> +92-9876543210
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md py-4 transition-all duration-300`}>
        <div className="container mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={handleSidebarToggle}
            className="block md:hidden text-gray-600"
          >
            <i className="bx bx-menu text-xl"></i>
          </button>

          <a className="text-xl font-bold mx-9" href="#">
            <Link to={'/'}>
              MK Store

            </Link>
          </a>

          <form className="flex mx-auto space-x-2">
            <input
              className="form-control py-2 px-4 border rounded-l-md"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
            <button
              className="btn bg-green-500 text-white py-2 px-4 rounded-r-md"
              type="submit"
            >
              <i className="bx bx-search"></i>
            </button>
          </form>

          <ul className="flex items-center space-x-4">

            <li>
              <Link to={'/cart'} className="relative flex items-center text-gray-600">
             
                <MdShoppingCart className="text-2xl" />

              
                <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs absolute -top-1 -right-3">
                 {cartItems.length}
                </span>
              </Link>
            </li>

            <li>
              <a
                className="bg-blue-500 text-white py-2 px-4 rounded"
                href="#"
              >
                <i className="bx bxs-user-circle mr-1"></i> Log In / Register
              </a>
            </li>
            <li>
              <button
                onClick={handleThemeToggle}
                className={`bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded transition-colors duration-300`}
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sub Navbar */}
      <nav className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md `}>
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link className=" -b-2 border-blue-500" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-600" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-gray-600" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="block md:hidden bg-white shadow-sm py-2">
        <div className="container mx-auto">
          <form className="flex space-x-2">
            <input
              className="form-control py-2 px-4 border rounded-l-md focus:outline-none"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
            <button
              className="btn bg-green-500 text-white py-2 px-4 rounded-r-md focus:outline-none"
              type="submit"
            >
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <nav className={`fixed inset-0 bg-white shadow-lg transform transition-transform duration-500 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleSidebarToggle}
              className="text-gray-600"
            >
              <i className="bx bx-x text-xl"></i>
            </button>
          </div>

          <ul className="mt-4">
            <li>
              <Link
                className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-200"
                to="/"
              >
                <i className="bx bx-home mr-3"></i> Home
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-200"
                to="/products"
              >
                <i className="bx bx-carousel mr-3"></i> Products
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-200"
                to="/contact"
              >
                <i className="bx bx-phone mr-3"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
