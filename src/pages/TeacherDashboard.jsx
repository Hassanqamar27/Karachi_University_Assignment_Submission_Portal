// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAssignments,
//   createAssignment,
//   updateAssignment,
//   deleteAssignment,
// } from "../redux/slices/assignmentSlice";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Container,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   CircularProgress,
//   Box,
// } from "@mui/material";
// import { Add, Edit, Delete } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const TeacherDashboard = () => {
//   const dispatch = useDispatch();
//   const { assignments, loading, error } = useSelector(
//     (state) => state.assignments
//   );
//   const [open, setOpen] = useState(false);
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     if (isMounted) {
//       dispatch(fetchAssignments())
//         .unwrap()
//         .catch((err) => {
//           if (isMounted) {
//             toast.error("Error fetching assignments");
//             console.log(err);
//           }
//         });
//     }

//     return () => {
//       isMounted = false;
//     };
//   }, [dispatch]);

//   const handleOpen = () => {
//     setOpen(true);
//     setEditMode(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setFormState({ title: "", description: "", dueDate: "" });
//   };

//   const handleCreate = () => {
//     const action = editMode
//       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
//       : createAssignment(formState);

//     dispatch(action)
//       .unwrap()
//       .then(() => {
//         toast.success(
//           editMode
//             ? "Assignment updated successfully!"
//             : "Assignment created successfully!"
//         );
//         handleClose();
//       })
//       .catch(() => {
//         toast.error(
//           editMode ? "Error updating assignment" : "Error creating assignment"
//         );
//       });
//   };

//   const handleEdit = (assignment) => {
//     setFormState({
//       title: assignment.title,
//       description: assignment.description,
//       dueDate: assignment.dueDate,
//     });
//     setEditMode(true);
//     setCurrentId(assignment._id);
//     setOpen(true);
//   };

//   const handleDelete = (assignmentId) => {
//     dispatch(deleteAssignment(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Assignment deleted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error deleting assignment");
//       });
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Assignment Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={handleOpen}
//       >
//         Create Assignment
//       </Button>
//       <Grid container spacing={2} style={{ marginTop: "20px" }}>
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//           >
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error">{error}</Typography>
//         ) : (
//           assignments.map((assignment) => (
//             <Grid item xs={12} md={4} key={assignment._id}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" color="primary">
//                     {assignment.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {assignment.description}
//                   </Typography>
//                   <Typography
//                     color="textSecondary"
//                     style={{ marginTop: "10px" }}
//                   >
//                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleEdit(assignment)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => handleDelete(assignment._id)}
//                   >
//                     <Delete />
//                   </IconButton>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>
//       {/* Dialog for Create/Edit */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>
//           {editMode ? "Edit Assignment" : "Create Assignment"}
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Title"
//             fullWidth
//             margin="normal"
//             value={formState.title}
//             onChange={(e) =>
//               setFormState({ ...formState, title: e.target.value })
//             }
//           />
//           <TextField
//             label="Description"
//             fullWidth
//             margin="normal"
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({ ...formState, description: e.target.value })
//             }
//           />
//           <TextField
//             label="Due Date"
//             type="date"
//             fullWidth
//             margin="normal"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             value={formState.dueDate}
//             onChange={(e) =>
//               setFormState({ ...formState, dueDate: e.target.value })
//             }
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleCreate} color="primary">
//             {editMode ? "Update" : "Create"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default TeacherDashboard;
// new1
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAssignments,
//   createAssignment,
//   updateAssignment,
//   deleteAssignment,
// } from "../redux/slices/assignmentSlice"; // You might want to create fetchSubmissions in redux
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Container,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   CircularProgress,
//   Box,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { Add, Edit, Delete } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const TeacherDashboard = () => {
//   const dispatch = useDispatch();
//   const { assignments, loading, error } = useSelector(
//     (state) => state.assignments
//   );

//   const [submissions, setSubmissions] = useState([]); // For storing fetched submissions
//   const [open, setOpen] = useState(false);
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   // Fetch assignments on component mount
//   useEffect(() => {
//     let isMounted = true;

//     if (isMounted) {
//       dispatch(fetchAssignments())
//         .unwrap()
//         .catch((err) => {
//           if (isMounted) {
//             toast.error("Error fetching assignments");
//             console.log(err);
//           }
//         });
//     }

//     return () => {
//       isMounted = false;
//     };
//   }, [dispatch]);

//   // Handle opening the assignment creation dialog
//   const handleOpen = () => {
//     setOpen(true);
//     setEditMode(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setFormState({ title: "", description: "", dueDate: "" });
//   };

//   // Handle assignment creation or update
//   const handleCreate = () => {
//     const action = editMode
//       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
//       : createAssignment(formState);

//     dispatch(action)
//       .unwrap()
//       .then(() => {
//         toast.success(
//           editMode
//             ? "Assignment updated successfully!"
//             : "Assignment created successfully!"
//         );
//         handleClose();
//       })
//       .catch(() => {
//         toast.error(
//           editMode ? "Error updating assignment" : "Error creating assignment"
//         );
//       });
//   };

//   const handleEdit = (assignment) => {
//     setFormState({
//       title: assignment.title,
//       description: assignment.description,
//       dueDate: assignment.dueDate,
//     });
//     setEditMode(true);
//     setCurrentId(assignment._id);
//     setOpen(true);
//   };

//   const handleDelete = (assignmentId) => {
//     dispatch(deleteAssignment(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Assignment deleted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error deleting assignment");
//       });
//   };

//   // Fetch submissions for an assignment
//   const fetchSubmissions = async (assignmentId) => {
//     try {
//       const response = await fetch(`/api/assignments/${assignmentId}/submissions`);
//       const data = await response.json();
//       if (response.ok) {
//         setSubmissions(data.submissions);
//         toast.success("Submissions fetched successfully!");
//       } else {
//         toast.error("Error fetching submissions");
//       }
//     } catch (error) {
//       toast.error("Error fetching submissions");
//     }
//   };

//   // Handle grade change for a submission
//   const handleGradeChange = (submissionId, newGrade) => {
//     setSubmissions((prev) =>
//       prev.map((submission) =>
//         submission._id === submissionId
//           ? { ...submission, grade: newGrade }
//           : submission
//       )
//     );
//   };

//   // Submit grade for a specific submission
//   const submitGrade = async (submissionId, grade) => {
//     try {
//       await fetch(`/api/submissions/${submissionId}/grade`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ grade }),
//       });
//       toast.success("Grade submitted successfully!");
//     } catch (error) {
//       toast.error("Error submitting grade");
//     }
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Assignment Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={handleOpen}
//       >
//         Create Assignment
//       </Button>
//       <Grid container spacing={2} style={{ marginTop: "20px" }}>
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//           >
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error">{error}</Typography>
//         ) : (
//           assignments.map((assignment) => (
//             <Grid item xs={12} md={4} key={assignment._id}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" color="primary">
//                     {assignment.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {assignment.description}
//                   </Typography>
//                   <Typography
//                     color="textSecondary"
//                     style={{ marginTop: "10px" }}
//                   >
//                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleEdit(assignment)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => handleDelete(assignment._id)}
//                   >
//                     <Delete />
//                   </IconButton>
//                   <Button
//                     color="default"
//                     onClick={() => fetchSubmissions(assignment._id)}
//                   >
//                     Get Submissions
//                   </Button>
//                 </CardActions>
//               </Card>

//               {/* Render Submissions */}
//               {submissions.map((submission) => (
//                 <Card key={submission._id} style={{ marginTop: "10px" }}>
//                   <CardContent>
//                     <Typography variant="body2">
//                       {submission.student.name} - {submission.student.email}
//                     </Typography>
//                     <Select
//                       value={submission.grade || ""}
//                       onChange={(e) =>
//                         handleGradeChange(submission._id, e.target.value)
//                       }
//                     >
//                       <MenuItem value="">Select Grade</MenuItem>
//                       <MenuItem value="A">A</MenuItem>
//                       <MenuItem value="B">B</MenuItem>
//                       <MenuItem value="C">C</MenuItem>
//                       <MenuItem value="D">D</MenuItem>
//                       <MenuItem value="F">F</MenuItem>
//                     </Select>
//                     <Button
//                       color="primary"
//                       onClick={() => submitGrade(submission._id, submission.grade)}
//                     >
//                       Submit Grade
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </Grid>
//           ))
//         )}
//       </Grid>

//       {/* Dialog for Create/Edit */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>
//           {editMode ? "Edit Assignment" : "Create Assignment"}
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Title"
//             fullWidth
//             margin="normal"
//             value={formState.title}
//             onChange={(e) =>
//               setFormState({ ...formState, title: e.target.value })
//             }
//           />
//           <TextField
//             label="Description"
//             fullWidth
//             margin="normal"
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({ ...formState, description: e.target.value })
//             }
//           />
//           <TextField
//             label="Due Date"
//             type="date"
//             fullWidth
//             margin="normal"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             value={formState.dueDate}
//             onChange={(e) =>
//               setFormState({ ...formState, dueDate: e.target.value })
//             }
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleCreate} color="primary">
//             {editMode ? "Update" : "Create"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default TeacherDashboard;
// new 2
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAssignments,
//   createAssignment,
//   updateAssignment,
//   deleteAssignment,
//   fetchSubmissions,
//   submitGrade,
// } from "../redux/slices/assignmentSlice";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Container,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   CircularProgress,
//   Box,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { Add, Edit, Delete } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const TeacherDashboard = () => {
//   const dispatch = useDispatch();
//   const { assignments, submissions, loading, error } = useSelector(
//     (state) => state.assignments
//   );
//   const [open, setOpen] = useState(false);
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   useEffect(() => {
//     dispatch(fetchAssignments())
//       .unwrap()
//       .catch(() => {
//         toast.error("Error fetching assignments");
//       });
//   }, [dispatch]);

//   const handleOpen = () => {
//     setOpen(true);
//     setEditMode(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setFormState({ title: "", description: "", dueDate: "" });
//   };

//   const handleCreate = () => {
//     const action = editMode
//       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
//       : createAssignment(formState);

//     dispatch(action)
//       .unwrap()
//       .then(() => {
//         toast.success(
//           editMode
//             ? "Assignment updated successfully!"
//             : "Assignment created successfully!"
//         );
//         handleClose();
//       })
//       .catch(() => {
//         toast.error(
//           editMode ? "Error updating assignment" : "Error creating assignment"
//         );
//       });
//   };

//   const handleEdit = (assignment) => {
//     setFormState({
//       title: assignment.title,
//       description: assignment.description,
//       dueDate: assignment.dueDate,
//     });
//     setEditMode(true);
//     setCurrentId(assignment._id);
//     setOpen(true);
//   };

//   const handleDelete = (assignmentId) => {
//     dispatch(deleteAssignment(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Assignment deleted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error deleting assignment");
//       });
//   };

//   const fetchAssignmentSubmissions = (assignmentId) => {
//     dispatch(fetchSubmissions(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Submissions fetched successfully!");
//       })
//       .catch(() => {
//         toast.error("Error fetching submissions");
//       });
//   };

//   const handleGradeChange = (submissionId, newGrade) => {
//     dispatch(submitGrade({ submissionId, grade: newGrade }))
//       .unwrap()
//       .then(() => {
//         toast.success("Grade submitted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error submitting grade");
//       });
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Assignment Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={handleOpen}
//       >
//         Create Assignment
//       </Button>
//       <Grid container spacing={2} style={{ marginTop: "20px" }}>
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//           >
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error">{error}</Typography>
//         ) : (
//           assignments.map((assignment) => (
//             <Grid item xs={12} md={4} key={assignment._id}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" color="primary">
//                     {assignment.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {assignment.description}
//                   </Typography>
//                   <Typography
//                     color="textSecondary"
//                     style={{ marginTop: "10px" }}
//                   >
//                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleEdit(assignment)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => handleDelete(assignment._id)}
//                   >
//                     <Delete />
//                   </IconButton>
//                   <Button
//                     color="default"
//                     onClick={() => fetchAssignmentSubmissions(assignment._id)}
//                   >
//                     Get Submissions
//                   </Button>
//                 </CardActions>
//               </Card>

//               {/* Render Submissions */}
//               {submissions[assignment._id]?.map((submission) => (
//                 <Card key={submission._id} style={{ marginTop: "10px" }}>
//                   <CardContent>
//                     <Typography variant="body2">
//                       {submission.student.name} - {submission.student.email}
//                     </Typography>
//                     <Select
//                       value={submission.grade || ""}
//                       onChange={(e) =>
//                         handleGradeChange(submission._id, e.target.value)
//                       }
//                     >
//                       <MenuItem value="">Select Grade</MenuItem>
//                       <MenuItem value="A">A</MenuItem>
//                       <MenuItem value="B">B</MenuItem>
//                       <MenuItem value="C">C</MenuItem>
//                       <MenuItem value="D">D</MenuItem>
//                       <MenuItem value="F">F</MenuItem>
//                     </Select>
//                   </CardContent>
//                 </Card>
//               ))}
//             </Grid>
//           ))
//         )}
//       </Grid>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>
//           {editMode ? "Edit Assignment" : "Create Assignment"}
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Title"
//             value={formState.title}
//             onChange={(e) =>
//               setFormState({ ...formState, title: e.target.value })
//             }
//             fullWidth
//           />
//           <TextField
//             label="Description"
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({ ...formState, description: e.target.value })
//             }
//             fullWidth
//             multiline
//             rows={4}
//             style={{ marginTop: "10px" }}
//           />
//           <TextField
//             label="Due Date"
//             type="date"
//             value={formState.dueDate}
//             onChange={(e) =>
//               setFormState({ ...formState, dueDate: e.target.value })
//             }
//             fullWidth
//             style={{ marginTop: "10px" }}
//             InputLabelProps={{ shrink: true }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleCreate} color="primary">
//             {editMode ? "Update" : "Create"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default TeacherDashboard;
// new after handle submission
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAssignments,
//   createAssignment,
//   updateAssignment,
//   deleteAssignment,
//   fetchSubmissions,
//   submitGrade,
// } from "../redux/slices/assignmentSlice";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Container,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   CircularProgress,
//   Box,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { Add, Edit, Delete } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const TeacherDashboard = () => {
//   const dispatch = useDispatch();
//   const { assignments, submissions, loading, error } = useSelector(
//     (state) => state.assignments
//   );
//   const [open, setOpen] = useState(false);
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   useEffect(() => {
//     dispatch(fetchAssignments())
//       .unwrap()
//       .catch(() => {
//         toast.error("Error fetching assignments");
//       });
//   }, [dispatch]);

//   const handleOpen = () => {
//     setOpen(true);
//     setEditMode(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setFormState({ title: "", description: "", dueDate: "" });
//   };

//   const handleCreate = () => {
//     const action = editMode
//       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
//       : createAssignment(formState);

//     dispatch(action)
//       .unwrap()
//       .then(() => {
//         toast.success(
//           editMode
//             ? "Assignment updated successfully!"
//             : "Assignment created successfully!"
//         );
//         handleClose();
//       })
//       .catch(() => {
//         toast.error(
//           editMode ? "Error updating assignment" : "Error creating assignment"
//         );
//       });
//   };

//   const handleEdit = (assignment) => {
//     setFormState({
//       title: assignment.title,
//       description: assignment.description,
//       dueDate: assignment.dueDate,
//     });
//     setEditMode(true);
//     setCurrentId(assignment._id);
//     setOpen(true);
//   };

//   const handleDelete = (assignmentId) => {
//     dispatch(deleteAssignment(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Assignment deleted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error deleting assignment");
//       });
//   };

//   const fetchAssignmentSubmissions = (assignmentId) => {
//     dispatch(fetchSubmissions(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Submissions fetched successfully!");
//       })
//       .catch(() => {
//         toast.error("Error fetching submissions");
//       });
//   };

//   const handleGradeChange = (submissionId, newGrade) => {
//     dispatch(submitGrade({ submissionId, grade: newGrade }))
//       .unwrap()
//       .then(() => {
//         toast.success("Grade submitted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error submitting grade");
//       });
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Assignment Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={handleOpen}
//       >
//         Create Assignment
//       </Button>
//       <Grid container spacing={2} style={{ marginTop: "20px" }}>
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//           >
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error">{error}</Typography>
//         ) : (
//           assignments.map((assignment) => (
//             <Grid item xs={12} md={4} key={assignment._id}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" color="primary">
//                     {assignment.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {assignment.description}
//                   </Typography>
//                   <Typography
//                     color="textSecondary"
//                     style={{ marginTop: "10px" }}
//                   >
//                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleEdit(assignment)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => handleDelete(assignment._id)}
//                   >
//                     <Delete />
//                   </IconButton>
//                   <Button
//                     color="default"
//                     onClick={() => fetchAssignmentSubmissions(assignment._id)}
//                   >
//                     Get Submissions
//                   </Button>
//                 </CardActions>
//               </Card>

//               {/* Render Submissions */}
//               {submissions[assignment._id]?.map((submission) => (
//                 <Card key={submission._id} style={{ marginTop: "10px" }}>
//                   <CardContent>
//                     <Typography variant="body2">
//                       {submission.student.name} - {submission.student.email}
//                     </Typography>
//                     <Typography variant="body2">
//                       File:{" "}
//                       <a
//                         href={submission.fileUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Download
//                       </a>
//                     </Typography>
//                     <Typography variant="body2">
//                       Submitted At:{" "}
//                       {new Date(submission.submittedAt).toLocaleString()}
//                     </Typography>
//                     <Select
//                       value={submission.grade || ""}
//                       onChange={(e) =>
//                         handleGradeChange(submission._id, e.target.value)
//                       }
//                     >
//                       <MenuItem value="">Select Grade</MenuItem>
//                       <MenuItem value="A">A</MenuItem>
//                       <MenuItem value="B">B</MenuItem>
//                       <MenuItem value="C">C</MenuItem>
//                       <MenuItem value="D">D</MenuItem>
//                       <MenuItem value="F">F</MenuItem>
//                     </Select>
//                   </CardContent>
//                 </Card>
//               ))}
//             </Grid>
//           ))
//         )}
//       </Grid>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>
//           {editMode ? "Edit Assignment" : "Create Assignment"}
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Title"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={formState.title}
//             onChange={(e) =>
//               setFormState({ ...formState, title: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Description"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({ ...formState, description: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Due Date"
//             type="date"
//             fullWidth
//             variant="standard"
//             InputLabelProps={{ shrink: true }}
//             value={formState.dueDate}
//             onChange={(e) =>
//               setFormState({ ...formState, dueDate: e.target.value })
//             }
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleCreate}>
//             {editMode ? "Update" : "Create"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default TeacherDashboard;
// this is what i like
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAssignments,
//   createAssignment,
//   updateAssignment,
//   deleteAssignment,
//   fetchSubmissions,
//   submitGrade,
// } from "../redux/slices/assignmentSlice";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Container,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   CircularProgress,
//   Box,
//   Select,
//   MenuItem,
//   Divider,
// } from "@mui/material";
// import { Add, Edit, Delete } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const TeacherDashboard = () => {
//   const dispatch = useDispatch();
//   const { assignments, submissions, loading, error } = useSelector(
//     (state) => state.assignments
//   );
//   const [open, setOpen] = useState(false);
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   useEffect(() => {
//     dispatch(fetchAssignments())
//       .unwrap()
//       .catch(() => {
//         toast.error("Error fetching assignments");
//       });
//   }, [dispatch]);

//   const handleOpen = () => {
//     setOpen(true);
//     setEditMode(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setFormState({ title: "", description: "", dueDate: "" });
//   };

//   const handleCreate = () => {
//     const action = editMode
//       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
//       : createAssignment(formState);

//     dispatch(action)
//       .unwrap()
//       .then(() => {
//         toast.success(
//           editMode
//             ? "Assignment updated successfully!"
//             : "Assignment created successfully!"
//         );
//         handleClose();
//       })
//       .catch(() => {
//         toast.error(
//           editMode ? "Error updating assignment" : "Error creating assignment"
//         );
//       });
//   };

//   const handleEdit = (assignment) => {
//     setFormState({
//       title: assignment.title,
//       description: assignment.description,
//       dueDate: assignment.dueDate,
//     });
//     setEditMode(true);
//     setCurrentId(assignment._id);
//     setOpen(true);
//   };

//   const handleDelete = (assignmentId) => {
//     dispatch(deleteAssignment(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Assignment deleted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error deleting assignment");
//       });
//   };

//   const fetchAssignmentSubmissions = (assignmentId) => {
//     dispatch(fetchSubmissions(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Submissions fetched successfully!");
//       })
//       .catch(() => {
//         toast.error("Error fetching submissions");
//       });
//   };

//   const handleGradeChange = (submissionId, newGrade) => {
//     dispatch(submitGrade({ submissionId, grade: newGrade }))
//       .unwrap()
//       .then(() => {
//         toast.success("Grade submitted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error submitting grade");
//       });
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Assignment Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={handleOpen}
//       >
//         Create Assignment
//       </Button>
//       <Grid container spacing={3} style={{ marginTop: "20px" }}>
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//             height="60vh"
//           >
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error" align="center">
//             {error}
//           </Typography>
//         ) : (
//           assignments.map((assignment) => (
//             <Grid item xs={12} md={4} key={assignment._id}>
//               <Card variant="outlined">
//                 <CardContent>
//                   <Typography variant="h6" color="primary">
//                     {assignment.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {assignment.description}
//                   </Typography>
//                   <Typography
//                     color="textSecondary"
//                     style={{ marginTop: "10px" }}
//                   >
//                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleEdit(assignment)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => handleDelete(assignment._id)}
//                   >
//                     <Delete />
//                   </IconButton>
//                   <Button
//                     variant="outlined"
//                     onClick={() => fetchAssignmentSubmissions(assignment._id)}
//                   >
//                     Get Submissions
//                   </Button>
//                 </CardActions>
//                 {submissions[assignment._id]?.length > 0 && (
//                   <CardContent>
//                     <Divider />
//                     <Typography variant="h6" style={{ marginTop: "10px" }}>
//                       Submissions
//                     </Typography>
//                     {submissions[assignment._id].map((submission) => (
//                       <Card key={submission._id} style={{ marginTop: "10px" }}>
//                         <CardContent>
//                           <Typography variant="body2">
//                             {submission.student.name} -{" "}
//                             {submission.student.email}
//                           </Typography>
//                           <Typography variant="body2">
//                             File:{" "}
//                             <a
//                               href={submission.fileUrl}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               Download
//                             </a>
//                           </Typography>
//                           <Typography variant="body2">
//                             Submitted At:{" "}
//                             {new Date(submission.submittedAt).toLocaleString()}
//                           </Typography>
//                           <Select
//                             value={submission.grade || ""}
//                             onChange={(e) =>
//                               handleGradeChange(submission._id, e.target.value)
//                             }
//                             style={{ marginTop: "10px" }}
//                             fullWidth
//                           >
//                             <MenuItem value="">Select Grade</MenuItem>
//                             <MenuItem value="A+">A+</MenuItem>
//                             <MenuItem value="A">A</MenuItem>
//                             <MenuItem value="B">B</MenuItem>
//                             <MenuItem value="C">C</MenuItem>
//                             <MenuItem value="D">D</MenuItem>
//                             <MenuItem value="F">F</MenuItem>
//                           </Select>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </CardContent>
//                 )}
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>
//           {editMode ? "Edit Assignment" : "Create Assignment"}
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Title"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={formState.title}
//             onChange={(e) =>
//               setFormState({ ...formState, title: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Description"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({ ...formState, description: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Due Date"
//             type="date"
//             fullWidth
//             InputLabelProps={{ shrink: true }}
//             variant="standard"
//             value={formState.dueDate}
//             onChange={(e) =>
//               setFormState({ ...formState, dueDate: e.target.value })
//             }
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleCreate}>
//             {editMode ? "Update" : "Create"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default TeacherDashboard;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAssignments,
//   createAssignment,
//   updateAssignment,
//   deleteAssignment,
//   fetchSubmissions,
//   submitGrade,
// } from "../redux/slices/assignmentSlice";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Container,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   CircularProgress,
//   Box,
//   Select,
//   MenuItem,
//   Divider,
// } from "@mui/material";
// import { Add, Edit, Delete } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     transition: "0.3s",
//     "&:hover": {
//       boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//       cursor: "pointer",
//     },
//     marginBottom: theme.spacing(2),
//   },
//   cardContent: {
//     padding: theme.spacing(2),
//   },
//   cardActions: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   submissionCard: {
//     marginTop: theme.spacing(2),
//     padding: theme.spacing(2),
//     border: `1px solid ${theme.palette.divider}`,
//     borderRadius: theme.shape.borderRadius,
//   },
//   gradeSelect: {
//     marginTop: theme.spacing(1),
//   },
//   title: {
//     fontWeight: "bold",
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
//   iframe: {
//     width: "100%",
//     height: "400px",
//     border: "none",
//     borderRadius: theme.shape.borderRadius,
//   },
//   noSubmissions: {
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     padding: theme.spacing(2),
//   },
// }));

// const TeacherDashboard = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const { assignments, submissions, loading, error } = useSelector(
//     (state) => state.assignments
//   );
//   const [open, setOpen] = useState(false);
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   useEffect(() => {
//     dispatch(fetchAssignments())
//       .unwrap()
//       .catch(() => {
//         toast.error("Error fetching assignments");
//       });
//   }, [dispatch]);

//   const handleOpen = () => {
//     setOpen(true);
//     setEditMode(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setFormState({ title: "", description: "", dueDate: "" });
//   };

//   const handleCreate = () => {
//     const action = editMode
//       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
//       : createAssignment(formState);

//     dispatch(action)
//       .unwrap()
//       .then(() => {
//         toast.success(
//           editMode
//             ? "Assignment updated successfully!"
//             : "Assignment created successfully!"
//         );
//         handleClose();
//       })
//       .catch(() => {
//         toast.error(
//           editMode ? "Error updating assignment" : "Error creating assignment"
//         );
//       });
//   };

//   const handleEdit = (assignment) => {
//     setFormState({
//       title: assignment.title,
//       description: assignment.description,
//       dueDate: assignment.dueDate,
//     });
//     setEditMode(true);
//     setCurrentId(assignment._id);
//     setOpen(true);
//   };

//   const handleDelete = (assignmentId) => {
//     dispatch(deleteAssignment(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Assignment deleted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error deleting assignment");
//       });
//   };

//   const fetchAssignmentSubmissions = (assignmentId) => {
//     dispatch(fetchSubmissions(assignmentId))
//       .unwrap()
//       .then(() => {
//         toast.success("Submissions fetched successfully!");
//       })
//       .catch(() => {
//         toast.error("Error fetching submissions");
//       });
//   };

//   const handleGradeChange = (submissionId, newGrade) => {
//     dispatch(submitGrade({ submissionId, grade: newGrade }))
//       .unwrap()
//       .then(() => {
//         toast.success("Grade submitted successfully!");
//       })
//       .catch(() => {
//         toast.error("Error submitting grade");
//       });
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Assignment Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={handleOpen}
//         className={classes.button}
//       >
//         Create Assignment
//       </Button>
//       <Grid container spacing={3} style={{ marginTop: "20px" }}>
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//             height="60vh"
//           >
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error" align="center">
//             {error}
//           </Typography>
//         ) : (
//           assignments.map((assignment) => (
//             // <Grid item xs={12} md={4}
//             <Grid item xs={12} md={4} key={assignment._id}>
//               <Card className={classes.card}>
//                 <CardContent className={classes.cardContent}>
//                   <Typography
//                     variant="h6"
//                     color="primary"
//                     className={classes.title}
//                   >
//                     {assignment.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {assignment.description}
//                   </Typography>
//                   <Typography
//                     color="textSecondary"
//                     style={{ marginTop: "10px" }}
//                   >
//                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                   </Typography>
//                 </CardContent>
//                 <CardActions className={classes.cardActions}>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleEdit(assignment)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => handleDelete(assignment._id)}
//                   >
//                     <Delete />
//                   </IconButton>
//                   <Button
//                     color="default"
//                     onClick={() => fetchAssignmentSubmissions(assignment._id)}
//                     className={classes.button}
//                   >
//                     Get Submissions
//                   </Button>
//                 </CardActions>
//                 {/* Render Submissions */}
//                 {submissions[assignment._id] &&
//                   submissions[assignment._id].length === 0 && (
//                     <Typography className={classes.noSubmissions}>
//                       No Submissions
//                     </Typography>
//                   )}
//                 {submissions[assignment._id] &&
//                   submissions[assignment._id].map((submission) => (
//                     <Card
//                       key={submission._id}
//                       className={classes.submissionCard}
//                     >
//                       <CardContent>
//                         <Typography variant="body2">
//                           {submission.student.name} - {submission.student.email}
//                         </Typography>
//                         <Typography variant="body2">
//                           File:{" "}
//                           <iframe
//                             src={submission.fileUrl}
//                             className={classes.iframe}
//                             title="Submission File"
//                           ></iframe>
//                         </Typography>
//                         <Typography variant="body2">
//                           Submitted At:{" "}
//                           {new Date(submission.submittedAt).toLocaleString()}
//                         </Typography>
//                         <Select
//                           value={submission.grade || ""}
//                           onChange={(e) =>
//                             handleGradeChange(submission._id, e.target.value)
//                           }
//                           className={classes.gradeSelect}
//                         >
//                           <MenuItem value="">Select Grade</MenuItem>
//                           <MenuItem value="A">A</MenuItem>
//                           <MenuItem value="B">B</MenuItem>
//                           <MenuItem value="C">C</MenuItem>
//                           <MenuItem value="D">D</MenuItem>
//                           <MenuItem value="F">F</MenuItem>
//                         </Select>
//                       </CardContent>
//                     </Card>
//                   ))}
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>
//           {editMode ? "Edit Assignment" : "Create Assignment"}
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Title"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={formState.title}
//             onChange={(e) =>
//               setFormState({ ...formState, title: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Description"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({ ...formState, description: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Due Date"
//             type="datetime-local"
//             fullWidth
//             variant="standard"
//             InputLabelProps={{ shrink: true }}
//             value={formState.dueDate}
//             onChange={(e) =>
//               setFormState({ ...formState, dueDate: e.target.value })
//             }
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleCreate}>
//             {editMode ? "Update" : "Create"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default TeacherDashboard;
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAssignments,
//   createAssignment,
//   updateAssignment,
//   deleteAssignment,
//   fetchSubmissions,
//   submitGrade,
// } from "../redux/slices/assignmentSlice";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Container,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   CircularProgress,
//   Box,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { Add, Edit, Delete } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     transition: "0.3s",
//     "&:hover": {
//       boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//       cursor: "pointer",
//     },
//     marginBottom: theme.spacing(2),
//   },
//   cardActions: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   iframe: {
//     width: "100%",
//     height: "400px",
//     border: "none",
//     borderRadius: theme.shape.borderRadius,
//   },
//   noSubmissions: {
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     padding: theme.spacing(2),
//   },
// }));

// const TeacherDashboard = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const { assignments, submissions, loading, error } = useSelector(
//     (state) => state.assignments
//   );
//   const [open, setOpen] = useState(false);
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   // Fetch assignments on component mount
//   useEffect(() => {
//     dispatch(fetchAssignments()).catch(() =>
//       toast.error("Error fetching assignments")
//     );
//   }, [dispatch]);

//   const handleDialogOpen = (assignment = null) => {
//     setOpen(true);
//     if (assignment) {
//       setEditMode(true);
//       setCurrentId(assignment._id);
//       setFormState({
//         title: assignment.title,
//         description: assignment.description,
//         dueDate: assignment.dueDate,
//       });
//     } else {
//       setEditMode(false);
//       setFormState({ title: "", description: "", dueDate: "" });
//     }
//   };

//   const handleDialogClose = () => setOpen(false);

//   const handleSave = () => {
//     const action = editMode
//       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
//       : createAssignment(formState);

//     dispatch(action)
//       .then(() => {
//         toast.success(
//           editMode ? "Assignment updated successfully!" : "Assignment created!"
//         );
//         handleDialogClose();
//       })
//       .catch(() => {
//         toast.error(
//           editMode ? "Error updating assignment" : "Error creating assignment"
//         );
//       });
//   };

//   const handleDelete = (assignmentId) => {
//     dispatch(deleteAssignment(assignmentId))
//       .then(() => toast.success("Assignment deleted successfully!"))
//       .catch(() => toast.error("Error deleting assignment"));
//   };

//   const handleFetchSubmissions = (assignmentId) => {
//     dispatch(fetchSubmissions(assignmentId)).catch(() =>
//       toast.error("Error fetching submissions")
//     );
//   };

//   const handleGradeChange = (submissionId, newGrade) => {
//     dispatch(submitGrade({ submissionId, grade: newGrade }))
//       .then(() => toast.success("Grade submitted successfully!"))
//       .catch(() => toast.error("Error submitting grade"));
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Assignment Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={() => handleDialogOpen()}
//         className={classes.button}
//       >
//         Create Assignment
//       </Button>
//       <Grid container spacing={3} style={{ marginTop: "20px" }}>
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//             height="60vh"
//           >
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error" align="center">
//             {error}
//           </Typography>
//         ) : (
//           assignments.map((assignment) => (
//             <Grid item xs={12} md={4} key={assignment._id}>
//               <Card className={classes.card}>
//                 <CardContent>
//                   <Typography variant="h6" color="primary">
//                     {assignment.title}
//                   </Typography>
//                   <Typography variant="body2">
//                     {assignment.description}
//                   </Typography>
//                   <Typography color="textSecondary" style={{ marginTop: 10 }}>
//                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                   </Typography>
//                 </CardContent>
//                 <CardActions className={classes.cardActions}>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleDialogOpen(assignment)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => handleDelete(assignment._id)}
//                   >
//                     <Delete />
//                   </IconButton>
//                   <Button
//                     color="default"
//                     onClick={() => handleFetchSubmissions(assignment._id)}
//                   >
//                     Get Submissions
//                   </Button>
//                 </CardActions>
//                 {/* Render Submissions */}
//                 {submissions[assignment._id]?.length === 0 ? (
//                   <Typography className={classes.noSubmissions}>
//                     No Submissions
//                   </Typography>
//                 ) : (
//                   submissions[assignment._id]?.map((submission) => (
//                     <Card key={submission._id}>
//                       <CardContent>
//                         <Typography>
//                           {submission.student.name} - {submission.student.email}
//                         </Typography>
//                         <iframe
//                           src={submission.fileUrl}
//                           className={classes.iframe}
//                           title="Submission"
//                         />
//                         <Typography>
//                           Submitted At:{" "}
//                           {new Date(submission.submittedAt).toLocaleString()}
//                         </Typography>
//                         <Select
//                           value={submission.grade || ""}
//                           onChange={(e) =>
//                             handleGradeChange(submission._id, e.target.value)
//                           }
//                         >
//                           <MenuItem value="">Select Grade</MenuItem>
//                           <MenuItem value="A">A</MenuItem>
//                           <MenuItem value="B">B</MenuItem>
//                           <MenuItem value="C">C</MenuItem>
//                           <MenuItem value="D">D</MenuItem>
//                           <MenuItem value="F">F</MenuItem>
//                         </Select>
//                       </CardContent>
//                     </Card>
//                   ))
//                 )}
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>

//       <Dialog open={open} onClose={handleDialogClose}>
//         <DialogTitle>
//           {editMode ? "Edit Assignment" : "Create Assignment"}
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Title"
//             fullWidth
//             value={formState.title}
//             onChange={(e) =>
//               setFormState({ ...formState, title: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Description"
//             fullWidth
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({ ...formState, description: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Due Date"
//             type="datetime-local"
//             fullWidth
//             InputLabelProps={{ shrink: true }}
//             value={formState.dueDate}
//             onChange={(e) =>
//               setFormState({ ...formState, dueDate: e.target.value })
//             }
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose}>Cancel</Button>
//           <Button onClick={handleSave}>{editMode ? "Update" : "Create"}</Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default TeacherDashboard;
// this is after handele
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAssignments,
//   createAssignment,
//   updateAssignment,
//   deleteAssignment,
//   fetchSubmissions,
//   updateSubmissionGrade,
// } from "../redux/slices/assignmentSlice";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Container,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   CircularProgress,
//   Box,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { Add, Edit, Delete } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     transition: "0.3s",
//     "&:hover": {
//       boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//       cursor: "pointer",
//     },
//     marginBottom: theme.spacing(2),
//   },
//   cardActions: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   iframe: {
//     width: "100%",
//     height: "400px",
//     border: "none",
//     borderRadius: theme.shape.borderRadius,
//   },
//   noSubmissions: {
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     padding: theme.spacing(2),
//   },
// }));

// const TeacherDashboard = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const { assignments, submissions, loading, error } = useSelector(
//     (state) => state.assignments
//   );
//   const [open, setOpen] = useState(false);
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   // Fetch assignments on component mount
//   useEffect(() => {
//     dispatch(fetchAssignments()).catch(() =>
//       toast.error("Error fetching assignments")
//     );
//   }, [dispatch]);

//   const handleDialogOpen = (assignment = null) => {
//     setOpen(true);
//     if (assignment) {
//       setEditMode(true);
//       setCurrentId(assignment._id);
//       setFormState({
//         title: assignment.title,
//         description: assignment.description,
//         dueDate: assignment.dueDate,
//       });
//     } else {
//       setEditMode(false);
//       setFormState({ title: "", description: "", dueDate: "" });
//     }
//   };

//   const handleDialogClose = () => setOpen(false);

//   const handleSave = () => {
//     const action = editMode
//       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
//       : createAssignment(formState);

//     dispatch(action)
//       .then(() => {
//         toast.success(
//           editMode ? "Assignment updated successfully!" : "Assignment created!"
//         );
//         handleDialogClose();
//       })
//       .catch(() => {
//         toast.error(
//           editMode ? "Error updating assignment" : "Error creating assignment"
//         );
//       });
//   };

//   const handleDelete = (assignmentId) => {
//     dispatch(deleteAssignment(assignmentId))
//       .then(() => toast.success("Assignment deleted successfully!"))
//       .catch(() => toast.error("Error deleting assignment"));
//   };

//   const handleFetchSubmissions = (assignmentId) => {
//     dispatch(fetchSubmissions(assignmentId)).catch(() =>
//       toast.error("Error fetching submissions")
//     );
//   };
//   const handleGradeChange = (submissionId, grade) => {
//     // Call the API to update the grade
//     dispatch(updateSubmissionGrade({ submissionId, grade }))
//       .then(() => {
//         toast.success("Grade submitted successfully!");
//       })
//       .catch(() => {
//         toast.error("Failed to submit grade.");
//         // toast.success("Grade submitted successfully!");
//       });
//   };
//   const renderFilePreview = (url) => {
//     const fileType = url.split(".").pop();

//     switch (fileType) {
//       case "pdf":
//         return (
//           <iframe src={url} className={classes.iframe} title="PDF Preview" />
//         );
//       case "jpg":
//       case "jpeg":
//       case "png":
//       case "gif":
//       case "zip":
//       case "doc":
//       case "docx":
//         return (
//           <img
//             src={url}
//             alt="File Preview click to download"
//             style={{ width: "100%", height: "auto" }}
//           />
//         );
//       default:
//         return (
//           <Typography>
//             <a href={url} download>
//               Download {fileType} file
//             </a>
//           </Typography>
//         );
//     }
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Assignment Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={() => handleDialogOpen()}
//       >
//         Create Assignment
//       </Button>
//       <Grid container spacing={3} style={{ marginTop: "20px" }}>
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//             height="60vh"
//           >
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error" align="center">
//             {error}
//           </Typography>
//         ) : (
//           assignments.map((assignment) => (
//             <Grid item xs={12} md={4} key={assignment._id}>
//               <Card className={classes.card}>
//                 <CardContent>
//                   <Typography variant="h6" color="primary">
//                     {assignment.title}
//                   </Typography>
//                   <Typography variant="body2">
//                     {assignment.description}
//                   </Typography>
//                   <Typography color="textSecondary" style={{ marginTop: 10 }}>
//                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                   </Typography>
//                 </CardContent>
//                 <CardActions className={classes.cardActions}>
//                   <IconButton
//                     color="primary"
//                     onClick={() => handleDialogOpen(assignment)}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     color="secondary"
//                     onClick={() => handleDelete(assignment._id)}
//                   >
//                     <Delete />
//                   </IconButton>
//                   <Button
//                     color="default"
//                     onClick={() => handleFetchSubmissions(assignment._id)}
//                   >
//                     Get Submissions
//                   </Button>
//                 </CardActions>
//                 {/* Render Submissions */}
//                 {submissions[assignment._id]?.length === 0 ? (
//                   <Typography className={classes.noSubmissions}>
//                     No Submissions
//                   </Typography>
//                 ) : (
//                   submissions[assignment._id]?.map((submission) => (
//                     <Card key={submission._id}>
//                       <CardContent>
//                         <Typography>
//                           {submission.student.name} - {submission.student.email}
//                         </Typography>

//                         {renderFilePreview(submission.fileUrl)}
//                         {/* <iframe
//                           src={submission.fileUrl}
//                           className={classes.iframe}
//                           title="Submission"
//                         /> */}
//                         <Typography>
//                           Submitted At:{" "}
//                           {new Date(submission.submittedAt).toLocaleString()}
//                         </Typography>
//                         <Select
//                           value={submission.grade || ""}
//                           onChange={(e) =>
//                             handleGradeChange(submission._id, e.target.value)
//                           }
//                         >
//                           <MenuItem value="">Select Grade</MenuItem>
//                           <MenuItem value="A">A</MenuItem>
//                           <MenuItem value="B">B</MenuItem>
//                           <MenuItem value="C">C</MenuItem>
//                           <MenuItem value="D">D</MenuItem>
//                           <MenuItem value="F">F</MenuItem>
//                         </Select>
//                       </CardContent>
//                     </Card>
//                   ))
//                 )}
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>

//       <Dialog open={open} onClose={handleDialogClose}>
//         <DialogTitle>
//           {editMode ? "Edit Assignment" : "Create Assignment"}
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Title"
//             fullWidth
//             value={formState.title}
//             onChange={(e) =>
//               setFormState({ ...formState, title: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Description"
//             fullWidth
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({ ...formState, description: e.target.value })
//             }
//           />
//           <TextField
//             margin="dense"
//             label="Due Date"
//             type="datetime-local"
//             fullWidth
//             InputLabelProps={{ shrink: true }}
//             value={formState.dueDate}
//             onChange={(e) =>
//               setFormState({ ...formState, dueDate: e.target.value })
//             }
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose}>Cancel</Button>
//           <Button onClick={handleSave}>{editMode ? "Update" : "Create"}</Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default TeacherDashboard;
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAssignments,
//   createAssignment,
//   updateAssignment,
//   deleteAssignment,
//   fetchSubmissions,
//   updateSubmissionGrade,
// } from "../redux/slices/assignmentSlice";
// import {
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Container,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   CircularProgress,
//   Box,
//   Select,
//   MenuItem,
//   useTheme,
//   useMediaQuery,
//   Slide,
//   Collapse,
//   styled,
// } from "@mui/material";
// import { Add, Edit, Delete } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Styled components for enhanced styling
// const StyledCard = styled(Card)(({ theme }) => ({
//   boxShadow: theme.shadows[4],
//   borderRadius: "12px",
//   transition: "transform 0.3s, box-shadow 0.3s",
//   "&:hover": {
//     transform: "scale(1.03)",
//     boxShadow: theme.shadows[8],
//   },
// }));

// const StyledIconButton = styled(IconButton)(({ theme }) => ({
//   transition: "color 0.3s, transform 0.3s",
//   "&:hover": {
//     color: theme.palette.primary.main,
//     transform: "scale(1.2)",
//   },
// }));

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialog-paper": {
//     borderRadius: "12px",
//     padding: theme.spacing(2),
//   },
// }));

// const TeacherDashboard = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const dispatch = useDispatch();
//   const { assignments, submissions, loading, error } = useSelector(
//     (state) => state.assignments
//   );
//   const [open, setOpen] = useState(false);
//   const [formState, setFormState] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   // Fetch assignments on component mount
//   useEffect(() => {
//     dispatch(fetchAssignments()).catch(() =>
//       toast.error("Error fetching assignments")
//     );
//   }, [dispatch]);

//   const handleDialogOpen = (assignment = null) => {
//     setOpen(true);
//     if (assignment) {
//       setEditMode(true);
//       setCurrentId(assignment._id);
//       setFormState({
//         title: assignment.title,
//         description: assignment.description,
//         dueDate: assignment.dueDate,
//       });
//     } else {
//       setEditMode(false);
//       setFormState({ title: "", description: "", dueDate: "" });
//     }
//   };

//   const handleDialogClose = () => setOpen(false);

//   const handleSave = () => {
//     const action = editMode
//       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
//       : createAssignment(formState);

//     dispatch(action)
//       .then(() => {
//         toast.success(
//           editMode ? "Assignment updated successfully!" : "Assignment created!"
//         );
//         handleDialogClose();
//       })
//       .catch(() => {
//         toast.error(
//           editMode ? "Error updating assignment" : "Error creating assignment"
//         );
//       });
//   };

//   const handleDelete = (assignmentId) => {
//     dispatch(deleteAssignment(assignmentId))
//       .then(() => toast.success("Assignment deleted successfully!"))
//       .catch(() => toast.error("Error deleting assignment"));
//   };

//   const handleFetchSubmissions = (assignmentId) => {
//     dispatch(fetchSubmissions(assignmentId)).catch(() =>
//       toast.error("Error fetching submissions")
//     );
//   };

//   const handleGradeChange = (submissionId, grade) => {
//     dispatch(updateSubmissionGrade({ submissionId, grade }))
//       .then(() => toast.success("Grade submitted successfully!"))
//       .catch(() => toast.error("Failed to submit grade."));
//   };

//   const renderFilePreview = (url) => {
//     const fileType = url.split(".").pop();

//     switch (fileType) {
//       case "pdf":
//         return (
//           <iframe
//             src={url}
//             style={{
//               width: "100%",
//               height: "400px",
//               border: "none",
//               borderRadius: "4px",
//               boxShadow: theme.shadows[2],
//             }}
//             title="PDF Preview"
//           />
//         );
//       case "jpg":
//       case "jpeg":
//       case "png":
//       case "gif":
//         return (
//           <img
//             src={url}
//             alt="File Preview"
//             style={{
//               width: "100%",
//               height: "auto",
//               borderRadius: "4px",
//               boxShadow: theme.shadows[2],
//             }}
//           />
//         );
//       case "zip":
//       case "doc":
//       case "docx":
//         return (
//           <Typography>
//             <a href={url} download>
//               Download {fileType} file
//             </a>
//           </Typography>
//         );
//       default:
//         return (
//           <Typography>
//             <a href={url} download>
//               Download {fileType} file
//             </a>
//           </Typography>
//         );
//     }
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Assignment Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={() => handleDialogOpen()}
//         style={{ marginBottom: "20px", borderRadius: "12px" }}
//       >
//         Create Assignment
//       </Button>
//       <Grid container spacing={3}>
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             width="100%"
//             height="60vh"
//           >
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography color="error" align="center">
//             {error}
//           </Typography>
//         ) : (
//           assignments.map((assignment) => (
//             <Grid item xs={12} md={4} key={assignment._id}>
//               <Slide direction="up" in={true} timeout={500}>
//                 <StyledCard>
//                   <CardContent>
//                     <Typography variant="h6" color="primary">
//                       {assignment.title}
//                     </Typography>
//                     <Typography variant="body2">
//                       {assignment.description}
//                     </Typography>
//                     <Typography color="textSecondary" style={{ marginTop: 10 }}>
//                       Due: {new Date(assignment.dueDate).toLocaleDateString()}
//                     </Typography>
//                   </CardContent>
//                   <CardActions
//                     style={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     <StyledIconButton
//                       color="primary"
//                       onClick={() => handleDialogOpen(assignment)}
//                     >
//                       <Edit />
//                       edit
//                     </StyledIconButton>
//                     <StyledIconButton
//                       color="secondary"
//                       onClick={() => handleDelete(assignment._id)}
//                     >
//                       <Delete />
//                       delete
//                     </StyledIconButton>
//                     <Button
//                       color="default"
//                       onClick={() => handleFetchSubmissions(assignment._id)}
//                     >
//                       Submissions
//                     </Button>
//                   </CardActions>
//                   <Collapse in={Boolean(submissions[assignment._id]?.length)}>
//                     {submissions[assignment._id]?.map((submission) => (
//                       <Card key={submission._id} style={{ margin: "16px 0" }}>
//                         <CardContent>
//                           <Typography>
//                             {submission.student.name} -{" "}
//                             {submission.student.email}
//                           </Typography>
//                           {renderFilePreview(submission.fileUrl)}
//                           <Typography>
//                             Submitted At:{" "}
//                             {new Date(submission.submittedAt).toLocaleString()}
//                           </Typography>
//                           <Select
//                             value={submission.grade || ""}
//                             onChange={(e) =>
//                               handleGradeChange(submission._id, e.target.value)
//                             }
//                             style={{ marginTop: "8px" }}
//                           >
//                             <MenuItem value="">Select Grade</MenuItem>
//                             <MenuItem value="A">A</MenuItem>
//                             <MenuItem value="B">B</MenuItem>
//                             <MenuItem value="C">C</MenuItem>
//                             <MenuItem value="D">D</MenuItem>
//                             <MenuItem value="F">F</MenuItem>
//                           </Select>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </Collapse>
//                 </StyledCard>
//               </Slide>
//             </Grid>
//           ))
//         )}
//       </Grid>

//       <StyledDialog
//         open={open}
//         onClose={handleDialogClose}
//         TransitionComponent={Slide}
//         TransitionProps={{ direction: "up" }}
//       >
//         <DialogTitle>
//           {editMode ? "Edit Assignment" : "Create Assignment"}
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Title"
//             fullWidth
//             value={formState.title}
//             onChange={(e) =>
//               setFormState({ ...formState, title: e.target.value })
//             }
//             style={{ marginBottom: "16px" }}
//           />
//           <TextField
//             margin="dense"
//             label="Description"
//             fullWidth
//             multiline
//             rows={4}
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({ ...formState, description: e.target.value })
//             }
//             style={{ marginBottom: "16px" }}
//           />
//           <TextField
//             margin="dense"
//             label="Due Date"
//             type="date"
//             fullWidth
//             InputLabelProps={{ shrink: true }}
//             value={formState.dueDate}
//             onChange={(e) =>
//               setFormState({ ...formState, dueDate: e.target.value })
//             }
//             style={{ marginBottom: "16px" }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSave} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </Container>
//   );
// };

// export default TeacherDashboard;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAssignments,
  createAssignment,
  updateAssignment,
  deleteAssignment,
  fetchSubmissions,
  updateSubmissionGrade,
} from "../redux/slices/assignmentSlice";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  CircularProgress,
  Box,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
  Slide,
  Collapse,
  styled,
} from "@mui/material";
import {
  Add,
  Edit,
  Delete,
  FileDownload,
  Visibility,
} from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VisibilityOff, AssignmentTurnedIn } from "@mui/icons-material";
// Styled components for enhanced styling
const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[4],
  borderRadius: "12px",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: theme.shadows[8],
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: "color 0.3s, transform 0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "scale(1.2)",
  },
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "12px",
    padding: theme.spacing(2),
  },
}));

const TeacherDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { assignments, submissions, loading, error } = useSelector(
    (state) => state.assignments
  );
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [expandedAssignment, setExpandedAssignment] = useState(null); // Track expanded assignment for toggle

  // Fetch assignments on component mount
  useEffect(() => {
    dispatch(fetchAssignments()).catch(() =>
      toast.error("Error fetching assignments")
    );
  }, [dispatch]);

  const handleDialogOpen = (assignment = null) => {
    setOpen(true);
    if (assignment) {
      setEditMode(true);
      setCurrentId(assignment._id);
      setFormState({
        title: assignment.title,
        description: assignment.description,
        dueDate: assignment.dueDate,
      });
    } else {
      setEditMode(false);
      setFormState({ title: "", description: "", dueDate: "" });
    }
  };

  const handleDialogClose = () => setOpen(false);

  const handleDeleteDialogOpen = (assignmentId) => {
    setCurrentId(assignmentId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => setDeleteDialogOpen(false);

  const handleSave = () => {
    const action = editMode
      ? updateAssignment({ assignmentId: currentId, updatedData: formState })
      : createAssignment(formState);

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success(
          editMode ? "Assignment updated successfully!" : "Assignment created!"
        );
        handleDialogClose();
      })
      .catch(() => {
        toast.error(
          editMode ? "Error updating assignment" : "Error creating assignment"
        );
      });
  };

  //   const handleCreate = () => {
  //     const action = editMode
  //       ? updateAssignment({ assignmentId: currentId, updatedData: formState })
  //       : createAssignment(formState);

  //     dispatch(action)
  //       .unwrap()
  //       .then(() => {
  //         toast.success(
  //           editMode
  //             ? "Assignment updated successfully!"
  //             : "Assignment created successfully!"
  //         );
  //         handleClose();
  //       })
  //       .catch(() => {
  //         toast.error(
  //           editMode ? "Error updating assignment" : "Error creating assignment"
  //         );
  //       });
  //   };
  const handleDelete = () => {
    dispatch(deleteAssignment(currentId))
      .then(() => {
        toast.success("Assignment deleted successfully!");
        handleDeleteDialogClose();
      })
      .catch(() => toast.error("Error deleting assignment"));
  };

  const handleToggleSubmissions = (assignmentId) => {
    if (expandedAssignment === assignmentId) {
      setExpandedAssignment(null); // Close if it's already expanded
    } else {
      setExpandedAssignment(assignmentId); // Expand new assignment
      dispatch(fetchSubmissions(assignmentId)).catch(() =>
        toast.error("Error fetching submissions")
      );
    }
  };

  const handleGradeChange = (submissionId, grade) => {
    dispatch(updateSubmissionGrade({ submissionId, grade }))
      .then(() => toast.success("Grade submitted successfully!"))
      .catch(() => toast.error("Failed to submit grade."));
  };

  const renderFilePreview = (url) => {
    const fileType = url.split(".").pop();

    switch (fileType) {
      case "pdf":
        return (
          <iframe
            src={url}
            style={{
              width: "100%",
              height: "400px",
              border: "none",
              borderRadius: "4px",
              boxShadow: theme.shadows[2],
            }}
            title="PDF Preview"
          />
        );
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return (
          <img
            src={url}
            alt="File Preview"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              boxShadow: theme.shadows[2],
            }}
          />
        );
      case "zip":
      case "doc":
      case "docx":
        return (
          <Typography>
            <a href={url} download>
              Download {fileType} file
            </a>
          </Typography>
        );
      default:
        return (
          <Typography>
            <a href={url} download>
              Download {fileType} file
            </a>
          </Typography>
        );
    }
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <ToastContainer />
      <Typography variant="h4" gutterBottom>
        Teacher Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => handleDialogOpen()}
        style={{ marginBottom: "20px", borderRadius: "12px" }}
      >
        Create Assignment
      </Button>

      <Grid container spacing={3}>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="60vh"
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">
            {error}
          </Typography>
        ) : (
          assignments.map((assignment) => (
            <Grid item xs={12} md={4} key={assignment._id}>
              <Slide direction="up" in={true} timeout={500}>
                <StyledCard>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      {assignment.title}
                    </Typography>
                    <Typography variant="body2">
                      {assignment.description}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginTop: 10 }}>
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <StyledIconButton
                      color="primary"
                      onClick={() => handleDialogOpen(assignment)}
                    >
                      <Edit />
                      Edit
                    </StyledIconButton>
                    <StyledIconButton
                      color="secondary"
                      onClick={() => handleDeleteDialogOpen(assignment._id)}
                    >
                      <Delete />
                      Del
                    </StyledIconButton>
                    <StyledIconButton
                      color="default"
                      onClick={() => handleToggleSubmissions(assignment._id)}
                    >
                      {expandedAssignment === assignment._id ? (
                        <VisibilityOff />
                      ) : (
                        <AssignmentTurnedIn />
                      )}
                      Sub
                    </StyledIconButton>
                  </CardActions>
                  <Collapse in={expandedAssignment === assignment._id}>
                    {submissions[assignment._id]?.length > 0 ? (
                      submissions[assignment._id]?.map((submission) => (
                        <Card key={submission._id} style={{ margin: "16px 0" }}>
                          <CardContent>
                            <Typography>
                              {submission.student.name} -{" "}
                              {submission.student.email}
                            </Typography>
                            {renderFilePreview(submission.fileUrl)}
                            <Typography>
                              Submitted At:{" "}
                              {new Date(
                                submission.submittedAt
                              ).toLocaleString()}
                            </Typography>
                            <Box display="flex" alignItems="center">
                              Edit Grade :
                              <Select
                                value={submission.grade || ""}
                                onChange={(e) =>
                                  handleGradeChange(
                                    submission._id,
                                    e.target.value
                                  )
                                }
                                style={{ marginRight: "8px" }}
                              >
                                <MenuItem value="">Select Grade</MenuItem>
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="B">B</MenuItem>
                                <MenuItem value="C">C</MenuItem>
                                <MenuItem value="D">D</MenuItem>
                              </Select>
                              <StyledIconButton color="primary">
                                <Visibility />
                              </StyledIconButton>
                              <StyledIconButton
                                color="default"
                                href={submission.fileUrl}
                                download
                              >
                                <FileDownload />
                              </StyledIconButton>
                            </Box>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <Typography
                        color="textSecondary"
                        align="center"
                        style={{ marginTop: 10 }}
                      >
                        No submissions available
                      </Typography>
                    )}
                  </Collapse>
                </StyledCard>
              </Slide>
            </Grid>
          ))
        )}
      </Grid>

      {/* Dialog for creating/updating assignments */}
      <StyledDialog open={open} onClose={handleDialogClose}>
        <DialogTitle>
          {editMode ? "Edit Assignment" : "Create Assignment"}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            fullWidth
            value={formState.title}
            onChange={(e) =>
              setFormState({ ...formState, title: e.target.value })
            }
            style={{ marginBottom: "16px" }}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={formState.description}
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
            style={{ marginBottom: "16px" }}
          />
          <TextField
            margin="dense"
            label="Due Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formState.dueDate}
            onChange={(e) =>
              setFormState({ ...formState, dueDate: e.target.value })
            }
            style={{ marginBottom: "16px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </StyledDialog>

      {/* Delete Confirmation Dialog */}
      <StyledDialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this assignment? This action cannot
            be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </StyledDialog>
    </Container>
  );
};

export default TeacherDashboard;
