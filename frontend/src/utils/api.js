// frontend/src/utils/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signUp = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, data);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};

export const signIn = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, data);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
};
