import { configureStore } from "@reduxjs/toolkit";
// import { filterTaskReducer } from "./tasks/filterTasks/slice";
import tasksReducer from "./tasks/listTasks/slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // filter: filterTaskReducer,
  },
});
