import React, { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addCartItem = (product) => {
    setCartList((prevList) => {
      // Check if the product already exists in the cart
      const existingProduct = prevList.find(item => item.id === product.id);
      if (existingProduct) {
        // If the product already exists, increment its quantity
        return prevList.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product doesn't exist, add it with a quantity of 1
        return [...prevList, { ...product, quantity: 1 }];
      }
    });
  };

  const removeCartItem = (id) => {
    setCartList((prevList) => prevList.filter(item => item.id !== id));
  };

  const updateCartItemQuantity = (id, action) => {
    setCartList((prevList) => {
      return prevList.map(item => {
        if (item.id === id) {
          let updatedQuantity = item.quantity;
          if (action === 'increment') {
            updatedQuantity += 1;
          } else if (action === 'decrement' && updatedQuantity > 1) {
            updatedQuantity -= 1;
          }
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
    });
  };

  return (
    <CartContext.Provider value={{ cartList, addCartItem, removeCartItem, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
