import axios from "axios";

// Create Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:3000/api", // Node.js backend
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("Response error:", error.response || error.message);
    // You can handle global errors here
    return Promise.reject(error.response?.data || { message: error.message });
  }
);

export default apiClient;
