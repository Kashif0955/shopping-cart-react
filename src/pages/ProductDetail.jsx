import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext"; // Adjust path as necessary

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setNotFound(false);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setNotFound(true);
        setLoading(false);
        console.log(err);
      });
  }, [id]);

  return (
    <div className={`container mx-auto ${theme === 'light' ? 'bg-gray-100 ' : 'bg-gray-900 text-white'}`}>
      {loading ? (
        <h1 className={`text-center text-3xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
          Loading....
        </h1>
      ) : notFound ? (
        <h1 className={`text-center text-3xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
          Product Not Found
        </h1>
      ) : (
        <section className={`text-gray-600 body-font overflow-hidden ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-200'}`}>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className={`text-sm title-font text-gray-500 tracking-widest ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  {product.category}
                </h2>
                <h1 className={`text-gray-900 text-3xl title-font font-medium mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {product.title}
                </h1>
                {/* <div className="flex mb-4">
                  <a className={`flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1 ${theme === 'light' ? 'border-indigo-500' : 'border-indigo-300'}`}>
                    Description
                  </a>
                  <a className={`flex-grow border-b-2 py-2 text-lg px-1 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`}>
                    Reviews
                  </a>
                  <a className={`flex-grow border-b-2 py-2 text-lg px-1 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`}>
                    Details
                  </a>
                </div> */}
                <p className="leading-relaxed mb-4">
                 {product.description}
                </p>
                <div className={`flex border-t border-gray-200 py-2 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`}>
                  <span className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Color</span>
                  <span className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400' } ml-auto text-gray-900`} >Blue</span>
                </div>
                <div className={`flex border-t border-gray-200 py-2 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`}>
                  <span className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Size</span>
                  <span className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} ml-auto text-gray-900`} >Medium</span>
                </div>
                <div className={`flex border-t border-b mb-6 border-gray-200 py-2 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`}>
                  <span className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Quantity</span>
                  <span className= {`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} ml-auto text-gray-900`} >4</span>
                </div>
                <div className="flex">
                  <span className={`title-font font-medium text-2xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                    ${product.price}
                  </span>
                  <button className={`flex ml-auto text-white border-0 py-2 px-6 focus:outline-none ${theme === 'light' ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-700 hover:bg-indigo-800'} rounded`}>
                    Add to Cart
                  </button>
                  <button className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} ml-4`}>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
              <img
                alt="ecommerce"
                className={`lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}
                src={product.thumbnail}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetail;
