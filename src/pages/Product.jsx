import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize as boolean
  const [notFound, setNotFound] = useState(false); // Initialize as boolean

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setNotFound(true); // Set notFound to true if there is an error
      });
  }, []);

  return (
    <>
      {loading ? (
        <h3>Loading....</h3>
      ) : notFound ? (
        <h3>Products not found.</h3>
      ) : (
        <div className="flex flex-wrap -m-4 my-4">
          {products.map((product) => (
            <Cart item={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
