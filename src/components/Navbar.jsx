// // this is basic navbar
// // import { useState, useEffect } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// // import {
// //   AppBar,
// //   Toolbar,
// //   IconButton,
// //   Typography,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Box,
// //   CssBaseline,
// //   Switch,
// //   Button,
// // } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import Brightness4Icon from "@mui/icons-material/Brightness4";
// // import Brightness7Icon from "@mui/icons-material/Brightness7";
// // import { createTheme, ThemeProvider } from "@mui/material/styles";
// // import { logout } from "../redux/slices/authSlice";
// // import LogoutIcon from "@mui/icons-material/Logout";
// // const Navbar = () => {
// //   const { user } = useSelector((state) => state.auth);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [drawerOpen, setDrawerOpen] = useState(false);
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(!!user);

// //   useEffect(() => {
// //     setIsLoggedIn(!!user);
// //   }, [user]);

// //   const theme = createTheme({
// //     palette: {
// //       mode: darkMode ? "dark" : "light",
// //     },
// //   });

// //   const toggleDrawer = (open) => {
// //     setDrawerOpen(open);
// //   };

// //   const handleThemeChange = () => {
// //     setDarkMode(!darkMode);
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       localStorage.removeItem("authToken");
// //       localStorage.removeItem("userRole");
// //       setIsLoggedIn(false);
// //       navigate("/login");
// //     } catch (error) {
// //       console.error("Logout failed:", error);

// //       await dispatch(logout()).unwrap();
// //       localStorage.removeItem("authToken");
// //       localStorage.removeItem("userRole");
// //       setIsLoggedIn(false);
// //       navigate("/login");
// //     }
// //   };

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <AppBar position="static">
// //         <Toolbar>
// //           <IconButton
// //             edge="start"
// //             color="inherit"
// //             aria-label="menu"
// //             onClick={() => toggleDrawer(true)}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //             My Dashboard
// //           </Typography>
// //           <IconButton color="inherit" onClick={handleThemeChange}>
// //             {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
// //           </IconButton>
// //           {isLoggedIn && (
// //             <Button color="inherit" onClick={handleLogout}>
// //               <LogoutIcon /> Logout
// //             </Button>
// //             // <LogoutIcon color="inherit" onClick={handleLogout} />
// //           )}
// //         </Toolbar>
// //       </AppBar>
// //       <Drawer
// //         anchor="left"
// //         open={drawerOpen}
// //         onClose={() => toggleDrawer(false)}
// //       >
// //         <Box sx={{ width: 250 }}>
// //           <List>
// //             {!user ? (
// //               <>
// //                 <ListItem button component={Link} to="/">
// //                   <ListItemText primary="Login" />
// //                 </ListItem>
// //                 <ListItem button component={Link} to="/signup">
// //                   <ListItemText primary="Signup" />
// //                 </ListItem>
// //               </>
// //             ) : (
// //               <>
// //                 {user.role === "student" && (
// //                   <ListItem button component={Link} to="/student-dashboard">
// //                     <ListItemText primary="Student Dashboard" />
// //                   </ListItem>
// //                 )}
// //                 {user.role === "teacher" && (
// //                   <ListItem button component={Link} to="/teacher-dashboard">
// //                     <ListItemText primary="Teacher Dashboard" />
// //                   </ListItem>
// //                 )}
// //                 {user.role === "admin" && (
// //                   <ListItem button component={Link} to="/admin-dashboard">
// //                     <ListItemText primary="Admin Dashboard" />
// //                   </ListItem>
// //                 )}
// //               </>
// //             )}
// //           </List>
// //         </Box>
// //       </Drawer>
// //     </ThemeProvider>
// //   );
// // };

// // export default Navbar;

// // remember that i made this navbar on attemp of alot
// // import { useState, useEffect } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import {
// //   AppBar,
// //   Toolbar,
// //   IconButton,
// //   Typography,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Box,
// //   CssBaseline,
// //   Button,
// // } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import Brightness4Icon from "@mui/icons-material/Brightness4";
// // import Brightness7Icon from "@mui/icons-material/Brightness7";
// // import LogoutIcon from "@mui/icons-material/Logout";
// // import { createTheme, ThemeProvider } from "@mui/material/styles";

// // const Navbar = () => {
// //   const { user } = useSelector((state) => state.auth);
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [drawerOpen, setDrawerOpen] = useState(false);
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(!!user);

// //   const isDashboardPage = [
// //     "/student-dashboard",
// //     "/teacher-dashboard",
// //     "/admin-dashboard",
// //     "/unauthorized",
// //   ].includes(location.pathname);

// //   useEffect(() => {
// //     const token = localStorage.getItem("authToken");
// //     setIsLoggedIn(!!token);
// //   }, [user, location.pathname]);

// //   const theme = createTheme({
// //     palette: {
// //       mode: darkMode ? "dark" : "light",
// //     },
// //   });

// //   const toggleDrawer = (open) => setDrawerOpen(open);
// //   const handleThemeChange = () => setDarkMode(!darkMode);

// //   const handleLogout = async () => {
// //     localStorage.removeItem("authToken");
// //     localStorage.removeItem("userRole");
// //     setIsLoggedIn(false);
// //     navigate("/login");
// //   };

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <AppBar position="sticky">
// //         <Toolbar>
// //           {/* University logo */}
// //           <img
// //             src="../../public/5.png" // You need to replace this with the actual logo path
// //             alt="University of Karachi Logo"
// //             style={{ height: "40px", marginRight: "10px" }}
// //           />

// //           {/* University name */}
// //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //             The University of Karachi
// //           </Typography>

// //           {/* Theme Toggle */}
// //           <IconButton color="inherit" onClick={handleThemeChange}>
// //             {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
// //           </IconButton>

// //           {/* Logout button */}
// //           {isLoggedIn && isDashboardPage && (
// //             <Button color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
// //               <LogoutIcon sx={{ mr: 1 }} /> Logout
// //             </Button>
// //           )}
// //         </Toolbar>
// //       </AppBar>

// //       {/* Drawer for navigation */}
// //       <Drawer
// //         anchor="left"
// //         open={drawerOpen}
// //         onClose={() => toggleDrawer(false)}
// //       >
// //         <Box sx={{ width: 250 }}>
// //           <List>
// //             {!user ? (
// //               <>
// //                 <ListItem button component={Link} to="/">
// //                   <ListItemText primary="Login" />
// //                 </ListItem>
// //                 <ListItem button component={Link} to="/signup">
// //                   <ListItemText primary="Signup" />
// //                 </ListItem>
// //               </>
// //             ) : (
// //               <>
// //                 {user.role === "student" && (
// //                   <ListItem button component={Link} to="/student-dashboard">
// //                     <ListItemText primary="Student Dashboard" />
// //                   </ListItem>
// //                 )}
// //                 {user.role === "teacher" && (
// //                   <ListItem button component={Link} to="/teacher-dashboard">
// //                     <ListItemText primary="Teacher Dashboard" />
// //                   </ListItem>
// //                 )}
// //                 {user.role === "admin" && (
// //                   <ListItem button component={Link} to="/admin-dashboard">
// //                     <ListItemText primary="Admin Dashboard" />
// //                   </ListItem>
// //                 )}
// //               </>
// //             )}
// //           </List>
// //         </Box>
// //       </Drawer>
// //     </ThemeProvider>
// //   );
// // };

// // export default Navbar;
// // import { useState, useEffect } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import {
// //   AppBar,
// //   Toolbar,
// //   IconButton,
// //   Typography,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Box,
// //   CssBaseline,
// //   Button,
// //   useMediaQuery,
// // } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import Brightness4Icon from "@mui/icons-material/Brightness4";
// // import Brightness7Icon from "@mui/icons-material/Brightness7";
// // import LogoutIcon from "@mui/icons-material/Logout";
// // import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

// // const Navbar = () => {
// //   const { user } = useSelector((state) => state.auth);
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [drawerOpen, setDrawerOpen] = useState(false);
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(!!user);

// //   const isDashboardPage = [
// //     "/student-dashboard",
// //     "/teacher-dashboard",
// //     "/admin-dashboard",
// //     "/unauthorized",
// //   ].includes(location.pathname);

// //   // Detect screen size for mobile responsiveness
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

// //   useEffect(() => {
// //     const token = localStorage.getItem("authToken");
// //     setIsLoggedIn(!!token);
// //   }, [user, location.pathname]);

// //   const appTheme = createTheme({
// //     palette: {
// //       mode: darkMode ? "dark" : "light",
// //     },
// //   });

// //   const toggleDrawer = (open) => setDrawerOpen(open);
// //   const handleThemeChange = () => setDarkMode(!darkMode);

// //   const handleLogout = async () => {
// //     localStorage.removeItem("authToken");
// //     localStorage.removeItem("userRole");
// //     setIsLoggedIn(false);
// //     navigate("/login");
// //   };

// //   const menuItems = (
// //     <List>
// //       <ListItem button component={Link} to="/">
// //         <ListItemText primary="Home" />
// //       </ListItem>
// //       <ListItem button component={Link} to="/about">
// //         <ListItemText primary="About Us" />
// //       </ListItem>
// //       <ListItem button component={Link} to="/departments">
// //         <ListItemText primary="Departments" />
// //       </ListItem>
// //       {!user ? (
// //         <>
// //           <ListItem button component={Link} to="/">
// //             <ListItemText primary="Login" />
// //           </ListItem>
// //           <ListItem button component={Link} to="/signup">
// //             <ListItemText primary="Signup" />
// //           </ListItem>
// //         </>
// //       ) : (
// //         <>
// //           {user.role === "student" && (
// //             <ListItem button component={Link} to="/student-dashboard">
// //               <ListItemText primary="Student Dashboard" />
// //             </ListItem>
// //           )}
// //           {user.role === "teacher" && (
// //             <ListItem button component={Link} to="/teacher-dashboard">
// //               <ListItemText primary="Teacher Dashboard" />
// //             </ListItem>
// //           )}
// //           {user.role === "admin" && (
// //             <ListItem button component={Link} to="/admin-dashboard">
// //               <ListItemText primary="Admin Dashboard" />
// //             </ListItem>
// //           )}
// //         </>
// //       )}
// //     </List>
// //   );

// //   return (
// //     <ThemeProvider theme={appTheme}>
// //       <CssBaseline />
// //       <AppBar
// //         position="sticky"
// //         sx={{
// //           background: darkMode
// //             ? "linear-gradient(89.7deg, rgb(0, 0, 0) -10.7%, rgb(53, 92, 125) 88.8%)"
// //             : "linear-gradient(to right, #fbfbfb 0%, #005bea 100%)",
// //           padding: "0 20px",
// //         }}
// //       >
// //         <Toolbar sx={{ justifyContent: "space-between" }}>
// //           {/* Logo */}
// //           <Box sx={{ display: "flex", alignItems: "center" }}>
// //             <img
// //               src="../../public/5.png" // Replace with actual logo path
// //               alt="University of Karachi Logo"
// //               style={{
// //                 height: isMobile ? "50px" : "70px", // Adjust size based on screen size
// //                 maxWidth: "100%", // Ensure logo doesn't overflow its container
// //                 marginLeft: "10px", // Adjust margin as needed
// //                 marginRight: "10px", // Adjust margin as needed
// //               }}
// //             />
// //           </Box>

// //           {/* Site Title */}
// //           <Typography
// //             variant="h6"
// //             component="div"
// //             sx={{
// //               textAlign: "center",
// //               fontWeight: "bold",
// //               flexGrow: 1,
// //               color: "white",
// //             }}
// //           >
// //             The University of Karachi
// //           </Typography>

// //           {/* Icons and Menu for Mobile */}
// //           <Box sx={{ display: "flex", alignItems: "center" }}>
// //             <IconButton color="inherit" onClick={handleThemeChange}>
// //               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
// //             </IconButton>

// //             {isMobile ? (
// //               <IconButton
// //                 edge="start"
// //                 color="inherit"
// //                 aria-label="menu"
// //                 onClick={() => toggleDrawer(true)}
// //               >
// //                 <MenuIcon />
// //               </IconButton>
// //             ) : (
// //               <>
// //                 <Button color="inherit" component={Link} to="/">
// //                   Home
// //                 </Button>
// //                 <Button color="inherit" component={Link} to="/about">
// //                   About Us
// //                 </Button>
// //                 <Button color="inherit" component={Link} to="/departments">
// //                   Departments
// //                 </Button>

// //                 {isLoggedIn && isDashboardPage && (
// //                   <Button color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
// //                     <LogoutIcon sx={{ mr: 1 }} /> Logout
// //                   </Button>
// //                 )}
// //               </>
// //             )}
// //           </Box>
// //         </Toolbar>
// //       </AppBar>

// //       {/* Drawer for Mobile View */}
// //       <Drawer
// //         anchor="left"
// //         open={drawerOpen}
// //         onClose={() => toggleDrawer(false)}
// //       >
// //         <Box sx={{ width: 250 }}>{menuItems}</Box>
// //       </Drawer>
// //     </ThemeProvider>
// //   );
// // };

// // export default Navbar;

// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Box,
//   CssBaseline,
//   Button,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import LogoutIcon from "@mui/icons-material/Logout";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import BusinessIcon from "@mui/icons-material/Business";
// import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

// const Navbar = () => {
//   const { user } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!user);

//   const isDashboardPage = [
//     "/student-dashboard",
//     "/teacher-dashboard",
//     "/admin-dashboard",
//     "/unauthorized",
//   ].includes(location.pathname);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsLoggedIn(!!token);
//   }, [user, location.pathname]);

//   const appTheme = createTheme({
//     palette: {
//       mode: darkMode ? "dark" : "light",
//     },
//   });

//   const toggleDrawer = (open) => {
//     setDrawerOpen(open);
//   };

//   const handleThemeChange = () => setDarkMode(!darkMode);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userRole");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   const menuItems = (
//     <List>
//       <ListItem
//         button
//         component={Link}
//         to="/"
//         onClick={() => toggleDrawer(false)}
//       >
//         <ListItemIcon>
//           <HomeIcon />
//         </ListItemIcon>
//         <ListItemText primary="Home" />
//       </ListItem>
//       <ListItem
//         button
//         component={Link}
//         to="/about"
//         onClick={() => toggleDrawer(false)}
//       >
//         <ListItemIcon>
//           <InfoIcon />
//         </ListItemIcon>
//         <ListItemText primary="About" />
//       </ListItem>
//       <ListItem
//         button
//         component={Link}
//         to="/departments"
//         onClick={() => toggleDrawer(false)}
//       >
//         <ListItemIcon>
//           <BusinessIcon />
//         </ListItemIcon>
//         <ListItemText primary="Departments" />
//       </ListItem>
//       {isLoggedIn && (
//         <ListItem button onClick={handleLogout}>
//           <ListItemIcon>
//             <LogoutIcon />
//           </ListItemIcon>
//           <ListItemText primary="Logout" />
//         </ListItem>
//       )}
//     </List>
//   );

//   return (
//     <ThemeProvider theme={appTheme}>
//       <CssBaseline />
//       <AppBar
//         position="sticky"
//         sx={{
//           background: darkMode
//             ? "linear-gradient(89.7deg, rgb(0, 0, 0) -10.7%, rgb(53, 92, 125) 88.8%)"
//             : "linear-gradient(to right, #fbfbfb 0%, #005bea 100%)",
//           padding: "0 20px",
//         }}
//       >
//         <Toolbar sx={{ justifyContent: "space-between" }}>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <img
//               src="../../public/5.png" // Replace with actual logo path
//               alt="University of Karachi Logo"
//               style={{
//                 height: isMobile ? "50px" : "70px",
//                 maxWidth: "100%",
//                 marginLeft: "10px",
//                 marginRight: "10px",
//               }}
//             />
//           </Box>

//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               textAlign: "center",
//               fontWeight: "bold",
//               flexGrow: 1,
//               color: "white",
//             }}
//           >
//             The University of Karachi
//           </Typography>

//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             {isMobile ? (
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={() => toggleDrawer(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//             ) : (
//               <>
//                 <Button color="inherit" component={Link} to="/">
//                   Home
//                 </Button>
//                 <Button color="inherit" component={Link} to="/about">
//                   About
//                 </Button>
//                 <Button color="inherit" component={Link} to="/departments">
//                   Departments
//                 </Button>

//                 {isLoggedIn && isDashboardPage && (
//                   <Button color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
//                     <LogoutIcon sx={{ mr: 1 }} /> Logout
//                   </Button>
//                 )}
//               </>
//             )}
//             <IconButton color="inherit" onClick={handleThemeChange}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={() => toggleDrawer(false)}
//       >
//         <Box sx={{ width: 250 }}>{menuItems}</Box>
//       </Drawer>
//     </ThemeProvider>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  CssBaseline,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BusinessIcon from "@mui/icons-material/Business";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  const isDashboardPage = [
    "/student-dashboard",
    "/teacher-dashboard",
    "/admin-dashboard",
    "/unauthorized",
  ].includes(location.pathname);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, [user, location.pathname]);

  const appTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleThemeChange = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const menuItems = (
    <List>
      <ListItem
        button
        component={Link}
        to="/"
        onClick={() => toggleDrawer(false)}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/about"
        onClick={() => toggleDrawer(false)}
      >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/departments"
        onClick={() => toggleDrawer(false)}
      >
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Departments" />
      </ListItem>
      {isLoggedIn && (
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      )}
    </List>
  );

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          background: darkMode
            ? "linear-gradient(89.7deg, rgb(0, 0, 0) -10.7%, rgb(53, 92, 125) 88.8%)"
            : "linear-gradient(to right, #fbfbfb 0%, #005bea 100%)",
          padding: "0 20px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="../../public/5.png" // Replace with actual logo path
              alt="University of Karachi Logo"
              style={{
                height: isMobile ? "40px" : isTablet ? "50px" : "60px",
                maxWidth: "100%",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />
          </Box>

          {/* University Name */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              flexGrow: 1,
              color: "#058c35", // Set the color to green (#006400 is a dark green shade)
              fontSize: isMobile ? "1rem" : isTablet ? "1.3rem" : "1.5rem", // Reduced font size for all screen sizes
              fontFamily: "'Poppins', sans-serif", // Changed to Poppins for a more modern, clean look
              letterSpacing: "0px", // Slightly reduced letter spacing for a professional look
              textTransform: "capitalize", // Changed from uppercase to capitalize for better readability
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginRight: isMobile ? "5px" : "20px",
            }}
          >
            The University of Karachi
          </Typography>

          {/* Actions and Menu */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/about">
                  About
                </Button>
                <Button color="inherit" component={Link} to="/departments">
                  Departments
                </Button>

                {isLoggedIn && isDashboardPage && (
                  <Button color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
                    <LogoutIcon sx={{ mr: 1 }} /> Logout
                  </Button>
                )}
              </>
            )}
            <IconButton color="inherit" onClick={handleThemeChange}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 250, textAlign: "center", p: 2 }}>
          {/* Logo inside Drawer */}
          <img
            src="../../public/logo.png" // Replace with the logo path
            alt="University of Karachi Logo"
            style={{
              width: "300px",
              height: "60px",
              marginBottom: "10px",
            }}
          />
          {menuItems}
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;
