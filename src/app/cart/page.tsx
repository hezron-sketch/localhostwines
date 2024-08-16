"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";
import Image from "next/image"; // Don't forget to import Image

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <>
      <Navbar />
      <div className="bg-green-100/25 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="border p-5 rounded-lg shadow-md"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="rounded-lg mx-auto"
                  />
                  <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                  >
                    Remove from Cart
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Link href="/shop">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
