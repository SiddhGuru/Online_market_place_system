import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL params
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data.product);
      } catch (err) {
        setError('Product not found');
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="product-details-container">
      {error && <p className="error-message">{error}</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Quantity: {product.quantity}</p>
          <p>Price: ₹{product.price} per kg</p>
          <p>Sold by: {product.farmerId?.name || 'Unknown'}</p>
          {product.productImage ? (
            <img
              src={`http://localhost:5000/uploads/${product.productImage}`}
              alt={product.name}
            />
          ) : (
            <p>No image available</p>
          )}
          <button>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
