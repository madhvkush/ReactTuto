import { configureStore } from "@reduxjs/toolkit";
import { ToDoReducer } from "../slicing/TodoSlicing";
export const store = configureStore({
	reducer: {
		todos: ToDoReducer,
	},
});
