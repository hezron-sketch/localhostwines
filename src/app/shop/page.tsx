// src/app/shop/page.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import products from "../../data/products";
import { useCart } from "../../context/cartContext"; // Import the useCart hook

const categories = ["All", "Wine", "Spirits"];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart(); // Now addToCart should work correctly

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="bg-green-100/25 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

          {/* Categories Filter */}
          <div className="mb-8 flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-2 px-4 rounded ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-5 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <p className="text-gray-500 mt-2">{product.description}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded-3xl hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
