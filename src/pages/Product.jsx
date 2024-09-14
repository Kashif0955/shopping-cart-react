// import axios from "axios";
// import React, { useEffect, useState, useContext } from "react";
// import Cart from '../components/Cart';
// import CategotryChip from "../components/CategotryChip";
// import { ThemeContext } from "../context/ThemeContext"; // Import the ThemeContext
// import { useDispatch } from "react-redux";

// const Product = () => {

//   const dispatch = useDispatch();


//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [chosenCategory, setChosenCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [sortOption, setSortOption] = useState("price-asc");

//   const { theme } = useContext(ThemeContext); // Access theme from context

//   useEffect(() => {
//     const url =
//       chosenCategory === "All"
//         ? "https://dummyjson.com/products"
//         : `https://dummyjson.com/products/category/${chosenCategory}`;
//     axios
//       .get(url)
//       .then((res) => {
//         let sortedProducts = res.data.products;
//         switch (sortOption) {
//           case "price-asc":
//             sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
//             break;
//           case "price-desc":
//             sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
//             break;
//           case "name-asc":
//             sortedProducts = sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
//             break;
//           case "name-desc":
//             sortedProducts = sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
//             break;
//           default:
//             break;
//         }
//         setProducts(sortedProducts);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, [chosenCategory, sortOption]);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products/categories")
//       .then((res) => {
//         setCategories(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, []);

//   // Conditional styles based on the theme
//   const containerStyle = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
//   const sortSelectStyle = theme === "dark" 
//     ? "bg-gray-700 text-white border-gray-600 focus:ring-gray-500" 
//     : "bg-white text-black border-gray-300 focus:ring-blue-500";


// const addtoCart = (product)=>{
// dispatch({
//   type:"addToCart",
//  payload: {
//       id: product.productid,
//       title: product.title,
//       price: product.price,
//       category: product.category,
//       thumbnail: product.thumbnail,
//       qty: 1 // Initialize quantity
//     }
// })
//   console.log(product);

// }

//   return (
//     <div className={`container mx-auto ${containerStyle}`}>
//       {loading ? (
//         <h1 className="text-center text-3xl">Loading....</h1>
//       ) : (
//         <div>
//           <div className="flex gap-3 py-2 mx-2 flex-wrap my-10">
//             <CategotryChip
//               onClick={() => setChosenCategory("All")}
//               isChosen={chosenCategory === "All"}
//               category={{
//                 slug: "All",
//                 name: "All",
//               }}
//             />
//             {categories.map((category) => (
//               <CategotryChip
//                 onClick={() => setChosenCategory(category.slug)}
//                 isChosen={category.slug === chosenCategory}
//                 category={category}
//                 key={category.slug}
//               />
//             ))}
//           </div>

//           <div className="flex items-center gap-4 my-4">
//             <label htmlFor="sort" className="text-lg font-semibold mx-3">Sort By:</label>
//             <select
//               id="sort"
//               className={`p-2 border rounded-md shadow-sm focus:outline-none ${sortSelectStyle}`}
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="name-asc">Name: A to Z</option>
//               <option value="name-desc">Name: Z to A</option>
//             </select>
//           </div>

//           <div className="flex flex-wrap -m-4 my-4">
//             {products.map((item) => (
//               <Cart 
//               productid={item.id}
//               title={item.title}
//               price={item.price}
//               category={item.category}
//               thumbnail={item.thumbnail}
//               handler={addtoCart}
//               key={item.id} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;


import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Cart from '../components/Cart';
import CategotryChip from "../components/CategotryChip";
import { ThemeContext } from "../context/ThemeContext"; // Import the ThemeContext
import { useDispatch } from "react-redux";
import { addItemToLocalStorage } from '../utils/localStorage'; // Import localStorage utilities

const Product = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("price-asc");

  const { theme } = useContext(ThemeContext); // Access theme from context

  useEffect(() => {
    const url =
      chosenCategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    axios
      .get(url)
      .then((res) => {
        let sortedProducts = res.data.products;
        switch (sortOption) {
          case "price-asc":
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
            break;
          case "price-desc":
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
            break;
          case "name-asc":
            sortedProducts = sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case "name-desc":
            sortedProducts = sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
          default:
            break;
        }
        setProducts(sortedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [chosenCategory, sortOption]);

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

  // Conditional styles based on the theme
  const containerStyle = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  const sortSelectStyle = theme === "dark" 
    ? "bg-gray-700 text-white border-gray-600 focus:ring-gray-500" 
    : "bg-white text-black border-gray-300 focus:ring-blue-500";

  const addtoCart = (product) => {
    dispatch({
      type: "addToCart",
      payload: {
        id: product.productid,
        title: product.title,
        price: product.price,
        category: product.category,
        thumbnail: product.thumbnail,
        qty: 1 // Initialize quantity
      }
    });
    addItemToLocalStorage({
      id: product.productid,
      title: product.title,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,
      qty: 1 // Initialize quantity
    });
    console.log(product);
  };

  return (
    <div className={`container mx-auto ${containerStyle}`}>
      {loading ? (
        <h1 className="text-center text-3xl">Loading....</h1>
      ) : (
        <div>
          <div className="flex gap-3 py-2 mx-2 flex-wrap my-10">
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

          <div className="flex items-center gap-4 my-4">
            <label htmlFor="sort" className="text-lg font-semibold mx-3">Sort By:</label>
            <select
              id="sort"
              className={`p-2 border rounded-md shadow-sm focus:outline-none ${sortSelectStyle}`}
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>

          <div className="flex flex-wrap -m-4 my-4">
            {products.map((item) => (
              <Cart 
                productid={item.id}
                title={item.title}
                price={item.price}
                category={item.category}
                thumbnail={item.thumbnail}
                handler={addtoCart}
                key={item.id} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
