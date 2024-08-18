"use client";

import { Key, useContext, useState } from "react";
import { CartContext } from "@/context/cartContext";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

export default function CheckoutPage() {
  const { cartItems, getCartTotal } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("Card");

  const handleCheckout = () => {
    // Logic for processing the checkout
    console.log(
      `Order placed successfully with ${paymentMethod} payment method.`
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-green-100/50 py-10">
        <h1 className="text-center text-3xl font-extrabold text-green-700 mb-10">
          Checkout
        </h1>

        {/* Cart Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-4 text-green-700">
            Order Summary
          </h2>
          {cartItems.length > 0 ? (
            cartItems.map((item: { id: Key; title: string; price: number }) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3 border-b border-gray-200"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-semibold text-green-700">Total:</h3>
            <p className="text-2xl font-bold text-gray-800">
              ${getCartTotal()}
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-4 text-green-700">
            Customer Details
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone number"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-4 text-green-700">
            Payment Details
          </h2>
          <form className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="Card"
                checked={paymentMethod === "Card"}
                onChange={() => setPaymentMethod("Card")}
                className="cursor-pointer"
              />
              <label htmlFor="card" className="cursor-pointer">
                Card Payment
              </label>
            </div>

            {paymentMethod === "Card" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="Card Number"
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      required
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="CVV"
                      required
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="mpesa"
                name="paymentMethod"
                value="M-Pesa"
                checked={paymentMethod === "M-Pesa"}
                onChange={() => setPaymentMethod("M-Pesa")}
                className="cursor-pointer"
              />
              <label htmlFor="mpesa" className="cursor-pointer">
                M-Pesa
              </label>
            </div>

            {paymentMethod === "M-Pesa" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  M-Pesa Phone Number
                </label>
                <input
                  type="text"
                  placeholder="M-Pesa Phone Number"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            )}

            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={() => setPaymentMethod("Cash on Delivery")}
                className="cursor-pointer"
              />
              <label htmlFor="cod" className="cursor-pointer">
                Cash on Delivery
              </label>
            </div>
          </form>
        </div>

        <div className="text-center">
          <button
            onClick={handleCheckout}
            className="px-8 py-3 bg-green-600 text-white font-bold uppercase rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
