import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const { state } = useLocation();  // Get cart data passed from Shopping
  const { cart } = state || {};

  if (!cart || cart.length === 0) {
    return <div>No items in cart.</div>;
  }

  const handlePlaceOrder = () => {
    // Here you would call an API to create the order and process payment.
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item._id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity} kg</p>
          </div>
        ))}
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
