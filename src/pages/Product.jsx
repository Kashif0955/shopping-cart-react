import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCatergories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

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

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <h3>Loading....</h3>
      ) : notFound ? (
        <h3>Products not found.</h3>
      ) : (
        <div>

<div className="flex gap-3 flex-wrap">

  {
    categories.map((category)=>{
      <CategotryChip/>
    })
  }

</div>

          <div className="flex flex-wrap -m-4 my-4">
            {products.map((product) => (
              <Cart item={product} key={product.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
