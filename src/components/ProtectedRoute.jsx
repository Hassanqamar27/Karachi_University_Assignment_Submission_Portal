// // import { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { jwtDecode } from "jwt-decode";

// // const ProtectedRoute = ({ children }) => {
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("authToken");

// //     if (token) {
// //       const decodedToken = jwtDecode(token);
// //       const currentTime = Date.now() / 1000;

// //       if (decodedToken.exp < currentTime) {
// //         localStorage.removeItem("authToken");
// //         navigate("/login");
// //       }
// //     } else {
// //       navigate("/login");
// //     }
// //   }, [navigate]);

// //   return children;
// // };

// // export default ProtectedRoute;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const navigate = useNavigate();
//   const [isAuthorized, setIsAuthorized] = useState(null);

//   useEffect(() => {
//     const checkToken = () => {
//       const token = localStorage.getItem("authToken");

//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       try {
//         const decodedToken = jwtDecode(token);
//         const currentTime = Date.now() / 1000;

//         if (decodedToken.exp < currentTime) {
//           localStorage.removeItem("authToken");
//           navigate("/login");
//         } else if (allowedRoles && !allowedRoles.includes(decodedToken.role)) {
//           navigate("/unauthorized"); // Redirect to an unauthorized page or default page
//         } else {
//           setIsAuthorized(true);
//         }
//       } catch (error) {
//         console.error("Token decoding failed:", error);
//         localStorage.removeItem("authToken");
//         navigate("/login");
//       }
//     };

//     checkToken();
//   }, [navigate, allowedRoles]);

//   if (isAuthorized === null) {
//     // Render nothing while checking the token
//     return null;
//   }

//   return children;
// };

// export default ProtectedRoute;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const attemptedUrl = window.location.pathname;

    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        // Token expired
        localStorage.removeItem("authToken");
        navigate("/login");
        return;
      }

      // Check if the role is allowed
      if (allowedRoles && !allowedRoles.includes(decodedToken.role)) {
        localStorage.setItem("attemptedUrl", attemptedUrl); // Store attempted URL
        localStorage.setItem("userRole", decodedToken.role); // Store user role
        navigate("/unauthorized");
        return;
      }
    } else {
      navigate("/login");
    }
  }, [navigate, allowedRoles]);

  return children;
};

export default ProtectedRoute;
