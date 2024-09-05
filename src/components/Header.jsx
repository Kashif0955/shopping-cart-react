import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MyStore</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Products</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      {/* <div className="cart">
        <a href="#cart">
          <img src="https://image.shutterstock.com/image-vector/shopping-cart-icon-260nw-1043647820.jpg" alt="Cart" />
        </a>
      </div> */}
    </header>
  );
};

export default Header;
