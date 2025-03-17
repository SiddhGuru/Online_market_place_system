import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Shopping.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');
  const [cart, setCart] = useState([]);  // State to manage cart items

  const navigate = useNavigate();  // Use navigate to redirect to checkout

  // Fetch products based on the selected category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = category ? `/api/products/${category}` : '/api/products/all';
        const response = await axios.get(`http://localhost:5000${endpoint}`);
        setProducts(category ? response.data : response.data.products);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, [category]);

  // Function to handle adding product to cart
  const handleBuyNow = (productId) => {
    const selectedProduct = products.find(product => product._id === productId);
    setCart([...cart, selectedProduct]);
    alert(`${selectedProduct.name} added to your cart!`);
  };

  // Function to handle checkout redirection
  const proceedToCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  return (
    <div className="shopping-container">
      <nav className="shopping-navbar">
        <ul>
          <li>
            <a href="#fruits" onClick={() => setCategory('fruits')}>
              Fruits
            </a>
          </li>
          <li>
            <a href="#vegetables" onClick={() => setCategory('vegetables')}>
              Vegetables
            </a>
          </li>
          <li>
            <a href="#all" onClick={() => setCategory('')}>
              All Products
            </a>
          </li>
        </ul>
      </nav>

      <div className="product-sections">
        {products.map((product) => (
          <div key={product._id} className="product-section">
            <h2>{product.name}</h2>
            <img
              src={`http://localhost:5000/uploads/${product.productImage}`}
              alt={product.name}
              className="product-image"
            />
            <p>Quantity: {product.quantity} kg</p>
            <p>Price: ₹{product.price} per kg</p>
            <p>Sold by: {product.farmerName}</p>
            <button
              className="buy-now-button"
              onClick={() => handleBuyNow(product._id)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {error && <div className="error-message">{error}</div>}

      {/* Checkout Button */}
      <div className="checkout-button">
        {cart.length > 0 && (
          <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        )}
      </div>
    </div>
  );
};

export default Shopping;
