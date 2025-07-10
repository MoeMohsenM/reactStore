import { useState } from "react";
import { CartContext } from "./context";

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item//unchanged we dont want to lose the item not only the updated one 
        );
      } else {
        return [...prevItems, product];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((m) => m.filter((item) => item.id !== product.id));
  };

  const updateQuantity = (productId, times) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + times }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, cartItems, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
