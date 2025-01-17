// "use client";

// import { createContext, useState, useEffect, Children } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(
//     localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : []
//   );

//   const addToCart = (item) => {
//     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); //check if item is already in the cart

//     if (isItemInCart) {
//       setCartItems(
//         cartItems.map(
//           (cartItem) =>
//             cartItem.id === item.id
//               ? { ...cartItem, quantity: cartItem.quantity + 1 } // if item already in the cart increase quantity by 1
//               : cartItem // Otherwise return the cart Item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]); // If item not in cart, add the item to cart
//     }
//   };

//   const removeFromCart = (item) => {
//     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (isItemInCart.quantity === 1) {
//       setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
//     } else {
//       setCartItems(
//         cartItems.map((cartItem) => cartItem.id === item.id)
//           ? { ...cartItem, quantity: cartItem.quantity - 1 }
//           : cartItem
//       );
//     }
//   };

//   const clearCart = () => {
//     setCartItems([]); // set cart items to an empty array
//   };

//   const getCartTotal = () => {
//     const total = cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//     return parseFloat(total.toFixed(2)); // calculate and format total to 2 decimal places
//   };

//   // useEffect hook to persist cart state in browser
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   });

//   useEffect(() => {
//     const cartItems = localStorage.getItem("cartItems");
//     if (cartItems) {
//       setCartItems(JSON.parse(cartItems));
//     }
//   }, []);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         getCartTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage on client-side only
    if (typeof window !== "undefined") {
      const savedCartItems = localStorage.getItem("cartItems");
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
      }
    }
  }, []);

  useEffect(() => {
    // Persist cart items in localStorage on client-side only
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return parseFloat(total.toFixed(2));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
