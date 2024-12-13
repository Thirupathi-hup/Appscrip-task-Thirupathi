import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartPage.css'; 
const CartPage = () => {
  const { cartList, removeCartItem, updateCartItemQuantity } = useContext(CartContext);

  const handleRemoveItem = (id) => {
    removeCartItem(id); 
  };

  const handleIncrement = (id) => {
    updateCartItemQuantity(id, 'increment');
  };

  const handleDecrement = (id) => {
    updateCartItemQuantity(id, 'decrement');
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartList.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartList.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h className="cart-item-name">{item.title}</h>
                <p>{item.description}</p>
                <p className="cart-item-price">Price: ${item.price}</p>
                <div className="quantity-control">
                  <button className="quantity-button" onClick={() => handleDecrement(item.id)}>-</button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button className="quantity-button" onClick={() => handleIncrement(item.id)}>+</button>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-item-button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
