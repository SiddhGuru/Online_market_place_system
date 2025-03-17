import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import Sell from './pages/Sell'; // Import Sell component
import Shopping from './components/Shopping'; // Import Shopping component
import Checkout from './checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sell" element={<Sell />} /> {/* Route for Sell page */}
        <Route path="/Shopping" element={<Shopping />} /> {/* Route for Shopping page */}

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;