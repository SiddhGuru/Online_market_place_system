import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/'); // Redirect to the Welcome Page
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#00796b', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Raita Mitra</Link>
        </div>
        <div>
          <Link to="/shop" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Shop</Link>
          <Link to="/sell" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Sell</Link>
          {token ? (
            <button
              onClick={handleLogout}
              style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/signin" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Sign In</Link>
              <Link to="/signup" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;