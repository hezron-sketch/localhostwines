"use client";

import { useState, useEffect, useContext } from "react";
import { CartContext } from "@/context/cartContext.jsx";
import Cart from "../cart/page";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import SearchBar from "@/components/search/page";
import { ShoppingCart } from "lucide-react";

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);

  const toggle = () => {
    setshowModal(!showModal);
  };

  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setFilteredProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  // Function to handle search
  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered); // Update the filtered products state
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col justify-center bg-green-100/50 pb-10">
        <div className="flex justify-between items-center px-20 py-5">
          <div>
            <h1 className="text-green-600 text-2xl uppercase font-black mt-10 text-center mb-2">
              localhost wines & spirits
            </h1>
            <h5 className="font-light">True Friendship</h5>
          </div>
          {!showModal && (
            <button
              className="px-4 py-2 text-green-600 font-black border-2 border-green-400 text-xs uppercase rounded-md hover:text-white hover:bg-green-700 focus:outline-none focus:bg-green-700/15 inline-flex items-center"
              onClick={toggle}
            >
              <ShoppingCart size={30} />
              &nbsp; cart &nbsp;
              <div className="bg-green-500 rounded-full w-6 h-6 align-middle p-1 text-green-100">
                {cartItems.length}
              </div>
            </button>
          )}
        </div>
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
        <h3 className="text-left pl-10 font-black text-2xl py-3 text-green-600">
          Smoothies:{" "}
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/70 border-2 rounded-lg px-10 py-10"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-md h-48"
              />
              <div className="mt-4">
                <h3 className="text-md uppercase font-bold">{product.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {product.description.slice(0, 40)}...
                </p>
                <p className="mt-2 text-gray-600">${product.price}</p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button
                  className="px-4 py-2 bg-green-200 text-green-600 text-xs font-bold uppercase rounded hover:text-green-200 hover:bg-green-800 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <Cart showModal={showModal} toggle={toggle} />
      </div>

      <Footer />
    </>
  );
}
