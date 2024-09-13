import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import OtpVerify from "./pages/OTPVerify.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import TeacherDashboard from "./pages/TeacherDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
// import PrivateRoute from "./components/PrivateRoute.jsx";
// import RoleBasedRoute from "./components/RoleBasedRoute.jsx";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "./redux/slices/authSlice";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);

  //   <AppBar position="static">
  //   <Toolbar>
  //     <Typography variant="h6" sx={{ flexGrow: 1 }}>
  //       My App
  //     </Typography>
  //     {/* {user && (
  //       <Button color="inherit" onClick={handleLogout}>
  //         Logout
  //       </Button>
  //     )} */}
  //   </Toolbar>
  // </AppBar>

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<OtpVerify />} />
          <Route path="/about" element={<Home />} />
          {/* Private Route to Handle Authenticated Users */}
          {/* <Route
            path="/login"
            element={
              user ? (
                <Navigate to={`/${user.role}-dashboard`} />
              ) : (
                <Navigate to="/login" />
              )
            }
          /> */}

          {/* Role-Based Routes */}
          {/* <Route
            path="/student-dashboard"
            element={
              <RoleBasedRoute role="student">
                <StudentDashboard />
              </RoleBasedRoute>
            }
          />
          <Route
            path="/teacher-dashboard"
            element={
              <RoleBasedRoute role="teacher">
                <TeacherDashboard />
              </RoleBasedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <RoleBasedRoute role="admin">
                <AdminDashboard />
              </RoleBasedRoute>
            }
          /> */}
          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher-dashboard"
            element={
              <ProtectedRoute allowedRoles={["teacher"]}>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="*" element={<Navigate to="/unauthorized" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
