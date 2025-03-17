import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Sell.css';

const Sell = () => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    category: '',
    farmerName: '',
    productImage: null, // For storing the selected image
  });
  const [imagePreview, setImagePreview] = useState(null); // For storing the preview URL of the image
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, productImage: file });

    // Set preview URL for the selected image
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('farmerName', formData.farmerName);
    formDataToSend.append('productImage', formData.productImage);

    try {
      const response = await axios.post('http://localhost:5000/api/products/add', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setFormData({
        name: '',
        quantity: '',
        price: '',
        category: '',
        farmerName: '',
        productImage: null,
      });
      setImagePreview(null); // Reset image preview
    } catch (error) {
      setError('Error adding product: ' + error.message);
    }
  };

  return (
    <div className="sell-container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity (kg)"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹ per kg)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Type</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="grains">Grains and Cereals</option>
          <option value="pulses">Pulses and Legumes</option>
          <option value="spices">Spices and Herbs</option>
          <option value="nuts">Nuts and Seeds</option>
        </select>
        <input
          type="text"
          name="farmerName"
          placeholder="Farmer Name"
          value={formData.farmerName}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="productImage"
          onChange={handleFileChange}
          required
        />
        {imagePreview && (
          <div className="image-preview">
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: '200px', height: 'auto', marginTop: '10px' }}
            />
          </div>
        )}
        <button type="submit">Add Product</button>
      </form>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Sell;
