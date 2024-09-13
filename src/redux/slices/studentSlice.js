// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { toast } from "react-toastify";

// // Fetch assignments
// export const fetchStudentAssignments = createAsyncThunk(
//   "student/fetchAssignments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.get("/students/assignments", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data.assignments;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

// // Submit assignment
// export const submitAssignment = createAsyncThunk(
//   "student/submitAssignment",
//   async ({ assignmentId, fileUrl }, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.post(
//         `/students/assignments/${assignmentId}/submit`,
//         { fileUrl },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success("Assignment submitted successfully!");
//       return response.data;
//     } catch (error) {
//       toast.error("Error submitting assignment!");
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

// // Edit assignment
// export const editAssignmentSubmission = createAsyncThunk(
//   "student/editAssignmentSubmission",
//   async ({ assignmentId, fileUrl }, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.put(
//         `/students/assignments/${assignmentId}/edit`,
//         { fileUrl },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success("Assignment edited successfully!");
//       return response.data;
//     } catch (error) {
//       toast.error("Error editing assignment!");
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

// const studentSlice = createSlice({
//   name: "student",
//   initialState: {
//     assignments: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchStudentAssignments.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchStudentAssignments.fulfilled, (state, action) => {
//         state.assignments = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchStudentAssignments.rejected, (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       })
//       .addCase(submitAssignment.fulfilled, (state, action) => {
//         state.assignments = state.assignments.map((assignment) =>
//           assignment._id === action.payload.assignment._id
//             ? action.payload.assignment
//             : assignment
//         );
//       })
//       .addCase(editAssignmentSubmission.fulfilled, (state, action) => {
//         state.assignments = state.assignments.map((assignment) =>
//           assignment._id === action.payload.assignment._id
//             ? action.payload.assignment
//             : assignment
//         );
//       });
//   },
// });

// export default studentSlice.reducer;
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../api/axios.js";
// import { toast } from "react-toastify";

// // Fetch assignments
// export const fetchStudentAssignments = createAsyncThunk(
//   "student/fetchAssignments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.get("/students/assignments", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data.assignments;
//     } catch (error) {
//       const message = error.response?.data?.message || error.message;
//       toast.error(`Error fetching assignments: ${message}`);
//       return rejectWithValue(message);
//     }
//   }
// );

// export const submitAssignment = createAsyncThunk(
//   "student/submitAssignment",
//   async ({ assignmentId, formData }, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("authToken");

//       // Post the formData directly
//       const response = await axios.post(
//         `/students/assignments/${assignmentId}/submit`,
//         formData, // Now this is formData including file
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data", // Set content type for file upload
//           },
//         }
//       );

//       toast.success("Assignment submitted successfully!");
//       return response.data.submission; // Return the submission details
//     } catch (error) {
//       const message = error.response?.data?.message || error.message;
//       toast.error(`Error submitting assignment: ${message}`);
//       return rejectWithValue(message);
//     }
//   }
// );

// // Edit assignment
// export const editAssignmentSubmission = createAsyncThunk(
//   "student/editAssignmentSubmission",
//   async ({ assignmentId, fileUrl }, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.put(
//         `/students/assignments/${assignmentId}/edit`,
//         { fileUrl },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success("Assignment edited successfully!");
//       return response.data.assignment; // Return the updated assignment
//     } catch (error) {
//       const message = error.response?.data?.message || error.message;
//       toast.error(`Error editing assignment: ${message}`);
//       return rejectWithValue(message);
//     }
//   }
// );

// const studentSlice = createSlice({
//   name: "student",
//   initialState: {
//     assignments: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchStudentAssignments.pending, (state) => {
//         state.loading = true;
//         state.error = null; // Reset error on new fetch
//       })
//       .addCase(fetchStudentAssignments.fulfilled, (state, action) => {
//         state.assignments = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchStudentAssignments.rejected, (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       })
//       .addCase(submitAssignment.fulfilled, (state, action) => {
//         const updatedAssignments = state.assignments.map((assignment) =>
//           assignment._id === action.payload._id ? action.payload : assignment
//         );
//         state.assignments = updatedAssignments;
//       })
//       .addCase(editAssignmentSubmission.fulfilled, (state, action) => {
//         const updatedAssignments = state.assignments.map((assignment) =>
//           assignment._id === action.payload._id ? action.payload : assignment
//         );
//         state.assignments = updatedAssignments;
//       })
//       .addCase(submitAssignment.rejected, (state, action) => {
//         state.error = action.payload;
//       })
//       .addCase(editAssignmentSubmission.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },
// });

// export default studentSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios.js";

// Fetch assignments
export const fetchStudentAssignments = createAsyncThunk(
  "student/fetchAssignments",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("/students/assignments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.assignments;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return rejectWithValue(message);
    }
  }
);

// Submit assignment
export const submitAssignment = createAsyncThunk(
  "student/submitAssignment",
  async ({ assignmentId, formData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.post(
        `/students/assignments/${assignmentId}/submit`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data.submission;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return rejectWithValue(message);
    }
  }
);

// Edit assignment
export const editAssignmentSubmission = createAsyncThunk(
  "student/editAssignmentSubmission",
  async ({ assignmentId, formData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.put(
        `/students/assignments/${assignmentId}/edit`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data.assignment;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return rejectWithValue(message);
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState: {
    assignments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentAssignments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudentAssignments.fulfilled, (state, action) => {
        state.assignments = action.payload;
        state.loading = false;
      })
      .addCase(fetchStudentAssignments.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(submitAssignment.fulfilled, (state, action) => {
        const updatedAssignments = state.assignments.map((assignment) =>
          assignment._id === action.payload._id ? action.payload : assignment
        );
        state.assignments = updatedAssignments;
      })
      .addCase(editAssignmentSubmission.fulfilled, (state, action) => {
        const updatedAssignments = state.assignments.map((assignment) =>
          assignment._id === action.payload._id ? action.payload : assignment
        );
        state.assignments = updatedAssignments;
      })
      .addCase(submitAssignment.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editAssignmentSubmission.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default studentSlice.reducer;
