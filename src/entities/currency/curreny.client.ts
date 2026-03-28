import axios from 'axios';

const API_URL = import.meta.env.VITE_CURRENCIES_API;

export const currencyClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});
