import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const { cartList } = useContext(CartContext);

  const renderCartItemsCount = () => {
    const cartItemsCount = cartList.length;
    return cartItemsCount > 0 && <span className="cart-count-badge">{cartItemsCount}</span>;
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/36b885107148725.5fa08100392dd.jpg" alt="Website Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart">
              Cart {renderCartItemsCount()}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
