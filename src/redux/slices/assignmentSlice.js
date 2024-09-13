// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../api/axios.js";

// // Async Thunks
// export const fetchAssignments = createAsyncThunk(
//   "assignments/fetchAssignments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("/assignments");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createAssignment = createAsyncThunk(
//   "assignments/createAssignment",
//   async (assignmentData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/assignments", assignmentData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateAssignment = createAsyncThunk(
//   "assignments/updateAssignment",
//   async ({ assignmentId, updatedData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `/assignments/${assignmentId}`,
//         updatedData
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const deleteAssignment = createAsyncThunk(
//   "assignments/deleteAssignment",
//   async (assignmentId, { rejectWithValue }) => {
//     console.log("Attempting to delete assignment with ID:", assignmentId); // Debugging
//     try {
//       const response = await axios.delete(`/assignments/${assignmentId}`);
//       return { assignmentId, message: response.data.message };
//     } catch (error) {
//       console.error("Error deleting assignment:", error); // Debugging
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Slice
// const assignmentSlice = createSlice({
//   name: "assignments",
//   initialState: {
//     assignments: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAssignments.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchAssignments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.assignments = action.payload.assignments;
//       })
//       .addCase(fetchAssignments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message;
//       })
//       .addCase(createAssignment.fulfilled, (state, action) => {
//         state.assignments.push(action.payload.assignment);
//       })
//       .addCase(updateAssignment.fulfilled, (state, action) => {
//         const index = state.assignments.findIndex(
//           (assignment) => assignment._id === action.payload.assignment._id
//         );
//         state.assignments[index] = action.payload.assignment;
//       })
//       .addCase(deleteAssignment.fulfilled, (state, action) => {
//         state.assignments = state.assignments.filter(
//           (assignment) => assignment._id !== action.payload.assignmentId
//         );
//       });
//   },
// });

// export default assignmentSlice.reducer;
// new 1
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../api/axios.js";

// // Async Thunks
// export const fetchAssignments = createAsyncThunk(
//   "assignments/fetchAssignments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("/assignments");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createAssignment = createAsyncThunk(
//   "assignments/createAssignment",
//   async (assignmentData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/assignments", assignmentData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateAssignment = createAsyncThunk(
//   "assignments/updateAssignment",
//   async ({ assignmentId, updatedData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `/assignments/${assignmentId}`,
//         updatedData
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteAssignment = createAsyncThunk(
//   "assignments/deleteAssignment",
//   async (assignmentId, { rejectWithValue }) => {
//     console.log("Attempting to delete assignment with ID:", assignmentId); // Debugging
//     try {
//       const response = await axios.delete(`/assignments/${assignmentId}`);
//       return { assignmentId, message: response.data.message };
//     } catch (error) {
//       console.error("Error deleting assignment:", error); // Debugging
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // New Thunks
// export const fetchSubmissions = createAsyncThunk(
//   "assignments/fetchSubmissions",
//   async (assignmentId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `/assignments/${assignmentId}/submissions`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const submitGrade = createAsyncThunk(
//   "assignments/submitGrade",
//   async ({ submissionId, grade }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`/submissions/${submissionId}/grade`, {
//         grade,
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Slice
// // const assignmentSlice = createSlice({
// //   name: "assignments",
// //   initialState: {
// //     assignments: [],
// //     submissions: {},
// //     loading: false,
// //     error: null,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       // Fetch Assignments
// //       .addCase(fetchAssignments.pending, (state) => {
// //         state.loading = true;
// //       })
// //       .addCase(fetchAssignments.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.assignments = action.payload.assignments;
// //       })
// //       .addCase(fetchAssignments.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload.message;
// //       })

// //       // Create Assignment
// //       .addCase(createAssignment.fulfilled, (state, action) => {
// //         state.assignments.push(action.payload.assignment);
// //       })

// //       // Update Assignment
// //       .addCase(updateAssignment.fulfilled, (state, action) => {
// //         const index = state.assignments.findIndex(
// //           (assignment) => assignment._id === action.payload.assignment._id
// //         );
// //         state.assignments[index] = action.payload.assignment;
// //       })

// //       // Delete Assignment
// //       .addCase(deleteAssignment.fulfilled, (state, action) => {
// //         state.assignments = state.assignments.filter(
// //           (assignment) => assignment._id !== action.payload.assignmentId
// //         );
// //       })

// //       // Fetch Submissions
// //       .addCase(fetchSubmissions.pending, (state) => {
// //         state.loading = true;
// //       })
// //       .addCase(fetchSubmissions.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.submissions = action.payload.submissions;
// //       })
// //       .addCase(fetchSubmissions.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload.message;
// //       })

// //       // Submit Grade
// //       .addCase(submitGrade.fulfilled, (state, action) => {
// //         const index = state.submissions.findIndex(
// //           (submission) => submission._id === action.payload.submission._id
// //         );
// //         state.submissions[index] = action.payload.submission;
// //       });
// //   },
// // });

// // export default assignmentSlice.reducer;
// const assignmentSlice = createSlice({
//   name: "assignments",
//   initialState: {
//     assignments: [],
//     submissions: {}, // Use an object to map assignment IDs to submissions
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch Assignments
//       .addCase(fetchAssignments.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchAssignments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.assignments = action.payload.assignments;
//       })
//       .addCase(fetchAssignments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message;
//       })

//       // Create Assignment
//       .addCase(createAssignment.fulfilled, (state, action) => {
//         state.assignments.push(action.payload.assignment);
//       })

//       // Update Assignment
//       .addCase(updateAssignment.fulfilled, (state, action) => {
//         const index = state.assignments.findIndex(
//           (assignment) => assignment._id === action.payload.assignment._id
//         );
//         state.assignments[index] = action.payload.assignment;
//       })

//       // Delete Assignment
//       .addCase(deleteAssignment.fulfilled, (state, action) => {
//         state.assignments = state.assignments.filter(
//           (assignment) => assignment._id !== action.payload.assignmentId
//         );
//       })

//       // Fetch Submissions
//       .addCase(fetchSubmissions.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSubmissions.fulfilled, (state, action) => {
//         state.loading = false;
//         // Map submissions by assignment ID
//         state.submissions[action.meta.arg] = action.payload.submissions;
//       })
//       .addCase(fetchSubmissions.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message;
//       })

//       // Submit Grade
//       .addCase(submitGrade.fulfilled, (state, action) => {
//         const { submission } = action.payload;
//         const assignmentId = submission.assignment; // Ensure submission includes assignment ID
//         if (state.submissions[assignmentId]) {
//           const index = state.submissions[assignmentId].findIndex(
//             (sub) => sub._id === submission._id
//           );
//           if (index > -1) {
//             state.submissions[assignmentId][index] = submission;
//           }
//         }
//       });
//   },
// });

// export default assignmentSlice.reducer;

// the new ui thunk
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../api/axios.js";

// // Async Thunks
// export const fetchAssignments = createAsyncThunk(
//   "assignments/fetchAssignments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("/assignments");
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createAssignment = createAsyncThunk(
//   "assignments/createAssignment",
//   async (assignmentData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/assignments", assignmentData);
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateAssignment = createAsyncThunk(
//   "assignments/updateAssignment",
//   async ({ assignmentId, updatedData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `/assignments/${assignmentId}`,
//         updatedData
//       );
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteAssignment = createAsyncThunk(
//   "assignments/deleteAssignment",
//   async (assignmentId, { rejectWithValue }) => {
//     console.log("Attempting to delete assignment with ID:", assignmentId); // Debugging
//     try {
//       const response = await axios.delete(`/assignments/${assignmentId}`);
//       return { assignmentId, message: response.data.message }; // Ensure response data structure
//     } catch (error) {
//       console.error("Error deleting assignment:", error); // Debugging
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // New Thunks
// export const fetchSubmissions = createAsyncThunk(
//   "assignments/fetchSubmissions",
//   async (assignmentId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `/assignments/${assignmentId}/submissions`
//       );
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const submitGrade = createAsyncThunk(
//   "assignments/submitGrade",
//   async ({ assignmentId, studentId, grade }, { rejectWithValue }) => {
//     try {
//       // Ensure that the API endpoint and the request body are correctly aligned
//       const response = await axios.put(`/assignments/${assignmentId}/grade`, {
//         studentId, // Pass studentId and grade as per your API structure
//         grade,
//       });
//       return response.data; // This should match the expected structure
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // export const submitGrade = createAsyncThunk(
// //   "assignments/submitGrade",
// //   async ({ submissionId, grade }, { rejectWithValue }) => {
// //     try {
// //       const response = await axios.put(`/submissions/${submissionId}/grade`, {
// //         grade,
// //       });
// //       return response.data; // Ensure the structure matches what is expected
// //     } catch (error) {
// //       return rejectWithValue(error.response.data);
// //     }
// //   }
// // );

// // Slice
// const assignmentSlice = createSlice({
//   name: "assignments",
//   initialState: {
//     assignments: [],
//     submissions: {}, // Map assignment IDs to submissions
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch Assignments
//       .addCase(fetchAssignments.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchAssignments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.assignments = action.payload.assignments || []; // Ensure the structure is correct
//       })
//       .addCase(fetchAssignments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message || "Error fetching assignments"; // Default message
//       })

//       // Create Assignment
//       .addCase(createAssignment.fulfilled, (state, action) => {
//         state.assignments.push(action.payload.assignment); // Ensure structure matches
//       })

//       // Update Assignment
//       .addCase(updateAssignment.fulfilled, (state, action) => {
//         const index = state.assignments.findIndex(
//           (assignment) => assignment._id === action.payload.assignment._id
//         );
//         if (index > -1) {
//           state.assignments[index] = action.payload.assignment; // Ensure structure matches
//         }
//       })

//       // Delete Assignment
//       .addCase(deleteAssignment.fulfilled, (state, action) => {
//         state.assignments = state.assignments.filter(
//           (assignment) => assignment._id !== action.payload.assignmentId
//         );
//       })

//       // Fetch Submissions
//       .addCase(fetchSubmissions.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSubmissions.fulfilled, (state, action) => {
//         state.loading = false;
//         state.submissions[action.meta.arg] = action.payload.submissions || []; // Ensure structure matches
//       })
//       .addCase(fetchSubmissions.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message || "Error fetching submissions"; // Default message
//       })

//       // Submit Grade
//       .addCase(submitGrade.fulfilled, (state, action) => {
//         const { submission } = action.payload;
//         const assignmentId = submission.assignment; // Ensure submission includes assignment ID
//         if (state.submissions[assignmentId]) {
//           const index = state.submissions[assignmentId].findIndex(
//             (sub) => sub._id === submission._id
//           );
//           if (index > -1) {
//             state.submissions[assignmentId][index] = submission; // Ensure structure matches
//           }
//         }
//       });
//   },
// });

// export default assignmentSlice.reducer;

// the new reducer with grade handling
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../api/axios.js";

// // Async Thunks
// export const fetchAssignments = createAsyncThunk(
//   "assignments/fetchAssignments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("/assignments");
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createAssignment = createAsyncThunk(
//   "assignments/createAssignment",
//   async (assignmentData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/assignments", assignmentData);
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateAssignment = createAsyncThunk(
//   "assignments/updateAssignment",
//   async ({ assignmentId, updatedData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `/assignments/${assignmentId}`,
//         updatedData
//       );
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteAssignment = createAsyncThunk(
//   "assignments/deleteAssignment",
//   async (assignmentId, { rejectWithValue }) => {
//     console.log("Attempting to delete assignment with ID:", assignmentId); // Debugging
//     try {
//       const response = await axios.delete(`/assignments/${assignmentId}`);
//       return { assignmentId, message: response.data.message }; // Ensure response data structure
//     } catch (error) {
//       console.error("Error deleting assignment:", error); // Debugging
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // New Thunks
// export const fetchSubmissions = createAsyncThunk(
//   "assignments/fetchSubmissions",
//   async (assignmentId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `/assignments/${assignmentId}/submissions`
//       );
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Submit grade thunk
// export const submitGrade = createAsyncThunk(
//   "assignments/submitGrade",
//   async ({ assignmentId, studentId, grade }, { rejectWithValue }) => {
//     try {
//       // Ensure that the API endpoint and the request body are correctly aligned
//       const response = await axios.put(`/assignments/${assignmentId}/grade`, {
//         studentId, // Pass studentId and grade as per your API structure
//         grade,
//       });
//       return response.data; // This should match the expected structure
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Slice
// const assignmentSlice = createSlice({
//   name: "assignments",
//   initialState: {
//     assignments: [],
//     submissions: {}, // Map assignment IDs to submissions
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch Assignments
//       .addCase(fetchAssignments.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchAssignments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.assignments = action.payload.assignments || []; // Ensure the structure is correct
//       })
//       .addCase(fetchAssignments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message || "Error fetching assignments"; // Default message
//       })

//       // Create Assignment
//       .addCase(createAssignment.fulfilled, (state, action) => {
//         state.assignments.push(action.payload.assignment); // Ensure structure matches
//       })

//       // Update Assignment
//       .addCase(updateAssignment.fulfilled, (state, action) => {
//         const index = state.assignments.findIndex(
//           (assignment) => assignment._id === action.payload.assignment._id
//         );
//         if (index > -1) {
//           state.assignments[index] = action.payload.assignment; // Ensure structure matches
//         }
//       })

//       // Delete Assignment
//       .addCase(deleteAssignment.fulfilled, (state, action) => {
//         state.assignments = state.assignments.filter(
//           (assignment) => assignment._id !== action.payload.assignmentId
//         );
//       })

//       // Fetch Submissions
//       .addCase(fetchSubmissions.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSubmissions.fulfilled, (state, action) => {
//         state.loading = false;
//         state.submissions[action.meta.arg] = action.payload.submissions || []; // Ensure structure matches
//       })
//       .addCase(fetchSubmissions.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message || "Error fetching submissions"; // Default message
//       })

//       // Submit Grade
//       .addCase(submitGrade.fulfilled, (state, action) => {
//         const { submission } = action.payload;
//         const assignmentId = submission.assignment; // Ensure submission includes assignment ID
//         if (state.submissions[assignmentId]) {
//           const index = state.submissions[assignmentId].findIndex(
//             (sub) => sub._id === submission._id
//           );
//           if (index > -1) {
//             state.submissions[assignmentId][index] = submission; // Ensure structure matches
//           }
//         }
//       })
//       .addCase(submitGrade.rejected, (state, action) => {
//         state.error = action.payload.message || "Error submitting grade";
//       });
//   },
// });

// export default assignmentSlice.reducer;
// ubove is correct
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../api/axios.js";

// // Async Thunks
// export const fetchAssignments = createAsyncThunk(
//   "assignments/fetchAssignments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("/assignments");
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createAssignment = createAsyncThunk(
//   "assignments/createAssignment",
//   async (assignmentData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/assignments", assignmentData);
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateAssignment = createAsyncThunk(
//   "assignments/updateAssignment",
//   async ({ assignmentId, updatedData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `/assignments/${assignmentId}`,
//         updatedData
//       );
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteAssignment = createAsyncThunk(
//   "assignments/deleteAssignment",
//   async (assignmentId, { rejectWithValue }) => {
//     console.log("Attempting to delete assignment with ID:", assignmentId); // Debugging
//     try {
//       const response = await axios.delete(`/assignments/${assignmentId}`);
//       return { assignmentId, message: response.data.message }; // Ensure response data structure
//     } catch (error) {
//       console.error("Error deleting assignment:", error); // Debugging
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // New Thunks
// export const fetchSubmissions = createAsyncThunk(
//   "assignments/fetchSubmissions",
//   async (assignmentId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `/assignments/${assignmentId}/submissions`
//       );
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const updateSubmissionGrade = createAsyncThunk(
//   "assignments/updateSubmissionGrade",
//   async ({ submissionId, grade }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `/api/submissions/${submissionId}/grade`,
//         { grade }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Slice
// const assignmentSlice = createSlice({
//   name: "assignments",
//   initialState: {
//     assignments: [],
//     submissions: {}, // Map assignment IDs to submissions
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch Assignments
//       .addCase(fetchAssignments.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchAssignments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.assignments = action.payload.assignments || []; // Ensure the structure is correct
//       })
//       .addCase(fetchAssignments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message || "Error fetching assignments"; // Default message
//       })

//       // Create Assignment
//       .addCase(createAssignment.fulfilled, (state, action) => {
//         state.assignments.push(action.payload.assignment); // Ensure structure matches
//       })

//       // Update Assignment
//       .addCase(updateAssignment.fulfilled, (state, action) => {
//         const index = state.assignments.findIndex(
//           (assignment) => assignment._id === action.payload.assignment._id
//         );
//         if (index > -1) {
//           state.assignments[index] = action.payload.assignment; // Ensure structure matches
//         }
//       })

//       // Delete Assignment
//       .addCase(deleteAssignment.fulfilled, (state, action) => {
//         state.assignments = state.assignments.filter(
//           (assignment) => assignment._id !== action.payload.assignmentId
//         );
//       })

//       // Fetch Submissions
//       .addCase(fetchSubmissions.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSubmissions.fulfilled, (state, action) => {
//         state.loading = false;
//         state.submissions[action.meta.arg] = action.payload.submissions || []; // Ensure structure matches
//       })
//       .addCase(fetchSubmissions.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message || "Error fetching submissions"; // Default message
//       });

//   },
// });

// export default assignmentSlice.reducer;
// //  after tention the ablve can handle without grade
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios.js";

// Async Thunks
export const fetchAssignments = createAsyncThunk(
  "assignments/fetchAssignments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/assignments");
      return response.data; // Ensure the structure matches what is expected
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createAssignment = createAsyncThunk(
  "assignments/createAssignment",
  async (assignmentData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/assignments", assignmentData);
      return response.data; // Ensure the structure matches what is expected
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateAssignment = createAsyncThunk(
  "assignments/updateAssignment",
  async ({ assignmentId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `/assignments/${assignmentId}`,
        updatedData
      );
      return response.data; // Ensure the structure matches what is expected
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteAssignment = createAsyncThunk(
  "assignments/deleteAssignment",
  async (assignmentId, { rejectWithValue }) => {
    console.log("Attempting to delete assignment with ID:", assignmentId); // Debugging
    try {
      const response = await axios.delete(`/assignments/${assignmentId}`);
      return { assignmentId, message: response.data.message }; // Ensure response data structure
    } catch (error) {
      console.error("Error deleting assignment:", error); // Debugging
      return rejectWithValue(error.response.data);
    }
  }
);

// New Thunks
export const fetchSubmissions = createAsyncThunk(
  "assignments/fetchSubmissions",
  async (assignmentId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/assignments/${assignmentId}/submissions`
      );
      return response.data; // Ensure the structure matches what is expected
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateSubmissionGrade = createAsyncThunk(
  "assignments/updateSubmissionGrade",
  async ({ submissionId, grade }, { rejectWithValue }) => {
    try {
      // Make the API call to update the grade
      const response = await axios.put(`/submissions/${submissionId}/grade`, {
        grade,
      });

      // Extract relevant data from the response
      const { message, submission } = response.data;

      // Optionally log or handle the message if needed
      console.log(message);

      // Return the required data for the reducer
      return {
        assignmentId: submission._id, // or whichever ID is relevant
        submission: submission.submissions[0], // Assuming you're only dealing with one submission
      };
    } catch (error) {
      // Handle errors and provide a useful message
      return rejectWithValue(
        error.response.data.message || "Failed to update grade"
      );
    }
  }
);

// export const updateSubmissionGrade = createAsyncThunk(
//   "assignments/updateSubmissionGrade",
//   async ({ submissionId, grade }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`/submissions/${submissionId}/grade`, {
//         grade,
//       });
//       return response.data; // Ensure the structure matches what is expected
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// Slice
const assignmentSlice = createSlice({
  name: "assignments",
  initialState: {
    assignments: [],
    submissions: {}, // Map assignment IDs to submissions
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Assignments
      .addCase(fetchAssignments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.loading = false;
        state.assignments = action.payload.assignments || []; // Ensure the structure is correct
      })
      .addCase(fetchAssignments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Error fetching assignments"; // Default message
      })

      // Create Assignment
      .addCase(createAssignment.fulfilled, (state, action) => {
        state.assignments.push(action.payload.assignment); // Ensure structure matches
      })

      // Update Assignment
      .addCase(updateAssignment.fulfilled, (state, action) => {
        const index = state.assignments.findIndex(
          (assignment) => assignment._id === action.payload.assignment._id
        );
        if (index > -1) {
          state.assignments[index] = action.payload.assignment; // Ensure structure matches
        }
      })

      // Delete Assignment
      .addCase(deleteAssignment.fulfilled, (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload.assignmentId
        );
      })

      // Fetch Submissions
      .addCase(fetchSubmissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubmissions.fulfilled, (state, action) => {
        state.loading = false;
        state.submissions[action.meta.arg] = action.payload.submissions || []; // Ensure structure matches
      })
      .addCase(fetchSubmissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Error fetching submissions"; // Default message
      })

      // Update Submission Grade
      .addCase(updateSubmissionGrade.fulfilled, (state, action) => {
        const { assignmentId, submission } = action.payload;
        const submissionId = submission._id;
        const updatedGrade = submission.grade;

        const assignmentSubmissions = state.submissions[assignmentId] || [];

        // Find the submission and update its grade
        const submissionIndex = assignmentSubmissions.findIndex(
          (sub) => sub._id === submissionId
        );

        if (submissionIndex > -1) {
          state.submissions[assignmentId][submissionIndex].grade = updatedGrade;
        } else {
          console.warn("Submission not found:", submissionId);
        }
      })
      .addCase(updateSubmissionGrade.rejected, (state, action) => {
        state.error = action.payload || "Error updating grade"; // Ensure error message is handled
      });

    // .addCase(updateSubmissionGrade.fulfilled, (state, action) => {
    //   const assignmentId = action.payload.assignmentId; // Assuming API response contains assignmentId
    //   const submissionId = action.payload.submission._id;
    //   const updatedGrade = action.payload.submission.grade;

    //   const assignmentSubmissions = state.submissions[assignmentId];

    //   // Find the submission and update its grade
    //   const submissionIndex = assignmentSubmissions.findIndex(
    //     (submission) => submission._id === submissionId
    //   );

    //   if (submissionIndex > -1) {
    //     state.submissions[assignmentId][submissionIndex].grade = updatedGrade;
    //   }
    // })
    // .addCase(updateSubmissionGrade.rejected, (state, action) => {
    //   state.error = action.payload.message || "Error updating grade"; // Default message
    // });
  },
});

export default assignmentSlice.reducer;
