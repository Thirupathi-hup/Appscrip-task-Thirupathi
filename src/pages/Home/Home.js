import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">Welcome to Our Shop</h1>
        <p className="home-description">Browse our products and enjoy your shopping experience!</p>
        <div className="home-buttons">
          <Link to="/products"><button className="shop-now-btn">Shop Now</button></Link>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
