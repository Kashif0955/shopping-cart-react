import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from '../components/Cart';
import CategotryChip from "../components/CategotryChip";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCatergories] = useState([]);
const [chosenCategory,setChosenCategory] = useState("All")
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    console.log("Use effect Call Hogya");
    const url =
      chosenCategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [chosenCategory]);


  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCatergories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <h1 className="text-center text-3xl">Loading....</h1>
      ) : (
        <div>
          <div className="flex gap-3 flex-wrap my-2">
            <CategotryChip
              onClick={() => setChosenCategory("All")}
              isChosen={chosenCategory === "All"}
              category={{
                slug: "All",
                name: "All",
              }}
            />
            {categories.map((category) => (
              <CategotryChip
                onClick={() => setChosenCategory(category.slug)}
                isChosen={category.slug === chosenCategory}
                category={category}
                key={category.slug}
              />
            ))}
          </div>

          <div className="flex flex-wrap -m-4 my-4">
            {products.map((item) => (
              <Cart item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
