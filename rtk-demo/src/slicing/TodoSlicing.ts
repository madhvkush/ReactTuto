import { createSlice } from "@reduxjs/toolkit";
import { TodoStoreModel } from "../store/TodoStoreModel";

const todosSlice = createSlice({
	name: "todosSlice",
	initialState: [] as TodoStoreModel[],
	reducers: {
		addTodo: (state, action) => {
			state.push({ id: Date.now(), text: action.payload });
		},
		updateTodo: (state, action) => {
			const { id, newText } = action.payload;
			const todo = state.find((todo) => todo.id === id);
			if (todo) {
				todo.text = newText;
			}
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
		deleteAllTodo: () => [],
	},
});

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo, deleteAllTodo } =
	todosSlice.actions;

// Reducer
export const ToDoReducer = todosSlice.reducer;
