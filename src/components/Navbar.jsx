import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path as necessary
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { userContext } from '../context/userContext';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useContext(userContext);
  const { theme, setTheme } = useContext(ThemeContext); // Access theme and setTheme from context

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
    setOverlayVisible((prev) => !prev);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-500 ${overlayVisible ? 'opacity-100 z-50' : 'opacity-0 z-[-1]'}`}
        onClick={handleSidebarToggle}
      ></div>

      {/* Utility Nav */}
      <div className="hidden md:block bg-gray-200 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm flex items-center space-x-2">
            {user.isLogin ? (
              <span className="mr-4 font-medium">{user.userInfo?.email}</span>
            ) : (
              <>
                <i className="bx bx-envelope text-blue-500 mr-1"></i>
                <span>mk.store@gmail.com</span>
                <span className="mx-2">|</span>
                <i className="bx bx-phone text-green-500 mr-1"></i>
                <span>+92-9876543210</span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } shadow-md py-4 transition-all duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={handleSidebarToggle}
            className="block md:hidden text-gray-600"
          >
            <i className="bx bx-menu text-xl"></i>
          </button>

          <Link to="/" className="text-xl font-bold mx-9">
            MK Store
          </Link>

          <div className="hidden md:flex flex-grow">
            <form className="flex mx-auto space-x-2 w-full max-w-lg">
              <input
                className="py-2 px-4 border rounded-l-md focus:outline-none w-full"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              />
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-r-md"
                type="submit"
              >
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>

          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/cart" className="relative flex items-center text-gray-600">
                <MdShoppingCart className="text-2xl" />
                <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs absolute -top-1 -right-3">
                  {cartItems.length}
                </span>
              </Link>
            </li>
            {user.isLogin ? (
              <div className="flex items-center">
                <h1 className="mr-4 font-medium">{user.userInfo?.email}</h1>
                <FaUserCircle className="text-gray-600 text-2xl hover:text-blue-500 transition duration-300 mx-3" />
                <button
                  onClick={handleSignOut}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Signup
                </Link>
              </div>
            )}
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
      <nav
        className={`${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } shadow-md py-5`}
      >
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Search Bar for Mobile */}
      <div className="block md:hidden bg-white shadow-sm py-2">
        <div className="container mx-auto">
          <form className="flex space-x-2">
            <input
              className="py-2 px-4 border rounded-l-md focus:outline-none w-full"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-r-md"
              type="submit"
            >
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed inset-0 bg-white shadow-lg transform transition-transform duration-500 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}
      >
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

      <style jsx>{`
        /* Mobile styles */
        @media (max-width: 639px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .navbar {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .navbar ul {
            flex-direction: column;
            margin-top: 1rem;
          }

          .navbar ul li {
            margin: 0.5rem 0;
          }

          .search-bar {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
          }

          .search-bar input {
            margin-bottom: 0.5rem;
          }
        }

        /* Tablet and Desktop styles */
        @media (min-width: 640px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .navbar {
            flex-direction: row;
            align-items: center;
          }

          .navbar ul {
            flex-direction: row;
          }

          .search-bar {
            display: flex;
            flex-direction: row;
            margin-top: 0;
          }

          .search-bar input {
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
