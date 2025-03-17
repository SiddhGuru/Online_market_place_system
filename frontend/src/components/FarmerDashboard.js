// frontend/src/components/FarmerDashboard.js

import React, { useState, useEffect } from 'react';
import { getProducts } from '../utils/api';

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <h3>Your Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.quantity} kg - {product.pricePerKg} per kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmerDashboard;
