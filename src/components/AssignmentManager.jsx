// // import { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   fetchAssignments,
// //   createAssignment,
// //   updateAssignment,
// //   deleteAssignment,
// // } from "../redux/slices/assignmentSlice.js";
// // import {
// //   Button,
// //   TextField,
// //   Card,
// //   CardContent,
// //   CardActions,
// //   Typography,
// //   Container,
// //   Grid,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// // } from "@mui/material";

// // const AssignmentManager = () => {
// //   const dispatch = useDispatch();
// //   const { assignments, loading, error } = useSelector(
// //     (state) => state.assignments
// //   );
// //   const [open, setOpen] = useState(false);
// //   const [formState, setFormState] = useState({
// //     title: "",
// //     description: "",
// //     dueDate: "",
// //   });
// //   const [editMode, setEditMode] = useState(false);
// //   const [currentId, setCurrentId] = useState(null);

// //   useEffect(() => {
// //     dispatch(fetchAssignments());
// //   }, [dispatch]);

// //   const handleOpen = () => {
// //     setOpen(true);
// //     setEditMode(false);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //     setFormState({ title: "", description: "", dueDate: "" });
// //   };

// //   const handleCreate = () => {
// //     if (editMode) {
// //       dispatch(
// //         updateAssignment({ assignmentId: currentId, updatedData: formState })
// //       );
// //     } else {
// //       dispatch(createAssignment(formState));
// //     }
// //     handleClose();
// //   };

// //   const handleEdit = (assignment) => {
// //     setFormState({
// //       title: assignment.title,
// //       description: assignment.description,
// //       dueDate: assignment.dueDate,
// //     });
// //     setEditMode(true);
// //     setCurrentId(assignment._id);
// //     setOpen(true);
// //   };
// //   const handleDelete = (assignmentId) => {
// //     dispatch(deleteAssignment(assignmentId))
// //       .unwrap()
// //       .then((result) => {
// //         console.log(result.message); // Success message
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error.message); // Handle error
// //       });
// //   };

// //   //   const handleDelete = (id) => {
// //   //     dispatch(deleteAssignment(id));
// //   //   };

// //   return (
// //     <Container>
// //       <Typography variant="h4" gutterBottom>
// //         Assignment Management
// //       </Typography>
// //       <Button variant="contained" color="primary" onClick={handleOpen}>
// //         Create Assignment
// //       </Button>

// //       <Grid container spacing={2} style={{ marginTop: "20px" }}>
// //         {loading ? (
// //           <Typography>Loading...</Typography>
// //         ) : error ? (
// //           <Typography>{error}</Typography>
// //         ) : (
// //           assignments.map((assignment) => (
// //             <Grid item xs={12} md={4} key={assignment._id}>
// //               <Card>
// //                 <CardContent>
// //                   <Typography variant="h6">{assignment.title}</Typography>
// //                   <Typography>{assignment.description}</Typography>
// //                   <Typography>
// //                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
// //                   </Typography>
// //                 </CardContent>
// //                 <CardActions>
// //                   <Button
// //                     size="small"
// //                     color="primary"
// //                     onClick={() => handleEdit(assignment)}
// //                   >
// //                     Edit
// //                   </Button>
// //                   <Button
// //                     size="small"
// //                     color="secondary"
// //                     onClick={() => handleDelete(assignment._id)}
// //                   >
// //                     Delete
// //                   </Button>
// //                 </CardActions>
// //               </Card>
// //             </Grid>
// //           ))
// //         )}
// //       </Grid>

// //       {/* Dialog for Create/Edit */}
// //       <Dialog open={open} onClose={handleClose}>
// //         <DialogTitle>
// //           {editMode ? "Edit Assignment" : "Create Assignment"}
// //         </DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             label="Title"
// //             fullWidth
// //             margin="normal"
// //             value={formState.title}
// //             onChange={(e) =>
// //               setFormState({ ...formState, title: e.target.value })
// //             }
// //           />
// //           <TextField
// //             label="Description"
// //             fullWidth
// //             margin="normal"
// //             value={formState.description}
// //             onChange={(e) =>
// //               setFormState({ ...formState, description: e.target.value })
// //             }
// //           />
// //           <TextField
// //             label="Due Date"
// //             type="date"
// //             fullWidth
// //             margin="normal"
// //             InputLabelProps={{
// //               shrink: true,
// //             }}
// //             value={formState.dueDate}
// //             onChange={(e) =>
// //               setFormState({ ...formState, dueDate: e.target.value })
// //             }
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose} color="primary">
// //             Cancel
// //           </Button>
// //           <Button onClick={handleCreate} color="primary">
// //             {editMode ? "Update" : "Create"}
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Container>
// //   );
// // };

// // export default AssignmentManager;
// // import { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   fetchAssignments,
// //   createAssignment,
// //   updateAssignment,
// //   deleteAssignment,
// // } from "../redux/slices/assignmentSlice.js";
// // import {
// //   Button,
// //   TextField,
// //   Card,
// //   CardContent,
// //   CardActions,
// //   Typography,
// //   Container,
// //   Grid,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   IconButton,
// //   CircularProgress,
// //   Box,
// // } from "@mui/material";
// // import { Add, Edit, Delete } from "@mui/icons-material";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const AssignmentManager = () => {
// //   const dispatch = useDispatch();
// //   const { assignments, loading, error } = useSelector(
// //     (state) => state.assignments
// //   );
// //   const [open, setOpen] = useState(false);
// //   const [formState, setFormState] = useState({
// //     title: "",
// //     description: "",
// //     dueDate: "",
// //   });
// //   const [editMode, setEditMode] = useState(false);
// //   const [currentId, setCurrentId] = useState(null);

// //   useEffect(() => {
// //     dispatch(fetchAssignments());
// //   }, [dispatch]);

// //   const handleOpen = () => {
// //     setOpen(true);
// //     setEditMode(false);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //     setFormState({ title: "", description: "", dueDate: "" });
// //   };

// //   const handleCreate = () => {
// //     if (editMode) {
// //       dispatch(
// //         updateAssignment({ assignmentId: currentId, updatedData: formState })
// //       )
// //         .unwrap()
// //         .then(() => {
// //           toast.success("Assignment updated successfully!");
// //         })
// //         .catch(() => {
// //           toast.error("Error updating assignment");
// //         });
// //     } else {
// //       dispatch(createAssignment(formState))
// //         .unwrap()
// //         .then(() => {
// //           toast.success("Assignment created successfully!");
// //         })
// //         .catch(() => {
// //           toast.error("Error creating assignment");
// //         });
// //     }
// //     handleClose();
// //   };

// //   const handleEdit = (assignment) => {
// //     setFormState({
// //       title: assignment.title,
// //       description: assignment.description,
// //       dueDate: assignment.dueDate,
// //     });
// //     setEditMode(true);
// //     setCurrentId(assignment._id);
// //     setOpen(true);
// //   };

// //   const handleDelete = (assignmentId) => {
// //     dispatch(deleteAssignment(assignmentId))
// //       .unwrap()
// //       .then(() => {
// //         toast.success("Assignment deleted successfully!");
// //       })
// //       .catch(() => {
// //         toast.error("Error deleting assignment");
// //       });
// //   };

// //   return (
// //     <Container style={{ marginTop: "20px" }}>
// //       <ToastContainer />

// //       <Typography variant="h4" gutterBottom>
// //         Assignment Management
// //       </Typography>
// //       <Button
// //         variant="contained"
// //         color="primary"
// //         startIcon={<Add />}
// //         onClick={handleOpen}
// //       >
// //         Create Assignment
// //       </Button>

// //       <Grid container spacing={2} style={{ marginTop: "20px" }}>
// //         {loading ? (
// //           <Box
// //             display="flex"
// //             justifyContent="center"
// //             alignItems="center"
// //             width="100%"
// //           >
// //             <CircularProgress />
// //           </Box>
// //         ) : error ? (
// //           <Typography color="error">{error}</Typography>
// //         ) : (
// //           assignments.map((assignment) => (
// //             <Grid item xs={12} md={4} key={assignment._id}>
// //               <Card>
// //                 <CardContent>
// //                   <Typography variant="h6" color="primary">
// //                     {assignment.title}
// //                   </Typography>
// //                   <Typography variant="body2" color="textSecondary">
// //                     {assignment.description}
// //                   </Typography>
// //                   <Typography
// //                     color="textSecondary"
// //                     style={{ marginTop: "10px" }}
// //                   >
// //                     Due: {new Date(assignment.dueDate).toLocaleDateString()}
// //                   </Typography>
// //                 </CardContent>
// //                 <CardActions>
// //                   <IconButton
// //                     color="primary"
// //                     onClick={() => handleEdit(assignment)}
// //                   >
// //                     <Edit />
// //                   </IconButton>
// //                   <IconButton
// //                     color="secondary"
// //                     onClick={() => handleDelete(assignment._id)}
// //                   >
// //                     <Delete />
// //                   </IconButton>
// //                 </CardActions>
// //               </Card>
// //             </Grid>
// //           ))
// //         )}
// //       </Grid>

// //       {/* Dialog for Create/Edit */}
// //       <Dialog open={open} onClose={handleClose}>
// //         <DialogTitle>
// //           {editMode ? "Edit Assignment" : "Create Assignment"}
// //         </DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             label="Title"
// //             fullWidth
// //             margin="normal"
// //             value={formState.title}
// //             onChange={(e) =>
// //               setFormState({ ...formState, title: e.target.value })
// //             }
// //           />
// //           <TextField
// //             label="Description"
// //             fullWidth
// //             margin="normal"
// //             value={formState.description}
// //             onChange={(e) =>
// //               setFormState({ ...formState, description: e.target.value })
// //             }
// //           />
// //           <TextField
// //             label="Due Date"
// //             type="date"
// //             fullWidth
// //             margin="normal"
// //             InputLabelProps={{
// //               shrink: true,
// //             }}
// //             value={formState.dueDate}
// //             onChange={(e) =>
// //               setFormState({ ...formState, dueDate: e.target.value })
// //             }
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose} color="primary">
// //             Cancel
// //           </Button>
// //           <Button onClick={handleCreate} color="primary">
// //             {editMode ? "Update" : "Create"}
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Container>
// //   );
// // };

// // export default AssignmentManager;
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

// const AssignmentManager = () => {
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

// export default AssignmentManager;
