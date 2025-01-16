import { createSlice } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  fetchTasks,
  patchTask,
  putTask,
  toggleCompleted,
} from "../../operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)

      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)

      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (task) => task._id !== payload._id
        );
      })
      .addCase(deleteTask.rejected, handleRejected)

      .addCase(putTask.pending, handlePending)
      .addCase(putTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.push(action.payload);
      })
      .addCase(putTask.rejected, handleRejected)

      .addCase(patchTask.pending, handlePending)
      .addCase(patchTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((task) => {
          if (task.id === action.payload.id) {
            task = action.payload;
            return;
          }
        });
      })
      .addCase(patchTask.rejected, handleRejected)

      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((task) => {
          return task._id === payload._id ? payload : task;
        }
        );
      })
      .addCase(toggleCompleted.rejected, handleRejected);
  },
});

export default tasksSlice.reducer;
