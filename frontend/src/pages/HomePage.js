import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin'); // Redirect to Sign In if no token
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <h1>Welcome to Online Market Place</h1>
      <p>Connecting farmers directly with buyers for a better agricultural future</p>
      <div className="home-links">
        <Link to="/Shopping">Start Shopping</Link> {/* Correct path */}
        <Link to="/sell">Sell Products</Link> {/* Correct path */}
      
        
      </div>
    </div>
  );
};

export default HomePage;