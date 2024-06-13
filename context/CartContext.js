import React, { createContext } from 'react';
import useCart from '../hooks/useCart';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cartItems, addToCart } = useCart();

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
