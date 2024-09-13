// // import React from "react";
// import { Button, Typography, Container, Box } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { logout } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";

// const StudentDashboard = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       // Dispatch logout action
//       await dispatch(logout()).unwrap();

//       // Remove token from localStorage
//       localStorage.removeItem("authToken");
//       localStorage.removeItem("userRole");
//       // Redirect to login page
//       navigate("/login");
//     } catch (error) {
//       // Handle errors from logout API call
//       console.error("Logout failed:", error);
//       // Optionally remove token and redirect if API call fails
//       localStorage.removeItem("authToken");
//       localStorage.removeItem("userRole");
//       navigate("/login");
//     }
//   };
//   return (
//     <Container>
//       <Box sx={{ mt: 8 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Student Dashboard
//         </Typography>
//         <Button variant="contained" color="primary" onClick={handleLogout}>
//           Logout
//         </Button>
//         {/* Add functionality for submitting assignments here */}
//       </Box>
//     </Container>
//   );
// };

// export default StudentDashboard;
// import { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Grid,
//   Divider,
//   TextField,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";

// // Placeholder for viewing assignments
// const ViewAssignments = () => (
//   <div>
//     <Typography variant="h5" gutterBottom>
//       View Assignments
//     </Typography>
//     <Typography variant="body1">
//       List of assignments given by your teacher will appear here.
//     </Typography>
//     {/* You can add the logic to dynamically display assignments */}
//   </div>
// );

// // Placeholder for submitting an assignment
// const SubmitAssignmentForm = () => {
//   const [assignmentFile, setAssignmentFile] = useState(null);

//   const handleFileUpload = (event) => {
//     setAssignmentFile(event.target.files[0]);
//   };

//   const handleSubmit = () => {
//     // Handle submission logic (API call to upload assignment)
//     console.log("Submitting assignment:", assignmentFile);
//   };

//   return (
//     <div>
//       <Typography variant="h5" gutterBottom>
//         Submit Assignment
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Upload your assignment file to submit it to your teacher.
//       </Typography>
//       <TextField
//         type="file"
//         fullWidth
//         onChange={handleFileUpload}
//         inputProps={{ accept: ".pdf,.doc,.docx" }} // Limit to document types
//         sx={{ my: 2 }}
//       />
//       <Button
//         variant="contained"
//         fullWidth
//         onClick={handleSubmit}
//         disabled={!assignmentFile} // Disable if no file is selected
//       >
//         Submit Assignment
//       </Button>
//     </div>
//   );
// };

// // Styled Card with hover effect
// const ActionCard = styled(Card)(({ theme }) => ({
//   transition: "transform 0.3s ease-in-out",
//   "&:hover": {
//     transform: "scale(1.05)",
//     boxShadow: theme.shadows[10],
//   },
// }));

// const StudentDashboard = () => {
//   const [activeSection, setActiveSection] = useState(""); // State to track the current section

//   // Function to render the content based on the active section
//   const renderContent = () => {
//     switch (activeSection) {
//       case "view-assignments":
//         return <ViewAssignments />;
//       case "submit-assignment":
//         return <SubmitAssignmentForm />;
//       default:
//         return (
//           <Typography variant="h6" align="center">
//             Please select an option to get started.
//           </Typography>
//         );
//     }
//   };

//   return (
//     <Box sx={{ flexGrow: 1, p: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Student Dashboard
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">
//         {/* View Assignments */}
//         <Grid item xs={12} sm={6} md={4}>
//           <ActionCard>
//             <CardContent>
//               <Typography variant="h5" component="div" gutterBottom>
//                 View Assignments
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Check the assignments given by your teacher and their due dates.
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{ mt: 2 }}
//                 fullWidth
//                 onClick={() => setActiveSection("view-assignments")} // Set the section to 'view-assignments'
//               >
//                 View Assignments
//               </Button>
//             </CardContent>
//           </ActionCard>
//         </Grid>

//         {/* Submit Assignment */}
//         <Grid item xs={12} sm={6} md={4}>
//           <ActionCard>
//             <CardContent>
//               <Typography variant="h5" component="div" gutterBottom>
//                 Submit Assignment
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Upload and submit your assignment to your teacher.
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{ mt: 2 }}
//                 fullWidth
//                 onClick={() => setActiveSection("submit-assignment")} // Set the section to 'submit-assignment'
//               >
//                 Submit Assignment
//               </Button>
//             </CardContent>
//           </ActionCard>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 4 }} />

//       {/* Render the selected section's content below the cards */}
//       <Box sx={{ mt: 4 }}>{renderContent()}</Box>
//     </Box>
//   );
// };

// export default StudentDashboard;
// src/components/StudentDashboard.js
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchStudentAssignments,
//   submitAssignment,
//   editAssignmentSubmission,
// } from "../redux/slices/studentSlice";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Grid,
//   Divider,
//   TextField,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import { toast } from "react-toastify";

// const StudentDashboard = () => {
//   const dispatch = useDispatch();
//   const { assignments, loading, error } = useSelector((state) => state.student);
//   const [selectedAssignment, setSelectedAssignment] = useState(null);
//   const [fileUrl, setFileUrl] = useState(null);

//   useEffect(() => {
//     const fetchAssignments = async () => {
//       try {
//         await dispatch(fetchStudentAssignments());
//         console.log("Assignments fetched:", assignments); // Debugging log
//       } catch (err) {
//         console.error("Error fetching assignments:", err); // Debugging log
//       }
//     };

//     fetchAssignments();
//   }, [dispatch]);

//   // Handle file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFileUrl(file); // Set file for now; change to file URL after upload to cloud service
//     }
//   };

//   // Submit assignment
//   const handleSubmit = (assignmentId) => {
//     if (fileUrl) {
//       dispatch(submitAssignment({ assignmentId, fileUrl }))
//         .unwrap()
//         .then(() => {
//           toast.success("Assignment submitted!");
//           setSelectedAssignment(null);
//         })
//         .catch((err) => toast.error(err));
//     } else {
//       toast.error("Please upload a file before submitting!");
//     }
//   };

//   // Edit assignment
//   const handleEdit = (assignmentId) => {
//     if (fileUrl) {
//       dispatch(editAssignmentSubmission({ assignmentId, fileUrl }))
//         .unwrap()
//         .then(() => {
//           toast.success("Assignment edited successfully!");
//           setSelectedAssignment(null);
//         })
//         .catch((err) => toast.error(err));
//     } else {
//       toast.error("Please upload a file before editing!");
//     }
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Student Dashboard
//       </Typography>
//       <Divider sx={{ mb: 4 }} />
//       {loading ? (
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           height="100vh"
//         >
//           <CircularProgress />
//         </Box>
//       ) : error ? (
//         <Alert severity="error">{error}</Alert>
//       ) : (
//         <Grid container spacing={3}>
//           {assignments.length === 0 ? (
//             <Typography variant="h6" align="center" sx={{ width: "100%" }}>
//               No assignments available.
//             </Typography>
//           ) : (
//             assignments.map((assignment) => (
//               <Grid item xs={12} sm={6} md={4} key={assignment._id}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h6">{assignment.title}</Typography>
//                     <Typography variant="body2">
//                       Due Date:{" "}
//                       {new Date(assignment.dueDate).toLocaleDateString()}
//                     </Typography>
//                     <Typography variant="body2">
//                       Status: {assignment.isSubmitted ? "Submitted" : "Pending"}
//                     </Typography>
//                     {assignment.isSubmitted && (
//                       <Typography variant="body2">
//                         Grade: {assignment.grade || "Not graded yet"}
//                       </Typography>
//                     )}
//                     <Button
//                       variant="outlined"
//                       sx={{ mt: 2 }}
//                       onClick={() => setSelectedAssignment(assignment)}
//                     >
//                       {assignment.isSubmitted ? "Edit Submission" : "Submit"}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           )}
//         </Grid>
//       )}

//       {selectedAssignment && (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h5" gutterBottom>
//             {selectedAssignment.isSubmitted
//               ? "Edit Your Submission"
//               : "Submit Your Assignment"}
//           </Typography>
//           <TextField
//             type="file"
//             fullWidth
//             onChange={handleFileChange}
//             inputProps={{ accept: ".pdf,.doc,.docx" }}
//             sx={{ my: 2 }}
//           />
//           <Button
//             variant="contained"
//             fullWidth
//             onClick={() =>
//               selectedAssignment.isSubmitted
//                 ? handleEdit(selectedAssignment._id)
//                 : handleSubmit(selectedAssignment._id)
//             }
//           >
//             {selectedAssignment.isSubmitted ? "Edit Submission" : "Submit"}
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default StudentDashboard;
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchStudentAssignments,
//   submitAssignment,
//   editAssignmentSubmission,
// } from "../redux/slices/studentSlice";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Grid,
//   Divider,
//   TextField,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import { toast } from "react-toastify";

// const StudentDashboard = () => {
//   const dispatch = useDispatch();
//   const { assignments, loading, error } = useSelector((state) => state.student);
//   const [selectedAssignment, setSelectedAssignment] = useState(null);
//   const [file, setFile] = useState(null); // Updated to use file object

//   useEffect(() => {
//     const fetchAssignments = async () => {
//       try {
//         await dispatch(fetchStudentAssignments());
//       } catch (err) {
//         console.error("Error fetching assignments:", err);
//       }
//     };

//     fetchAssignments();
//   }, [dispatch]);

//   // Handle file input change
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   // Submit assignment
//   const handleSubmit = (assignmentId) => {
//     if (file) {
//       const formData = new FormData();
//       formData.append("file", file);

//       dispatch(submitAssignment({ assignmentId, formData }))
//         .unwrap()
//         .then(() => {
//           toast.success("Assignment submitted!");
//           setSelectedAssignment(null);
//         })
//         .catch((err) => toast.error(err));
//     } else {
//       toast.error("Please upload a file before submitting!");
//     }
//   };

//   // Edit assignment
//   const handleEdit = (assignmentId) => {
//     if (file) {
//       const formData = new FormData();
//       formData.append("file", file);

//       dispatch(editAssignmentSubmission({ assignmentId, formData }))
//         .unwrap()
//         .then(() => {
//           toast.success("Assignment edited successfully!");
//           setSelectedAssignment(null);
//         })
//         .catch((err) => toast.error(err));
//     } else {
//       toast.error("Please upload a file before editing!");
//     }
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Student Dashboard
//       </Typography>
//       <Divider sx={{ mb: 4 }} />
//       {loading ? (
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           height="100vh"
//         >
//           <CircularProgress />
//         </Box>
//       ) : error ? (
//         <Alert severity="error">{error}</Alert>
//       ) : (
//         <Grid container spacing={3}>
//           {assignments.length === 0 ? (
//             <Typography variant="h6" align="center" sx={{ width: "100%" }}>
//               No assignments available.
//             </Typography>
//           ) : (
//             assignments.map((assignment) => (
//               <Grid item xs={12} sm={6} md={4} key={assignment._id}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h6">{assignment.title}</Typography>
//                     <Typography variant="body2">
//                       Due Date:{" "}
//                       {new Date(assignment.dueDate).toLocaleDateString()}
//                     </Typography>
//                     <Typography variant="body2">
//                       Status: {assignment.isSubmitted ? "Submitted" : "Pending"}
//                     </Typography>
//                     {assignment.isSubmitted && (
//                       <Typography variant="body2">
//                         Grade: {assignment.grade || "Not graded yet"}
//                       </Typography>
//                     )}
//                     <Button
//                       variant="outlined"
//                       sx={{ mt: 2 }}
//                       onClick={() => setSelectedAssignment(assignment)}
//                     >
//                       {assignment.isSubmitted ? "Edit Submission" : "Submit"}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           )}
//         </Grid>
//       )}

//       {selectedAssignment && (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h5" gutterBottom>
//             {selectedAssignment.isSubmitted
//               ? "Edit Your Submission"
//               : "Submit Your Assignment"}
//           </Typography>
//           <TextField
//             type="file"
//             fullWidth
//             onChange={handleFileChange}
//             inputProps={{ accept: ".pdf,.doc,.docx,.zip" }}
//             sx={{ my: 2 }}
//           />
//           <Button
//             variant="contained"
//             fullWidth
//             onClick={() =>
//               selectedAssignment.isSubmitted
//                 ? handleEdit(selectedAssignment._id)
//                 : handleSubmit(selectedAssignment._id)
//             }
//           >
//             {selectedAssignment.isSubmitted ? "Edit Submission" : "Submit"}
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default StudentDashboard;
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchStudentAssignments,
//   submitAssignment,
//   editAssignmentSubmission,
// } from "../redux/slices/studentSlice";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Grid,
//   Divider,
//   TextField,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import { toast } from "react-toastify";

// const StudentDashboard = () => {
//   const dispatch = useDispatch();
//   const { assignments, loading, error } = useSelector((state) => state.student);
//   const [selectedAssignment, setSelectedAssignment] = useState(null);
//   const [file, setFile] = useState(null); // Use file object

//   useEffect(() => {
//     const fetchAssignments = async () => {
//       try {
//         await dispatch(fetchStudentAssignments());
//       } catch (err) {
//         console.error("Error fetching assignments:", err);
//       }
//     };

//     fetchAssignments();
//   }, [dispatch]);

//   // Handle file input change
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };
//   // Submit assignment
//   const handleSubmit = (assignmentId) => {
//     if (file) {
//       const formData = new FormData();
//       formData.append("file", file); // File input

//       dispatch(submitAssignment({ assignmentId, formData })) // Correctly send formData
//         .unwrap()
//         .then(() => {
//           toast.success("Assignment submitted!");
//           setSelectedAssignment(null);
//         })
//         .catch((err) => toast.error(`Error: ${err.message}`));
//     } else {
//       toast.error("Please upload a file before submitting!");
//     }
//   };

//   // Edit assignment
//   const handleEdit = (assignmentId) => {
//     if (file) {
//       const formData = new FormData();
//       formData.append("file", file); // File input

//       dispatch(editAssignmentSubmission({ assignmentId, formData })) // Correctly send formData
//         .unwrap()
//         .then(() => {
//           toast.success("Assignment edited successfully!");
//           setSelectedAssignment(null);
//         })
//         .catch((err) => toast.error(`Error: ${err.message}`));
//     } else {
//       toast.error("Please upload a file before editing!");
//     }
//   };

//   // Submit assignment
//   // const handleSubmit = (assignmentId) => {
//   //   if (file) {
//   //     const formData = new FormData();
//   //     formData.append("file", file);

//   //     dispatch(submitAssignment({ assignmentId, formData }))
//   //       .unwrap()
//   //       .then(() => {
//   //         toast.success("Assignment submitted!");
//   //         setSelectedAssignment(null);
//   //       })
//   //       .catch((err) => toast.error(`Error: ${err.message}`));
//   //   } else {
//   //     toast.error("Please upload a file before submitting!");
//   //   }
//   // };

//   // // Edit assignment
//   // const handleEdit = (assignmentId) => {
//   //   if (file) {
//   //     const formData = new FormData();
//   //     formData.append("file", file);

//   //     dispatch(editAssignmentSubmission({ assignmentId, formData }))
//   //       .unwrap()
//   //       .then(() => {
//   //         toast.success("Assignment edited successfully!");
//   //         setSelectedAssignment(null);
//   //       })
//   //       .catch((err) => toast.error(`Error: ${err.message}`));
//   //   } else {
//   //     toast.error("Please upload a file before editing!");
//   //   }
//   // };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Student Dashboard
//       </Typography>
//       <Divider sx={{ mb: 4 }} />
//       {loading ? (
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           height="100vh"
//         >
//           <CircularProgress />
//         </Box>
//       ) : error ? (
//         <Alert severity="error">{error}</Alert>
//       ) : (
//         <Grid container spacing={3}>
//           {assignments.length === 0 ? (
//             <Typography variant="h6" align="center" sx={{ width: "100%" }}>
//               No assignments available.
//             </Typography>
//           ) : (
//             assignments.map((assignment) => {
//               // Debugging log to ensure assignment has _id
//               console.log("Assignment:", assignment);
//               return (
//                 <Grid item xs={12} sm={6} md={4} key={assignment._id}>
//                   <Card>
//                     <CardContent>
//                       <Typography variant="h6">{assignment.title}</Typography>
//                       <Typography variant="body2">
//                         Due Date:{" "}
//                         {new Date(assignment.dueDate).toLocaleDateString()}
//                       </Typography>
//                       <Typography variant="body2">
//                         Status:{" "}
//                         {assignment.isSubmitted ? "Submitted" : "Pending"}
//                       </Typography>
//                       {assignment.isSubmitted && (
//                         <Typography variant="body2">
//                           Grade: {assignment.grade || "Not graded yet"}
//                         </Typography>
//                       )}
//                       <Button
//                         variant="outlined"
//                         sx={{ mt: 2 }}
//                         onClick={() => setSelectedAssignment(assignment)}
//                       >
//                         {assignment.isSubmitted ? "Edit Submission" : "Submit"}
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               );
//             })
//           )}
//         </Grid>
//       )}

//       {selectedAssignment && (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h5" gutterBottom>
//             {selectedAssignment.isSubmitted
//               ? "Edit Your Submission"
//               : "Submit Your Assignment"}
//           </Typography>
//           <TextField
//             type="file"
//             fullWidth
//             onChange={handleFileChange}
//             inputProps={{ accept: ".pdf,.doc,.docx,.zip" }}
//             sx={{ my: 2 }}
//           />
//           <Button
//             variant="contained"
//             fullWidth
//             onClick={() =>
//               selectedAssignment.isSubmitted
//                 ? handleEdit(selectedAssignment._id)
//                 : handleSubmit(selectedAssignment._id)
//             }
//           >
//             {selectedAssignment.isSubmitted ? "Edit Submission" : "Submit"}
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default StudentDashboard;
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchStudentAssignments,
//   submitAssignment,
//   editAssignmentSubmission,
// } from "../redux/slices/studentSlice";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Grid,
//   Divider,
//   TextField,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import { toast } from "react-toastify";

// const StudentDashboard = () => {
//   const dispatch = useDispatch();
//   const { assignments, loading, error } = useSelector((state) => state.student);
//   const [selectedAssignment, setSelectedAssignment] = useState(null);
//   const [file, setFile] = useState(null); // Use file object

//   useEffect(() => {
//     dispatch(fetchStudentAssignments())
//       .unwrap()
//       .catch((err) => console.error("Error fetching assignments:", err));
//   }, [dispatch]);

//   // Handle file input change
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   // Submit or Edit assignment
//   const handleAssignmentAction = async (assignmentId, isEdit) => {
//     if (file) {
//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         if (isEdit) {
//           await dispatch(
//             editAssignmentSubmission({ assignmentId, formData })
//           ).unwrap();
//           toast.success("Assignment edited successfully!");
//         } else {
//           await dispatch(submitAssignment({ assignmentId, formData })).unwrap();
//           toast.success("Assignment submitted!");
//         }
//         setSelectedAssignment(null);
//         dispatch(fetchStudentAssignments()); // Refresh assignments
//       } catch (err) {
//         toast.error(`Error: ${err.message}`);
//       }
//     } else {
//       toast.error("Please upload a file before submitting!");
//     }
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Student Dashboard
//       </Typography>
//       <Divider sx={{ mb: 4 }} />
//       {loading ? (
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           height="100vh"
//         >
//           <CircularProgress />
//         </Box>
//       ) : error ? (
//         <Alert severity="error">{error}</Alert>
//       ) : (
//         <Grid container spacing={3}>
//           {assignments.length === 0 ? (
//             <Typography variant="h6" align="center" sx={{ width: "100%" }}>
//               No assignments available.
//             </Typography>
//           ) : (
//             assignments.map((assignment) => (
//               <Grid item xs={12} sm={6} md={4} key={assignment._id}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h6">{assignment.title}</Typography>
//                     <Typography variant="body2">
//                       Due Date:{" "}
//                       {new Date(assignment.dueDate).toLocaleDateString()}
//                     </Typography>
//                     <Typography variant="body2">
//                       Status: {assignment.isSubmitted ? "Submitted" : "Pending"}
//                     </Typography>
//                     {assignment.isSubmitted && (
//                       <Typography variant="body2">
//                         Grade: {assignment.grade || "Not graded yet"}
//                       </Typography>
//                     )}
//                     <Button
//                       variant="outlined"
//                       sx={{ mt: 2 }}
//                       onClick={() => setSelectedAssignment(assignment)}
//                     >
//                       {assignment.isSubmitted ? "Edit Submission" : "Submit"}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           )}
//         </Grid>
//       )}

//       {selectedAssignment && (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h5" gutterBottom>
//             {selectedAssignment.isSubmitted
//               ? "Edit Your Submission"
//               : "Submit Your Assignment"}
//           </Typography>
//           <TextField
//             type="file"
//             fullWidth
//             onChange={handleFileChange}
//             inputProps={{ accept: ".pdf,.doc,.docx,.zip" }}
//             sx={{ my: 2 }}
//           />
//           <Button
//             variant="contained"
//             fullWidth
//             onClick={() =>
//               handleAssignmentAction(
//                 selectedAssignment._id,
//                 selectedAssignment.isSubmitted
//               )
//             }
//           >
//             {selectedAssignment.isSubmitted ? "Edit Submission" : "Submit"}
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default StudentDashboard;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudentAssignments,
  submitAssignment,
  editAssignmentSubmission,
} from "../redux/slices/studentSlice";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Divider,
  TextField,
  CircularProgress,
  Alert,
  IconButton,
  Fade,
  Tooltip,
} from "@mui/material";
import { toast } from "react-toastify";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EditIcon from "@mui/icons-material/Edit";
import SubmitIcon from "@mui/icons-material/Send";
import EmptyIllustration from "../../public/5.png"; // Add an empty state illustration for better UX

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const { assignments, loading, error } = useSelector((state) => state.student);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [file, setFile] = useState(null); // Use file object

  useEffect(() => {
    dispatch(fetchStudentAssignments())
      .unwrap()
      .catch((err) => console.error("Error fetching assignments:", err));
  }, [dispatch]);

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Submit or Edit assignment
  const handleAssignmentAction = async (assignmentId, isEdit) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        if (isEdit) {
          await dispatch(
            editAssignmentSubmission({ assignmentId, formData })
          ).unwrap();
          toast.success("Assignment edited successfully!");
        } else {
          await dispatch(submitAssignment({ assignmentId, formData })).unwrap();
          toast.success("Assignment submitted!");
        }
        setSelectedAssignment(null);
        dispatch(fetchStudentAssignments()); // Refresh assignments
      } catch (err) {
        toast.error(`Error: ${err.message}`);
      }
    } else {
      toast.error("Please upload a file before submitting!");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Student Dashboard
      </Typography>
      <Divider sx={{ mb: 4 }} />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Grid container spacing={3}>
          {assignments.length === 0 ? (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100%"
              mt={4}
            >
              <img
                src={EmptyIllustration}
                alt="No Assignments"
                style={{ maxWidth: "300px", marginBottom: "20px" }}
              />
              <Typography variant="h6" color="textSecondary">
                No assignments available.
              </Typography>
            </Box>
          ) : (
            assignments.map((assignment) => (
              <Grid item xs={12} sm={6} md={4} key={assignment._id}>
                <Card
                  sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h6">{assignment.title}</Typography>
                      <Tooltip
                        title={
                          assignment.isSubmitted ? "Edit Submission" : "Submit"
                        }
                      >
                        <IconButton
                          onClick={() => setSelectedAssignment(assignment)}
                          sx={{
                            "&:hover": {
                              backgroundColor: assignment.isSubmitted
                                ? "#ffea00"
                                : "#00e676",
                            },
                          }}
                        >
                          {assignment.isSubmitted ? (
                            <EditIcon />
                          ) : (
                            <SubmitIcon />
                          )}
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Typography variant="body2">
                      Due Date:{" "}
                      {new Date(assignment.dueDate).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      Status: {assignment.isSubmitted ? "Submitted" : "Pending"}
                    </Typography>
                    {assignment.isSubmitted && (
                      <Typography variant="body2">
                        Grade: {assignment.grade || "Not graded yet"}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      )}

      {selectedAssignment && (
        <Fade in={!!selectedAssignment}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              {selectedAssignment.isSubmitted
                ? "Edit Your Submission"
                : "Submit Your Assignment"}
            </Typography>
            <TextField
              type="file"
              fullWidth
              onChange={handleFileChange}
              inputProps={{ accept: ".pdf,.doc,.docx,.zip" }}
              sx={{ my: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={
                selectedAssignment.isSubmitted ? <EditIcon /> : <SubmitIcon />
              }
              onClick={() =>
                handleAssignmentAction(
                  selectedAssignment._id,
                  selectedAssignment.isSubmitted
                )
              }
              sx={{
                backgroundColor: selectedAssignment.isSubmitted
                  ? "#ffea00"
                  : "#00e676",
                "&:hover": {
                  backgroundColor: selectedAssignment.isSubmitted
                    ? "#ffd600"
                    : "#00c853",
                },
              }}
            >
              {selectedAssignment.isSubmitted ? "Edit Submission" : "Submit"}
            </Button>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default StudentDashboard;
