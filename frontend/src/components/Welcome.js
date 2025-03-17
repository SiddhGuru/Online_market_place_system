// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Welcome.css'; // Ensure the CSS file is imported

// const Welcome = () => {
//   return (
//     <div className="welcome-container">
//       <div className="welcome-content">
//         <h1>Welcome to Online Market Place</h1>
//         <p>Connecting farmers directly with buyers for better agricultural practices.</p>
//         <div className="welcome-links">
//           <Link to="/signup">Sign Up</Link>
//           <Link to="/signin">Sign In</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css'; // Ensure the CSS file is imported

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to Online Market Place</h1>
        <h2>Connecting farmers directly with buyers for better agricultural practices.</h2>
        <div className="welcome-links">
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;