import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    };

    loadCart();
  }, []);

  useEffect(() => {
    const saveCart = async () => {
      try {
        await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    };

    saveCart();
  }, [cartItems]);

  const addToCart = (pizza) => {
    const existingPizza = cartItems.find((item) => item.id === pizza.id);
    if (existingPizza) {
      setCartItems(
        cartItems.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };

  return { cartItems, addToCart };
};

export default useCart;
