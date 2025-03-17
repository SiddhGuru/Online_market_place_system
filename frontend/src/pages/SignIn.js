// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/SignIn.css'; // Corrected CSS file import

// const SignIn = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', formData);
//       alert(response.data.message);
//       localStorage.setItem('token', response.data.token); // Save token to local storage
//       navigate('/home'); // Redirect to the Home Page
//     } catch (err) {
//       setError(err.response?.data?.message || 'An error occurred'); // Improved error handling
//     }
//   };

//   return (
//     <div className="signin-container">
//       <h2>Sign In</h2>
//       <form className="signin-form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Sign In</button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css'; // Corrected CSS file import

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isClicked, setIsClicked] = useState(false); // State to handle button click effect
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsClicked(true); // Trigger click effect
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      alert(response.data.message);
      localStorage.setItem('token', response.data.token); // Save token to local storage
      navigate('/home'); // Redirect to the Home Page
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred'); // Improved error handling
    } finally {
      setIsClicked(false); // Reset click effect after action
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className={isClicked ? 'button-clicked' : ''}
          disabled={isClicked} // Disable button during action
        >
          {isClicked ? 'Processing...' : 'Sign In'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignIn;