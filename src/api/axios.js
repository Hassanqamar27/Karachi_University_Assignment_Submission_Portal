// src/api/axios.js
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000/api", // Adjust this according to your backend's URL
// });

// export default axiosInstance;
// import axios from "axios";

// // Assuming you have a function to get the token, e.g., from localStorage
// const getAuthToken = () => localStorage.getItem("authToken");

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     Authorization: `Bearer ${getAuthToken()}`,
//   },
// });
// export default axiosInstance;
// api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add a request interceptor to attach the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
