import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NavCart from "./components/NavCart";
import Form from "./pages/LoginForm";
import './App.css'
import LoginForm from "./pages/LoginForm";
import RegistrationForm from "./pages/RegistrationForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<NavCart />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegistrationForm/>} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
