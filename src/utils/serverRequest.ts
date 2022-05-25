import axios from 'axios';

// create an axios instance
const service = axios.create({
  timeout: 5000, // request timeout
  withCredentials: true,
});

// request interceptor
service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// response interceptor
service.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default service;
