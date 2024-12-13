import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const CartIcon = () => {
  const { cartList } = useContext(CartContext);

  const renderCartItemsCount = () => {
    const cartItemsCount = cartList.length;
    return cartItemsCount > 0 && <span className="cart-icon-count">{cartItemsCount}</span>;
  };

  return (
    <div className="cart-icon">
      <Link to="/cart">
        <img src="https://example.com/cart-icon.png" alt="Cart" />
        {renderCartItemsCount()}
      </Link>
    </div>
  );
};

export default CartIcon;
