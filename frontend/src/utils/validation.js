// frontend/src/utils/validation.js

export const validateSignUp = (email, password, confirmPassword) => {
    if (!email || !password || !confirmPassword) return 'All fields are required.';
    if (password !== confirmPassword) return 'Passwords do not match.';
    return '';
  };
  
  export const validateSignIn = (email, password) => {
    if (!email || !password) return 'All fields are required.';
    return '';
  };
  