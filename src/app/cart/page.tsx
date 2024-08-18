import Footer from "../../components/footer/page";
import Navbar from "../../components/navbar/page";
import PropTypes from "prop-types";
import { Key, useContext } from "react";
import { CartContext } from "@/context/cartContext";
import { PanelRightClose } from "lucide-react";
import Link from "next/link";

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    showModal && (
      <div className="fixed inset-0 left-2/4 flex flex-col items-center bg-blend-color-dodge backdrop-blur-3xl dark:bg-purple-900/10 gap-8 z-51 p-10 text-black dark:text-green-600 uppercase sm:text-sm overflow-y-auto">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="text-green-600 hover:text-green-800 rounded-sm p-0"
            onClick={toggle}
          >
            <PanelRightClose size={30} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {cartItems.map(
            (item: {
              id: Key;
              thumbnail: string | undefined;
              title: string;
              price: number;
              quantity: number;
            }) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="flex gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded-md h-24 sm:h-15"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold">{item.title}</h1>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 bg-green-400 text-white text-xs font-bold uppercase rounded hover:bg-green-800 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-4 py-2 bg-green-400 text-white text-xs font-bold uppercase rounded hover:bg-green-800 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
            <Link
              href="/checkout"
              className="px-4 py-2 my-5 bg-green-400 text-white text-xs font-bold uppercase rounded hover:bg-green-600 focus:outline-none focus:bg-gray-700"
            >
              Proceed to Checkout
            </Link>

            <button
              className="px-4 py-2 bg-red-400 text-white text-xs font-bold uppercase rounded hover:bg-green-800 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1 className="text-lg font-bold">Your cart is empty</h1>
        )}
      </div>
    )
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
