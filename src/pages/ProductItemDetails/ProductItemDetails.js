import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { TailSpin } from 'react-loader-spinner'; 
import './ProductItemDetails.css';

const ProductItemDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addCartItem } = useContext(CartContext);

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  if (loading) {
    return (
      <div className="spinner-container">
        <TailSpin height="80" width="80" color="#00BFFF" ariaLabel="loading" />
      </div>
    );
  }


  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  const handleAddToCart = () => {
    addCartItem(product); 
  };

  return (
    <div className="product-item-details">
      <img src={product.image} alt={product.title} className="product-image" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItemDetails;
